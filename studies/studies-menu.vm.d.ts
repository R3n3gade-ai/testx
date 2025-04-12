/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Property } from '../../../utils/property.utils';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { StudiesSettingsViewModel } from './studies-settings.view-model';
import { DynamicObjectsViewModel } from '../dynamic-objects.view-model';
import { RCMenuState } from '../../../chart-kit/Popover/popover-menu-generic';
import { StudiesScalesViewModel } from './studies-scales.view-model';
import { YAxisAlign } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { ReorderType } from '../../components/right-click-menu/right-click-menu-reorder-btns.component';
export interface StudiesMenuViewModel {
    readonly menuState: Property<RCMenuState>;
    readonly closeMenu: () => void;
    readonly reorderSeries: (reorderType: ReorderType, uuid: string) => void;
    readonly onConfigureStudy: (uuid: string) => void;
    readonly onDuplicateStudy: (uuid: string) => void;
    readonly moveToPaneAbove: (uuid: string) => void;
    readonly moveToPaneBelow: (uuid: string) => void;
    readonly moveToNewScale: (uuid: string, direction: YAxisAlign) => void;
    readonly moveToExistingScale: (uuid: string, scale: string) => void;
}
export declare const createStudiesMenuViewModel: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"studiesSettingsViewModel", StudiesSettingsViewModel> & Record<"dynamicObjectsVM", DynamicObjectsViewModel> & Record<"studiesScalesViewModel", StudiesScalesViewModel>, import("../../../utils/adt/sink.utils").Sink1<"Observable", StudiesMenuViewModel>>;
