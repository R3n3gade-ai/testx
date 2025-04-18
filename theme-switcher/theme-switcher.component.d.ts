/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Localization } from '../../../config/localization/localization';
import { ThemeType } from '../../model/theme.model';
export interface ThemeSwitcherProps {
    readonly localization: Localization;
    readonly changeTheme: (theme: ThemeType) => void;
    readonly activeTheme: ThemeType;
    readonly className?: string;
}
export declare const ThemeSwitcher: React.MemoExoticComponent<(props: ThemeSwitcherProps) => React.JSX.Element>;
export interface ThemeSwitcherItemProps {
    readonly type: ThemeType;
    readonly isActive: boolean;
    readonly localization: Localization;
    readonly onClick: (type: ThemeType) => void;
}
