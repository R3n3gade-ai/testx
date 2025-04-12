/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Analytics } from '../../../analytics/analytics';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
export declare const createDrawingsChartScopeAnalyticsEvents: import("../../../context/context2").Context<Record<"analytics", Analytics> & Record<"chart", ChartWithModules>, import("../../../utils/adt/sink.utils").Sink1<"Observable", {}>>;
