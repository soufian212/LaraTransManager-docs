---
sidebar_position: 2
---

# Installation

## Requirements

- PHP -> 8.2
- Laravel -> 11.x

## Installation

Require the package using composer:

```bash
composer require soufian212/laratransmanager
```

Then run the following command:

```bash
php artisan vendor:publish --provider="Soufian212\LaraTransManager\LaraTransManagerServiceProvider"
```

it will publish the **config** file and the **migration** files.

it's also needed to publish the **assets** files:

```bash
php artisan vendor:publish --tag=public --force
```

Then add the service provider to your `bootstrap/providers.php` file:

```php
return [
    App\Providers\AppServiceProvider::class,
    Soufian212\LaraTransManager\LaraTransManagerServiceProvider::class, // <-- 👈
];
```

Running migrations:

```bash
php artisan migrate
```
Visit `/translations` to see the translations dashboard.

You will see and empty dashboard, so first of all wen need to initialize and export the translations to database.

So run
```bash
php artisan laratransmanager:init
```