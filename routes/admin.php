<?php

use Illuminate\Support\Facades\Route;

use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Laravel\Fortify\RoutePath;

use App\Http\Controllers\Private\HomeController;
use App\Http\Controllers\Private\UserController;
use App\Http\Controllers\Private\RoleController;

Route::prefix(config('scm.admin_path'))->middleware(['web', 'private'])
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

               Route::get('/dashboard', [HomeController::class, 'index'])->name('admin_dashboard');
               Route::resource('users', UserController::class);

               Route::prefix('roles')->group(function() {
                    Route::controller(RoleController::class) ->group(function () {
                        Route::get('/', 'index')->name('roles.index');
                        Route::post('/', 'store')->name('roles.store');
                        Route::put('/{role}', 'update')->name('roles.update');
                        Route::get('create', 'create')->name('roles.create');;
                        Route::get('/{role}/edit', 'edit')->name('roles.edit'); 
                        Route::get('json', 'json')->name('roles.json');   
                    });
                });
           });
    });


