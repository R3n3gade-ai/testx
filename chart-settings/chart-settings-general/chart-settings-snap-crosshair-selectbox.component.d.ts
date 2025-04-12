/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { SelectboxValue } from '../../../../chart-kit/Selectbox/Selectbox.component';
import { MagnetTarget } from '@devexperts/dxcharts-lite/dist/chart/components/cross_tool/cross-tool.component';
export interface SnapCrosshairSelectboxProps<T extends MagnetTarget> {
    readonly value: T;
    readonly options: T[];
    readonly onValueChange: (value: T) => void;
    readonly keyboardModeEnabled: boolean;
    readonly tabIndex: number;
}
export declare function isAvailableCrosshairType<T extends MagnetTarget>(value: SelectboxValue, options: T[]): value is T;
export declare const SnapCrosshairSelectbox: <T extends MagnetTarget>(props: SnapCrosshairSelectboxProps<T>) => React.JSX.Element;
