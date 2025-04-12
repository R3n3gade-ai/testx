/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink } from '../../context/sink2';
import { Property } from '../../utils/property.utils';
import { ActionsHistoryVM } from './actions/actions-history.vm';
import { MultiChartViewModel } from './multi-chart.view-model';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { ChartType, ChartTypesConfig } from '../model/chart.model';
export interface ChartTypeViewModel {
    readonly types: Property<ChartType[]>;
    readonly type: Property<ChartType>;
    readonly setType: (type: ChartType) => void;
}
export type ChangeChartTypeAction = 'chart_type_change';
export declare const createChartTypeViewModel: import("../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartTypesConfig", ChartTypesConfig> & Record<"initialChartType", "area" | "line" | "baseline" | "histogram" | "equivolume" | "scatterPlot" | "trend" | "candle" | "bar" | "heikinAshi" | "hollow"> & Record<"chartId", string>, Sink<ChartTypeViewModel>>;
