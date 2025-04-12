/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
import { Observable } from 'rxjs';
import { AggregationPeriod } from '../chart/model/aggregation.model';
export interface ChartCandleData {
    id?: string;
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    impVolatility?: number;
    vwap?: number;
    sequence?: number;
}
export interface ServiceData {
    prevDayClosePrice?: number;
    prePostMarketClose?: number;
    bid?: number;
    ask?: number;
}
export interface ServiceDataProvider {
    subscribeServiceData(symbol: string, subscribeCallback: (data: ServiceData) => void): void;
    unsubscribeServiceData(symbol: string): void;
}
export interface ChartDataOptions {
    extendedHours?: boolean;
    priceType?: PriceType;
    /**
     * Candles' timestamps alignment
     */
    candleAlignment?: CandleAlignment;
    /**
     * Might be useful when requesting range bars
     */
    priceIncrement?: number;
}
export declare const priceType: readonly ["last", "mark", "bid", "ask"];
export type PriceType = (typeof priceType)[number];
export declare function parsePriceTypeFromStringSafe(str?: string): Option<PriceType>;
export declare const candleAlignment: readonly ["session_start", "midnight"];
export type CandleAlignment = (typeof candleAlignment)[number];
export declare function parseCandleAlignmentFromStringSafe(str?: string): Option<CandleAlignment>;
/**
 * Candles data provider
 */
export interface CandleDataProvider {
    /**
     * There might be 3 possible cases:
     *
     * 1. Initial data request when left bound of viewport somewhere in the history data and right bound at current candle tick.
     * In this situation `requestHistoryData` method will provide only `fromTime` parameter (that's a base case for initial viewport).
     * In other words `fromTime` will point somewhere on the left bound of viewport.
     * That means that in this case you should provide history data AT LEAST from `fromTime` to right now, the time when request were made.
     * BUT you can give more history data if you want.
     *
     * 2. lnitial data request when left and right bound of viewport somewhere in the history data.
     * This can happen when user for example reloads the page when their viewport somewhere in the history data.
     * In this situation `requestHistoryData` will provide only `fromTime` parameter too.
     * It means that even in this case you should provide all the history data from `fromTime` to right now, the time when request were made.
     * That's pretty much the same case as №1.
     *
     * 3. Lazy load of candles, that are on the left to timeline, i.e older history data.
     * On initial load you can give chart any amount of candles you like, it might be 100 or 1000, doesn't matter.
     * Depends on you. This means that when we scroll to the left to older data, we will have as much candles as you provided.
     * When we will reach the oldest history candle, chart will fire `requestHistoryData` to request even older data, i.e lazy load.
     * In this situation `requestHistoryData` will only provide `toTime`.
     * Why this way? Because again, you can give chart any amount of data you want, so there's no point in `fromTime` parameter.
     * You may not give any data in the response - this would mean that there's no history data left.
     */
    requestHistoryData(symbol: string, aggregation: AggregationPeriod, 
    /**
     * `fromTime` and `toTime` are candles timestamps, that simply reflect the current state of the chart.
     *	Therefore, you can either use the current state of the chart to calculate the necessary query parameters, or completely ignore them.

     * `fromTime` is an oldest candle's timestamp which should be data get from, `toTime` is the newest (usually `toTime` candle equals the oldest visible candle)
     */
    options?: {
        fromTime?: number;
        toTime?: number;
    } & ChartDataOptions, 
    /**
     * !!! WARNING !!!
     * This function updates the whole instrument's history data
     */
    updateCallback?: (data: ChartCandleData[]) => void, chartId?: string): Promise<ChartCandleData[]>;
    subscribeCandles(symbol: string, aggregation: AggregationPeriod, subscriptionId: string, subscribeCallback: (data: ChartCandleData[]) => void, options?: ChartDataOptions, chartId?: string): void;
    /**
     * Unsubscribe is called when symbol, aggregation or options are changed
     * @param subscriptionId
     */
    unsubscribeCandles(subscriptionId: string): void;
}
/**
 * Main data provider. Provides historical candles, last candle updates, quotes, etc.
 */
export interface ChartDataProvider extends CandleDataProvider, ServiceDataProvider {
}
/**
 * Internal provider, for internal usage only (!).
 */
export interface InternalChartDataProvider extends ChartDataProvider {
    observeSymbolChanged(): Observable<string>;
    observeSymbolCandleUpdated(): Observable<SymbolCandleUpdate>;
    observeHistoryDataUpdated(): Observable<Record<string, ChartCandleData[]>>;
    fireLastCandleUpdate(candle: ChartCandleData): void;
}
export interface SymbolCandleUpdate {
    symbol: string;
    candle: ChartCandleData;
}
