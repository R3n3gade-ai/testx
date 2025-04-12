/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartWithModules } from '../../../components/canvas-chart-renderer/chart-with-modules';
import { ChartConfiguratorViewModel } from '../../chart-configurator.view-model';
import { TimeFrameViewModel } from '../../timeframe.view-model';
import { MultiChartViewModel } from '../../multi-chart.view-model';
/**
 * Viewport strategy logic on data settings change (extended hours, price type)
 */
export declare const onDataSettingsChangedViewportEffect: import("../../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"timeFrameViewModel", TimeFrameViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"multiChartViewModel", MultiChartViewModel>, import("rxjs").Observable<import("../../timeframe.view-model").TimeFrame>>;
