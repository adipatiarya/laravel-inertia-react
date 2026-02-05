<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LogoutResponse;

class CustomLogoutResponse implements LogoutResponse
{
    public function toResponse($request)
    {
        $is_admin = true;

        if($is_admin) {
             // Redirect ke path custom
            return redirect()->route('admin_login');
        }

        return response()->json('xx');


    }
}