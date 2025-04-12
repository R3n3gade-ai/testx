/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartConfiguratorViewModel } from '../view-models/chart-configurator.view-model';
import { MultiChartViewModel } from '../view-models/multi-chart.view-model';
import { Localization } from '../../config/localization/localization';
export declare const YAxisTypeControlsContainer: import("../../context/context2").Context<Record<"chart", import("../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"localization", Localization>, import("react").FC<Record<string, any>>>;
