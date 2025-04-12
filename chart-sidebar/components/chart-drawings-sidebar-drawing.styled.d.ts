/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export declare const AddToFavoriteButtonStyled: import("styled-components").StyledComponent<"div", any, {
    disabled: boolean | undefined;
}, never>;
export declare const RemoveFromFavoriteButtonStyled: import("styled-components").StyledComponent<"div", any, {
    disabled: boolean | undefined;
}, never>;
interface DrawingsSidebarBTWStyledProps {
    showFavoritesOnHoverOnly?: boolean;
}
export declare const DrawingsSidebarButtonWithTooltipStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<Omit<import("./chart-drawings-sidebar-button-with-tooltip.component").DrawingsSidebarButtonWithTooltipProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>>, any, DrawingsSidebarBTWStyledProps, never>;
export {};
