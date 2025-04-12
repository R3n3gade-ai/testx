/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { UserDataProvider } from '@dx-private/dxchart5-react/dist/providers/user-data-provider';
interface LSUserDataProviderOptions {
    /**
     * timestamp in milliseconds when the layouts should be removed
     */
    expirationPeriod: number;
}
/**
 * Creates a {@link UserDataProvider} that stores {@link UserData} in {@link localStorage}.
 */
export declare const createLocalStorageUserDataProvider: (udLSKey?: string, options?: LSUserDataProviderOptions) => UserDataProvider;
export {};
