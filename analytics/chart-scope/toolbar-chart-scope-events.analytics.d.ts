/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Analytics } from '../../../analytics/analytics';
import { AggregationPeriodViewModel } from '../../view-models/aggregation-period.view-model';
import { ChartTypeViewModel } from '../../view-models/chart-type.view-model';
import { MultiChartViewModel } from '../../view-models/multi-chart.view-model';
import { ChartDataViewModel } from '../../view-models/data/chart-data.view-model';
import { ChartSnapshotViewModel } from '../../view-models/snapshot/chart-snapshot.view-model';
type SnapshotActionType = 'download' | 'copy' | 'copyLink' | 'share';
export declare const createToolbarChartScopeAnalyticsEvents: import("../../../context/context2").Context<Record<"analytics", Analytics> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chartTypeViewModel", ChartTypeViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"snapshotSharingVM", ChartSnapshotViewModel> & Record<"chartId", string>, import("../../../utils/adt/sink.utils").Sink1<"Observable", {
    logSelectSnapshotMenuItemEvent: (type: SnapshotActionType) => void;
}>>;
export {};
