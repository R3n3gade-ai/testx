/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Drawing } from '@dx-private/dxchart5-modules/dist/drawings/drawings.config';
import { NonEmptyArray } from 'fp-ts/NonEmptyArray';
import { Option } from 'fp-ts/Option';
import { Observable } from 'rxjs';
import { YAxisAlign } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { Sink } from '../../context/sink2';
import { Property } from '../../utils/property.utils';
import { AggregationPeriod } from '../model/aggregation.model';
import { LayerItem } from '../model/chart-layers.model';
import { ChartCoreConfigOffsets, ChartSettings, ChartType, CompareInstrument } from '../model/chart.model';
import { DrawingType } from '../model/drawing.model';
import { Instrument } from '../model/instrument.model';
import { InstrumentSymbol, ViewportState } from '../model/layout.model';
import { MultiChartLayoutType } from '../model/multichart.model';
import { TStudySettings } from '../model/studies.model';
import { TimestampRange } from '../model/timeframe.model';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { UnsubscribeCallback } from './api/chart-react-api.view-model';
import { TimeframePreset } from '../model/timeframe-presets.model';
import { CrosshairData } from './cross-tool.vm';
import { TimeFrame } from './timeframe.view-model';
import { FullChartCoreConfig } from '../../config/chart-config';
import { ScalesData } from '../model/studies-scales.model';
import { StudyPaneChangedInterface } from './studies/studies-scales.view-model';
export type ChartsInfo = NonEmptyArray<ChartInfo>;
export interface ChartInfo {
    readonly id: string;
    readonly chartType: ChartType;
    readonly instrument: Option<Instrument['symbol']>;
    readonly period: AggregationPeriod;
    readonly timezone?: string;
    readonly timeframePreset?: TimeframePreset;
    readonly extendedHours: boolean;
    readonly chartSettings: ChartSettings;
    readonly studies: TStudySettings[];
    readonly compareInstruments: CompareInstrument[];
    readonly drawings: Record<InstrumentSymbol, Drawing<DrawingType>[]>;
    readonly layers: {
        readonly layerItems: Record<InstrumentSymbol, LayerItem[]>;
        /**
         * @description
         * `LayerItemsGroup` id - needed for the DrawingGroups feature
         * @see
         * If value is not present, DrawingGroupsVM defaults it to `DEFAULT_GROUP_ID`
         * @default
         * `DEFAULT_GROUP_ID`
         */
        readonly selectedGroup?: string;
    };
    readonly panes: {
        order: string[];
        heightRatio: Record<string, number>;
    };
    readonly viewport: ViewportState;
    readonly scales: ScalesData;
}
export interface MultiChartSyncState {
    readonly isGeneralSettingsSyncEnabled: boolean;
    readonly isChartTypeSyncEnabled: boolean;
    readonly isInstrumentSyncEnabled: boolean;
    readonly isAggregationPeriodTypeSyncEnabled: boolean;
    readonly isTimezoneSyncEnabled: boolean;
    readonly isStudiesSyncEnabled: boolean;
    readonly isCrosshairSyncEnabled: boolean;
}
export interface MultiChartViewModelState extends MultiChartSyncState {
    readonly layout: MultiChartLayoutType;
    readonly lastChartType: ChartType;
    readonly lastInstrument: Option<Instrument['symbol']>;
    readonly lastCompareInstruments: CompareInstrument[];
    readonly lastTimezone: string;
    readonly lastAggregationPeriodType: AggregationPeriod;
    readonly lastStudies: TStudySettings[];
    readonly charts: ChartsInfo;
    readonly maximizedChartId: Option<string>;
    readonly offsets: ChartCoreConfigOffsets;
    readonly drawingMode: boolean;
    readonly magnetMode: boolean;
}
interface CrosshairSettings {
    readonly crosshairType: string;
}
export interface MultiChartViewModel {
    readonly state: Property<MultiChartViewModelState>;
    readonly setState: (state: MultiChartViewModelState) => void;
    readonly setLayout: (layout: MultiChartLayoutType) => void;
    readonly setChartType: (type: ChartType) => void;
    readonly setChartTypeSync: (value: boolean) => void;
    readonly setInstrument: (instrument: Option<Instrument['symbol']>) => void;
    readonly setInstrumentSync: (value: boolean) => void;
    readonly setTimezone: (timezone: string) => void;
    readonly setTimezoneSync: (value: boolean) => void;
    readonly setAggregationPeriodType: (type: AggregationPeriod) => void;
    readonly setAggregationPeriodTypeSync: (value: boolean) => void;
    readonly setGeneralSettingsForAllCharts: (settings: ChartSettings) => void;
    readonly setGeneralSettingsSync: (value: boolean) => void;
    readonly crosshairSettings: Property<CrosshairSettings>;
    readonly setCrosshairSettings: (settings: CrosshairSettings) => void;
    readonly crosshair: Property<Option<CrosshairData>>;
    readonly updateCrosshair: (crosshair: Option<CrosshairData>) => void;
    readonly setCrosshairSync: (value: boolean) => void;
    readonly setStudies: (studies: TStudySettings[]) => void;
    readonly setStudiesSync: (value: boolean) => void;
    readonly maximizeChart: (chartId: Option<string>) => void;
    readonly getChartInfo: (chartId: string) => ChartInfo;
    readonly getAllCharts: () => ChartInfo[];
    readonly getSelectedChartInfo: () => ChartInfo;
    /**
     * Returns an array with current layout state:
     * number of rows, number of columns
     * For example: '1x3' => [1, 3]
     */
    readonly getLayout: () => [number, number];
    readonly updateLocalChartInfo: (chartId: string, update: Partial<ChartInfo>) => void;
    readonly timeframe: Property<TimeFrame>;
    readonly updateTimeframe: (timeframe: TimeFrame) => void;
    readonly selectedChartId: Property<string>;
    readonly setSelectedChartId: (id: string) => void;
    readonly hoveredChartId: Property<string>;
    readonly setHoveredChartId: (id: string) => void;
    readonly onSelectedChartIdChanged: (cb: SelectedChartIdChangedCB) => UnsubscribeCallback;
    readonly setOffsets: (offsets: ChartCoreConfigOffsets) => void;
    readonly setDrawingMode: (enabled: boolean) => void;
    readonly setMagnetMode: (enabled: boolean) => void;
    readonly charts: Property<ChartWithModules[]>;
    readonly setCharts: (charts: ChartWithModules[]) => void;
    readonly chartLayersPopoverOpened: Property<boolean>;
    readonly setChartLayersPopoverOpened: (value: boolean) => void;
    readonly getSyncState: () => MultiChartSyncState;
    readonly isAnySyncEnabled: () => boolean;
    readonly studyPaneChanged: Observable<StudyPaneChangedInterface>;
    readonly setStudyPaneChanged: (data: StudyPaneChangedInterface) => void;
    readonly studyExistingScaleChanged: Observable<{
        uuid: string;
        value: string;
    }>;
    readonly setStudyExistingScaleChanged: (data: {
        uuid: string;
        value: string;
    }) => void;
    readonly studyNewScaleChanged: Observable<{
        uuid: string;
        direction: YAxisAlign;
    }>;
    readonly setStudyNewScaleChanged: (data: {
        uuid: string;
        direction: YAxisAlign;
    }) => void;
}
export declare const DEFAULT_TIMESTAMP_RANGE: TimestampRange;
export declare const DEFAULT_OFFSETS: {
    visible: boolean;
    top: number;
    bottom: number;
    right: number;
    left: number;
};
export type SelectedChartIdChangedCB = (chartId: string) => void;
export declare const createMultiChartViewModel: import("../../context/context2").Context<Record<"chartConfig", FullChartCoreConfig>, (initial: MultiChartViewModelState, initialSelectedChartId: string) => Sink<MultiChartViewModel>>;
export {};
