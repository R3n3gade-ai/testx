/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AggregationPeriodViewModel } from '../../../aggregation-period.view-model';
import { AggregationPeriod } from '../../../../model/aggregation.model';
import { TimeFrameViewModel } from '../../../timeframe.view-model';
import { ChartConfiguratorViewModel } from '../../../chart-configurator.view-model';
import { ChartWithModules } from '../../../../components/canvas-chart-renderer/chart-with-modules';
import { AggregationViewportStrategy } from '../../../../model/chart.model';
/**
 * Viewport ***timeframe*** strategy logic on aggregation period change
 */
export declare const onAggregationChangedTimeframeViewportEffect: import("../../../../../context/context2").Context<Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chart", ChartWithModules> & Record<"timeFrameViewModel", TimeFrameViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel>, import("rxjs").Observable<[[AggregationPeriod, AggregationPeriod], import("../../../timeframe.view-model").TimeFrame]>>;
/**
 * Determines if the X timeframe should be preserved when changing aggregation period.
 * @doc-tags period,tricky,hardcoded-config,blogic,scaling,viewport
 */
export declare function resolveTimeframeAggregationChangeStrategy(prevPeriod: AggregationPeriod, curPeriod: AggregationPeriod): AggregationViewportStrategy;
