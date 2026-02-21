<?php
namespace Maxsol\LaravelFileManager\Traits;

use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Support\Facades\Storage;

trait ContentTrait
{
    public function getContent($disk, $path = null): array
    {
        $content = $this->storageDisk($disk)
            ->listContents($path ?: '')
            ->toArray();
        $directories = $this->filterDir($disk, $content);

        $files = $this->filterFile($disk, $content);

        return compact('directories', 'files');
    }

    protected function filterDir($disk, $content): array
    {
        // select only dir
        $dirsList = array_filter($content, fn($item) => $item['type'] === 'dir');

        $dirs = array_map(function ($item) {
            $pathInfo = pathinfo($item['path']);

            return [
                'type' => $item['type'],
                'path' => $item['path'],
                'basename' => $pathInfo['basename'],
                'dirname' => $pathInfo['dirname'] === '.' ? '' : $pathInfo['dirname'],
                'timestamp' => $item['lastModified'],
                'visibility' => $item['visibility'],
            ];
        }, $dirsList);

        // // if ACL ON
        // if ($this->configRepository->getAcl()) {
        //     return array_values($this->aclFilter($disk, $dirs));
        // }

        return array_values($dirs);
    }
    protected function filterFile($disk, $content): array
    {
        // select only dir
        $filesList = array_filter($content, fn($item) => $item['type'] === 'file');

        $files = array_map(function ($item) {
            $pathInfo = pathinfo($item['path']);

            return [
                'type' => $item['type'],
                'path' => $item['path'],
                'basename' => $pathInfo['basename'],
                'dirname' => $pathInfo['dirname'] === '.' ? '' : $pathInfo['dirname'],
                'extension' => $pathInfo['extension'] ?? '',
                'filename' => $pathInfo['filename'],
                'size' => $item['fileSize'],
                'timestamp' => $item['lastModified'],
                'visibility' => $item['visibility'],
            ];
        }, $filesList);

        // if ACL ON
        // if ($this->configRepository->getAcl()) {
        //     return array_values($this->aclFilter($disk, $files));
        // }

        return array_values($files);
    }

    /**
     * Ambil disk storage dengan type hint yang tepat.
     *
     * @param string|null $name
     * @return FilesystemAdapter
     */
    protected function storageDisk(?string $name = null): FilesystemAdapter
    {
        return Storage::disk($name) instanceof FilesystemAdapter ? Storage::disk($name) : Storage::disk($name);
    }
}
