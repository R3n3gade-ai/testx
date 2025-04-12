/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AggregationPeriod } from './aggregation.model';
import { ChartReactConfig } from '../../config/chart-react-config';
import { CompareInstrumentConfig } from '../view-models/data/compare-chart.view-model';
import { CandleSeriesModel } from '@devexperts/dxcharts-lite/dist/chart/model/candle-series.model';
import { ChartLegendSecondarySeriesModel } from '../view-models/chart-legend/chart-legend.view-model';
export type LegendMode = 'pinned' | 'floating';
export declare const formatVolumeValue: (volume: number, priceFormatter: (value: number) => string) => string;
export declare const formatTimeValue: (time: number, aggregation: AggregationPeriod, config: ChartReactConfig) => string;
export declare const fromCompareInstrumentToChartLegendSeriesModel: (compareInstrument: CompareInstrumentConfig, series?: CandleSeriesModel) => ChartLegendSecondarySeriesModel;
