---
sidebar_position: 1
---

# Authorization

The Translations dashboard is available at the `/translations` route. By default, access is restricted to the local environment. To enable access in production, you need to customize the `CheckDashboardAccess` middleware. This can be done in your application's `app/Providers/AppServiceProvider.php` file.
```php
use Soufian212\LaraTransManager\Http\Middleware\CheckDashboardAccess;


public function boot(): void
    {
        CheckDashboardAccess::setAccessCallback(function () {
            // Custom logic here
            return true; // or any other condition
        });
    }
```	