<?php

namespace App\Http\Controllers\Private;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Inertia;
use Yajra\DataTables\Facades\DataTables;
use App\Libraries\AppHelper;
use DB;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        
        $roles = Role::with('permissions')->get();
        $rolesWithPermissions = $roles->map(function ($role) {
            $role->permissions= AppHelper::permissionsTransform($role->permissions);
            return $role;
        });


      //  $datatables = DataTables::collection($roles)->addColumn('permissions', fn($role) => AppHelper::permissionsTransform($role->permissions));
      //  dd($roles);
          
        return Inertia::render('role/index', [
            'data' => $rolesWithPermissions
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $result = [];

        $permissions = ["create","read","update", "delete"];

        foreach (config('scm.modules') as $transform) {
            foreach ($permissions as $permission) {
                $result[] = (object)['name' => $permission . ' ' . $transform];
            }
        }
           
        return Inertia::render('role/form', [
            'name' => '',
            'permissions' => AppHelper::permissionsTransform($result)
        ] );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate([
            'name' => 'required|string|max:255|min:5|unique:roles,name',
            'permissions' => 'array',
        ]);
  
        $result = AppHelper::permissionsSpatieFormater($request->permissions);

        if (!count($result)) {
            return back()
            ->withErrors(['permissions' => 'Minimal 1 permissions.'])
            ->withInput();
        }

         try {
            DB::transaction(function () use ($validated, $result) {
                app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
                $role = Role::create(['name' => $validated['name']]);
                $role->givePermissionTo($result);
            });
            Inertia::flash('success', 'User created successfully!');
            return to_route('roles.index');



        } catch (\Throwable $th) {
            return back()->withErrors(['general' => 'Terjadi kesalahan saat menyimpan role.'])->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
