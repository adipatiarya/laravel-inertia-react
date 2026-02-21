<?php
namespace Maxsol\LaravelFileManager;
use Maxsol\LaravelFileManager\Services\ConfigService\ConfigRepository;
use Illuminate\Support\Arr;
use Maxsol\LaravelFileManager\Traits\ContentTrait;
use function array_key_exists;
class LaravelFileManager
{
    use ContentTrait;

    public ConfigRepository $configRepository;

    public function __construct(ConfigRepository $configRepository)
    {
        $this->configRepository = $configRepository;
    }
    public function initialize(): array
    {
        if (!config()->has('laravel-file-manager')) {
            return [
                'result' => [
                    'status' => 'danger',
                    'message' => 'noConfig',
                ],
            ];
        }

        $config = [
            'acl' => $this->configRepository->getAcl(),
            'leftDisk' => $this->configRepository->getLeftDisk(),
            'rightDisk' => $this->configRepository->getRightDisk(),
            'leftPath' => $this->configRepository->getLeftPath(),
            'rightPath' => $this->configRepository->getRightPath(),
            'windowsConfig' => $this->configRepository->getWindowsConfig(),
            'hiddenFiles' => $this->configRepository->getHiddenFiles(),
        ];

        // disk list
        foreach ($this->configRepository->getDiskList() as $disk) {
            if (array_key_exists($disk, config('filesystems.disks'))) {
                $config['disks'][$disk] = Arr::only(config('filesystems.disks')[$disk], ['driver']);
            }
        }

        // get language
        $config['lang'] = app()->getLocale();

        return [
            'result' => [
                'status' => 'success',
                'message' => null,
            ],
            'config' => $config,
        ];
    }

    public function content($disk, $path): array
    {
        $content = $this->getContent($disk, $path);

        return [
            'result' => [
                'status' => 'success',
                'message' => null,
            ],
            ...$content,
        ];
    }

    public function tree($disk, $path): array
    {
        return [
            'result' => [
                'status' => 'success',
                'message' => null,
            ],
        ];
    }
}
