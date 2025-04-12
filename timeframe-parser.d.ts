/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AggregationPeriod, AggregationPeriodDurationType } from '../chart/model/aggregation.model';
type AggregationPeriodDurationTypeMap = Record<AggregationPeriodDurationType, string[]>;
/**
 * CustomPeriodsMap interface defines how to parse custom timeframes.
 */
export interface CustomPeriodsMap {
    /**
     * To add new type, please provide object with key as type and value as array of valid strings for this type.
     * Example:
     *   {
     *     types: {
     *       y: ['y', 'Y', 'year'] // would parse strings like '1 year' or '1Y' or 'year' into 'y' type
     *     }
     *   }
     */
    types: AggregationPeriodDurationTypeMap;
    numberWords: string[];
}
export declare const parsePeriod: (input: string, customPeriodsMap: CustomPeriodsMap) => AggregationPeriod | undefined;
export {};
