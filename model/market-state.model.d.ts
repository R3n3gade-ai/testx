/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ToolbarDictionary } from '../../config/localization/toolbar';
export declare const UPDATE_MARKET_STATE_TICK = 10000;
export interface MarketState {
    readonly isTradingActive: boolean;
    readonly timeUntilOpening: {
        value: number;
        text: string;
    };
    readonly tradingHours: {
        from: number;
        to: number;
    };
}
export declare const initialMarketState: MarketState;
/**
 * Formats timestamp to display time left until trading starts
 * Examples:
 *  > 1 day = 36 hours 30 minutes
 *  > 1 hour = 2 hours 10 minutes
 *  > 1 minute and < 1 hour = 30 minutes
 *  > 1 second and < 1 minute = 30 seconds
 * */
export declare const marketStateTimeLeftFormatter: (ms: number, localization: ToolbarDictionary) => string;
export declare const transformTHToReadableString: (tradingHours: MarketState['tradingHours'], timezone: string, localization: ToolbarDictionary) => string;
