/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
// mock providers
import { createMockChartDataProvider } from './mock/mock-chart-data-provider';
import { createMockChartSharingProvider } from './mock/mock-chart-sharing-provider';
import { createMockEventDataProvider } from './mock/mock-events-data-provider';
import { createMockIndicatorsTemplateProvider } from './mock/mock-indicator-template-provider';
import { createMockLayoutProvider } from './mock/mock-layout-provider';
import { createMockNewsDataProvider } from './mock/mock-news-data-provider';
import { createMockOrderProvider } from './mock/mock-order-provider';
import { createMockPositionProvider } from './mock/mock-position-provider';
import { createMockSymbolSuggestProvider } from './mock/mock-symbol-suggest-provider';
import { createMockTradingSessionsProvider } from './mock/mock-trading-sessions-provider';
import { createMockUserDataProvider } from './mock/mock-user-data-provider';
// localstorage providers
export { createLocalStorageIndicatorsTemplateProvider } from './localstorage/localstorage-indicator-template-provider';
export { createLocalStorageLayoutProvider } from './localstorage/localstorage-layout-provider';
export { createLocalStorageUserDataProvider } from './localstorage/localstorage-user-data-provider';
export const CREATE_MOCK_PROVIDERS = () => ({
    chartDataProvider: createMockChartDataProvider(),
    chartSharingProvider: createMockChartSharingProvider(),
    eventsDataProvider: createMockEventDataProvider(),
    indicatorsTemplateProvider: createMockIndicatorsTemplateProvider(),
    layoutProvider: createMockLayoutProvider(),
    newsDataProvider: createMockNewsDataProvider(),
    orderProvider: createMockOrderProvider(),
    positionProvider: createMockPositionProvider(),
    symbolSuggestProvider: createMockSymbolSuggestProvider(),
    tradingSessionsProvider: createMockTradingSessionsProvider(),
    userDataProvider: createMockUserDataProvider(),
});
export { createMockChartDataProvider, createMockChartSharingProvider, createMockEventDataProvider, createMockIndicatorsTemplateProvider, createMockLayoutProvider, createMockNewsDataProvider, createMockOrderProvider, createMockPositionProvider, createMockSymbolSuggestProvider, createMockTradingSessionsProvider, createMockUserDataProvider, };
