/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { MultiChartLayout } from '../chart/model/layout.model';
import { Either } from 'fp-ts/Either';
/**
 * Tries to migrate layout. Iterates over migrations and applies them 1-by-1.
 * Will migrate only scripts with version > layout version and <= current chart version.
 *
 * @param layout - layout to migrate
 * @doc-tags layout,migration
 */
export declare const tryMigrate: (layout: MultiChartLayout) => Either<Error, MultiChartLayout>;
/**
 * Filters migration scripts which are appropriate for layout migration.
 * Example:
 *
 * 1.0.0  (will not run this migration)
 * 1.1.0  <== layout version
 * 1.2.0    |
 * 2.2.0    |
 * 2.3.0    | appropriate migrations
 * 2.4.0    |
 * 2.4.1    |
 * 2.4.2  <=| current version (run this migration as well)
 * 3.0.0  (will not run this migration)
 * 3.1.0
 * 3.2.0
 *
 * @param layoutVersion - version of layout being migrated
 * @param migrationVersion - version of migration script
 * @param currentVersion
 * @doc-tags layout,migration
 */
export declare const filterMigrations: (layoutVersion: string, migrationVersion: string, currentVersion: string) => boolean;
