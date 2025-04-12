/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AggregationPeriod } from '../chart/model/aggregation.model';
import { ChartDataOptions } from '../providers/chart-data-provider';
import { ChartLayoutData } from '../providers/layout-provider';
export interface DataRequest {
    symbol: string;
    aggregation: AggregationPeriod;
    options: ChartDataOptions;
}
/**
 * You can use this function for prefetch chart data optimization on initial loading.
 * The request to data provider is made only after chart initialization (1-2 seconds),
 * so in this case you might want to request data from server in advance.
 * However, your data provider must implement caching mechanism, because when the chart will be initialized
 * it will call the data provider for the data which should be already cached.
 * @usage example:
 * const requests = extractDataRequests(layout)
 * requests.forEach(r => data.requestHistoryData(r.symbol, r.aggregation, r.options)
 * returns array of data requests for the current layout
 * @param layout - chart react widget layout which is typically supplied to chart's layout provider
 */
export declare const extractDataRequests: (layout: ChartLayoutData) => DataRequest[];
