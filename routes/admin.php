<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::prefix('admin')->middleware(['private'])
    ->group(function () {
        Route::controller(\App\Http\Controllers\Private\HomeController::class)->group(function() {
             Route::get('/', function () {
                return redirect()->route('admin_dashboard');
             })->name('admin');
            Route::get('/dashboard', 'index')->name('admin_dashboard');
        });
});


