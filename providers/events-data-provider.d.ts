/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface EventsData {
    events: Event[];
}
export interface EarningsEvent {
    kind: 'earnings';
    basic: number;
    diluted: number;
    timestamp: number;
    periodEnding: number;
}
export interface DividendsEvent {
    kind: 'dividends';
    gross: string;
    timestamp: number;
}
export interface SplitsEvent {
    kind: 'splits';
    splitFrom: number;
    splitTo: number;
    timestamp: number;
}
export interface ConferenceCallEvent {
    kind: 'conference-calls';
    timestamp: number;
    referencePeriod: string;
    eventType: string;
}
export type Event = EarningsEvent | DividendsEvent | SplitsEvent | ConferenceCallEvent;
export interface EventsDataProvider {
    /**
     * Returns events data for a symbol
     * @param symbol - symbol to get {@link EventsData} for
     * @note will be called by `dxcharts-react` on instrument init/change to retrieve available {@link EventsData}.
     */
    requestEventsData(symbol: string): Promise<EventsData>;
}
