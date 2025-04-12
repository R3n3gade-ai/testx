/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Double-ended queue data structure.
 * @doc-tags utility
 */
export declare class Deque<T> {
    private data;
    private front;
    private back;
    private size;
    constructor();
    isEmpty(): boolean;
    addFront(value: T): void;
    removeFront(): any;
    peekFront(): any;
    addBack(value: T): void;
    removeBack(): any;
    peekBack(): any;
    getSize(): number;
    clear(): void;
}
