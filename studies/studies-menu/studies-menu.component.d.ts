/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { RCMenuProps } from '../../../../chart-kit/Popover/popover-menu-generic';
import { Localization } from '../../../../config/localization/localization';
import { StudiesSettingsProps } from '../studies-settings/studies-settings.component';
import { YAxisAlign } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { StudyMoveToScaleData } from '../../../view-models/studies/studies-scales.view-model';
import { ReorderType } from '../../right-click-menu/right-click-menu-reorder-btns.component';
export interface StudiesMenuProps extends RCMenuProps {
    readonly localization: Localization;
    readonly onReorderSeries: (reorderType: ReorderType, uuid: string) => void;
    readonly onDuplicateStudy: (uuid: string) => void;
    readonly studyMoveToScaleData: StudyMoveToScaleData;
    readonly moveToPaneAbove: (uuid: string) => void;
    readonly moveToPaneBelow: (uuid: string) => void;
    readonly moveToNewScale: (uuid: string, direction: YAxisAlign) => void;
    readonly moveToExistingScale: (uuid: string, scale: string) => void;
    readonly onConfigureStudy: (uuid: string) => void;
    readonly studiesSettingsProps: StudiesSettingsProps;
}
export declare const StudiesMenu: React.NamedExoticComponent<StudiesMenuProps>;
