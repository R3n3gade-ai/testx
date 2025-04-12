/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
export declare const countdownViewModel: import("../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"yAxisConfiguratorViewModel", import("./y-axis/y-axis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"chartDataViewModel", import("./data/chart-data.view-model").ChartDataViewModel> & Record<"aggregationPeriodViewModel", import("./aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartSessionsViewModel", import("./chart-sessions.view-model").ChartSessionsViewModel>, import("../../utils/adt/sink.utils").Sink1<"Observable", {}>>;
