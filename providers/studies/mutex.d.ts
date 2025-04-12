/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface Mutex {
    lock: () => void;
    unlock: () => void;
    current: Promise<void>;
    locked: boolean;
    calculateSafe: <T>(fn: () => T) => Promise<T>;
}
export declare const createMutex: () => Mutex;
