type Nullable<T> = T | null | undefined
export declare class DxStudies<T extends CandleDataItem> {
    constructor(maxElements: number, candles: Array<T>);
    get dataHolder(): any/* CandleDataStore<T> */;
    set dataHolder(value: any/* CandleDataStore<T> */);
    createStudy(id: string, params: Array<StudyParam>): Study;
    addCandleItem(item: T): void;
    addCandleItems(items: Array<T>): void;
    setTradingSessions(sessions: Array<TradingSessionData>): void;
    setETHSessions(sessions: Array<TradingSessionData>): void;
    setTimeZone(timeZone: string): void;
    setCandleAggregation(aggregation: number): void;
}
export declare interface CandleDataItem extends TradeDataItem {
    readonly isVisible: boolean;
    readonly open: number;
    readonly high: number;
    readonly low: number;
    readonly close: number;
    readonly volume: number;
    readonly impVolatility: Nullable<number>;
    readonly vwap: Nullable<number>;
    time: number;
    readonly __doNotUseOrImplementIt: {
        readonly "com.devexperts.dxst.api.CandleDataItem": unique symbol;
    } & TradeDataItem["__doNotUseOrImplementIt"];
}
export declare interface IFunction /* extends ChangeListener */ {
    calculateAt(index: number): number;
    readonly childFunctions: any/* Collection<IFunction> */;
    readonly ownPastOffset: number;
    readonly prefetchSize: number;
    readonly __doNotUseOrImplementIt: {
        readonly "com.devexperts.dxst.api.IFunction": unique symbol;
    };
}
export declare class Study /* implements ChangeListener */ {
    constructor(lineFunctions: any/* List<IFunction> */, dataItems: any/* DataItemsView<UnknownType *> */, pastOffset: number, expansionSize: number, prefetchSize: number, aggregationType: any/* AggregationTypeEnum */, isOnlyLastAggregatedPeriod: boolean);
    get pastOffset(): number;
    get expansionSize(): number;
    get prefetchSize(): number;
    get aggregationType(): any/* AggregationTypeEnum */;
    get isOnlyLastAggregatedPeriod(): boolean;
    get linesNumber(): number;
    getLine(index: number): IFunction;
    calculateAll(): Array<Nullable<Float64Array>>;
    calculateAt(index: number): Float64Array;
    setCalculationOffset(offset: number): void;
    dispose(): void;
    static get Companion(): {
        maxValue(functions: any/* List<IFunction> */, calculator: (p0: IFunction) => number): number;
        getOverallPastOffset(_function: IFunction): number;
        create(builder: any/* StudyBuilder */, dataItems: any/* TradeDataHolder<TradeDataItem> */, params: any/* Map<string, any> */): Study;
    };
}
export declare class StudyParam {
    constructor(key: string, value: any);
    get key(): string;
    get value(): any;
    set value(value: any);
    static get Companion(): {
        of(key: string, value: any): StudyParam;
    };
}
export declare interface TradeDataItem {
    readonly open: number;
    readonly high: number;
    readonly low: number;
    readonly close: number;
    readonly volume: number;
    readonly impVolatility: Nullable<number>;
    readonly vwap: Nullable<number>;
    time: number;
    readonly __doNotUseOrImplementIt: {
        readonly "com.devexperts.dxst.api.TradeDataItem": unique symbol;
    };
}
export declare interface TradingSessionData {
    readonly from: number;
    readonly to: number;
    readonly high: Nullable<number>;
    readonly low: Nullable<number>;
    readonly sessionType: string;
    readonly __doNotUseOrImplementIt: {
        readonly "com.devexperts.dxst.api.TradingSessionData": unique symbol;
    };
}