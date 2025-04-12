/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { mulberry32 } from '@dx-private/dxchart5-react/dist/utils/generator/random';
import { addDays, format } from 'date-fns';
const random = mulberry32(4596423324);
const MOCK_EVENTS = [
    {
        kind: 'earnings',
        basic: parseFloat((random() * 8).toFixed(2)),
        diluted: parseFloat((random() * 8).toFixed(2)),
        timestamp: addDays(Date.now(), -1).getTime(),
        periodEnding: addDays(Date.now(), -1).getTime(),
    },
    {
        kind: 'dividends',
        gross: `${(random() * 3).toFixed(2)}`,
        timestamp: addDays(Date.now(), -2).getTime(),
    },
    {
        kind: 'splits',
        splitFrom: 1,
        splitTo: 4,
        timestamp: addDays(Date.now(), -3).getTime(),
    },
    {
        kind: 'conference-calls',
        referencePeriod: format(addDays(Date.now(), -4).getTime(), 'QQQ yyyy'),
        eventType: 'Earning',
        timestamp: addDays(Date.now(), -4).getTime(),
    },
];
/**
 * Creates mock implementation of {@link EventsDataProvider}.
 */
export const createMockEventDataProvider = () => {
    const requestEventsData = () => Promise.resolve({ events: MOCK_EVENTS });
    return {
        requestEventsData,
    };
};
