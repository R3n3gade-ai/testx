/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { generateTradingSessions } from '@dx-private/dxchart5-react/dist/utils/generator/trading-sessions-generator.utils';
const MOCK_TIME_ZONE = 'America/New_York';
/**
 * Creates mock implementation of {@link TradingSessionsProvider}.
 */
export const createMockTradingSessionsProvider = () => {
    const sessionsCache = new Map();
    const timezonesCache = new Map();
    // NOTE: chart requests sessions up to +14 days from Date.now() for a correct work,
    // so make sure you've provided enough sessions.
    const MOCK_TRADING_SESSIONS = generateTradingSessions();
    const requestSession = (tradingHours) => {
        const cached = sessionsCache.get(tradingHours);
        if (cached) {
            return cached;
        }
        const req = new Promise(resolve => setTimeout(() => resolve(MOCK_TRADING_SESSIONS), 1000));
        sessionsCache.set(tradingHours, req);
        return req;
    };
    const requestTimezone = (tradingHours) => {
        const cached = timezonesCache.get(tradingHours);
        if (cached) {
            return cached;
        }
        const req = new Promise(resolve => setTimeout(() => resolve(MOCK_TIME_ZONE), 1000));
        timezonesCache.set(tradingHours, req);
        return req;
    };
    /**
     * `options.tradingHours` and `options.symbol` properties are taken by `dxcharts-react` from the information
     * about `Instrument` you've provided via `SymbolSuggestProvider`.
     *
     * @example
     * options.tradingHours = "NewYorkUS(rt=0300;0=p04000930r09301600a16002000)";
     * options.symbol = "AAPL";
     */
    const getTimeZone = (options) => {
        if (options.tradingHours === undefined) {
            return Promise.resolve('UTC');
        }
        const tradingHours = options.tradingHours;
        return requestTimezone(tradingHours);
    };
    const generateSessions = (from, to, options) => {
        const tradingHours = options.tradingHours;
        return tradingHours
            ? requestSession(tradingHours).then((sessions) => {
                return sessions.filter(session => session.to >= from && session.from <= to);
            })
            : Promise.resolve([]);
    };
    return {
        generateSessions,
        getTimeZone,
    };
};
