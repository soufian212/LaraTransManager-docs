---
position: 3
---

# Configuration
## Publish the config file
```bash
php artisan vendor:publish --tag=laratransmanager-config
```
## Usage
### Caching
The config file is simple: 
```php
    'cache_translations' => true,
```
When it's true, all translations will be cached, which gives us better performance instead of fetching the translations from the database every time.

```php
    'cache_lifetime' => 3600,
```
The cache lifetime is in seconds.

#### Clearing the cache
```bash
php artisan cache:clear
```
Or you can do that from the dashboard.

:::info
It's necessary to clear the cache after you finish form translations to take effect.
:::