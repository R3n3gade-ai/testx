/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartPaletteLight } from './chart-palette-light';
import { ChartPaletteDark } from './chart-palette-dark';
export interface ChartAppPalette {
    light: {
        /**
         * @deprecated not used anymore
         */
        css?: string;
        object: ChartPaletteLight;
    };
    dark: {
        /**
         * @deprecated not used anymore
         */
        css?: string;
        object: ChartPaletteDark;
    };
}
