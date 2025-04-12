/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { YAxisAlign } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { StudyMoveToScaleData } from '../../../view-models/studies/studies-scales.view-model';
export interface StudiesMenuMoveToScaleItemsGroupProps {
    readonly uuid: string;
    readonly studyMoveToScaleData: StudyMoveToScaleData;
    readonly onClose: () => void;
    readonly moveToPaneAbove: (uuid: string) => void;
    readonly moveToPaneBelow: (uuid: string) => void;
    readonly moveToNewScale: (uuid: string, direction: YAxisAlign) => void;
    readonly moveToExistingScale: (uuid: string, scale: string) => void;
}
export declare const StudiesMenuMoveToScaleItemsGroup: React.NamedExoticComponent<StudiesMenuMoveToScaleItemsGroupProps>;
