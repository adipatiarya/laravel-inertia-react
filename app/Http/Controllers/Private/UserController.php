<?php

namespace App\Http\Controllers\Private;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Modules\UserCreateRequest;
use App\Http\Requests\Modules\UserUpdateRequest;

use Illuminate\Http\RedirectResponse;

use Inertia\Inertia;
use Inertia\Response;

use App\Models\User;
use App\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $perPage = $request->input('perPage', 10);
        $sortBy = $request->input('sortBy', 'id');
        $sortDir = $request->input('sortDir', 'desc');
        $search = $request->input('search');

        $query = User::with(['roles']); // relasi roles dari Spatie

        if ($search) {
            $query->where('name', 'like', "%{$search}%")->orWhereHas('roles', function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%");
            });
        }

        $users = $query->orderBy($sortBy, $sortDir)->paginate($perPage);

        $users->getCollection()->transform(function ($user) {
            $user->created_by_name = 'System'; // tambahkan field pembuat
            $user->updated_by_name = 'System'; // tambahkan field pembuat
            $user->role = $user->roles->pluck('name')->implode(', ');
            return $user;
        });

        return Inertia::render('user/index', [
            'data' => $users,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //
        return Inertia::render('user/form', [
            'roles' => Role::all(['id', 'name']),
            'data' => [
                'name' => '',
                'email' => '',
                'role_id' => '-1',
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserCreateRequest $request): RedirectResponse
    {
        $user = new User();

        $user->fill($request->validated());

        $role = Role::find($request->role_id);

        $user->assignRole($role);

        $user->save();

        return to_route('users.index');
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
    public function edit(User $user)
    {
        //
        return Inertia::render('user/form', [
            'roles' => Role::all(['id', 'name']),
            'data' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role_id' => $user->roles->pluck('id')[0] ?? '',
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user): RedirectResponse
    {
        $user->fill($request->validated());
        $role = Role::find($request->role_id);
        $user->syncRoles($role);
        $user->save();
        return to_route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        try {
            $user->delete();
            return to_route('users.index');
        } catch (\Exception $e) {
            return to_route('users.index');
            Inertia::flash('error', 'Terjadi kesalahan saat menghapus role');
        }
    }
}
