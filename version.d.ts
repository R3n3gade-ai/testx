/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * @doc-tags ci
 */
export declare const CHART_SEMANTIC_VERSION: import("./utils/semver.utils").SemanticVersion;
export declare const CHART_VERSION: string;
declare global {
    interface Window {
        __CHART_VERSION?: string;
    }
}
