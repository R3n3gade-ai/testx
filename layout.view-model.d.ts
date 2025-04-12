/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { either } from 'fp-ts';
import { ChartReactConfig } from '../../config/chart-react-config';
import { Sink } from '../../context/sink2';
import { ChartLayoutData, LayoutProvider } from '../../providers/layout-provider';
import { Property } from '../../utils/property.utils';
import { ChartReactSettings } from '../model/chart.model';
import { ChartLayout, MultiChartLayout } from '../model/layout.model';
import { BrowserApiViewModel } from './browser-api.view-model';
import { ChartInfo, MultiChartViewModel, MultiChartViewModelState } from './multi-chart.view-model';
import { ValidationError } from './utils/validators';
import { Localization } from '../../config/localization/localization';
import { MultichartDrawingSyncVM } from './drawings/drawing-sync.vm';
import { FullChartCoreConfig } from '../../config/chart-config';
export interface LayoutViewModel {
    readonly layoutData: Property<ChartLayoutData>;
    readonly isLayoutSaving: Property<boolean>;
    readonly isErrorLayoutSaving: Property<boolean>;
    readonly generateLayout: () => MultiChartLayout;
    readonly fireLayoutUpdate: () => void;
    readonly addLayout: (name: string) => either.Either<ValidationError, void>;
    readonly deleteLayout: (id: string) => void;
    readonly updateSelectedLayout: (id: string) => void;
    readonly updateLayoutById: (id: string, name: string) => either.Either<ValidationError, void>;
    readonly lastUpdateTimeStamp: Property<number>;
    readonly togglePopupOpen: (open: boolean) => void;
    readonly popupOpen: Property<boolean>;
    readonly editableLayout: Property<string>;
    readonly onEditLayout: (id: string) => void;
    readonly changeLayoutData: (data: ChartLayoutData) => void;
}
export declare const createLayoutViewModel: import("../../context/context2").Context<Record<"multiChartViewModel", MultiChartViewModel> & Record<"drawingSyncVM", MultichartDrawingSyncVM> & Record<"layoutProvider", LayoutProvider> & Record<"chartConfig", FullChartCoreConfig> & Record<"browserApiViewModel", BrowserApiViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"initialChartReactSettings", ChartReactSettings> & Record<"initialLayout", ChartLayoutData> & Record<"localization", Localization> & Record<"dxStudiesProvider", import("../../providers/studies/dx-studies-provider").DxStudiesProvider> & Record<"timezones", import("../../utils/timezones/timezone.model").TimezonesConfig>, Sink<LayoutViewModel>>;
/**
 * Exports the multi-chart VM state to multi chart layout.
 * @param {MultiChartViewModelState} multiChartState
 * @param {boolean} isDrawingSyncEnabled
 * @param {string} selectedChartId
 */
export declare const map2MultiChartLayout: (multiChartState: MultiChartViewModelState, isDrawingSyncEnabled: boolean, selectedChartId: string) => MultiChartLayout;
export declare const map2ChartLayout: (chart: ChartInfo) => ChartLayout;
