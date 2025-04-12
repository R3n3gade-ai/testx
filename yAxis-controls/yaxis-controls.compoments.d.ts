/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartReactConfig } from '../../../config/chart-react-config';
export declare const YAxisControls: import("../../../context/context2").Context<Record<"chart", import("../canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"multiChartViewModel", import("../../view-models/multi-chart.view-model").MultiChartViewModel> & Record<"localization", import("../../../config/localization/localization").Localization> & Record<"chartReactConfig", ChartReactConfig>, React.MemoExoticComponent<() => React.FunctionComponentElement<{
    children?: React.ReactNode;
}>> | React.FunctionComponent<unknown>>;
