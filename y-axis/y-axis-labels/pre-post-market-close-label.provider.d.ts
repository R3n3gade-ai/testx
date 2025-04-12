/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { YAxisConfiguratorViewModel } from '../y-axis-configurator.view-model';
import { ChartDataViewModel } from '../../data/chart-data.view-model';
import { ChartWithModules } from '../../../components/canvas-chart-renderer/chart-with-modules';
import { ChartSessionsViewModel } from '../../chart-sessions.view-model';
import { AggregationPeriodViewModel } from '../../aggregation-period.view-model';
import { ChartConfiguratorViewModel } from '../../chart-configurator.view-model';
export declare const createPrePostMarketLabelProvider: import("../../../../context/context2").Context<Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chart", ChartWithModules> & Record<"chartSessionsViewModel", ChartSessionsViewModel> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel>, void>;
