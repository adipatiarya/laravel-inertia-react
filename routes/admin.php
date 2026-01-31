<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


Route::prefix('admin')->middleware('private')->group(function () {
    Route::get('/', function() {
         return Inertia::render('dashboard');
    });
});


