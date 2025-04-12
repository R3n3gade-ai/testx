/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartSettings, ChartType } from '../../model/chart.model';
import { MainDataMenuSelectedSeries } from '../../view-models/data/data-menu.vm';
import { PriceType } from '../../../providers/chart-data-provider';
import { OrderData } from '../../model/trading/order.model';
import { ReorderType } from '../right-click-menu/right-click-menu-reorder-btns.component';
export interface DataMenuMainProps {
    readonly settings: ChartSettings;
    readonly selectedSeries: MainDataMenuSelectedSeries;
    readonly onChangeSeriesChartType: (type: ChartType) => void;
    readonly priceTypes: PriceType[];
    readonly onChangePriceType: (type: PriceType) => void;
    readonly onSeriesReorder: (value: ReorderType) => void;
    readonly onCreateOrder: (orderData: OrderData) => void;
    readonly chartTypes: Readonly<Array<ChartType>>;
    readonly onChartTypeClose: () => void;
    readonly onPriceTypeClose: () => void;
    readonly onChangeSeriesColor: (color: string) => void;
    readonly palette: string[];
    readonly reorderButtons?: boolean;
}
export declare const DataMenuMainComponent: React.NamedExoticComponent<DataMenuMainProps>;
