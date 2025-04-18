/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC } from 'react';
import { StudyLineRefHolder } from '../../../dom-mutation-models/chart-legend.dom-mutation-model';
import { StudiesSettingsProps } from '../../studies/studies-settings/studies-settings.component';
export interface ChartLegendSeparateStudiesProps {
    readonly uuid: string;
    readonly title: string;
    readonly lines: StudyLineRefHolder[];
    readonly onDeleteStudySeries: (uuid: string) => void;
    readonly studiesSettingsProps: StudiesSettingsProps;
    readonly disabled: boolean;
}
export declare const ChartLegendStudyItem: FC<ChartLegendSeparateStudiesProps>;
