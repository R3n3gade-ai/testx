/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DataLoaderState } from '../../view-models/loading/data-loader.vm';
import { ChartData } from '../../view-models/data/chart-data.view-model';
interface ChartContainerLoaderProps {
    readonly containerRef: React.RefObject<HTMLDivElement>;
    readonly loaderState: DataLoaderState;
    readonly chartData: ChartData[];
    readonly onClick: () => void;
}
type ChartContainerDataLoaderStateStatus = 'resolved' | 'dataLoading' | 'noDataLoading' | 'rejected';
export interface ChartContainerDataLoaderState {
    status: ChartContainerDataLoaderStateStatus;
    message: string;
}
export declare const ChartContainerWithLoader: React.NamedExoticComponent<React.PropsWithChildren<ChartContainerLoaderProps>>;
export {};
