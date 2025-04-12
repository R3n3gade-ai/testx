/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
import { Sink } from '../../context/sink2';
import { Property } from '../../utils/property.utils';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { MultiChartViewModel } from './multi-chart.view-model';
import { Bounds } from '@devexperts/dxcharts-lite/dist/chart/model/bounds.model';
import { ActionsHistoryVM } from './actions/actions-history.vm';
export interface PaneData {
    readonly bounds: Bounds;
    readonly uuid: string;
    readonly visible: boolean;
    readonly isTop?: boolean;
    readonly isBottom?: boolean;
}
export interface PanesData {
    readonly panes: PaneData[];
    readonly right: number;
}
export interface ChartPaneViewModel {
    readonly panesData: Property<PanesData>;
    readonly hoveredPane: Property<Option<string>>;
    readonly movePaneUp: (uuid: string) => void;
    readonly movePaneDown: (uuid: string) => void;
    readonly setHoveredPane: (data: Option<string>) => void;
    readonly hidePane: (uuid: string) => void;
    readonly showPane: (uuid: string) => void;
}
export declare const createChartPaneViewModel: import("../../context/context2").Context<Record<"multiChartViewModel", MultiChartViewModel> & Record<"chart", ChartWithModules> & Record<"chartId", string> & Record<"actionsHistoryVM", ActionsHistoryVM>, Sink<ChartPaneViewModel>>;
