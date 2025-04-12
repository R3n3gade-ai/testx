/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { MultiChartViewModel } from '../multi-chart.view-model';
/**
 * Maximizes/minimizes chart on double click
 */
export declare const handleDblClickOnChartEffect: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartId", string>, import("rxjs").Observable<import("@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component").Point>>;
