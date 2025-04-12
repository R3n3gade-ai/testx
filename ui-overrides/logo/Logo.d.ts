/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartReactAPI } from '../../view-models/api/chart-react-api.view-model';
export interface LogoProps {
    readonly chartReactAPI: ChartReactAPI;
    readonly className: string;
}
export declare const LOGO_ID = "dxcharts_logo_container";
export declare const LogoContainer: React.NamedExoticComponent<Omit<LogoProps, "className">>;
