/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Creates analytics per `chart` scope.
 *
 * For example we need to log which drawing was created on chart - this event is the perfect candidate for this entity.
 */
export declare const createChartScopeAnalytics: import("../../../context/context2").Context<Record<"analytics", import("../../../analytics/analytics").Analytics> & Record<"chart", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"studiesSettingsViewModel", import("../../view-models/studies/studies-settings.view-model").StudiesSettingsViewModel> & Record<"dxScriptEditViewModel", import("../../view-models/dx-script-edit.view-model").DxScriptEditViewModel> & Record<"multiChartViewModel", import("../../view-models/multi-chart.view-model").MultiChartViewModel> & Record<"chartId", string> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartTypeViewModel", import("../../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"snapshotSharingVM", import("../../view-models/snapshot/chart-snapshot.view-model").ChartSnapshotViewModel> & Record<"tradingVM", import("../../view-models/trading/trading.view-model").TradingViewModel> & Record<"timeframePresetsViewModel", import("../../view-models/timeframe-presets.view-model").TimeframePresetsViewModel>, import("../../../utils/sink").Sink<{
    drawingsChartScopeAnalyticsEvents: {};
    studiesChartScopeAnalyticsEvents: {};
    toolbarChartScopeAnalyticsEvents: {
        logSelectSnapshotMenuItemEvent: (type: "copy" | "download" | "copyLink" | "share") => void;
    };
    tradingChartScopeAnalyticsEvents: {};
    timeframeChartScopeAnalyticsEvents: {};
}>>;
