/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { YAxisConfiguratorViewModel } from '../../view-models/y-axis/y-axis-configurator.view-model';
import { ChartConfiguratorViewModel } from '../../view-models/chart-configurator.view-model';
export declare const YAxisMenuContainer: import("../../../context/context2").Context<Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chart", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"actionsHistoryVM", import("../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Record<"studiesSettingsViewModel", import("../../view-models/studies/studies-settings.view-model").StudiesSettingsViewModel> & Record<"multiChartViewModel", import("../../view-models/multi-chart.view-model").MultiChartViewModel> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"chartConfig", import("../../../config/chart-config").FullChartCoreConfig> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartSessionsViewModel", import("../../view-models/chart-sessions.view-model").ChartSessionsViewModel>, () => import("react").FunctionComponentElement<import("../../components/yAxis-settings/yaxis-configurator-popover.component").YAxisConfiguratorPopoverProps>>;
