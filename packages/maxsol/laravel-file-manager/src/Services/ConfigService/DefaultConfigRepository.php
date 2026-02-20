<?php
namespace Maxsol\LaravelFileManager\Services\ConfigService;

class DefaultConfigRepository implements ConfigRepository
{
    final public function getRoutePrefix(): string
    {
        return config('laravel-file-manager.routePrefix');
    }
    final public function getMiddleware(): array
    {
        return config('laravel-file-manager.middleware');
    }
    final public function getAcl(): bool
    {
        return config('laravel-file-manager.acl');
    }
    final public function getLeftDisk(): ?string
    {
        return config('laravel-file-manager.leftDisk');
    }

    /**
     * @inheritDoc
     */
    public function getHiddenFiles(): bool
    {
        return config('laravel-file-manager.hiddenFiles');
    }

    /**
     * @inheritDoc
     */
    public function getLeftPath(): ?string
    {
        return config('laravel-file-manager.leftPath');
    }

    /**
     * @inheritDoc
     */
    public function getRightDisk(): ?string
    {
        return config('laravel-file-manager.rightDisk');
    }

    /**
     * @inheritDoc
     */
    public function getRightPath(): ?string
    {
        return config('laravel-file-manager.rightPath');
    }

    /**
     * @inheritDoc
     */
    public function getWindowsConfig(): int
    {
        return config('laravel-file-manager.windowsConfig');
    }

    /**
     * @inheritDoc
     */
    public function getDiskList(): array
    {
        return config('laravel-file-manager.diskList');
    }
}
