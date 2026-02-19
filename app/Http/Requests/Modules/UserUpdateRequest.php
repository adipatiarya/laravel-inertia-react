<?php

namespace App\Http\Requests\Modules;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Concerns\RoleValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    use PasswordValidationRules;
    use ProfileValidationRules;
    use RoleValidationRules;

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $user = $this->route('user'); // ambil parameter id dari route

        return [
            'name' => $this->nameRules(),
            'email' => $this->emailRules($user->id), // validasi unique tapi exclude id user
            'password' => $this->passwordUpdateRules(), // password optional saat update
            'role_id' => $this->existRoleRules(),
        ];
    }
}
