/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { addDays } from 'date-fns';
const MOCK_NEWS_DATA = [
    {
        title: 'News 1',
        timestamp: addDays(Date.now(), -5).getTime(),
        sourceLink: 'https://google.com',
    },
    {
        title: 'News 2',
        timestamp: addDays(Date.now(), -6).getTime(),
        sourceLink: 'https://google.com',
    },
    {
        title: 'News 3',
        timestamp: addDays(Date.now(), -10).getTime(),
        sourceLink: 'https://google.com',
    },
];
/**
 * Creates mock implementation of {@link NewsDataProvider}.
 */
export const createMockNewsDataProvider = () => ({
    requestNews() {
        return Promise.resolve({
            news: MOCK_NEWS_DATA,
        });
    },
});
