/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DxScriptProvider, DxScriptRunner } from '../dx-script-provider';
import { ChartWithModules } from '../../chart/components/canvas-chart-renderer/chart-with-modules';
import { StudiesDataProvider } from './studies-data-provider';
/**
 * Studies data provider for dxScript.
 */
export declare const createDxScriptStudiesDataProvider: (dxScriptProvider: DxScriptProvider, dxScriptRunner: DxScriptRunner, chart: ChartWithModules) => StudiesDataProvider;
