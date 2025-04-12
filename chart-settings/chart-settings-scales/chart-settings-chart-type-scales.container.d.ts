/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Localization } from '../../../../config/localization/localization';
import { ChartConfiguratorViewModel } from '../../../view-models/chart-configurator.view-model';
import { YAxisConfiguratorViewModel } from '../../../view-models/y-axis/y-axis-configurator.view-model';
import { FullChartCoreConfig } from '../../../../config/chart-config';
/**
 * @deprecated scales tab is not supported, remove if not needed later
 */
export declare const ChartSettingsChartTypeScalesContainer: import("../../../../context/context2").Context<Record<"yAxisConfiguratorViewModel", YAxisConfiguratorViewModel> & Record<"chart", import("../../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"actionsHistoryVM", import("../../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Record<"studiesSettingsViewModel", import("../../../view-models/studies/studies-settings.view-model").StudiesSettingsViewModel> & Record<"multiChartViewModel", import("../../../view-models/multi-chart.view-model").MultiChartViewModel> & Record<"chartDataViewModel", import("../../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"chartConfig", FullChartCoreConfig> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"localization", Localization>, React.FC<Record<string, any>>>;
export default ChartSettingsChartTypeScalesContainer;
