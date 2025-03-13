<?php 
namespace App\Services\Auth;


interface AuthServiceInterface{
    public function socializeRedirect(string $provider);
    public function socializeCallback(string $provider);
}