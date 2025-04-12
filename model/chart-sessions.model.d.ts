/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Candle } from '@devexperts/dxcharts-lite/dist/chart/model/candle.model';
import { TradingSession } from '../../providers/sessions/trading-sessions-provider';
export declare const SESSIONS_TAKE_THRESHOLD_DAYS = 14;
/**
 * This function aligns sessions to candle timestamp taking into account candle period
 * for example if candle time = 100, period = 10 and session.from = 105
 * session.from will be aligned to 100
 * if candle time = 100, period = 10 and session.from = 111
 * session.from won't be changed
 * @param sessions {@interface Session[]}
 * @param candles {@interface Candle[]}
 * @param _period in ms {number}
 */
export declare const alignSessionsToCandles: (sessions: TradingSession[], candles: Candle[], _period?: number) => TradingSession[];
export declare const isTimestampInSession: (timestamp: number, session: TradingSession) => boolean;
