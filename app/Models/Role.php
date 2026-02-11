<?php

namespace App\Models;

use Spatie\Permission\Models\Role as SpatieRole;
use Inertia\Inertia;

class Role extends SpatieRole
{
    // Tambahan custom field atau relasi bisa ditaruh di sini

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function updater()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    protected static function booted()
    {
        static::created(fn() => Inertia::flash('success', 'Role created successfully!'));
        static::updated(fn() => Inertia::flash('success', 'Role updated successfully!'));
        static::deleted(fn() => Inertia::flash('warning', 'Role deleted successfully!'));
    }
}
