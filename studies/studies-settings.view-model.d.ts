/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable } from 'rxjs';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { Localization } from '../../../config/localization/localization';
import { Sink } from '../../../context/sink2';
import { DxStudiesProvider } from '../../../providers/studies/dx-studies-provider';
import { StudiesDataProvider } from '../../../providers/studies/studies-data-provider';
import { Property } from '../../../utils/property.utils';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { TStudySettings } from '../../model/studies.model';
import { ActionsHistoryVM } from '../actions/actions-history.vm';
import { ChartConfiguratorViewModel } from '../chart-configurator.view-model';
import { DxScriptEditViewModel } from '../dx-script-edit.view-model';
import { MultiChartViewModel } from '../multi-chart.view-model';
import { StudiesScalesViewModel } from './studies-scales.view-model';
export interface StudiesSettingsViewModel {
    studies$: Observable<TStudySettings[]>;
    addedStudies$: Observable<TStudySettings[]>;
    isOpened: Property<boolean>;
    selectedStudyUUID: Property<string>;
    initialStudiesSet: Property<boolean>;
    onAddedStudy: (id: string, insertIndex?: number, overlaying?: boolean) => void;
    onRemoveStudy: (uuid: string) => void;
    onChangeStudy: (settings: TStudySettings) => void;
    onRemoveAllStudies: () => void;
    onReorderStudies: (startIndex: number, endIndex: number) => void;
    onOpen: () => void;
    onConfigureStudy: (studyId: string) => void;
    onClose: () => void;
    onSave: () => void;
    setStudies: (studies: TStudySettings[]) => void;
    setStudiesByIds: (studyIds: string[]) => void;
    duplicateStudy: (uuid: string) => void;
    checkIfCustomStudyAdded: (study: TStudySettings) => boolean;
    updateStudiesConfig: (studiesConfig: Array<TStudySettings>) => void;
    setAddedStudies: (studies: Array<TStudySettings>) => void;
}
export declare const createStudiesSettingsViewModel: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"studiesDataProvider", StudiesDataProvider> & Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Record<"dxStudiesProvider", DxStudiesProvider> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"studiesScalesViewModel", StudiesScalesViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"localization", Localization> & Record<"chartId", string>, Sink<StudiesSettingsViewModel>>;
