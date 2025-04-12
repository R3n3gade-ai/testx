/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
interface SymbolSuggestPopoverProps {
    noData: boolean;
}
export declare const SymbolSuggestContainerStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SuggestContainerStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SymbolSuggestPopoverStyled: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../../../chart-kit/Popover/Popover.component").CKPopoverProps>>, any, SymbolSuggestPopoverProps, never>;
export declare const SymbolSuggestInputStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<Omit<import("react").PropsWithChildren<import("../../../chart-kit/Input/Input.component").CKInputProps>, "ref"> & import("react").RefAttributes<HTMLDivElement>>>, any, {}, never>;
export {};
