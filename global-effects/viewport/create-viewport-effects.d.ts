/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * This set of effects is the main core of the viewport chart-react logic
 * it's main role is to change chart viewport (X and Y scale) if some events happened
 * For example: instrument change, period change, candles updating out of or inside the historical data range
 */
export declare const CreateViewportEffects: import("../../../../context/context2").Context<Record<"aggregationPeriodViewModel", import("../../aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chart", import("../../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"timeFrameViewModel", import("../../timeframe.view-model").TimeFrameViewModel> & Record<"chartConfiguratorViewModel", import("../../chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chartDataViewModel", import("../../data/chart-data.view-model").ChartDataViewModel> & Record<"timeframePresetsViewModel", import("../../timeframe-presets.view-model").TimeframePresetsViewModel> & Record<"multiChartViewModel", import("../../multi-chart.view-model").MultiChartViewModel> & Record<"chartReactConfig", import("../../../../config/chart-react-config").ChartReactConfig>, import("rxjs").Observable<void | import("../../../../providers/chart-data-provider").ChartCandleData[] | import("../../timeframe.view-model").TimeFrame | {
    start: number;
    end: number;
} | {
    start: number;
    end: number;
} | [[import("../../../model/aggregation.model").AggregationPeriod, import("../../../model/aggregation.model").AggregationPeriod], import("../../timeframe.view-model").TimeFrame] | [import("../../../model/aggregation.model").AggregationPeriod, void]>>;
