/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartTypesConfig } from './model/chart.model';
import { ChartReactConfig } from '../config/chart-react-config';
import { Analytics } from '../analytics/analytics';
import { ChartsAmount } from './model/multichart.model';
import { ChartAppPalette } from '../config/theme/chart-palette';
/**
 * Default chart types config.
 * @doc-tags chart-react,default-config
 */
export declare const DEFAULT_CHART_TYPES_CONFIG: ChartTypesConfig;
/**
 * Default aggregation period.
 * @doc-tags chart-react,default-config
 */
export declare const DEFAULT_AGGREGATION_PERIOD: import("./model/aggregation.model").AggregationPeriod;
/**
 * Default list of aggregation periods. Will be applied if no user data provided.
 * @doc-tags chart-react,default-config
 */
export declare const DEFAULT_AGGREGATION_PERIODS_LIST: import("./model/aggregation.model").AggregationPeriod[];
/**
 * Default chart react palette object.
 * @doc-tags chart-react,default-config
 */
export declare const DEFAULT_PALETTE: ChartAppPalette;
/**
 * Default theme.
 * @doc-tags chart-react,default-config
 */
export declare const DEFAULT_THEME = "dark";
/**
 * Default maximum allowed charts amount
 * @doc-tags chart-react,default-config
 */
export declare const DEFAULT_CHARTS_AMOUNT: ChartsAmount;
export interface ChartReactContext {
    rootElement: HTMLDivElement;
    showPopupsOutside: boolean;
    showButtonsTooltip: boolean;
    isMobile: boolean;
    rtl: boolean;
    config: ChartReactConfig;
    analytics: Analytics;
    containerClassName: string;
}
export declare const ChartReactAppContext: import("react").Context<ChartReactContext>;
