<?php 
namespace App\Services\Auth;

use Laravel\Socialite\Facades\Socialite;

class AuthService implements AuthServiceInterface{
    public function socializeRedirect(string $provider){
        return Socialite::driver($provider)->redirect();
    }
    public function socializeCallback(string $provider){
        $user = Socialite::driver($provider)->user();
        return $user;
        // Store user data and login
    }
}