/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingType } from '../chart/model/drawing.model';
import { RecentDrawing } from '../chart/view-models/drawings/drawing.view-model';
import { Position, Widget } from '../chart/view-models/user-data.view-model';
/**
 * !!!DEV_NOTES!!!
 * Properties in this structure should NEVER change
 * to escape migration problems.
 * if you need to alter the existing property somehow
 * you better create a new property (for ex. customPeriods2)
 * with desired data structure
 */
export interface UserData {
    customPeriods: string[];
    customColors: string[];
    favoriteDrawings: DrawingType[];
    recentDrawings: RecentDrawing[];
    isSidebarExpanded: boolean;
    timeframePresets: Array<string>;
    positions: Record<Widget, Position>;
}
/**
 * Provider to store custom user data
 * It's been applied across all charts in the multiChart
 */
export interface UserDataProvider {
    /**
     * Returns custom user data.
     * If no data available, Promise.reject() is also valid return value
     * @returns Promise<UserData | null>
     */
    getUserData(): Promise<UserData | null>;
    /**
     * Updates custom user data
     * @param userData
     * @returns Promise<void>
     */
    setUserData(userData: UserData): Promise<void>;
}
