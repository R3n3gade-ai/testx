/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
interface CachedFabricReturnType<T extends () => any> {
    create: (id: string, fabric: T) => ReturnType<T>;
    clearById: (id: string) => void;
    clear: () => void;
}
export declare const cachedFabric: <T extends () => any>() => CachedFabricReturnType<T>;
export {};
