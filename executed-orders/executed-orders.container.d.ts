/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ExecutedOrdersViewModel } from '../../view-models/trading/executed-orders.view-model';
import { ChartConfiguratorViewModel } from '../../view-models/chart-configurator.view-model';
import { OrderEntryViewModel } from '../../view-models/trading/order-entry.view-model';
export declare const ExecutedOrdersContainer: import("../../../context/context2").Context<Record<"executedOrdersVM", ExecutedOrdersViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"orderEntryVM", OrderEntryViewModel>, import("react").MemoExoticComponent<() => import("react").FunctionComponentElement<import("../../components/executed-orders/hovered-executed-order.component").HoveredExecutedOrderComponentProps> | null>>;
