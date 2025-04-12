/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartConfiguratorViewModel } from '../../view-models/chart-configurator.view-model';
export declare const LegendMenuContainer: import("../../../context/context2").Context<Record<"chart", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"chartLegendVM", import("../../view-models/chart-legend/chart-legend.view-model").ChartLegendViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel>, () => import("react").FunctionComponentElement<import("../../components/chart-legend/chart-legend-menu.component").LegendMenuProps>>;
