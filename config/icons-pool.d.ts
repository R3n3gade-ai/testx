/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export type IconDefinition = readonly [number, number, readonly [], string, string, number, number];
export type IconsPool = Readonly<Record<string, IconDefinition>>;
export type IconsPoolNames = keyof IconsPool;
export declare const DEFAULT_ICON_SCALE = 0.2;
export declare const DEFAULT_ICON_ANGLE = 0;
/**
 * Default icons for icons drawing.
 * @doc-tags chart-react,default-config,drawings
 */
export declare const DEFAULT_ICONS_POOL: IconsPool;
