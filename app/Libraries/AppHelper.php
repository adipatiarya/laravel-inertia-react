<?php
namespace App\Libraries;

class AppHelper
{
    
    public static function permissionsTransform($permissions = [], $edit= false )
    {
      
        $result = [];
        foreach ($permissions as $permission) {
            $parts = explode(' ', $permission->name);
            if (count($parts) === 2) {
                [$action, $entity] = $parts;
                if (!isset($result[$entity])) {
                    $result[$entity] = [
                        'create' => false,
                        'read'   => false,
                        'update' => false,
                        'delete' => false,
                    ];
                }
                if($edit) {
                    if (isset($result[$entity][$action])) {
                        $result[$entity][$action] = true;
                    }
                } else {
                     $result[$entity][$action] = false;
                }
                
            }
        }

        return $result;
    }
}

