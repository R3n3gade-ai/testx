/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartReactAppProviders } from '@dx-private/dxchart5-react/dist/chart/chart-react-app';
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
export { createLocalStorageIndicatorsTemplateProvider } from './localstorage/localstorage-indicator-template-provider';
export { createLocalStorageLayoutProvider } from './localstorage/localstorage-layout-provider';
export { createLocalStorageUserDataProvider } from './localstorage/localstorage-user-data-provider';
export declare const CREATE_MOCK_PROVIDERS: () => ChartReactAppProviders;
export { createMockChartDataProvider, createMockChartSharingProvider, createMockEventDataProvider, createMockIndicatorsTemplateProvider, createMockLayoutProvider, createMockNewsDataProvider, createMockOrderProvider, createMockPositionProvider, createMockSymbolSuggestProvider, createMockTradingSessionsProvider, createMockUserDataProvider, };
