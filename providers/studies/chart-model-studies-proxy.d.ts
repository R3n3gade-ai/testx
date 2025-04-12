/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { Candle } from '@devexperts/dxcharts-lite/dist/chart/model/candle.model';
import { Timestamp } from '@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';
export declare class ChartModelStudiesProxy {
    private chartModel;
    constructor(chartModel: ChartModel);
    getCandles: () => Candle[];
    getCandlesWithFake: (from?: number | undefined, to?: number | undefined) => Candle[];
    getPeriod: () => number;
    mainCandleSeries: import("@devexperts/dxcharts-lite/dist/chart/model/candle-series.model").CandleSeriesModel;
    candlesSetSubject: import("rxjs").Subject<void>;
    candlesPrependSubject: import("rxjs").Subject<import("@devexperts/dxcharts-lite/dist/chart/components/chart/chart-base.model").PrependedCandlesData>;
    candlesUpdatedSubject: import("rxjs").Subject<void>;
    getCandlesAfter(timestamp: Timestamp): Array<Candle>;
    getFirstCandleTimestamp(): Timestamp;
}
