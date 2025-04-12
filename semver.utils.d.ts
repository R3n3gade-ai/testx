/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface SemanticVersionParts {
    MAJOR: number;
    MINOR: number;
    PATCH: number;
    PRERELEASE?: string;
    BUILD?: string;
}
export interface SemanticVersion extends SemanticVersionParts {
    VERSION: string;
}
export declare function semverCmp(a: string, b: string): 0 | 1 | -1;
export declare function parseSemverParts(version: string): SemanticVersionParts;
export declare function parseSemver(version: string): SemanticVersion;
