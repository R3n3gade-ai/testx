/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartReactConfig } from '../../config/chart-react-config';
export declare const TradingContainer: import("../../context/context2").Context<Record<"orderEntryVM", import("../view-models/trading/order-entry.view-model").OrderEntryViewModel> & Record<"tradingVM", import("../view-models/trading/trading.view-model").TradingViewModel> & Record<"localization", import("../../config/localization/localization").Localization> & Record<"yAxisConfiguratorViewModel", import("../view-models/y-axis/y-axis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"tradingCoreVM", import("../view-models/trading/trading-core.view-model").TradingCoreViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"chartConfiguratorViewModel", import("../view-models/chart-configurator.view-model").ChartConfiguratorViewModel>, import("react").MemoExoticComponent<() => import("react").FunctionComponentElement<{
    children?: import("react").ReactNode;
}>> | import("react").FunctionComponent<Record<string, any>>>;
