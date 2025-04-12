/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference path="../../../typings/@dx-private/dxstudies/dist/dxstudies.d.ts" />
export class DxStudiesDataProvider {
    constructor(chartModel: any, tradingSessionsProvider: any, tradingHoursProvider: any, historyDataCallback: any, updateDataCallback: any);
    studiesCalculator: import("@dx-private/dxstudies/dxstudies").DxStudies;
    fullStudiesCalculator: import("@dx-private/dxstudies/dxstudies").DxStudies;
    dxStudyConfigs: {};
    dxStudyCache: {};
    lastCandleTimeStamp: number;
    lastCandleIdx: number;
    seriesLengthWithFake: number;
    chartModel: null;
    tradingSessionsProvider: null;
    tradingHoursProvider: null;
    historyDataCallback: null;
    updateDataCallback: null;
    candlesWithFake(candles: any): Promise<any>;
    initStudiesCalculators(): Promise<void>;
    /**
     * Tricky logic which is intended to optimize studies calculations in case we have only last candle update
     * (or a new candle came)
     * @doc-tags tricky
     */
    updateCalculators(): Promise<void>;
    calculateOnlyLastValues(startIdx: any, addedItemsCount: any): Promise<void>;
    addFakeCandleIfNeeded(candles: any, addedItemsCount: any): Promise<void>;
    applyStudyConfig(config: any): void;
    setStudyConfigs(configs: any): void;
    applySessions(th: any, candles: any, candlesWithFake: any): Promise<void>;
}
