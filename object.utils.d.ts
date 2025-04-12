/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { eq, option } from 'fp-ts';
export declare const hasOwnProperty: (v: PropertyKey) => boolean;
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 * @param {*} objA
 * @param {*} objB
 * @returns {boolean}
 */
export declare function shallowEqual(objA: unknown, objB: unknown): boolean;
/**
 * Generates new object with keys mapped with template
 */
export declare function mapKeys<T extends {}>(object: T, template: (key: string) => string): T;
export type PartialKeys<T extends {}, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export declare const isNotNullable: <T>(value: T | null | undefined) => value is T;
export declare const getMapValueByKey: <K>(eq: eq.Eq<K>) => (key: K) => <V>(mapToLookup: Map<K, V>) => option.Option<V>;
export type ValuesOfObject<T extends Record<string, any>> = {
    [K in keyof T]: T[K];
}[keyof T];
export type IsReactEntities<T> = T extends React.ComponentType<any> | React.ReactElement<any> ? T : never;
export type IsHTMLElement<T> = T extends Element ? T : never;
export type IsArray<T> = T extends Array<any> ? T : never;
export type IsFunction<T> = T extends (...args: unknown[]) => unknown ? T : never;
export type DeepPartialOnlyRecord<T> = T extends IsReactEntities<T> | IsHTMLElement<T> | IsArray<T> | IsFunction<T> ? T : T extends Record<string, any> ? {
    [P in keyof T]?: DeepPartialOnlyRecord<T[P]>;
} : T;
