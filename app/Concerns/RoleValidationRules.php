<?php

namespace App\Concerns;

trait RoleValidationRules
{
    /**
     * Get the validation rules used to validate passwords.
     *
     * @return array<int, \Illuminate\Contracts\Validation\Rule|array<mixed>|string>
     */
    protected function existRoleRules(): array
    {
        return ['required', 'integer', 'exists:roles,id'];
    }
}
