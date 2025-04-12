/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const isDebugModeEnabled: () => boolean;
/**
 * Exposes important chart objects to global scope.
 * Only for development mode.
 * @doc-tags debug
 */
export declare const windowGlobal: {
    multiChartVM: (obj: any) => void;
    chartVMS: (chartId: string, obj: any) => void;
    clearVMS: (chartId: string) => void;
    chartReactAPI: (obj: any) => void;
    chart: (chartId: string, obj: any) => void;
    clearChart: (chartId: string) => void;
    callTracer: (obj: any) => void;
};
