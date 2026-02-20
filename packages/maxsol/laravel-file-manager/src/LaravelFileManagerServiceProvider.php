<?php
namespace Maxsol\LaravelFileManager;

use Illuminate\Support\ServiceProvider;
use Maxsol\LaravelFileManager\Services\ConfigService\ConfigRepository;

class LaravelFileManagerServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Load routes
        $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');

        // Load views
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'laravel-file-manager');

        // Publish config
        $this->publishes(
            [
                __DIR__ . '/../config/laravel-file-manager.php' => config_path('laravel-file-manager.php'),
            ],
            'config',
        );
    }

    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/laravel-file-manager.php', 'laravel-file-manager');
        // Config Repository

        $this->app->bind(ConfigRepository::class, $this->app['config']['laravel-file-manager.configRepository']);
    }
}
