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
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin',
                'password' => bcrypt('password'), // ganti dengan password aman
            ],
        );
        // assign role ke user
        $admin->assignRole($role);

        $role2 = Role::findByName('Content Creator');
        if (!$role2) {
            throw new \Exception('Role Content Creator wajib ada sebelum seeding.');
        }

        // buat user admin
        $admin2 = User::firstOrCreate(
            ['email' => 'creator@example.com'],
            [
                'name' => 'Supardi Jaya',
                'password' => bcrypt('password'), // ganti dengan password aman
            ],
        );
        // assign role ke user
        $admin2->assignRole($role2);
    }
}
