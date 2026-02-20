<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;

class SuperadminSeeder extends Seeder
{
    public function run(): void
    {
        // pastikan role superadmin sudah ada
        $role = Role::findByName('superadmin');
        if (!$role) {
            throw new \Exception('Role superadmin wajib ada sebelum seeding.');
        }

        // buat user admin
        $admin = User::firstOrCreate(
            ['email' => 'admin@admin.com'],
            [
                'name' => 'John Doe',
                'password' => bcrypt('password'), // ganti dengan password aman
            ],
        );
        // assign role ke user
        $admin->assignRole($role);
    }
}
