/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { IconsConfig } from '../../config/icons/icons-config';
export declare const layouts: readonly ["1x1", "2x2", "2x1", "1x2", "3x1", "1x3", "2x4"];
export type MultiChartLayoutType = (typeof layouts)[number];
declare const chartsAmount: readonly [1, 2, 3, 4, 8];
export type ChartsAmount = (typeof chartsAmount)[number];
export declare const getChartsAmount: (layout: MultiChartLayoutType) => ChartsAmount;
export declare const getLayoutsByChartsAmount: (chartsAmount: ChartsAmount) => MultiChartLayoutType[];
export declare const isChartVisibleInMultiChartLayout: (layout: MultiChartLayoutType, chartId: number) => boolean;
export declare const getMultiChartLayoutIcon: (layout: MultiChartLayoutType, iconsConfig: IconsConfig) => import("react").FunctionComponentElement<any>;
export declare const getChartsToClearOnLayoutDiff: (newLayoutType: MultiChartLayoutType, prevLayoutType: MultiChartLayoutType) => string[];
export declare const byLayoutTypeCachedFabric: <T extends () => any>() => {
    create: (fabric: T, chartId: string, layoutType: MultiChartLayoutType) => ReturnType<T>;
    clear: () => void;
};
export {};
