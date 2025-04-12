/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FlattenSimpleInterpolation } from 'styled-components';
import { ChartContainerDataLoaderState } from './chart-container-loader.component';
interface ChartContainerWithLoaderProps {
    readonly loaderState: ChartContainerDataLoaderState;
}
export declare const ChartContainerWithLoaderStyled: import("styled-components").StyledComponent<"div", any, ChartContainerWithLoaderProps, never>;
export declare const applyChartContainerLoaderStyles: (loaderState: ChartContainerDataLoaderState) => FlattenSimpleInterpolation;
export {};
