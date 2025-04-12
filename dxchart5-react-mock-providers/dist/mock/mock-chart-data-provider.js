/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { aggregationPeriodToString, periodToMinutes, } from '@dx-private/dxchart5-react/dist/chart/model/aggregation.model';
import { generateCandles } from '@dx-private/dxchart5-react/dist/utils/generator/candle-generator.utils';
import { createPriceDiffGenerator } from '@dx-private/dxchart5-react/dist/utils/last-candle-price-generator';
import { hashCode } from '@devexperts/dxcharts-lite/dist/chart/utils/string.utils';
const NUMBER_OF_CANDLES = 500;
/**
 * Creates mock implementation of {@link ChartDataProvider}.
 */
export const createMockChartDataProvider = () => {
    //#region candles
    // First of all we should prepare the mock candles data.
    // To speed up that step we can use `generateCandles` utility from `dxchart5-react`.
    // `generateMockData` function will generate new candles data for a given symbol/aggregation pair.
    const generateMockData = (symbol, aggregation, fromTime, toTime) => generateCandles({
        period: periodToMinutes(aggregation) * 60 * 1000,
        randomSeed: hashCode(symbol) + hashCode(aggregationPeriodToString(aggregation)),
        startTimestamp: fromTime,
        endTimestamp: toTime,
        quantity: 500,
        startPrice: 50,
        candleSize: 1,
        candleDiversity: 4,
        highLowSize: 0.2,
        highLowDiversity: 2,
        volumeSize: 10000,
        volumeDiversity: 50000,
    }).map(candle => ({
        time: candle.timestamp,
        open: candle.open,
        high: candle.hi,
        low: candle.lo,
        close: candle.close,
        volume: candle.volume,
        impVolatility: 0,
        vwap: 0,
    }));
    // we store last history candles to use them as reference values for
    // last candle real time updates generator
    const lastHistoryCandles = new Map();
    // mock global brokerage time to synchronize instruments last candle tick
    let globalClockInSeconds = 0;
    setInterval(() => {
        globalClockInSeconds += 1;
    }, 1000);
    // logic to mimic last candle real time tick with random generator
    const lastCandleSubscriptions = new Map();
    const priceDiffGenerator = createPriceDiffGenerator();
    const startLastCandleUpdateTicker = (symbol, aggregation, subscriptionId, callback) => {
        const aggregationInSeconds = periodToMinutes(aggregation) * 60;
        lastCandleSubscriptions.set(subscriptionId, setInterval(() => {
            var _a;
            const lastCandle = lastHistoryCandles.get(symbol);
            if (!lastCandle) {
                console.warn('No last candle for symbol ', symbol, ' found');
                return;
            }
            const priceDiff = (_a = priceDiffGenerator.next().value) !== null && _a !== void 0 ? _a : 1;
            const lastCandleUpdate = Object.assign(Object.assign({}, lastCandle), { close: lastCandle.close * priceDiff });
            // # logic to add candle to data series when aggregation period exceeds
            // the thing is, that `dxcharts-react` will automatically add new candle to the end of data series on chart
            // if the timestamp of new last candle tick is bigger then it was on the previous last candle tick
            // and difference in time is >= selected aggregation period
            if (globalClockInSeconds % aggregationInSeconds === 0) {
                lastCandleUpdate.time = lastCandleUpdate.time + aggregationInSeconds * 1000;
            }
            lastHistoryCandles.set(symbol, lastCandleUpdate);
            callback([lastCandleUpdate]);
        }, 1000));
    };
    /**
     * `requestHistoryData` - `dxcharts-react` requests the historical candles data for a given
     * symbol/aggregation/etc. combination + handles lazy load requests
     *
     * @see compare charts are handled here too, for example:
     * Imagine AAPL as main instrument and GOOG as compare instrument are selected on chart.
     * Because of this `requestHistoryData` will be called 2 times - first for AAPL, then for GOOG.
     * Order of call is the same as the order of instruments added, where main instrument is *always* `first`.
     *
     * @see with multicharts it is still the same.
     * `requestHistoryData` will be called in order of charts, for example:
     * on 1st chart AAPL and GOOG are selected, on 2nd chart AMD and NVDA are selected.
     * Because of that first `requestHistoryData` will be called first for 1st chart for AAPL and GOOG,
     * secondly `requestHistoryData` will be called for 2nd chart for AMD and NVDA
     */
    const requestHistoryData = (symbol, aggregation, 
    /**
     * `fromTime` and `toTime` are candles timestamps, that simply reflect the current state of the chart.
     *
     * `extendedHours` is a flag that indicates whether candles from NOT REGULAR trading session required in addition to ones from REGULAR.
     *
     * `priceType` is a flag that tells which price ('bid' | 'ask' | 'last' | 'mark') should be used for candles.
     *
     * `priceIncrement` is a flag that describes which minimum price change should be reflected in candles data.
     */
    options) => {
        // when `toTime` option is provided - it is indicator for lazy loading functionality
        // `toTime` means that you should provide candles data, where the rightmost candle will be <= `toTime`.
        let toTime = options === null || options === void 0 ? void 0 : options.toTime;
        // `fromTime` often is not provided, because you can give any amount of candles data you want,
        // but if provided - it means that user requests data *at least* from `fromTime`, i.e leftmost candle should be <= `fromTime`.
        let fromTime = options === null || options === void 0 ? void 0 : options.fromTime;
        if (!toTime) {
            toTime = Date.now();
        }
        if (!fromTime) {
            fromTime = toTime - periodToMinutes(aggregation) * 60 * 1000 * NUMBER_OF_CANDLES;
        }
        const data = generateMockData(symbol, aggregation, fromTime, toTime);
        if (data.length > 0) {
            lastHistoryCandles.set(symbol, data[data.length - 1]);
        }
        return new Promise(resolve => {
            setTimeout(() => resolve(data), 3000);
        });
    };
    /**
     * `subscribeCandles` - `dxcharts-react` requests the last candle updates data for a particular
     * instrument/aggregation/.etc combination.
     *
     * updates should be passed to the `callback` each time the last candle data is updated.
     *
     * @see `subscriptionId` helps to identify the combination subscription.
     * `subscriptionId` arg can be useful to control multiple instrument's
     * last candle updates at a time
     *
     * @see compare charts are handled here too, similar to `requestHistoryData`.
     *
     * @see multicharts are handled here exactly the same way as for `requestHistoryData`.
     */
    const subscribeCandles = (symbol, aggregation, subscriptionId, callback) => {
        startLastCandleUpdateTicker(symbol, aggregation, subscriptionId, callback);
    };
    /**
     * `unsubscribeCandles` - `dxcharts-react` fires that method when it no longer needs the last candle updates
     * for a given `subscriptionId`
     * @see `subscriptionId` is an `id` that was provided by {@link subscribeCandles} method
     */
    const unsubscribeCandles = (subscriptionId) => {
        const intervalId = lastCandleSubscriptions.get(subscriptionId);
        if (!intervalId) {
            console.warn('No last candle generator found for subscriptionId ', subscriptionId);
            return;
        }
        clearInterval(intervalId);
        lastCandleSubscriptions.delete(subscriptionId);
    };
    //#endregion candles
    //#region service data
    const serviceDataSubscriptions = new Map();
    /**
     * Service data is a data that provides some additional data to candles data,
     * like bid/ask prices, prevDayClosePrice etc.
     */
    const subscribeServiceData = (symbol, callback) => {
        serviceDataSubscriptions.set(symbol, setInterval(() => {
            const lastCandle = lastHistoryCandles.get(symbol);
            if (!lastCandle) {
                return;
            }
            callback({
                prevDayClosePrice: lastCandle.open / 2,
                prePostMarketClose: lastCandle.open / 2,
                bid: lastCandle.close + lastCandle.close * 0.1,
                ask: lastCandle.close - lastCandle.close * 0.1,
            });
        }, 1000));
    };
    const unsubscribeServiceData = (symbol) => {
        const intervalId = serviceDataSubscriptions.get(symbol);
        if (!intervalId) {
            console.warn('No service data found for symbol ', symbol);
            return;
        }
        clearInterval(intervalId);
        serviceDataSubscriptions.delete(symbol);
    };
    //#endregion service data
    return {
        requestHistoryData,
        subscribeCandles,
        unsubscribeCandles,
        subscribeServiceData,
        unsubscribeServiceData,
    };
};
