<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class BindingServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $repositories = [
            'user' => [
                \App\Repositories\User\UserRepositoryInterface::class,
                \App\Repositories\User\UserRepository::class,
            ]
        ];
        $services = [
            'auth' => [
                \App\Services\Auth\AuthServiceInterface::class,
                \App\Services\Auth\AuthService::class,
            ]
        ];
        foreach($repositories as $repo){
            $this->app->bind($repo[0], $repo[1]);
        }
        foreach($services as $service){
            $this->app->bind($service[0], $service[1]);
        }
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
