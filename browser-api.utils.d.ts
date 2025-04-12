/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const waitIdle: () => Promise<unknown>;
export declare const isReqIdleSupported: boolean;
export declare function isSafari(): boolean;
export declare const isBrowser: boolean;
declare global {
    interface Window {
        safari?: {
            pushNotification?: object;
        };
    }
}
