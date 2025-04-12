/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Can be useful when you need to provide some default values for object.
 *
 * For example, you have overrides for icons, which is partial object and default icons.
 * `ProxyWithDefault(iconsOverrides, DEFAULT_ICONS)` will return you an object, that will return default icon if there is no override for some icon.
 */
export declare const ProxyWithDefaults: <T extends object>(target: T, defaults: T) => T;
