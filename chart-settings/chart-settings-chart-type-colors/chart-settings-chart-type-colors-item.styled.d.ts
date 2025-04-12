/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export interface ChartSettingsTabColorsItemProps {
    keyboardModeEnabled?: boolean;
}
export declare const ChartFormFieldsetGroupItemColors: import("styled-components").StyledComponent<"div", any, ChartSettingsTabColorsItemProps, never>;
export declare const ChartSettingssColorsFormFieldsetGroupItem: import("styled-components").StyledComponent<"div", any, ChartSettingsTabColorsItemProps, never>;
export interface ChartSettingsFieldStyledProps {
    colorPickersAmount: number;
}
export declare const ChartSettingsFieldStyled: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../chart-settings-field.component").ChartSettingsFieldProps>, any, ChartSettingsFieldStyledProps, never>;
