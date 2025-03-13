<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Services\Auth\AuthServiceInterface;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function __construct(
        private AuthServiceInterface $authService
    ) {}

    public function googleRedirect(string $provider)
    {
        
        try {
            return $this->authService->socializeRedirect($provider);
        } catch (\Throwable $th) {

            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                "line" => $th->getLine(),
                "message" => $th->getMessage()
            ]);
            return response()->json([
                'message' => 'Internal Server Error',
                'stack' => $th->getMessage()
            ], 500);
        }
    }
    public function googleCallback(string $provider)
    {
        try {
            return $this->authService->socializeCallback($provider);
        } catch (\Throwable $th) {
            Log::error(__CLASS__ . '@' . __FUNCTION__, [
                "line" => $th->getLine(),
                "message" => $th->getMessage()
            ]);
            return response()->json([
                'message' => 'Internal Server Error',
                'stack' => $th->getMessage()
            ], 500);
        }
    }
}
