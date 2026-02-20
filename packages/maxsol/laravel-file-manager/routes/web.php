<?php

use Maxsol\LaravelFileManager\Services\ConfigService\ConfigRepository;
use Maxsol\LaravelFileManager\Controllers\FileManagerController;
use Illuminate\Support\Facades\Route;

$config = resolve(ConfigRepository::class);

// App middleware list
$middleware = $config->getMiddleware();

/**
 * If ACL ON add "fm-acl" middleware to array
 */
if ($config->getAcl()) {
    $middleware[] = 'fm-acl';
}

Route::group(
    [
        'middleware' => $middleware,
        'prefix' => $config->getRoutePrefix(),
        'namespace' => 'Maxsol\LaravelFileManager\Controllers',
    ],
    function () {
        Route::get('initialize', [FileManagerController::class, 'initialize'])->name('fm.initialize');
        Route::get('content', [FileManagerController::class, 'content'])->name('fm.content');
    },
);
