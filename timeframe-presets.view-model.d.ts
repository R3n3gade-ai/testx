/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable } from 'rxjs';
import { Sink } from '../../context/sink2';
import { Property } from '../../utils/property.utils';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { AggregationPeriod } from '../model/aggregation.model';
import { Timeframe, TimeframePreset, TimeframePresetsList } from '../model/timeframe-presets.model';
import { MultiChartDataService } from '../services/multichart-data.service';
import { AggregationPeriodViewModel } from './aggregation-period.view-model';
import { ChartConfiguratorViewModel } from './chart-configurator.view-model';
import { ChartSessionsViewModel } from './chart-sessions.view-model';
import { MultiChartViewModel } from './multi-chart.view-model';
import { UserDataViewModel } from './user-data.view-model';
import { Localization } from '../../config/localization/localization';
export interface TimeframePresetsViewModel {
    readonly presets: Property<TimeframePreset[]>;
    readonly defaultTimeframePresetsList: TimeframePreset[];
    readonly deletePreset: (presetKey: TimeframePreset) => void;
    readonly addPreset: (preset: TimeframePreset) => void;
    readonly timeframePreset: Property<TimeframePreset | null>;
    readonly setTimeframePreset: (preset: TimeframePreset | null) => void;
    readonly timeframePeriods: Property<AggregationPeriod[]>;
    readonly customTimeframes: Observable<Timeframe[]>;
    readonly selectedTimeframePeriod: Property<AggregationPeriod>;
    readonly changeSelectedTimeframePeriod: (period: AggregationPeriod) => void;
    readonly selectedCustomTimeframe: Property<Timeframe>;
    readonly changeSelectedCustomTimeframe: (index: Timeframe) => void;
    readonly saveCustomPeriodTimeframe: (aggregation: AggregationPeriod, timeframe: Timeframe, localization: Localization) => TimeframePreset;
    readonly setAggregationRestrictionRule: (rule: (aggregation: AggregationPeriod) => boolean) => void;
}
export declare const createTimeframePresetsViewModel: import("../../context/context2").Context<Record<"multiChartDataService", MultiChartDataService> & Record<"chart", ChartWithModules> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"initialTimeframePresets", TimeframePresetsList> & Record<"userDataViewModel", UserDataViewModel> & Record<"chartId", string> & Record<"chartSessionsViewModel", ChartSessionsViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"localization", Localization>, Sink<TimeframePresetsViewModel>>;
export declare const checkForPresetAlreadyExist: (preset: TimeframePreset) => (presets: TimeframePreset[]) => boolean;
export declare const checkForPresetsIsOverflowMaxSize: (presets: TimeframePreset[], MAX_SIZE?: number) => boolean;
