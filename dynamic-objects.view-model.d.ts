/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink } from '../../context/sink2';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { ActionsHistoryVM } from './actions/actions-history.vm';
type DynamicObjectId = string | number;
export interface DynamicObjectsViewModel {
    readonly bringToFront: (id: DynamicObjectId) => void;
    readonly sendToBack: (id: DynamicObjectId) => void;
    readonly moveForward: (id: DynamicObjectId) => void;
    readonly moveBackward: (id: DynamicObjectId) => void;
}
export declare const createDynamicObjectsViewModel: import("../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"actionsHistoryVM", ActionsHistoryVM>, Sink<DynamicObjectsViewModel>>;
export {};
