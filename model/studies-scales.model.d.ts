/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { YAxisAlign } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { YAxisRCMenuState } from '../view-models/y-axis/y-axis-menu.vm';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { TStudySettings } from './studies.model';
/**
 * Studies multiple scales model.
 * @doc-tags model
 */
export interface ScaleConfig {
    paneUUID: string;
    extentIdx: number;
    data: YAxisRCMenuState;
}
export interface ScalePlacement {
    paneUUID: string;
    paneOrder: number;
    extentIdx: number;
    align: YAxisAlign;
}
export interface ScalesData {
    configs: Array<ScaleConfig>;
    placement: Record<string, ScalePlacement>;
}
export declare const getScalesDataFromChartStudies: (chart: ChartWithModules, current: ScalesData) => ScalesData;
export declare const moveStudiesToScalesBasedOnScalesData: (chart: ChartWithModules, studies: TStudySettings[], scales: ScalesData) => void;
