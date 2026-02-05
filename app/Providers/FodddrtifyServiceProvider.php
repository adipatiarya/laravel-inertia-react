<?php

namespace App\Providers;

use Laravel\Fortify\Fortify;
use Laravel\Fortify\Contracts\LoginViewResponse;
use App\Http\Responses\CustomLoginViewResponse;
use Illuminate\Support\ServiceProvider;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        app()->singleton(LoginViewResponse::class, CustomLoginViewResponse::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Fortify::ignoreRoutes();

    }

}
