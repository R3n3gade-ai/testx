/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartReactConfig } from '../../../../../config/chart-react-config';
import { ChartWithModules } from '../../../../components/canvas-chart-renderer/chart-with-modules';
import { MultiChartViewModel } from '../../../multi-chart.view-model';
import { ChartDataViewModel } from '../../../data/chart-data.view-model';
export declare const syncLayoutScaleEffect: import("../../../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"chartDataViewModel", ChartDataViewModel>, import("rxjs").Observable<import("../../../../../providers/chart-data-provider").ChartCandleData[] | {
    start: number;
    end: number;
} | {
    start: number;
    end: number;
}>>;
