/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AggregationPeriod } from './aggregation.model';
import { Option } from 'fp-ts/Option';
import { eq } from 'fp-ts';
import { Localization } from '../../config/localization/localization';
export interface Timeframe {
    label: string;
    value: number;
}
export interface TimeframePreset {
    timeframe: Timeframe;
    aggregation: AggregationPeriod;
}
export interface TimeframePresetsList {
    presets: Array<TimeframePreset>;
}
export declare const hour: number;
export declare const day: number;
export declare const week: number;
export declare const month: number;
export declare const year: number;
export declare const MAX_PRESETS_NUMBER = 15;
export declare const getValueInDays: (preset: TimeframePreset) => number;
export declare const DEFAULT_TIMEFRAME_PRESET: {
    readonly '1D': {
        readonly timeframe: {
            readonly label: "1D";
            readonly value: number;
        };
        readonly aggregation: {
            readonly duration: 1;
            readonly durationType: "m";
        };
    };
    readonly '1W': {
        readonly timeframe: {
            readonly label: "1W";
            readonly value: number;
        };
        readonly aggregation: {
            readonly duration: 5;
            readonly durationType: "m";
        };
    };
    readonly '1M': {
        readonly timeframe: {
            readonly label: "1M";
            readonly value: number;
        };
        readonly aggregation: {
            readonly duration: 2;
            readonly durationType: "h";
        };
    };
    readonly '1Y': {
        readonly timeframe: {
            readonly label: "1Y";
            readonly value: number;
        };
        readonly aggregation: {
            readonly duration: 1;
            readonly durationType: "d";
        };
    };
    /**
     * Shows all the data passed to chart (from first to last candle) in viewport.
     */
    readonly ALL: {
        readonly timeframe: {
            readonly label: "All";
            readonly value: number;
        };
        readonly aggregation: {
            readonly duration: 1;
            readonly durationType: "mo";
        };
    };
};
export declare const DEFAULT_TIMEFRAME_PRESETS: TimeframePresetsList;
export declare const isDefaultTimeframePreset: (preset: TimeframePreset) => boolean;
export declare const filterAllPreset: (preset: TimeframePreset) => boolean;
export declare const getReadableTimeframeString: (timeframeLabel: string, localization: Localization) => string;
export declare const timeframePeriods: AggregationPeriod[];
export declare const DEFAULT_AGGREGATION_TIMEFRAME_RULE: (aggregation: AggregationPeriod) => Timeframe | null;
export declare const getTimeframeBasedOnPeriod: (period: AggregationPeriod, localization: Localization) => Timeframe[];
export declare const serializeTimeframePreset: (timeframePreset: TimeframePreset) => string;
export declare const timeframePresetEq: eq.Eq<{
    readonly timeframe: Timeframe;
    readonly aggregation: AggregationPeriod;
} | null>;
export declare const timeframePresetArrayEq: eq.Eq<TimeframePreset[]>;
export declare const applyLabelFormatting: (timeframe: Timeframe, aggregation: AggregationPeriod, localization: Localization) => TimeframePreset;
/**
 * Parse full tiemframe preset from serialized timeframe
 * Parses the timeframe and aggregation period in parts
 * if parsing any part will return none the function will also return none
 * 10D-1s => Option<{timeframe: {label,value}, aggregation: {duration, durationType}}>
 * @param timeframeSerialized {string}
 * @doc-tags chart-react,fp,timeframe-presets
 */
export declare const parseTimeframePresetFromString: (serializedTimeframePreset: string, localization: Localization) => Option<TimeframePreset>;
