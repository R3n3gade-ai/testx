/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { CKMenuItemProps } from '../../../chart-kit/Menu/MenuItem.component';
interface YAxisPopoverMenuItemStyledProps extends CKMenuItemProps {
    disabled?: boolean;
}
interface YAxisPopoverMenuItemContentStyledProps {
    disabled?: boolean;
}
export declare const YAxisPopoverMenuItemStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<CKMenuItemProps & import("react").RefAttributes<HTMLLIElement>>>, any, YAxisPopoverMenuItemStyledProps, never>;
export declare const YAxisPopoverMenuItemContentStyled: import("styled-components").StyledComponent<"div", any, YAxisPopoverMenuItemContentStyledProps, never>;
export declare const YAxisPopoverMenuItemContentTextStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const YAxisPopoverMenuItemContentTextSubStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const YAxisPopoverMenuItemLabelsAndLinesStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<CKMenuItemProps & import("react").RefAttributes<HTMLLIElement>>>, any, YAxisPopoverMenuItemStyledProps, never>;
export declare const YAxisPopoverMenuItemContentIconStyled: import("styled-components").StyledComponent<"div", any, YAxisPopoverMenuItemContentStyledProps, never>;
export declare const YAxisPopoverMoveScaleLabelItem: import("styled-components").StyledComponent<"div", any, {}, never>;
interface YAxisMainPopoverAnchorElementProps {
    readonly xPosition: number;
    readonly yPosition: number;
}
export declare const YAxisMainPopoverMenuContainerStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const YAxisMainPopoverAnchorElement: import("styled-components").StyledComponent<"div", any, YAxisMainPopoverAnchorElementProps, never>;
export declare const YAxisMainPopoverMainSectionStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const YAxisMainPopoverMenuItemContentArrowIconStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const YAxisMainPopoverDivider: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const YAxisMainSettingsItemLabelsAndLinesStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
