/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartDrawingViewModel } from '../view-models/drawings/drawing.view-model';
import { Localization } from '../../config/localization/localization';
import { ChartReactConfig } from '../../config/chart-react-config';
export declare const DrawingsSelectorContainer: import("../../context/context2").Context<Record<"drawingViewModel", ChartDrawingViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig>, React.FC<Record<string, any>>>;
