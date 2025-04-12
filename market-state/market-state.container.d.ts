/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { MarketStateViewModel } from '../../view-models/market-state.view-model';
import { TimeZoneViewModel } from '../../view-models/time-zone.view-model';
import { Localization } from '../../../config/localization/localization';
import { ChartDataViewModel } from '../../view-models/data/chart-data.view-model';
export declare const MarketStateContainer: import("../../../context/context2").Context<Record<"marketStateViewModel", MarketStateViewModel> & Record<"timeZoneViewModel", TimeZoneViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"localization", Localization>, React.FC<Record<string, any>>>;
