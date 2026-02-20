<?php
namespace Maxsol\LaravelFileManager\Traits;

use Illuminate\Support\Facades\Storage;

trait ContentTrait
{
    public function getContent($disk, $path = null): array
    {
        $directories = Storage::disk($disk)->directories($path ?: '');
        $files = Storage::disk($disk)->files($path ?: '');

        return compact('directories', 'files');
    }
}
