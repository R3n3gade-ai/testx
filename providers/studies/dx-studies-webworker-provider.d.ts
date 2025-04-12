/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Remote } from 'comlink';
import { ChartWithModules } from '../../chart/components/canvas-chart-renderer/chart-with-modules';
import { TradingSessionsProvider } from '../sessions/trading-sessions-provider';
import { DxStudiesProvidersContainer } from './dx-studies-providers-container';
import { StudiesDataProvider } from './studies-data-provider';
declare global {
    interface Window {
        __CHART_REACT__?: {
            dxStudiesProvidersContainer: Promise<Remote<DxStudiesProvidersContainer>>;
        };
    }
}
export interface DxStudiesWebworkerProviderOptions {
    supressErrors: boolean;
}
export declare const createDxStudiesWebWorkerProvider: (chart: ChartWithModules, tradingSessionsProvider: TradingSessionsProvider, tradingHoursProvider: () => string | undefined, workersDisabled: boolean, options?: DxStudiesWebworkerProviderOptions) => StudiesDataProvider;
