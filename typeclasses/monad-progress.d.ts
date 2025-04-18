/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
import { HKT, Kind, Kind2, Kind3, URIS, URIS2, URIS3 } from 'fp-ts/HKT';
import { Monad, Monad1, Monad2, Monad2C, Monad3 } from 'fp-ts/Monad';
export interface Progress {
    readonly loaded: number;
    readonly total: Option<number>;
}
export interface MonadProgress<M> extends Monad<M> {
    readonly fromProgress: <A>(progress: Progress) => HKT<M, A>;
}
export interface MonadProgress1<M extends URIS> extends Monad1<M> {
    readonly fromProgress: <A>(progress: Progress) => Kind<M, A>;
}
export interface MonadProgress2<M extends URIS2> extends Monad2<M> {
    readonly fromProgress: <E, A>(progress: Progress) => Kind2<M, E, A>;
}
export interface MonadProgress2C<M extends URIS2, E> extends Monad2C<M, E> {
    readonly fromProgress: <A>(progress: Progress) => Kind2<M, E, A>;
}
export interface MonadProgress3<M extends URIS3> extends Monad3<M> {
    readonly fromProgress: <R, E, A>(progress: Progress) => Kind3<M, R, E, A>;
}
export declare function fromProgressEvent<M extends URIS3>(M: MonadProgress3<M>): <R, E, A>(event: ProgressEvent) => Kind3<M, R, E, A>;
export declare function fromProgressEvent<M extends URIS2, E>(M: MonadProgress2C<M, E>): <A>(event: ProgressEvent) => Kind2<M, E, A>;
export declare function fromProgressEvent<M extends URIS2>(M: MonadProgress2<M>): <E, A>(event: ProgressEvent) => Kind2<M, E, A>;
export declare function fromProgressEvent<M extends URIS>(M: MonadProgress1<M>): <A>(event: ProgressEvent) => Kind<M, A>;
export declare function fromProgressEvent<M>(M: MonadProgress<M>): <A>(event: ProgressEvent) => HKT<M, A>;
