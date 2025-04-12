/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { YAxisConfiguratorViewModel } from '../y-axis-configurator.view-model';
import { ChartDataViewModel } from '../../data/chart-data.view-model';
import { ChartWithModules } from '../../../components/canvas-chart-renderer/chart-with-modules';
import { AggregationPeriodViewModel } from '../../aggregation-period.view-model';
export declare const createPrevDayCloseProvider: import("../../../../context/context2").Context<Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chart", ChartWithModules>, void>;
