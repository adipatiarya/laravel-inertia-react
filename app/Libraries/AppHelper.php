<?php
namespace App\Libraries;
use Spatie\Permission\Models\Role;

class AppHelper
{

    public static function permissionsTransformer(?Role $role = null)
    {
        $defaultPermissions = ['create', 'read', 'update', 'delete'];
        $modules = config('scm.modules');
        $result = [];
        foreach ($modules as $module) {
            $result[$module] = [];
            foreach ($defaultPermissions as $perm) {
                $permissionKey = $perm . ' ' . $module;
                $result[$module][$perm] = $role ? in_array($permissionKey, $role->permissions->map(fn($p) => $p->name)->toArray()) : false;
            }
        }
        return $result;
    }

    public static function permissionsSpatieFormater($permissions = []) {
        $result = [];
        foreach ($permissions as $module => $actions) {
            foreach ($actions as $action => $value) {
                if ($value === true) {
                    $result[] = "{$action} {$module}";
                }
            }
        }
        return $result;
    }
}

