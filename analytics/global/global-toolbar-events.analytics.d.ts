/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Analytics } from '../../../analytics/analytics';
import { MultiChartViewModel } from '../../view-models/multi-chart.view-model';
export declare const createGlobalToolbarAnalyticsEvents: import("../../../context/context2").Context<Record<"analytics", Analytics> & Record<"multiChartViewModel", MultiChartViewModel>, import("../../../utils/adt/sink.utils").Sink1<"Observable", {}>>;
