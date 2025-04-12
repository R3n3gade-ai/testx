/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AggregationPeriodViewModel } from '../../../aggregation-period.view-model';
import { ChartConfiguratorViewModel } from '../../../chart-configurator.view-model';
import { ChartWithModules } from '../../../../components/canvas-chart-renderer/chart-with-modules';
/**
 * Viewport ***candles*** strategy logic on aggregation period change
 */
export declare const onAggregationChangedCandlesViewportEffect: import("../../../../../context/context2").Context<Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chart", ChartWithModules> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel>, import("rxjs").Observable<[import("../../../../model/aggregation.model").AggregationPeriod, void]>>;
