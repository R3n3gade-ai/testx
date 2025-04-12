/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartPalette } from './chart-palette';
import { FullChartColorsWithModules, FullChartConfigWithModules } from '../chart/components/canvas-chart-renderer/chart-with-modules.config';
import { DeepPartial } from '@devexperts/dxcharts-lite/dist/chart/utils/object.utils';
import { ThemeType } from '../chart/model/theme.model';
import { ChartCoreSettingsColors } from '../chart/model/chart.model';
export type FullChartCoreConfig = Omit<FullChartConfigWithModules, 'colors'> & {
    themes: ThemesSettings;
};
export type FullChartCoreConfigWithModulesColors = Omit<FullChartConfigWithModules, 'colors'> & {
    themes: Record<ThemeType, FullChartColorsWithModules>;
};
export type PartialFullChartCoreConfig = DeepPartial<FullChartCoreConfig>;
export type PartialFullChartCoreConfigWithModulesColors = DeepPartial<FullChartCoreConfigWithModulesColors>;
export type ThemesSettings = Record<ThemeType, ChartCoreSettingsColors>;
/**
 * Default chart config in chart-react.
 * @param {ChartPalette} chartPaletteDark
 * @param {ChartPalette} chartPaletteLight
 * @doc-tags chart-react,default-config
 */
export declare const config: (chartPaletteDark: ChartPalette, chartPaletteLight: ChartPalette) => PartialFullChartCoreConfig;
export declare const mapPalette2ChartColors: (chartPalette: ChartPalette) => FullChartColorsWithModules;
export declare const getDefaultChartConfig: (chartPaletteDark: ChartPalette, chartPaletteLight: ChartPalette) => FullChartCoreConfig;
export declare const DEFAULT_CHART_CONFIG: FullChartCoreConfig;
