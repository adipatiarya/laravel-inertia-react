<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $modules = config('scm.modules');

        foreach ($modules as $module) {
            $permissions = ['create', 'read', 'update', 'delete'];

            foreach ($permissions as $permission) {
                $name = $permission . ' ' . $module;

                Permission::firstOrCreate(['name' => $name]);
                \Log::info($name . ' Created success ');
            }

            echo PHP_EOL;
        }

        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
        $role = Role::firstOrCreate(['name' => 'superadmin']);
        $role->syncPermissions([]);
        $role->givePermissionTo(Permission::all());

        \Log::info('Created success ');
    }
}
