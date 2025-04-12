/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Point } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
import { Property } from '../../../utils/property.utils';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/drawing.model';
import { Option } from 'fp-ts/Option';
import { DrawingType } from '../../model/drawing.model';
import { ChartDrawingViewModel } from './drawing.view-model';
import { ReorderType } from '../../components/right-click-menu/right-click-menu-reorder-btns.component';
import { DynamicObjectsViewModel } from '../dynamic-objects.view-model';
export interface DrawingsMenuViewModel {
    readonly isOpened: Property<boolean>;
    readonly closeMenu: () => void;
    readonly menuPosition: Property<Point>;
    readonly drawing: Property<Option<DrawingModel<DrawingType>>>;
    readonly toggleLocked: (drawing: DrawingModel<DrawingType>) => void;
    readonly toggleVisibility: (drawing: DrawingModel<DrawingType>) => void;
    readonly reorderDrawing: (reorderType: ReorderType) => void;
}
export declare const createDrawingsMenuViewModel: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"drawingViewModel", ChartDrawingViewModel> & Record<"dynamicObjectsVM", DynamicObjectsViewModel>, import("../../../utils/adt/sink.utils").Sink1<"Observable", DrawingsMenuViewModel>>;
