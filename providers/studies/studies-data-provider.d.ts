/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { StudySeriesConfig } from '@dx-private/dxchart5-modules/dist/studies/model/study-series';
import { TickValues } from '@dx-private/dxchart5-modules/dist/studies/model/studies.model';
import { TStudySettings } from '../../chart/model/studies.model';
import { Observable } from 'rxjs';
export interface CalculateStudyOptions {
    chartId?: string;
    addedStudies?: TStudySettings[];
}
export interface StudiesDataProvider {
    setStudyConfigs: (configs: StudySeriesConfig[], options?: CalculateStudyOptions) => void;
    studyHistory: Observable<Record<string, TickValues[]>>;
    studyUpdates: Observable<Record<string, TickValues[]>>;
}
