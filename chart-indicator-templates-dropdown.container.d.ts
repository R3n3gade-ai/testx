/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { Localization } from '../../config/localization/localization';
import { IndicatorTemplateViewModel } from '../view-models/studies/indicator-template.view-model';
import { ChartReactConfig } from '../../config/chart-react-config';
export declare const IndicatorTemplatesDropdownContainer: import("../../context/context2").Context<Record<"indicatorsTemplateVM", IndicatorTemplateViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig>, import("react").MemoExoticComponent<() => import("react").FunctionComponentElement<{
    children?: import("react").ReactNode;
}>> | import("react").FunctionComponent<Record<string, any>>>;
