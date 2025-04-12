/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { GoogleAnalyticsConfig } from './analytics-config';
import { AnalyticsEvent } from './events';
export interface Analytics {
    userId: string;
    logEvent(event: AnalyticsEvent): void;
}
type GADataLayerPushEvent = Record<string, string> & {
    event?: string;
};
interface GADataLayerPushFn {
    (event: GADataLayerPushEvent): number;
}
type GADataLayer = Array<Array<unknown>> & {
    push: GADataLayerPushFn;
};
declare global {
    interface Window {
        dataLayer?: GADataLayer;
    }
}
export declare const createGoogleAnalytics: (config?: GoogleAnalyticsConfig) => Analytics;
export declare const MOCK_ANALYTICS_INSTANCE: Analytics;
export {};
