/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartLegendViewModel } from '../../view-models/chart-legend/chart-legend.view-model';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { StudiesSettingsViewModel } from '../../view-models/studies/studies-settings.view-model';
import { DxScriptEditViewModel } from '../../view-models/dx-script-edit.view-model';
import { StudiesScalesViewModel } from '../../view-models/studies/studies-scales.view-model';
export interface StudiesRCMenuItem {
    readonly key: string;
    readonly label: string;
    readonly onItemSelect: () => void;
}
export declare const StudiesMenuContainer: import("../../../context/context2").Context<Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Record<"localization", import("../../../config/localization/localization").Localization> & Record<"studiesSettingsViewModel", StudiesSettingsViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"chart", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"dynamicObjectsVM", import("../../view-models/dynamic-objects.view-model").DynamicObjectsViewModel> & Record<"studiesScalesViewModel", StudiesScalesViewModel> & Record<"chartLegendVM", ChartLegendViewModel> & Record<"colorPalette", string[]>, () => import("react").FunctionComponentElement<import("../../components/studies/studies-menu/studies-menu.component").StudiesMenuProps>>;
