/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Analytics } from '../../../analytics/analytics';
import { UserDataViewModel } from '../../view-models/user-data.view-model';
export declare const createGlobalDrawingsAnalyticsEvents: import("../../../context/context2").Context<Record<"analytics", Analytics> & Record<"userDataViewModel", UserDataViewModel>, import("../../../utils/adt/sink.utils").Sink1<"Observable", {}>>;
