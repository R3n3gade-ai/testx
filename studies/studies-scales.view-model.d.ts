/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { MoveDataSeriesToPaneDirection } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane-manager.component';
import { YAxisAlign } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import StudySeries from '@dx-private/dxchart5-modules/dist/studies/model/study-series';
import { Option } from 'fp-ts/Option';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { Subject } from 'rxjs';
import { Localization } from '../../../config/localization/localization';
import { Property } from '../../../utils/property.utils';
import { ActionsHistoryVM } from '../actions/actions-history.vm';
import { MultiChartViewModel } from '../multi-chart.view-model';
import { ScalePlacement } from '../../model/studies-scales.model';
export interface StudyMoveToScaleData {
    readonly paneUp: boolean;
    readonly paneDown: boolean;
    readonly newScaleLeft: boolean;
    readonly newScaleRight: boolean;
    readonly availablePinToScales: Array<{
        index: number;
        name: string;
        alignment: YAxisAlign;
    }>;
}
export interface StudyPaneChangedInterface {
    uuid: string;
    direction: MoveDataSeriesToPaneDirection;
    targetUUID: string | undefined;
    targetScalePlacement?: ScalePlacement;
}
export interface LabelData {
    readonly title: string;
    readonly x: number;
    readonly y: number;
    readonly align: YAxisAlign;
}
export interface LabelsData {
    readonly isMultipleScales: boolean;
    readonly labels: LabelData[];
}
export interface StudiesScalesViewModel {
    readonly studyMoveToScaleData: Property<StudyMoveToScaleData>;
    readonly labelsData: Property<LabelsData>;
    readonly setSelectedStudyChanged: (uuid: string) => void;
    readonly moveToNewScale: (uuid: string, direction: YAxisAlign) => void;
    readonly moveToExistingScale: (uuid: string, scale: string) => void;
    readonly moveToPane: (uuid: string, direction: MoveDataSeriesToPaneDirection) => void;
    readonly overlayingCheckboxDisabled: Property<boolean>;
    readonly updateStudySeriesOnExtentChange: Subject<Option<StudySeries>>;
}
export declare const createStudiesScalesViewModel: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"localization", Localization> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"multiChartViewModel", MultiChartViewModel>, import("../../../utils/adt/sink.utils").Sink1<"Observable", StudiesScalesViewModel>>;
