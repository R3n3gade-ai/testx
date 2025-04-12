/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { CKButtonWithTooltipProps } from '../../../../chart-kit/Button/ButtonWithTooltip';
export declare const DrawingsSidebarBWTIconContainerStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DrawingsSidebarBWTLabelStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
interface DrawingsSidebarButtonStyledProps {
    expanded: boolean;
}
export declare const DrawingsSidebarButtonWithTooltipStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<Omit<CKButtonWithTooltipProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>>, any, CKButtonWithTooltipProps & DrawingsSidebarButtonStyledProps, never>;
export declare const DrawingsSidebarPopoverIWStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../../chart-kit/IconWrapper/IconWrapper.component").IconWrapperProps>, any, {}, never>;
export {};
