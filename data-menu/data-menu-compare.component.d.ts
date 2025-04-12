/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartType } from '../../model/chart.model';
import { CompareDataMenuSelectedSeries } from '../../view-models/data/data-menu.vm';
import { ReorderType } from '../right-click-menu/right-click-menu-reorder-btns.component';
export interface DataMenuCompareProps {
    readonly selectedSeries: CompareDataMenuSelectedSeries;
    readonly onChartTypeClose: () => void;
    readonly palette: string[];
    readonly onChangeSeriesColor: (color: string) => void;
    readonly seriesChartTypes: Readonly<Array<ChartType>>;
    readonly onChangeSeriesChartType: (type: ChartType) => void;
    readonly onSeriesReorder: (reorderType: ReorderType) => void;
    readonly reorderButtons?: boolean;
}
export declare const DataMenuCompareComponent: React.NamedExoticComponent<DataMenuCompareProps>;
