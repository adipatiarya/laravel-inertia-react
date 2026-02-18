<?php

namespace App\Http\Controllers\Private;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
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
    public function create()
    {
        //
        return Inertia::render('user/form', [
            'name' => 'dd',
            'email' => 'xx@sa.com',
            'role' => 'Admin',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
