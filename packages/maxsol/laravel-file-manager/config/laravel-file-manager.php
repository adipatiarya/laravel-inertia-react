<?php
use Maxsol\LaravelFileManager\Services\ConfigService\DefaultConfigRepository;

return [
    'configRepository' => DefaultConfigRepository::class,
    'routePrefix' => 'file-manager',
    'middleware' => ['web'],
    'acl' => false,
    'leftDisk' => null,
    'rightDisk' => null,
    'leftPath' => null,
    'rightPath' => null,
    'hiddenFiles' => true,
    'windowsConfig' => 2,
    'diskList' => ['public'],
];
