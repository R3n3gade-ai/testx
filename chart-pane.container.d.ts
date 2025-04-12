/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { ChartPaneViewModel } from '../view-models/chart-pane.view-model';
import { ChartReactConfig } from '../../config/chart-react-config';
import { ChartDataViewModel } from '../view-models/data/chart-data.view-model';
import { ChartConfiguratorViewModel } from '../view-models/chart-configurator.view-model';
export declare const ChartPaneContainer: import("../../context/context2").Context<Record<"chartPaneViewModel", ChartPaneViewModel> & Record<"chart", ChartWithModules> & Record<"chartReactConfig", ChartReactConfig> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel>, React.FC<Record<string, any>>>;
