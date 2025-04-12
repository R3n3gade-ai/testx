/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { TabTypeWithIcon } from '../components/chart-settings/chart-settings.model';
type OriginalTab = 'ChartGeneralTab' | 'ChartTradingTab' | 'ChartLegendTab' | 'ChartMarketTab' | 'ChartColorsTab' | 'ChartEventsTab' | 'ChartPaddingsTab';
export type TabDeclaration = TabTypeWithIcon | OriginalTab;
export declare const DEFAULT_SETTINGS_TABS_WITH_ICON: Array<TabDeclaration>;
export declare const addCustomSettingsTab: (customTabs: TabDeclaration[], index: number) => TabDeclaration[];
export declare const removeSettingsTab: (tabs: TabDeclaration[], tab: OriginalTab) => TabDeclaration[];
export declare const overrideDefaultTab: (customTabName: string, customDefaultTab: TabDeclaration) => TabDeclaration[];
export {};
