/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { TimeframePresetsViewModel } from '../view-models/timeframe-presets.view-model';
import { StudiesScalesViewModel } from '../view-models/studies/studies-scales.view-model';
export declare const ChartFooterContainer: import("../../context/context2").Context<Record<"timeZoneViewModel", import("../view-models/time-zone.view-model").TimeZoneViewModel> & Record<"chartReactConfig", import("../../config/chart-react-config").ChartReactConfig> & Record<"timeframePresetsViewModel", TimeframePresetsViewModel> & Record<"localization", import("../../config/localization/localization").Localization> & Record<"chart", import("../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"chartConfiguratorViewModel", import("../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"multiChartViewModel", import("../view-models/multi-chart.view-model").MultiChartViewModel> & Record<"drawingGroupsViewModel", import("../view-models/layers/drawing-groups.view-model").DrawingGroupsViewModel> & Record<"chartLayersViewModel", import("../view-models/layers/chart-layers.view-model").ChartLayersViewModel> & Record<"studiesScalesViewModel", StudiesScalesViewModel>, React.FC<Record<string, any>>>;
