/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Point } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
import { Property } from '../../../utils/property.utils';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
export interface PositionMenuViewModel {
    readonly isOpened: Property<boolean>;
    readonly closeMenu: () => void;
    readonly menuPosition: Property<Point>;
}
export declare const createPositionMenuViewModel: import("../../../context/context2").Context<Record<"chart", ChartWithModules>, import("../../../utils/adt/sink.utils").Sink1<"Observable", PositionMenuViewModel>>;
