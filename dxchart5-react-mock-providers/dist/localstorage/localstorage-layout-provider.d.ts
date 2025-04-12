/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LayoutProvider } from '@dx-private/dxchart5-react/dist/providers/layout-provider';
interface LSLayoutProviderOptions {
    /**
     * timestamp in milliseconds when the layouts should be removed
     */
    expirationPeriod: number;
}
/**
 * Creates a {@link LayoutProvider} that stores {@link ChartLayoutData} in {@link localStorage}.
 */
export declare const createLocalStorageLayoutProvider: (storageKey?: string, options?: LSLayoutProviderOptions) => LayoutProvider;
export {};
