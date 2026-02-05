<?php

use Illuminate\Support\Facades\Route;

use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Laravel\Fortify\RoutePath;

use App\Http\Controllers\Private\HomeController;

Route::prefix('admin')->middleware(['web', 'private'])
    ->group(function () {
     
           Route::get('/', function() {
                return redirect()->route('admin_dashboard');
           });

           Route::get(RoutePath::for('login', '/login'), [AuthenticatedSessionController::class, 'create'])->middleware(['guest:'.config('fortify.guard')])->name('admin_login');
           $limiter = config('fortify.limiters.login');

           Route::post(RoutePath::for('login', '/login'), [AuthenticatedSessionController::class, 'store'])
               ->middleware(array_filter([
                    'guest:'.config('fortify.guard'),
                    $limiter ? 'throttle:'.$limiter : null,
               ]))->name('admin_login.store');


           Route::middleware('auth.private')->group(function() {
                Route::controller(HomeController::class)->group(function() {
                        Route::get('/dashboard', 'index')->name('admin_dashboard');
                });
           });
    });


