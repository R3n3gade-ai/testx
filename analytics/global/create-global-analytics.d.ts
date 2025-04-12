/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Creates `global` analytics, that works for all charts, on top level.
 *
 * For example, we have an `event` that should be logged only once, when user visits the page for the first time.
 * This event doesn't depend on any chart, its lyfecycle is overall application flow, so we wire up this event via `global` analytics.
 */
export declare const createGlobalAnalytics: import("../../../context/context2").Context<Record<"analytics", import("../../../analytics/analytics").Analytics> & Record<"userDataViewModel", import("../../view-models/user-data.view-model").UserDataViewModel> & Record<"multiChartViewModel", import("../../view-models/multi-chart.view-model").MultiChartViewModel>, import("../../../utils/sink").Sink<{
    globalGeneralAnalyticsEvents: {};
    globalDrawingsAnalyticsEvents: {};
    globalToolbarAnalyticsEvents: {};
}>>;
