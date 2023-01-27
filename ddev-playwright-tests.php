<?php
/**
 * Plugin Name: DDEV Playwright Tests
 */
declare(strict_types=1);

namespace Dinamiko\Modularity;

use Inpsyde\Modularity\Package;
use Inpsyde\Modularity\Properties\PluginProperties;

/**
 * Provide the plugin instance.
 *
 * @return Package
 */
function plugin(): Package
{
    static $package;

    if (!$package) {
        $properties = PluginProperties::new(__FILE__);
        $package = Package::new($properties);
    }

    /** @var Package $package */
    return $package;
}

add_action(
    'plugins_loaded',
    static function(): void {
        if (is_readable(__DIR__ . '/vendor/autoload.php')) {
            include_once __DIR__ . '/vendor/autoload.php';
        }
    }
);