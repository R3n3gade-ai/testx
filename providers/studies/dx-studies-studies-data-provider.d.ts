/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Candle } from '@devexperts/dxcharts-lite/dist/chart/model/candle.model';
import { TickValues } from '@dx-private/dxchart5-modules/dist/studies/model/studies.model';
import { StudySeriesConfig } from '@dx-private/dxchart5-modules/dist/studies/model/study-series';
import { StudiesCandle, TradingSessionData, com } from '@dx-private/dxstudies/dxstudies';
import { Subject } from 'rxjs';
import { TradingSession, TradingSessionsProvider } from '../sessions/trading-sessions-provider';
import { ChartModelStudiesProxy } from './chart-model-studies-proxy';
import { StudiesDataProvider } from './studies-data-provider';
type MapToUndefined<T> = {
    [K in keyof T]?: T[K];
};
type DxStudiesConstructor = <T extends MapToUndefined<ConstructorParameters<typeof com.devexperts.dxst.DxStudies>>>(...t: T) => com.devexperts.dxst.DxStudies;
export declare const createStudiesCalculator: Promise<DxStudiesConstructor>;
/**
 * Lazy Loading for dxstudies in chart react.
 * If dxstudies packages wasn't provided - fallback to mock solution.
 * @doc-tags tricky,studies
 **/
export declare const studiesLoaded: Promise<void>;
export declare class DxStudiesDataProvider implements StudiesDataProvider {
    private chartModel;
    private tradingSessionsProvider;
    private tradingHoursProvider;
    private studiesCalculator;
    private fullStudiesCalculator;
    private dxStudyConfigs;
    private dxStudyCache;
    private lastCandleTimeStamp;
    private lastCandleIdx;
    private seriesLengthWithFake;
    studyUpdates: Subject<Record<string, TickValues[]>>;
    studyHistory: Subject<Record<string, TickValues[]>>;
    constructor(chartModel: ChartModelStudiesProxy, tradingSessionsProvider: TradingSessionsProvider, tradingHoursProvider?: () => string | undefined);
    initStudiesCalculators(): Promise<void>;
    applyStudyConfig(config: StudySeriesConfig): void;
    setStudyConfigs(configs: StudySeriesConfig[]): void;
    /**
     * Tricky logic which is intended to optimize studies calculations in case we have only last candle update
     * (or a new candle came)
     * @doc-tags tricky
     */
    updateCalculators(): Promise<void>;
    calculateOnlyLastValues(startIdx: number, addedItemsCount: number): void;
    addFakeCandleIfNeeded(candles: Candle[], addedItemsCount: number): void;
    private applySessions;
}
export declare const toStudiesSession: (session: TradingSession) => TradingSessionData;
export declare const toStudiesCandle: (candle: Candle) => StudiesCandle;
export declare const dxStudiesMock: com.devexperts.dxst.DxStudies;
export {};
