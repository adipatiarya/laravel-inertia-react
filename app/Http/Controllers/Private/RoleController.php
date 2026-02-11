<?php

namespace App\Http\Controllers\Private;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
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
        $perPage = $request->input('perPage', 10);
        $sortBy = $request->input('sortBy', 'id');
        $sortDir = $request->input('sortDir', 'asc');
        $search = $request->input('search');

        $query = Role::with(['permissions', 'creator']); // tambahkan relasi creator

        if ($search) {
            $query->where('name', 'like', "%{$search}%")->orWhereHas('permissions', function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%");
            });
        }

        $roles = $query->orderBy($sortBy, $sortDir)->paginate($perPage);

        $roles->getCollection()->transform(function ($role) {
            $role->permissions = AppHelper::permissionsTransformer($role);
            $role->created_by_name = $role->creator?->name ?? 'System'; // tambahkan field pembuat
            $role->updated_by_name = $role->updater?->name ?? '-'; // tambahkan field pembuat
            return $role;
        });

        return Inertia::render('role/index', [
            'data' => $roles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return Inertia::render('role/form', [
            'name' => '',
            'permissions' => AppHelper::permissionsTransformer(),
        ]);
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
                $role = Role::create(['name' => $validated['name'], 'created_by' => auth()->id()]);
                $role->givePermissionTo($result);
            });
            return to_route('roles.index');
        } catch (\Throwable $th) {
            return back()
                ->withErrors(['general' => 'Terjadi kesalahan saat menyimpan role.'])
                ->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    public function edit(Role $role)
    {
        return Inertia::render('role/form', [
            'id' => $role->id,
            'name' => $role->name,
            'permissions' => AppHelper::permissionsTransformer($role),
        ]);
    }

    public function update(Request $request, Role $role)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:roles,name,' . $role->id,
            'permissions' => 'array',
        ]);

        $result = AppHelper::permissionsSpatieFormater($request->permissions);

        if (!count($result)) {
            return back()
                ->withErrors(['permissions' => 'Minimal 1 permissions.'])
                ->withInput();
        }

        try {
            DB::transaction(function () use ($validated, $result, $role) {
                app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
                $role->update(['name' => $validated['name'], 'updated_by' => auth()->id()]);
                $role->syncPermissions([]);
                $role->givePermissionTo($result);
            });
            return to_route('roles.index');
        } catch (\Throwable $th) {
            Inertia::flash('error', $th->getMessage());
            return redirect()->back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        try {
            $role->delete();
            return to_route('roles.index');
        } catch (\Exception $e) {
            return to_route('roles.index');
            Inertia::flash('error', 'Terjadi kesalahan saat menghapus role');
        }
    }
}
