<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


Route::prefix('admin')->middleware('web')
    ->group(function () {
        Route::controller(\App\Http\Controllers\Private\AuthController::class)->group(function() {
            Route::get('/login', 'login')->name('admin_login');
        });
});

Route::prefix('admin')->middleware(['web', 'private'])
    ->group(function () {
           Route::get('/', function() {
                return redirect()->route('admin_dashboard');
           });
           Route::controller(\App\Http\Controllers\Private\AuthController::class)->group(function() {
                Route::get('/login', 'login')->name('admin_login');
           });
           Route::middleware('auth.private')->group(function() {
                Route::controller(\App\Http\Controllers\Private\HomeController::class)->group(function() {
                        Route::get('/dashboard', 'index')->name('admin_dashboard');
                });
           });
    });


