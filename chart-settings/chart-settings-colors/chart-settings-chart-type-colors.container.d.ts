/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Localization } from '../../../../config/localization/localization';
import { ChartConfiguratorViewModel } from '../../../view-models/chart-configurator.view-model';
import { ChartTypeViewModel } from '../../../view-models/chart-type.view-model';
import { ThemeViewModel } from '../../../view-models/theme.view-model';
import { ChartReactConfig } from '../../../../config/chart-react-config';
export declare const ChartSettingsChartTypeColorsContainer: import("../../../../context/context2").Context<Record<"chartTypeViewModel", ChartTypeViewModel> & Record<"localization", Localization> & Record<"themeViewModel", ThemeViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"colorPalette", string[]> & Record<"initialChartTheme", "dark" | "light" | null>, React.FC<Record<string, any>>>;
export default ChartSettingsChartTypeColorsContainer;
