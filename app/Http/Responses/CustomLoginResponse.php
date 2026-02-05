<?php
namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse;

class CustomLoginResponse implements LoginResponse
{
    public function toResponse($request)
    {
       
        $is_admin = true;

        if($is_admin) {
             // Redirect ke path custom
            return redirect()->route('admin_dashboard');
        }

        return response()->json('xx');
        
    }
}