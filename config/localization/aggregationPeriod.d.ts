/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CustomPeriodsMap } from '../../utils/timeframe-parser';
interface PeriodsDictionary {
    tick: string | {
        long: string;
        short: string;
    };
    range: string | {
        long: string;
        short: string;
    };
    second: string | {
        long: string;
        short: string;
    };
    minute: string | {
        long: string;
        short: string;
    };
    hour: string | {
        long: string;
        short: string;
    };
    day: string | {
        long: string;
        short: string;
    };
    week: string | {
        long: string;
        short: string;
    };
    month: string | {
        long: string;
        short: string;
    };
    year: string | {
        long: string;
        short: string;
    };
    volume: string | {
        long: string;
        short: string;
    };
    customPeriodsMap: CustomPeriodsMap;
    pluralPostfix?: (count: number) => string;
}
export declare const aggregationPeriodDictionary: {
    periods: PeriodsDictionary;
    custom: string;
    customInputPlaceHolder: string;
    a11y_customInputConfirmButton: string;
    a11y_aggregationPeriodDescription: string;
    a11y_deleteAggregationPeriod: string;
    validation_nonexistentCustomPeriod: string;
};
export type AggregationPeriodDictionary = typeof aggregationPeriodDictionary;
export {};
