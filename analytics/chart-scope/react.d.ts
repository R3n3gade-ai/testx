/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export declare const ChartScopeAnalyticsContext: import("react").Context<{
    drawingsChartScopeAnalyticsEvents: {};
    studiesChartScopeAnalyticsEvents: {};
    toolbarChartScopeAnalyticsEvents: {
        logSelectSnapshotMenuItemEvent: (type: "copy" | "download" | "copyLink" | "share") => void;
    };
    tradingChartScopeAnalyticsEvents: {};
    timeframeChartScopeAnalyticsEvents: {};
}>;
export declare const useChartScopeAnalytics: () => {
    drawingsChartScopeAnalyticsEvents: {};
    studiesChartScopeAnalyticsEvents: {};
    toolbarChartScopeAnalyticsEvents: {
        logSelectSnapshotMenuItemEvent: (type: "copy" | "download" | "copyLink" | "share") => void;
    };
    tradingChartScopeAnalyticsEvents: {};
    timeframeChartScopeAnalyticsEvents: {};
};
