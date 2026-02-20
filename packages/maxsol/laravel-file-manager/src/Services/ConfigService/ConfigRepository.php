<?php
namespace Maxsol\LaravelFileManager\Services\ConfigService;

interface ConfigRepository
{
    public function getRoutePrefix(): string;

    public function getMiddleware(): array;

    public function getAcl(): bool;

    public function getDiskList(): array;

    public function getLeftDisk(): ?string;

    public function getRightDisk(): ?string;

    public function getLeftPath(): ?string;

    public function getRightPath(): ?string;

    public function getWindowsConfig(): int;

    public function getHiddenFiles(): bool;
}
