/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
interface ChartSettingsToggleSubsectionProps {
    readonly isOpened: boolean;
    readonly children: React.ReactNode;
    readonly overridenStyles?: React.CSSProperties;
}
export declare const ChartSettingsToggleSubsectionAnimation: React.MemoExoticComponent<(props: ChartSettingsToggleSubsectionProps) => React.JSX.Element>;
export {};
