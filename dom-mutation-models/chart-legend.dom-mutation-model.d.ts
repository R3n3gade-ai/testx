/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Sink } from '../../context/sink2';
import { Property } from '../../utils/property.utils';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { ChartCoreSettingsColors, ChartType } from '../model/chart.model';
import { ChartConfiguratorViewModel } from '../view-models/chart-configurator.view-model';
import { ChartLegendSecondarySeriesModel, ChartLegendViewModel } from '../view-models/chart-legend/chart-legend.view-model';
import { ChartTypeViewModel } from '../view-models/chart-type.view-model';
import { ThemeViewModel } from '../view-models/theme.view-model';
import { ChartPaneViewModel } from '../view-models/chart-pane.view-model';
import { DataLoaderVM } from '../view-models/loading/data-loader.vm';
export declare const DROPDOWN_START_Y_POSITION = 70;
export interface ChartLegendDomMutationModel {
    readonly legendContainer: LegendContainerRefHolder;
    readonly time: React.RefObject<HTMLDivElement>;
    readonly open: React.RefObject<HTMLDivElement>;
    readonly close: React.RefObject<HTMLDivElement>;
    readonly high: React.RefObject<HTMLDivElement>;
    readonly low: React.RefObject<HTMLDivElement>;
    readonly volumeMain: React.RefObject<HTMLDivElement>;
    readonly separateVolume: SeparateVolumeRefHolder;
    readonly stackedStudySeries: Property<StudiesRefsHolder>;
    readonly separateStudySeries: Property<StudiesRefsHolder>;
    readonly secondarySeries: Property<SecondarySeriesRefHolder[]>;
    readonly syncState: () => void;
}
export interface LegendContainerRefHolder {
    readonly switcherPositionRef: React.RefObject<HTMLDivElement>;
    readonly containerRef: React.RefObject<HTMLDivElement>;
    readonly setLegendFitsContent: React.MutableRefObject<((fits: boolean) => void) | null>;
    readonly setHeight: React.MutableRefObject<((height: number) => void) | null>;
}
export interface SeparateVolumeRefHolder {
    readonly containerRef: React.RefObject<HTMLDivElement>;
    readonly valueRef: React.RefObject<HTMLDivElement>;
}
export interface StudiesRefsHolder {
    [uuid: string]: {
        readonly ref: React.RefObject<HTMLDivElement>;
        readonly studySeries: StudySeries[];
        readonly paneUUID: string;
    };
}
export interface StudySeries {
    readonly title: string;
    readonly uuid: string;
    readonly lines: StudyLineRefHolder[];
}
export interface StudyLineRefHolder {
    readonly title: string;
    readonly ref: React.RefObject<HTMLDivElement>;
}
export interface SecondarySeriesRefHolder {
    readonly model: ChartLegendSecondarySeriesModel;
    readonly ref: React.RefObject<HTMLDivElement>;
}
export declare const createChartLegendDomMutationModel: import("../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"chartLegendVM", ChartLegendViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"themeViewModel", ThemeViewModel> & Record<"chartTypeViewModel", ChartTypeViewModel> & Record<"chartPaneViewModel", ChartPaneViewModel> & Record<"dataLoaderVM", DataLoaderVM>, Sink<ChartLegendDomMutationModel>>;
export declare const getColorByDirection: (barType: ChartType, colors: ChartCoreSettingsColors, direction: string) => any;
