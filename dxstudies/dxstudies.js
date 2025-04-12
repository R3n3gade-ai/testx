import {
  o1 as toMutableList,
  n2 as toString,
  u2 as contains,
  k2 as protoOf,
  e1 as listOf,
  u1 as classMeta,
  j3 as VOID,
  l2 as setMetadataFor,
  z2 as Comparator,
  r as DoubleCompanionObject_getInstance,
  w1 as defineProp,
  j2 as objectMeta,
  n1 as toMutableList_0,
  f as LinkedHashSet_init_$Create$,
  a1 as emptyList,
  j1 as sortedWith,
  v2 as equals,
  m as IllegalStateException_init_$Create$,
  r1 as enumEntries,
  u as Unit_getInstance,
  a3 as Enum,
  a2 as interfaceMeta,
  i2 as objectCreate,
  b1 as first,
  x as binarySearch,
  f3 as ensureNotNull,
  b as ArrayList_init_$Create$,
  p1 as toMutableSet,
  g1 as removeAll,
  q1 as toSet,
  l as IllegalArgumentException_init_$Create$,
  e as LinkedHashMap_init_$Create$,
  s1 as arrayIterator,
  n as NullPointerException_init_$Create$,
  s as IntCompanionObject_getInstance,
  y1 as fillArrayVal,
  z as collectionSizeOrDefault,
  a as ArrayList_init_$Create$_0,
  l1 as toDoubleArray,
  e3 as THROW_CCE,
  d1 as listOf_0,
  i as Exception_init_$Create$,
  f1 as mutableListOf,
  v as MutableList,
  c2 as isInterface,
  d as HashMap_init_$Create$,
  i3 as noWhenBranchMatchedException,
  g3 as isFinite,
  d2 as isNumber,
  f2 as numberToDouble,
  r2 as round,
  g2 as numberToInt,
  v1 as compareTo,
  h3 as isNaN_0,
  y as binarySearch_0,
  h1 as setOf,
  o2 as get_E,
  q2 as log,
  b2 as isArray,
  c1 as indexOf,
  i1 as setOf_0,
  h2 as numberToLong,
  m1 as toList,
  k1 as sorted,
  z1 as getNumberHashCode,
  x1 as equals_0,
  p2 as abs,
  c as HashMap_init_$Create$_0,
} from './kotlin-kotlin-stdlib-js-ir.mjs';
import {
  d as System_getInstance,
  a as DatePeriod_init_$Create$,
  k as minus,
  c as LocalDateTime_init_$Create$,
  b as LocalDate_init_$Create$,
  e as Companion_getInstance,
  j as minus_0,
  g as Companion_getInstance_0,
  i as atStartOfDayIn,
  f as Companion_getInstance_1,
  m as toLocalDateTime,
  l as toInstant,
  h as values,
} from './Kotlin-DateTime-library-kotlinx-datetime-js-ir.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
setMetadataFor(DxStudies, 'DxStudies', classMeta);
setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
setMetadataFor(TradeDataItem, 'TradeDataItem', interfaceMeta);
setMetadataFor(CandleDataItem, 'CandleDataItem', interfaceMeta, VOID, [TradeDataItem]);
setMetadataFor(CandleImpl, 'CandleImpl', classMeta, VOID, [CandleDataItem]);
setMetadataFor(Companion, 'Companion', objectMeta);
setMetadataFor(AbstractCandleTradeDataHolder, 'AbstractCandleTradeDataHolder', classMeta);
setMetadataFor(Companion_0, 'Companion', objectMeta);
setMetadataFor(AggregationTypeEnum, 'AggregationTypeEnum', classMeta, Enum);
setMetadataFor(Companion_1, 'Companion', objectMeta);
setMetadataFor(AverageTypeEnum, 'AverageTypeEnum', classMeta, Enum);
setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
setMetadataFor(MergeResult, 'MergeResult', classMeta);
setMetadataFor(Companion_2, 'Companion', objectMeta);
setMetadataFor(CandleTradeDataHolder, 'CandleTradeDataHolder', classMeta, AbstractCandleTradeDataHolder);
setMetadataFor(CandleDataStore, 'CandleDataStore', classMeta, CandleTradeDataHolder);
setMetadataFor(Changes, 'Changes', classMeta);
setMetadataFor(DataItemsView, 'DataItemsView', classMeta);
setMetadataFor(IFunction, 'IFunction', interfaceMeta);
setMetadataFor(Companion_3, 'Companion', objectMeta);
setMetadataFor(PriceFieldEnum, 'PriceFieldEnum', classMeta, Enum);
setMetadataFor(Companion_4, 'Companion', objectMeta);
setMetadataFor(Study, 'Study', classMeta);
setMetadataFor(Companion_5, 'Companion', objectMeta);
setMetadataFor(StudyBuilder, 'StudyBuilder', classMeta);
setMetadataFor(Companion_6, 'Companion', objectMeta);
setMetadataFor(StudyParam, 'StudyParam', classMeta);
setMetadataFor(TradingSessionData, 'TradingSessionData', interfaceMeta);
setMetadataFor(ADX, 'ADX', classMeta, StudyBuilder);
setMetadataFor(Companion_7, 'Companion', objectMeta);
setMetadataFor(ADXR, 'ADXR', classMeta, StudyBuilder);
setMetadataFor(AccelerationDeceleration, 'AccelerationDeceleration', classMeta, StudyBuilder);
setMetadataFor(AccumulationDistribution, 'AccumulationDistribution', classMeta, StudyBuilder);
setMetadataFor(Companion_8, 'Companion', objectMeta);
setMetadataFor(Aroon, 'Aroon', classMeta, StudyBuilder);
setMetadataFor(Companion_9, 'Companion', objectMeta);
setMetadataFor(AroonOscillator, 'AroonOscillator', classMeta, StudyBuilder);
setMetadataFor(AverageTrueRange, 'AverageTrueRange', classMeta, StudyBuilder);
setMetadataFor(AwesomeOscillator, 'AwesomeOscillator', classMeta, StudyBuilder);
setMetadataFor(BollingerBands, 'BollingerBands', classMeta, StudyBuilder);
setMetadataFor(Companion_10, 'Companion', objectMeta);
setMetadataFor(CCI, 'CCI', classMeta, StudyBuilder);
setMetadataFor(Companion_11, 'Companion', objectMeta);
setMetadataFor(CenterOfGravityOscillator, 'CenterOfGravityOscillator', classMeta, StudyBuilder);
setMetadataFor(Companion_12, 'Companion', objectMeta);
setMetadataFor(ChaikinOscillator, 'ChaikinOscillator', classMeta, StudyBuilder);
setMetadataFor(Companion_13, 'Companion', objectMeta);
setMetadataFor(ChaikinVolatility, 'ChaikinVolatility', classMeta, StudyBuilder);
setMetadataFor(ChandeMomentumOscillator, 'ChandeMomentumOscillator', classMeta, StudyBuilder);
setMetadataFor(CommoditySelection, 'CommoditySelection', classMeta, StudyBuilder);
setMetadataFor(Comparative, 'Comparative', classMeta, StudyBuilder);
setMetadataFor(DEMA, 'DEMA', classMeta, StudyBuilder);
setMetadataFor(DMI, 'DMI', classMeta, StudyBuilder);
setMetadataFor(Companion_14, 'Companion', objectMeta);
setMetadataFor(DayOpenClose, 'DayOpenClose', classMeta, StudyBuilder);
setMetadataFor(DeMarker, 'DeMarker', classMeta, StudyBuilder);
setMetadataFor(DetrendedPriceOsc, 'DetrendedPriceOsc', classMeta, StudyBuilder);
setMetadataFor(Companion_15, 'Companion', objectMeta);
setMetadataFor(DynamicMomentumIndex, 'DynamicMomentumIndex', classMeta, StudyBuilder);
setMetadataFor(EMA, 'EMA', classMeta, StudyBuilder);
setMetadataFor(Elder, 'Elder', classMeta, StudyBuilder);
setMetadataFor(Companion_16, 'Companion', objectMeta);
setMetadataFor(EnvelopeCommon, 'EnvelopeCommon', classMeta, StudyBuilder);
setMetadataFor(EnvelopeEMA, 'EnvelopeEMA', classMeta, EnvelopeCommon);
setMetadataFor(EnvelopeSMA, 'EnvelopeSMA', classMeta, EnvelopeCommon);
setMetadataFor(EnvelopeSMMA, 'EnvelopeSMMA', classMeta, EnvelopeCommon);
setMetadataFor(EnvelopeWMA, 'EnvelopeWMA', classMeta, EnvelopeCommon);
setMetadataFor(Companion_17, 'Companion', objectMeta);
setMetadataFor(FastStochastic, 'FastStochastic', classMeta, StudyBuilder);
setMetadataFor(Companion_18, 'Companion', objectMeta);
setMetadataFor(FibonacciBollingerBands, 'FibonacciBollingerBands', classMeta, StudyBuilder);
setMetadataFor(ForceIndex, 'ForceIndex', classMeta, StudyBuilder);
setMetadataFor(Companion_19, 'Companion', objectMeta);
setMetadataFor(ForecastOscillator, 'ForecastOscillator', classMeta, StudyBuilder);
setMetadataFor(Companion_20, 'Companion', objectMeta);
setMetadataFor(FullStochastic, 'FullStochastic', classMeta, StudyBuilder);
setMetadataFor(Companion_21, 'Companion', objectMeta);
setMetadataFor(GTRAP, 'GTRAP', classMeta, StudyBuilder);
setMetadataFor(WilliamsAlligator, 'WilliamsAlligator', classMeta, StudyBuilder);
setMetadataFor(GatorOscillator, 'GatorOscillator', classMeta, WilliamsAlligator);
setMetadataFor(HLVolatility, 'HLVolatility', classMeta, StudyBuilder);
setMetadataFor(Companion_22, 'Companion', objectMeta);
setMetadataFor(Ichimoku, 'Ichimoku', classMeta, StudyBuilder);
setMetadataFor(ImpliedVolatility, 'ImpliedVolatility', classMeta, StudyBuilder);
setMetadataFor(Companion_23, 'Companion', objectMeta);
setMetadataFor(ImpliedVolatilityGauge, 'ImpliedVolatilityGauge', classMeta, StudyBuilder);
setMetadataFor(Companion_24, 'Companion', objectMeta);
setMetadataFor(Inertia, 'Inertia', classMeta, StudyBuilder);
setMetadataFor(Companion_25, 'Companion', objectMeta);
setMetadataFor(IntradayMomentumIndex, 'IntradayMomentumIndex', classMeta, StudyBuilder);
setMetadataFor(KRI, 'KRI', classMeta, StudyBuilder);
setMetadataFor(Companion_26, 'Companion', objectMeta);
setMetadataFor(KaufmanMovingAverage, 'KaufmanMovingAverage', classMeta, StudyBuilder);
setMetadataFor(Companion_27, 'Companion', objectMeta);
setMetadataFor(KeltnerChannels, 'KeltnerChannels', classMeta, StudyBuilder);
setMetadataFor(LinearRegression, 'LinearRegression', classMeta, StudyBuilder);
setMetadataFor(Companion_28, 'Companion', objectMeta);
setMetadataFor(LinearRegressionChannel, 'LinearRegressionChannel', classMeta, StudyBuilder);
setMetadataFor(Companion_29, 'Companion', objectMeta);
setMetadataFor(LinearRegressionSlope, 'LinearRegressionSlope', classMeta, StudyBuilder);
setMetadataFor(Companion_30, 'Companion', objectMeta);
setMetadataFor(MACD, 'MACD', classMeta, StudyBuilder);
setMetadataFor(MarketFacilitationIndex, 'MarketFacilitationIndex', classMeta, StudyBuilder);
setMetadataFor(Companion_31, 'Companion', objectMeta);
setMetadataFor(MassIndex, 'MassIndex', classMeta, StudyBuilder);
setMetadataFor(MedianPrice, 'MedianPrice', classMeta, StudyBuilder);
setMetadataFor(Momentum, 'Momentum', classMeta, StudyBuilder);
setMetadataFor(Companion_32, 'Companion', objectMeta);
setMetadataFor(MoneyFlowIndex, 'MoneyFlowIndex', classMeta, StudyBuilder);
setMetadataFor(NegativeVolumeIndex, 'NegativeVolumeIndex', classMeta, StudyBuilder);
setMetadataFor(OnBalanceVolume, 'OnBalanceVolume', classMeta, StudyBuilder);
setMetadataFor(Companion_33, 'Companion', objectMeta);
setMetadataFor(Oscillator, 'Oscillator', classMeta, StudyBuilder);
setMetadataFor(Companion_34, 'Companion', objectMeta);
setMetadataFor(ParabolicSAR, 'ParabolicSAR', classMeta, StudyBuilder);
setMetadataFor(PercentChange, 'PercentChange', classMeta, StudyBuilder);
setMetadataFor(Companion_35, 'Companion', objectMeta);
setMetadataFor(PercentOfResistance, 'PercentOfResistance', classMeta, StudyBuilder);
setMetadataFor(Companion_36, 'Companion', objectMeta);
setMetadataFor(PercentagePriceOscillator, 'PercentagePriceOscillator', classMeta, StudyBuilder);
setMetadataFor(Companion_37, 'Companion', objectMeta);
setMetadataFor(PivotPoints, 'PivotPoints', classMeta, StudyBuilder);
setMetadataFor(Companion_38, 'Companion', objectMeta);
setMetadataFor(PriceChannel, 'PriceChannel', classMeta, StudyBuilder);
setMetadataFor(Companion_39, 'Companion', objectMeta);
setMetadataFor(PriceOscillator, 'PriceOscillator', classMeta, StudyBuilder);
setMetadataFor(PriceVolumeTrend, 'PriceVolumeTrend', classMeta, StudyBuilder);
setMetadataFor(ROC, 'ROC', classMeta, StudyBuilder);
setMetadataFor(RankCorrelationIndex, 'RankCorrelationIndex', classMeta, StudyBuilder);
setMetadataFor(Companion_40, 'Companion', objectMeta);
setMetadataFor(RelativeStrengthIndex, 'RelativeStrengthIndex', classMeta, StudyBuilder);
setMetadataFor(RelativeVigorIndex, 'RelativeVigorIndex', classMeta, StudyBuilder);
setMetadataFor(RelativeVigorIndexSMA, 'RelativeVigorIndexSMA', classMeta, StudyBuilder);
setMetadataFor(Companion_41, 'Companion', objectMeta);
setMetadataFor(RelativeVolatilityIndex, 'RelativeVolatilityIndex', classMeta, StudyBuilder);
setMetadataFor(SMA, 'SMA', classMeta, StudyBuilder);
setMetadataFor(SMMA, 'SMMA', classMeta, StudyBuilder);
setMetadataFor(Companion_42, 'Companion', objectMeta);
setMetadataFor(SROC, 'SROC', classMeta, StudyBuilder);
setMetadataFor(Companion_43, 'Companion', objectMeta);
setMetadataFor(STARCBands, 'STARCBands', classMeta, StudyBuilder);
setMetadataFor(Companion_44, 'Companion', objectMeta);
setMetadataFor(SchaffTrendCycle, 'SchaffTrendCycle', classMeta, StudyBuilder);
setMetadataFor(Companion_45, 'Companion', objectMeta);
setMetadataFor(SlowStochastic, 'SlowStochastic', classMeta, StudyBuilder);
setMetadataFor(StandardDeviation, 'StandardDeviation', classMeta, StudyBuilder);
setMetadataFor(Companion_46, 'Companion', objectMeta);
setMetadataFor(StandardDeviationChannel, 'StandardDeviationChannel', classMeta, StudyBuilder);
setMetadataFor(Companion_47, 'Companion', objectMeta);
setMetadataFor(StandardErrorBands, 'StandardErrorBands', classMeta, StudyBuilder);
setMetadataFor(StdDevVolatility, 'StdDevVolatility', classMeta, StudyBuilder);
setMetadataFor(Companion_48, 'Companion', objectMeta);
setMetadataFor(StudyBuilderFactory$1, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$2, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$3, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$4, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$5, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$6, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$7, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$8, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$9, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$10, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$11, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$12, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$13, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$14, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$15, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$16, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$17, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$18, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$19, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$20, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$21, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$22, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$23, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$24, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$25, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$26, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$27, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$28, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$29, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$30, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$31, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$32, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$33, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$34, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$35, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$36, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$37, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$38, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$39, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$40, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$41, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$42, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$43, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$44, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$45, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$46, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$47, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$48, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$49, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$50, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$51, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$52, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$53, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$54, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$55, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$56, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$57, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$58, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$59, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$60, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$61, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$62, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$63, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$64, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$65, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$66, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$67, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$68, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$69, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$70, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$71, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$72, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$73, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$74, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$75, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$76, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$77, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$78, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$79, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$80, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$81, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$82, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$83, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$84, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$85, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$86, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$87, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$88, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$89, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$90, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$91, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$92, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$93, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$94, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$95, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$96, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$97, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$98, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$99, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$100, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$101, VOID, classMeta);
setMetadataFor(StudyBuilderFactory$102, VOID, classMeta);
setMetadataFor(StudyBuilderFactory, 'StudyBuilderFactory', classMeta, Enum);
setMetadataFor(Companion_49, 'Companion', objectMeta);
setMetadataFor(SwingAccumulation, 'SwingAccumulation', classMeta, StudyBuilder);
setMetadataFor(PriceValue, 'PriceValue', classMeta, Enum);
setMetadataFor(Companion_50, 'Companion', objectMeta);
setMetadataFor(SwingIndex, 'SwingIndex', classMeta, StudyBuilder);
setMetadataFor(TDSequential, 'TDSequential', classMeta, StudyBuilder);
setMetadataFor(TEMA, 'TEMA', classMeta, StudyBuilder);
setMetadataFor(TMA, 'TMA', classMeta, StudyBuilder);
setMetadataFor(Companion_51, 'Companion', objectMeta);
setMetadataFor(TimeSeriesForecast, 'TimeSeriesForecast', classMeta, StudyBuilder);
setMetadataFor(TripleEMA, 'TripleEMA', classMeta, StudyBuilder);
setMetadataFor(Companion_52, 'Companion', objectMeta);
setMetadataFor(TrueStrengthIndex, 'TrueStrengthIndex', classMeta, StudyBuilder);
setMetadataFor(TypicalPrice, 'TypicalPrice', classMeta, StudyBuilder);
setMetadataFor(Companion_53, 'Companion', objectMeta);
setMetadataFor(UltimateOscillator, 'UltimateOscillator', classMeta, StudyBuilder);
setMetadataFor(VWAP, 'VWAP', classMeta, StudyBuilder);
setMetadataFor(VerticalHorizontalFilter, 'VerticalHorizontalFilter', classMeta, StudyBuilder);
setMetadataFor(WMA, 'WMA', classMeta, StudyBuilder);
setMetadataFor(Companion_54, 'Companion', objectMeta);
setMetadataFor(WaveTrend, 'WaveTrend', classMeta, StudyBuilder);
setMetadataFor(Companion_55, 'Companion', objectMeta);
setMetadataFor(WaveTrendWithCrosses, 'WaveTrendWithCrosses', classMeta, StudyBuilder);
setMetadataFor(WeightedClose, 'WeightedClose', classMeta, StudyBuilder);
setMetadataFor(WildersSmoothing, 'WildersSmoothing', classMeta, StudyBuilder);
setMetadataFor(WilliamsAD, 'WilliamsAD', classMeta, StudyBuilder);
setMetadataFor(Companion_56, 'Companion', objectMeta);
setMetadataFor(Companion_57, 'Companion', objectMeta);
setMetadataFor(WilliamsFractal, 'WilliamsFractal', classMeta, StudyBuilder);
setMetadataFor(Companion_58, 'Companion', objectMeta);
setMetadataFor(WilliamsPercentRange, 'WilliamsPercentRange', classMeta, StudyBuilder);
setMetadataFor(Companion_59, 'Companion', objectMeta);
setMetadataFor(ZigZag, 'ZigZag', classMeta, StudyBuilder);
setMetadataFor(MathUtils, 'MathUtils', objectMeta);
setMetadataFor(AbstractCachingFunction, 'AbstractCachingFunction', classMeta, VOID, [IFunction]);
setMetadataFor(AbsFunction, 'AbsFunction', classMeta, AbstractCachingFunction);
setMetadataFor(ArithmeticFunction, 'ArithmeticFunction', classMeta, VOID, [IFunction]);
setMetadataFor(ArithmeticOperation, 'ArithmeticOperation', classMeta, Enum);
setMetadataFor(BuyingPressure, 'BuyingPressure', classMeta, AbstractCachingFunction);
setMetadataFor(CloseLocationValueFunction, 'CloseLocationValueFunction', classMeta, AbstractCachingFunction);
setMetadataFor(CombineFunction, 'CombineFunction', classMeta, VOID, [IFunction]);
setMetadataFor(CommonFunctions, 'CommonFunctions', objectMeta);
setMetadataFor(ConstantFunction, 'ConstantFunction', classMeta, VOID, [IFunction]);
setMetadataFor(CumulativeSumFunction, 'CumulativeSumFunction', classMeta, AbstractCachingFunction);
setMetadataFor(CumulativeSumWithinSessionFunction, 'CumulativeSumWithinSessionFunction', classMeta, AbstractCachingFunction);
setMetadataFor(DiffDivPrevFunction, 'DiffDivPrevFunction', classMeta, AbstractCachingFunction);
setMetadataFor(DiffPrevFunction, 'DiffPrevFunction', classMeta, AbstractCachingFunction);
setMetadataFor(DirectionalIndexFunction, 'DirectionalIndexFunction', classMeta, AbstractCachingFunction);
setMetadataFor(DirectionalMovementFunction, 'DirectionalMovementFunction', classMeta, AbstractCachingFunction);
setMetadataFor(DisplacementFunction, 'DisplacementFunction', classMeta, VOID, [IFunction]);
setMetadataFor(Companion_60, 'Companion', objectMeta);
setMetadataFor(Trend, 'Trend', classMeta, Enum);
setMetadataFor(DorseyTrendFunction, 'DorseyTrendFunction', classMeta, AbstractCachingFunction);
setMetadataFor(ETHPriceSourceFunction, 'ETHPriceSourceFunction', classMeta, VOID, [IFunction]);
setMetadataFor(Equals, 'Equals', classMeta, AbstractCachingFunction);
setMetadataFor(Floor, 'Floor', classMeta, AbstractCachingFunction);
setMetadataFor(BackRangeDependentFunction, 'BackRangeDependentFunction', classMeta, AbstractCachingFunction);
setMetadataFor(HighestFunction, 'HighestFunction', classMeta, BackRangeDependentFunction);
setMetadataFor(HighestHighPeriod, 'HighestHighPeriod', classMeta, BackRangeDependentFunction);
setMetadataFor(IfFunction, 'IfFunction', classMeta, AbstractCachingFunction);
setMetadataFor(IntradaySumFunction, 'IntradaySumFunction', classMeta, BackRangeDependentFunction);
setMetadataFor(LimitFunction, 'LimitFunction', classMeta, VOID, [IFunction]);
setMetadataFor(LinearDeviationFunction, 'LinearDeviationFunction', classMeta, BackRangeDependentFunction);
setMetadataFor(LinearRegressionCurveFunction, 'LinearRegressionCurveFunction', classMeta, BackRangeDependentFunction);
setMetadataFor(LnDivPrevFunction, 'LnDivPrevFunction', classMeta, AbstractCachingFunction);
setMetadataFor(LogarithmFunction, 'LogarithmFunction', classMeta, AbstractCachingFunction);
setMetadataFor(LowestFunction, 'LowestFunction', classMeta, BackRangeDependentFunction);
setMetadataFor(LowestLowPeriod, 'LowestLowPeriod', classMeta, BackRangeDependentFunction);
setMetadataFor(MapFunction, 'MapFunction', classMeta, VOID, [IFunction]);
setMetadataFor(MapToOneFunction, 'MapToOneFunction', classMeta, VOID, [IFunction]);
setMetadataFor(MaxValueFunction, 'MaxValueFunction', classMeta, AbstractCachingFunction);
setMetadataFor(MinValueFunction, 'MinValueFunction', classMeta, AbstractCachingFunction);
setMetadataFor(MoneyFlowFunction, 'MoneyFlowFunction', classMeta, AbstractCachingFunction);
setMetadataFor(MovingAverageExponential, 'MovingAverageExponential', classMeta, AbstractCachingFunction);
setMetadataFor(MovingAverageSimple, 'MovingAverageSimple', classMeta, BackRangeDependentFunction);
setMetadataFor(MovingAverageSmoothed, 'MovingAverageSmoothed', classMeta, AbstractCachingFunction);
setMetadataFor(MovingAverageWeighted, 'MovingAverageWeighted', classMeta, BackRangeDependentFunction);
setMetadataFor(NegativeVolumeIndexFunction, 'NegativeVolumeIndexFunction', classMeta, AbstractCachingFunction);
setMetadataFor(PredicateFunction, 'PredicateFunction', classMeta, VOID, [IFunction]);
setMetadataFor(PrevAggregationFunction, 'PrevAggregationFunction', classMeta, VOID, [IFunction]);
setMetadataFor(Companion_61, 'Companion', objectMeta);
setMetadataFor(PrevAggregationContainer, 'PrevAggregationContainer', classMeta);
setMetadataFor(Aggregation, 'Aggregation', classMeta);
setMetadataFor(PriceAggregatedSourceFunction, 'PriceAggregatedSourceFunction', classMeta, VOID, [IFunction]);
setMetadataFor(PriceSourceFunction, 'PriceSourceFunction', classMeta, VOID, [IFunction]);
setMetadataFor(Companion_62, 'Companion', objectMeta);
setMetadataFor(RelativeVolatilityFunction, 'RelativeVolatilityFunction', classMeta, AbstractCachingFunction);
setMetadataFor(SeriesCrossingPoints, 'SeriesCrossingPoints', classMeta, VOID, [IFunction]);
setMetadataFor(SessionSet, 'SessionSet', classMeta, Enum);
setMetadataFor(SignFunction, 'SignFunction', classMeta, AbstractCachingFunction);
setMetadataFor(SimpleWeightedSumFunction, 'SimpleWeightedSumFunction', classMeta, BackRangeDependentFunction);
setMetadataFor(StandardDeviationFunction, 'StandardDeviationFunction', classMeta, BackRangeDependentFunction);
setMetadataFor(StandardErrorOfEstimationFunction, 'StandardErrorOfEstimationFunction', classMeta, BackRangeDependentFunction);
setMetadataFor(SumFunction, 'SumFunction', classMeta, BackRangeDependentFunction);
setMetadataFor(TrueRangeFunction, 'TrueRangeFunction', classMeta, AbstractCachingFunction);
setMetadataFor(WildersAverage, 'WildersAverage', classMeta, AbstractCachingFunction);
setMetadataFor(WindowFunction, 'WindowFunction', classMeta, VOID, [IFunction]);
setMetadataFor(ZeroFunction, 'ZeroFunction', classMeta, ConstantFunction);
setMetadataFor(DynamicMomentumIndexFunction, 'DynamicMomentumIndexFunction', classMeta, AbstractCachingFunction);
setMetadataFor(FractalOperation, 'FractalOperation', classMeta, Enum);
setMetadataFor(KaufmanNamaFunction, 'KaufmanNamaFunction', classMeta, AbstractCachingFunction);
setMetadataFor(LinearRegressionFunction, 'LinearRegressionFunction', classMeta, AbstractCachingFunction);
setMetadataFor(Extremum, 'Extremum', classMeta);
setMetadataFor(ParabolicSarFunction, 'ParabolicSarFunction', classMeta, AbstractCachingFunction);
setMetadataFor(SchaffTrendFrac, 'SchaffTrendFrac', classMeta, AbstractCachingFunction);
setMetadataFor(SpearmansRho, 'SpearmansRho', classMeta, BackRangeDependentFunction);
setMetadataFor(SwingIndexRatio, 'SwingIndexRatio', classMeta, AbstractCachingFunction);
setMetadataFor(WilliamsADFunction, 'WilliamsADFunction', classMeta, AbstractCachingFunction);
setMetadataFor(WilliamsFractalFilter, 'WilliamsFractalFilter', classMeta, AbstractCachingFunction);
setMetadataFor(Extremum_0, 'Extremum', classMeta);
setMetadataFor(ZigZagFunction, 'ZigZagFunction', classMeta, AbstractCachingFunction);
setMetadataFor(CountdownFunction, 'CountdownFunction', classMeta, AbstractCachingFunction);
setMetadataFor(PerfectCountdownFunction, 'PerfectCountdownFunction', classMeta, AbstractCachingFunction);
setMetadataFor(PerfectSetupFunction, 'PerfectSetupFunction', classMeta, VOID, [IFunction]);
setMetadataFor(TDBuySell, 'TDBuySell', classMeta, Enum);
setMetadataFor(PriceFlipFunction, 'PriceFlipFunction', classMeta, VOID, [IFunction]);
setMetadataFor(SetupFunction, 'SetupFunction', classMeta, AbstractCachingFunction);
setMetadataFor(TDSupportResistance, 'TDSupportResistance', classMeta, Enum);
setMetadataFor(SupportResistanceFunction, 'SupportResistanceFunction', classMeta, AbstractCachingFunction);
setMetadataFor(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
setMetadataFor(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
setMetadataFor(WilliamsFractalUtils, 'WilliamsFractalUtils', objectMeta);
setMetadataFor(SearchType, 'SearchType', classMeta, Enum);
//endregion
function mutableList($this, items) {
  return toMutableList(items);
}
function updateStudyParams($this, params) {
  // Inline function 'kotlin.collections.forEach' call
  var inductionVariable = 0;
  var last = params.length;
  while (inductionVariable < last) {
    var element = params[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    // Inline function 'com.devexperts.dxst.DxStudies.updateStudyParams.<anonymous>' call
    var key = element.key;
    if (contains(key, 'average') ? !(key === 'averageLength') : false) {
      element.value = Companion_getInstance_4().fromTitle(toString(element.value));
    }
    if ((contains(key, 'price') ? true : key === 'high') ? true : key === 'low') {
      element.value = Companion_getInstance_6().xa(toString(element.value));
    }
    if (contains(key, 'aggregation')) {
      element.value = Companion_getInstance_3().xa(toString(element.value));
    }
  }
}
function DxStudies(maxElements, candles) {
  var timeCandles = mutableList(this, candles.slice());
  this.dataHolder = new CandleDataStore(maxElements, timeCandles);
}
protoOf(DxStudies).ya = function (_set____db54di) {
  this.dataHolder = _set____db54di;
};
protoOf(DxStudies).za = function () {
  return this.dataHolder;
};
protoOf(DxStudies).createStudy = function (id, params) {
  updateStudyParams(this, params);
  var create = Companion_getInstance_7().ab(id, this.dataHolder, params);
  this.dataHolder.kb(create);
  if (!(this.dataHolder.lb() === 0)) {
    create.ob(new Changes(0, 0, this.dataHolder.lb()));
  }
  return create;
};
protoOf(DxStudies).addCandleItem = function (item) {
  this.dataHolder.mergeCandles(mutableList(this, [item]));
};
protoOf(DxStudies).addCandleItems = function (items) {
  this.dataHolder.mergeCandles(mutableList(this, items.slice()));
};
protoOf(DxStudies).setTradingSessions = function (sessions) {
  this.dataHolder.pb(listOf(sessions.slice()));
};
protoOf(DxStudies).setETHSessions = function (sessions) {
  this.dataHolder.qb(listOf(sessions.slice()));
};
protoOf(DxStudies).setTimeZone = function (timeZone) {
  this.dataHolder.rb(timeZone);
};
protoOf(DxStudies).setCandleAggregation = function (aggregation) {
  this.dataHolder.sb(aggregation);
};
function sam$kotlin_Comparator$0(function_0) {
  this.tb_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0).ub = function (a, b) {
  return this.tb_1(a, b);
};
protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
  return this.ub(a, b);
};
function AbstractCandleTradeDataHolder$Companion$SESSION_START$lambda(s1, s2) {
  return s1.getFrom() < s2.getFrom() ? -1 : s1.getFrom() > s2.getFrom() ? 1 : 0;
}
function getLastVisibleIndex($this) {
  if ($this.eb_1 < 0) {
    var inductionVariable = $this.bb_1.f() - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if ($this.bb_1.g(i).getIsVisible()) {
          $this.eb_1 = i;
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
  }
  return $this.eb_1;
}
function CandleImpl(_open, _high, _low, _close, _impVolatility, _volume, _vwap, _time, _isVisible) {
  var tmp;
  if (_open === VOID) {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  } else {
    tmp = _open;
  }
  _open = tmp;
  var tmp_0;
  if (_high === VOID) {
    DoubleCompanionObject_getInstance();
    tmp_0 = NaN;
  } else {
    tmp_0 = _high;
  }
  _high = tmp_0;
  var tmp_1;
  if (_low === VOID) {
    DoubleCompanionObject_getInstance();
    tmp_1 = NaN;
  } else {
    tmp_1 = _low;
  }
  _low = tmp_1;
  var tmp_2;
  if (_close === VOID) {
    DoubleCompanionObject_getInstance();
    tmp_2 = NaN;
  } else {
    tmp_2 = _close;
  }
  _close = tmp_2;
  var tmp_3;
  if (_impVolatility === VOID) {
    DoubleCompanionObject_getInstance();
    tmp_3 = NaN;
  } else {
    tmp_3 = _impVolatility;
  }
  _impVolatility = tmp_3;
  var tmp_4;
  if (_volume === VOID) {
    DoubleCompanionObject_getInstance();
    tmp_4 = NaN;
  } else {
    tmp_4 = _volume;
  }
  _volume = tmp_4;
  var tmp_5;
  if (_vwap === VOID) {
    DoubleCompanionObject_getInstance();
    tmp_5 = NaN;
  } else {
    tmp_5 = _vwap;
  }
  _vwap = tmp_5;
  _time = _time === VOID ? 0.0 : _time;
  _isVisible = _isVisible === VOID ? true : _isVisible;
  this.vb_1 = _open;
  this.wb_1 = _high;
  this.xb_1 = _low;
  this.yb_1 = _close;
  this.zb_1 = _impVolatility;
  this.ac_1 = _volume;
  this.bc_1 = _vwap;
  this.cc_1 = _time;
  this.dc_1 = _isVisible;
}
protoOf(CandleImpl).ec = function () {
  return this.vb_1;
};
protoOf(CandleImpl).getOpen = function () {
  return this.ec();
};
protoOf(CandleImpl).fc = function () {
  return this.wb_1;
};
protoOf(CandleImpl).getHigh = function () {
  return this.fc();
};
protoOf(CandleImpl).gc = function () {
  return this.xb_1;
};
protoOf(CandleImpl).getLow = function () {
  return this.gc();
};
protoOf(CandleImpl).hc = function () {
  return this.yb_1;
};
protoOf(CandleImpl).getClose = function () {
  return this.hc();
};
protoOf(CandleImpl).ic = function () {
  return this.zb_1;
};
protoOf(CandleImpl).getImpVolatility = function () {
  return this.ic();
};
protoOf(CandleImpl).jc = function () {
  return this.ac_1;
};
protoOf(CandleImpl).getVolume = function () {
  return this.jc();
};
protoOf(CandleImpl).kc = function () {
  return this.bc_1;
};
protoOf(CandleImpl).getVwap = function () {
  return this.kc();
};
protoOf(CandleImpl).lc = function (_set____db54di) {
  this.cc_1 = _set____db54di;
};
protoOf(CandleImpl).setTime = function (_set____db54di) {
  return this.lc(_set____db54di);
};
protoOf(CandleImpl).la = function () {
  return this.cc_1;
};
protoOf(CandleImpl).getTime = function () {
  return this.la();
};
protoOf(CandleImpl).mc = function () {
  return this.dc_1;
};
protoOf(CandleImpl).getIsVisible = function () {
  return this.mc();
};
function Companion() {
  Companion_instance = this;
  var tmp = this;
  var tmp_0 = AbstractCandleTradeDataHolder$Companion$SESSION_START$lambda;
  tmp.nc_1 = new sam$kotlin_Comparator$0(tmp_0);
}
var Companion_instance;
function Companion_getInstance_2() {
  if (Companion_instance == null)
    new Companion();
  return Companion_instance;
}
function AbstractCandleTradeDataHolder(candles) {
  Companion_getInstance_2();
  this.bb_1 = toMutableList_0(candles);
  this.cb_1 = false;
  this.db_1 = -1;
  this.eb_1 = -1;
  this.fb_1 = LinkedHashSet_init_$Create$();
  var tmp = this;
  // Inline function 'kotlin.collections.listOf' call
  tmp.gb_1 = emptyList();
  this.hb_1 = 'UTC';
  var tmp_0 = this;
  // Inline function 'kotlin.collections.listOf' call
  tmp_0.ib_1 = emptyList();
  this.jb_1 = 0.0;
}
protoOf(AbstractCandleTradeDataHolder).pb = function (value) {
  this.gb_1 = sortedWith(value, Companion_getInstance_2().nc_1);
};
protoOf(AbstractCandleTradeDataHolder).oc = function () {
  return this.gb_1;
};
protoOf(AbstractCandleTradeDataHolder).rb = function (_set____db54di) {
  this.hb_1 = _set____db54di;
};
protoOf(AbstractCandleTradeDataHolder).pc = function () {
  return this.hb_1;
};
protoOf(AbstractCandleTradeDataHolder).qb = function (value) {
  this.ib_1 = sortedWith(value, Companion_getInstance_2().nc_1);
};
protoOf(AbstractCandleTradeDataHolder).qc = function () {
  return this.ib_1;
};
protoOf(AbstractCandleTradeDataHolder).lb = function () {
  var lastIndex = getLastVisibleIndex(this);
  var tmp;
  if (lastIndex < 0) {
    tmp = 0;
  } else {
    tmp = (lastIndex - this.rc() | 0) + 1 | 0;
  }
  return tmp;
};
protoOf(AbstractCandleTradeDataHolder).kb = function (changeListener) {
  this.fb_1.a(changeListener);
};
protoOf(AbstractCandleTradeDataHolder).addChangeListener = function (changeListener) {
  return this.kb(changeListener);
};
protoOf(AbstractCandleTradeDataHolder).sc = function (changeListener) {
  this.fb_1.g3(changeListener);
};
protoOf(AbstractCandleTradeDataHolder).removeChangeListener = function (changeListener) {
  return this.sc(changeListener);
};
protoOf(AbstractCandleTradeDataHolder).tc = function (index) {
  return this.bb_1.g(index);
};
protoOf(AbstractCandleTradeDataHolder).getTradeItem = function (index) {
  return this.tc(index);
};
protoOf(AbstractCandleTradeDataHolder).rc = function () {
  if (this.db_1 < 0) {
    var inductionVariable = 0;
    var last = this.bb_1.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.bb_1.g(i).getIsVisible()) {
          this.db_1 = i;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
  }
  return this.db_1;
};
protoOf(AbstractCandleTradeDataHolder).firstVisibleIndex = function () {
  return this.rc();
};
protoOf(AbstractCandleTradeDataHolder).uc = function () {
  return this.bb_1.f();
};
protoOf(AbstractCandleTradeDataHolder).size = function () {
  return this.uc();
};
protoOf(AbstractCandleTradeDataHolder).vc = function (index, type, displace) {
  var candle = this.bb_1.g(index);
  var fromDateTime = this.getAggregationStamp(candle.getTime(), type, displace);
  var toDateTime = this.getAggregationStamp(candle.getTime(), type, displace + 1 | 0) - 1;
  var tmp;
  if (this.cb_1) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp = !this.bb_1.h();
  } else {
    tmp = false;
  }
  if (tmp) {
    var lastCandle = this.bb_1.g(this.bb_1.f() - 1 | 0);
    var lastFromDateTime = this.getAggregationStamp(lastCandle.getTime(), type, displace);
    if (!(fromDateTime === lastFromDateTime)) {
      return new CandleImpl();
    }
  }
  return this.wc(fromDateTime, toDateTime);
};
protoOf(AbstractCandleTradeDataHolder).getAggregatedTradeItem = function (index, type, displace) {
  return this.vc(index, type, displace);
};
protoOf(AbstractCandleTradeDataHolder).sb = function (_set____db54di) {
  this.jb_1 = _set____db54di;
};
protoOf(AbstractCandleTradeDataHolder).xc = function () {
  if (this.jb_1 === 0.0) {
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.bb_1.g(1).getTime() - this.bb_1.g(0).getTime();
    var tmp1_min = this.bb_1.g(2).getTime() - this.bb_1.g(1).getTime();
    var min = Math.min(tmp0_min, tmp1_min);
    return min;
  } else {
    return this.jb_1;
  }
};
protoOf(AbstractCandleTradeDataHolder).wc = function (from, to) {
  var open = null;
  var high = null;
  var low = null;
  var close = null;
  DoubleCompanionObject_getInstance();
  var openValue = NaN;
  DoubleCompanionObject_getInstance();
  var highValue = NaN;
  DoubleCompanionObject_getInstance();
  var lowValue = NaN;
  DoubleCompanionObject_getInstance();
  var closeValue = NaN;
  var leftCandleIdx = findCeilIndex(this.bb_1, from);
  var rightCandleIdx = findFloorIndex(this.bb_1, to);
  if ((leftCandleIdx < 0 ? true : leftCandleIdx >= this.bb_1.f()) ? true : rightCandleIdx < 0 ? true : rightCandleIdx >= this.bb_1.f()) {
    var tmp = openValue;
    var tmp_0 = highValue;
    var tmp_1 = lowValue;
    var tmp_2 = closeValue;
    DoubleCompanionObject_getInstance();
    return new CandleImpl(tmp, tmp_0, tmp_1, tmp_2, NaN, 0.0, 0.0, from, true);
  }
  var inductionVariable = leftCandleIdx;
  if (inductionVariable <= rightCandleIdx)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var c = this.bb_1.g(i);
      if (open == null ? true : open.getTime() > c.getTime()) {
        open = c;
      }
      if (high == null ? true : high.getHigh() < c.getHigh()) {
        high = c;
      }
      if (low == null ? true : low.getLow() > c.getLow()) {
        low = c;
      }
      if (close == null ? true : close.getTime() < c.getTime()) {
        close = c;
      }
    }
     while (!(i === rightCandleIdx));
  if (!(open == null))
    openValue = open.getOpen();
  if (!(high == null))
    highValue = high.getHigh();
  if (!(low == null))
    lowValue = low.getLow();
  if (!(close == null))
    closeValue = close.getClose();
  var tmp_3 = openValue;
  var tmp_4 = highValue;
  var tmp_5 = lowValue;
  var tmp_6 = closeValue;
  DoubleCompanionObject_getInstance();
  return new CandleImpl(tmp_3, tmp_4, tmp_5, tmp_6, NaN, 0.0, 0.0, from, true);
};
protoOf(AbstractCandleTradeDataHolder).getAggregatedItemByTimestamps = function (from, to) {
  return this.wc(from, to);
};
protoOf(AbstractCandleTradeDataHolder).yc = function (time) {
  return findCeilIndex(this.bb_1, time);
};
protoOf(AbstractCandleTradeDataHolder).funClosestIndex = function (time) {
  return this.yc(time);
};
protoOf(AbstractCandleTradeDataHolder).zc = function (changes) {
  var tmp0_iterator = this.fb_1.c();
  while (tmp0_iterator.d()) {
    var changeListener = tmp0_iterator.e();
    changeListener.dataChanged(changes);
  }
};
var AggregationTypeEnum_DEFAULT_instance;
var AggregationTypeEnum_DAY_instance;
var AggregationTypeEnum_WEEK_instance;
var AggregationTypeEnum_MONTH_instance;
function Companion_0() {
  Companion_instance_0 = this;
}
protoOf(Companion_0).xa = function (title) {
  var tmp0_iterator = get_entries().c();
  while (tmp0_iterator.d()) {
    var type = tmp0_iterator.e();
    if (equals(type.cd_1, title, true)) {
      return type;
    }
  }
  throw IllegalStateException_init_$Create$('Unknown average type: ' + title);
};
var Companion_instance_0;
function Companion_getInstance_3() {
  AggregationTypeEnum_initEntries();
  if (Companion_instance_0 == null)
    new Companion_0();
  return Companion_instance_0;
}
function values_0() {
  return [AggregationTypeEnum_DEFAULT_getInstance(), AggregationTypeEnum_DAY_getInstance(), AggregationTypeEnum_WEEK_getInstance(), AggregationTypeEnum_MONTH_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values_0());
  return $ENTRIES;
}
var AggregationTypeEnum_entriesInitialized;
function AggregationTypeEnum_initEntries() {
  if (AggregationTypeEnum_entriesInitialized)
    return Unit_getInstance();
  AggregationTypeEnum_entriesInitialized = true;
  AggregationTypeEnum_DEFAULT_instance = new AggregationTypeEnum('DEFAULT', 0, 'DEFAULT', 0.0);
  AggregationTypeEnum_DAY_instance = new AggregationTypeEnum('DAY', 1, 'DAY', 8.64E7);
  AggregationTypeEnum_WEEK_instance = new AggregationTypeEnum('WEEK', 2, 'WEEK', AggregationTypeEnum_DAY_getInstance().dd_1 * 7);
  AggregationTypeEnum_MONTH_instance = new AggregationTypeEnum('MONTH', 3, 'MONTH', AggregationTypeEnum_DAY_getInstance().dd_1 * 31);
  Companion_getInstance_3();
}
var $ENTRIES;
function AggregationTypeEnum(name, ordinal, title, period) {
  Enum.call(this, name, ordinal);
  this.cd_1 = title;
  this.dd_1 = period;
}
protoOf(AggregationTypeEnum).toString = function () {
  return this.cd_1;
};
function AggregationTypeEnum_DEFAULT_getInstance() {
  AggregationTypeEnum_initEntries();
  return AggregationTypeEnum_DEFAULT_instance;
}
function AggregationTypeEnum_DAY_getInstance() {
  AggregationTypeEnum_initEntries();
  return AggregationTypeEnum_DAY_instance;
}
function AggregationTypeEnum_WEEK_getInstance() {
  AggregationTypeEnum_initEntries();
  return AggregationTypeEnum_WEEK_instance;
}
function AggregationTypeEnum_MONTH_getInstance() {
  AggregationTypeEnum_initEntries();
  return AggregationTypeEnum_MONTH_instance;
}
var AverageTypeEnum_SIMPLE_instance;
var AverageTypeEnum_WILDERS_instance;
var AverageTypeEnum_WEIGHTED_instance;
var AverageTypeEnum_EXPONENTIAL_instance;
function Companion_1() {
  Companion_instance_1 = this;
}
protoOf(Companion_1).fromTitle = function (title) {
  var indexedObject = values_1();
  var inductionVariable = 0;
  var last = indexedObject.length;
  while (inductionVariable < last) {
    var averageType = indexedObject[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    if (equals(averageType.gd_1, title, true)) {
      return averageType;
    }
  }
  throw IllegalStateException_init_$Create$('Unknown average type: ' + title);
};
var Companion_instance_1;
function Companion_getInstance_4() {
  AverageTypeEnum_initEntries();
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function values_1() {
  return [AverageTypeEnum_SIMPLE_getInstance(), AverageTypeEnum_WILDERS_getInstance(), AverageTypeEnum_WEIGHTED_getInstance(), AverageTypeEnum_EXPONENTIAL_getInstance()];
}
var AverageTypeEnum_entriesInitialized;
function AverageTypeEnum_initEntries() {
  if (AverageTypeEnum_entriesInitialized)
    return Unit_getInstance();
  AverageTypeEnum_entriesInitialized = true;
  AverageTypeEnum_SIMPLE_instance = new AverageTypeEnum('SIMPLE', 0, 'SIMPLE');
  AverageTypeEnum_WILDERS_instance = new AverageTypeEnum('WILDERS', 1, 'WILDERS');
  AverageTypeEnum_WEIGHTED_instance = new AverageTypeEnum('WEIGHTED', 2, 'WEIGHTED');
  AverageTypeEnum_EXPONENTIAL_instance = new AverageTypeEnum('EXPONENTIAL', 3, 'EXPONENTIAL');
  Companion_getInstance_4();
}
function AverageTypeEnum(name, ordinal, title) {
  Enum.call(this, name, ordinal);
  this.gd_1 = title;
}
protoOf(AverageTypeEnum).toString = function () {
  return this.gd_1;
};
function AverageTypeEnum_SIMPLE_getInstance() {
  AverageTypeEnum_initEntries();
  return AverageTypeEnum_SIMPLE_instance;
}
function AverageTypeEnum_WILDERS_getInstance() {
  AverageTypeEnum_initEntries();
  return AverageTypeEnum_WILDERS_instance;
}
function AverageTypeEnum_WEIGHTED_getInstance() {
  AverageTypeEnum_initEntries();
  return AverageTypeEnum_WEIGHTED_instance;
}
function AverageTypeEnum_EXPONENTIAL_getInstance() {
  AverageTypeEnum_initEntries();
  return AverageTypeEnum_EXPONENTIAL_instance;
}
function CandleDataItem() {
}
function MergeResult_init_$Init$($outer, $this) {
  $this.kd_1 = $outer;
  MergeResult.call($this);
  $this.hd_1 = null;
  $this.id_1 = null;
  $this.jd_1 = true;
  return $this;
}
function MergeResult_init_$Create$($outer) {
  return MergeResult_init_$Init$($outer, objectCreate(protoOf(MergeResult)));
}
function MergeResult_init_$Init$_0($outer, changes, inserted, $this) {
  $this.kd_1 = $outer;
  MergeResult.call($this);
  $this.hd_1 = changes;
  $this.id_1 = inserted;
  $this.jd_1 = false;
  return $this;
}
function MergeResult_init_$Create$_0($outer, changes, inserted) {
  return MergeResult_init_$Init$_0($outer, changes, inserted, objectCreate(protoOf(MergeResult)));
}
function sam$kotlin_Comparator$0_0(function_0) {
  this.ld_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_0).ub = function (a, b) {
  return this.ld_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
  return this.ub(a, b);
};
function CandleDataStore$Companion$CANDLE_DATE$lambda(o1, o2) {
  return o1.getTime() < o2.getTime() ? -1 : o1.getTime() > o2.getTime() ? 1 : 0;
}
function getFirstUpdatedIndex($this, updatedCandles, insertedCandles) {
  var firstUpdatedElement;
  if (!insertedCandles.h() ? !updatedCandles.h() : false) {
    firstUpdatedElement = Companion_getInstance_5().md_1.compare(first(insertedCandles), first(updatedCandles)) < 0 ? first(insertedCandles) : first(updatedCandles);
  } else {
    firstUpdatedElement = !insertedCandles.h() ? first(insertedCandles) : first(updatedCandles);
  }
  return binarySearch($this.bb_1, firstUpdatedElement, Companion_getInstance_5().md_1);
}
function trimLeftCandles($this, candles) {
  if (candles.f() > $this.xd()) {
    var trimLeft = candles.f() - $this.xd() | 0;
    candles.a4(0, trimLeft).y3();
    return trimLeft;
  }
  return 0;
}
function sortCandles($this, candles) {
  sortedWith(candles, Companion_getInstance_5().md_1);
}
function resetCachedIndexes($this) {
  $this.db_1 = -1;
  $this.eb_1 = -1;
}
function isCandleEquals($this, candle1, candle2) {
  return ((((candle1.getLow() === candle2.getLow() ? candle1.getHigh() === candle2.getHigh() : false) ? candle1.getOpen() === candle2.getOpen() : false) ? candle1.getClose() === candle2.getClose() : false) ? candle1.getTime() === candle2.getTime() : false) ? candle1.getIsVisible() === candle2.getIsVisible() : false;
}
function MergeResult() {
}
function Companion_2() {
  Companion_instance_2 = this;
  var tmp = this;
  var tmp_0 = CandleDataStore$Companion$CANDLE_DATE$lambda;
  tmp.md_1 = new sam$kotlin_Comparator$0_0(tmp_0);
}
var Companion_instance_2;
function Companion_getInstance_5() {
  if (Companion_instance_2 == null)
    new Companion_2();
  return Companion_instance_2;
}
function CandleDataStore$mergeCandlesSilent$lambda(this$0) {
  return function (candle) {
    return Companion_getInstance_5().md_1.compare(candle, this$0.bb_1.g(0)) < 0;
  };
}
function CandleDataStore$mergeCandlesSilent$lambda_0(this$0) {
  return function (candle) {
    return Companion_getInstance_5().md_1.compare(candle, this$0.bb_1.g(0)) < 0;
  };
}
function CandleDataStore(maxElements, candles) {
  Companion_getInstance_5();
  CandleTradeDataHolder.call(this, candles);
  this.wd_1 = maxElements;
  sortCandles(this, this.bb_1);
  trimLeftCandles(this, this.bb_1);
}
protoOf(CandleDataStore).xd = function () {
  return this.wd_1;
};
protoOf(CandleDataStore).mergeCandles = function (update) {
  var result = this.yd(update);
  if (!result.jd_1) {
    this.zc(ensureNotNull(result.hd_1));
  }
  return result;
};
protoOf(CandleDataStore).yd = function (update) {
  resetCachedIndexes(this);
  // Inline function 'kotlin.collections.mutableListOf' call
  var candlesToMerge = ArrayList_init_$Create$();
  candlesToMerge.i3(update);
  while (candlesToMerge.f() > this.xd()) {
    candlesToMerge.v1(0);
  }
  if (this.bb_1.h()) {
    this.bb_1 = toMutableList_0(candlesToMerge);
    var changes = new Changes(0, 0, this.lb());
    return MergeResult_init_$Create$_0(this, changes, toMutableSet(candlesToMerge));
  }
  var candlesToMergeIterator = candlesToMerge.c();
  // Inline function 'kotlin.collections.mutableListOf' call
  var updatedCandles = ArrayList_init_$Create$();
  while (candlesToMergeIterator.d()) {
    var mergeCandle = candlesToMergeIterator.e();
    var index = binarySearch(this.bb_1, mergeCandle, Companion_getInstance_5().md_1);
    if (index >= 0) {
      var currentCandle = this.bb_1.g(index);
      if (!isCandleEquals(this, mergeCandle, currentCandle)) {
        this.bb_1.u1(index, mergeCandle);
        updatedCandles.a(mergeCandle);
      }
      candlesToMergeIterator.w1();
    }
  }
  this.bb_1.i3(candlesToMerge);
  sortCandles(this, this.bb_1);
  var removedFromLeft = trimLeftCandles(this, this.bb_1);
  var notInsertedCandles = toMutableList_0(candlesToMerge);
  removeAll(notInsertedCandles, CandleDataStore$mergeCandlesSilent$lambda(this));
  removedFromLeft = removedFromLeft - notInsertedCandles.f() | 0;
  notInsertedCandles.y3();
  removeAll(updatedCandles, CandleDataStore$mergeCandlesSilent$lambda_0(this));
  if (candlesToMerge.h() ? updatedCandles.h() : false) {
    return MergeResult_init_$Create$(this);
  }
  var firstUpdatedIndex = getFirstUpdatedIndex(this, toSet(updatedCandles), toSet(candlesToMerge));
  var changes_0 = new Changes(removedFromLeft, firstUpdatedIndex, this.lb());
  return MergeResult_init_$Create$_0(this, changes_0, toSet(candlesToMerge));
};
function CandleTradeDataHolder(candles) {
  AbstractCandleTradeDataHolder.call(this, candles);
}
protoOf(CandleTradeDataHolder).ie = function (timestamp, type, displace) {
  var millisInHour = 3600000;
  var timestampWithoutTime = timestamp - timestamp % imul(millisInHour, 24);
  var calculatedTime;
  switch (type.c2_1) {
    case 1:
      calculatedTime = timestampWithoutTime + imul(imul(displace, millisInHour), 24);
      break;
    case 2:
      calculatedTime = timestampWithoutTime - timestampWithoutTime % imul(imul(millisInHour, 24), 7) + imul(imul(imul(displace, millisInHour), 24), 7);
      break;
    case 3:
      calculatedTime = timestampWithoutTime + imul(imul(imul(displace, millisInHour), 24), 30);
      break;
    default:
      calculatedTime = 0.0;
      break;
  }
  return calculatedTime;
};
protoOf(CandleTradeDataHolder).getAggregationStamp = function (timestamp, type, displace) {
  return this.ie(timestamp, type, displace);
};
function Changes(removedFromLeft, firstIndexChanged, newDataLength) {
  this.je_1 = removedFromLeft;
  this.ke_1 = firstIndexChanged;
  this.le_1 = newDataLength;
}
function DataItemsView(originalTradeData) {
  this.me_1 = originalTradeData;
  this.ne_1 = 0;
}
protoOf(DataItemsView).xc = function () {
  return this.me_1.xc();
};
protoOf(DataItemsView).qc = function () {
  return this.me_1.qc();
};
protoOf(DataItemsView).oc = function () {
  return this.me_1.oc();
};
protoOf(DataItemsView).pc = function () {
  return this.me_1.pc();
};
protoOf(DataItemsView).addChangeListener = function (changeListener) {
  this.me_1.addChangeListener(changeListener);
};
protoOf(DataItemsView).funClosestIndex = function (time) {
  return this.me_1.funClosestIndex(time);
};
protoOf(DataItemsView).getAggregatedItemByTimestamps = function (from, to) {
  return this.me_1.getAggregatedItemByTimestamps(from, to);
};
protoOf(DataItemsView).removeChangeListener = function (changeListener) {
  this.me_1.removeChangeListener(changeListener);
};
protoOf(DataItemsView).oe = function (value) {
  if (value < 0) {
    throw IllegalArgumentException_init_$Create$('offset should not be negative: ' + this.ne_1);
  }
  this.ne_1 = value;
};
protoOf(DataItemsView).tc = function (index) {
  if (index < 0 ? true : index > (this.me_1.size() - this.ne_1 | 0)) {
    throw IllegalArgumentException_init_$Create$('index out of range: ' + index + '. size: ' + this.uc());
  }
  return this.me_1.getTradeItem(index + this.ne_1 | 0);
};
protoOf(DataItemsView).getTradeItem = function (index) {
  return this.tc(index);
};
protoOf(DataItemsView).vc = function (index, type, displace) {
  if (index < 0 ? true : index > (this.me_1.size() - this.ne_1 | 0)) {
    throw IllegalArgumentException_init_$Create$('index out of range: ' + index + '. size: ' + this.uc());
  }
  return this.me_1.getAggregatedTradeItem(index + this.ne_1 | 0, type, displace);
};
protoOf(DataItemsView).getAggregatedTradeItem = function (index, type, displace) {
  return this.vc(index, type, displace);
};
protoOf(DataItemsView).rc = function () {
  return this.me_1.firstVisibleIndex() - this.ne_1 | 0;
};
protoOf(DataItemsView).firstVisibleIndex = function () {
  return this.rc();
};
protoOf(DataItemsView).lb = function () {
  return this.me_1.lb() - this.ne_1 | 0;
};
protoOf(DataItemsView).uc = function () {
  return this.me_1.size() - this.ne_1 | 0;
};
protoOf(DataItemsView).size = function () {
  return this.uc();
};
function IFunction() {
}
var PriceFieldEnum_OPEN_instance;
var PriceFieldEnum_HIGH_instance;
var PriceFieldEnum_LOW_instance;
var PriceFieldEnum_CLOSE_instance;
var PriceFieldEnum_IMP_VOLATILITY_instance;
var PriceFieldEnum_MEDIAN_instance;
var PriceFieldEnum_TYPICAL_instance;
var PriceFieldEnum_OHLC_AVERAGE_instance;
var PriceFieldEnum_VOLUME_instance;
function Companion_3() {
  Companion_instance_3 = this;
}
protoOf(Companion_3).xa = function (title) {
  var indexedObject = values_2();
  var inductionVariable = 0;
  var last = indexedObject.length;
  while (inductionVariable < last) {
    var pfe = indexedObject[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    if (equals(pfe.b2_1, title, true)) {
      return pfe;
    }
  }
  throw IllegalStateException_init_$Create$('Unknown price field: ' + title);
};
var Companion_instance_3;
function Companion_getInstance_6() {
  PriceFieldEnum_initEntries();
  if (Companion_instance_3 == null)
    new Companion_3();
  return Companion_instance_3;
}
function values_2() {
  return [PriceFieldEnum_OPEN_getInstance(), PriceFieldEnum_HIGH_getInstance(), PriceFieldEnum_LOW_getInstance(), PriceFieldEnum_CLOSE_getInstance(), PriceFieldEnum_IMP_VOLATILITY_getInstance(), PriceFieldEnum_MEDIAN_getInstance(), PriceFieldEnum_TYPICAL_getInstance(), PriceFieldEnum_OHLC_AVERAGE_getInstance(), PriceFieldEnum_VOLUME_getInstance()];
}
var PriceFieldEnum_entriesInitialized;
function PriceFieldEnum_initEntries() {
  if (PriceFieldEnum_entriesInitialized)
    return Unit_getInstance();
  PriceFieldEnum_entriesInitialized = true;
  PriceFieldEnum_OPEN_instance = new PriceFieldEnum('OPEN', 0, 'open');
  PriceFieldEnum_HIGH_instance = new PriceFieldEnum('HIGH', 1, 'high');
  PriceFieldEnum_LOW_instance = new PriceFieldEnum('LOW', 2, 'low');
  PriceFieldEnum_CLOSE_instance = new PriceFieldEnum('CLOSE', 3, 'close');
  PriceFieldEnum_IMP_VOLATILITY_instance = new PriceFieldEnum('IMP_VOLATILITY', 4, 'impVolatility');
  PriceFieldEnum_MEDIAN_instance = new PriceFieldEnum('MEDIAN', 5, 'median');
  PriceFieldEnum_TYPICAL_instance = new PriceFieldEnum('TYPICAL', 6, 'hlc_av');
  PriceFieldEnum_OHLC_AVERAGE_instance = new PriceFieldEnum('OHLC_AVERAGE', 7, 'ohlc_av');
  PriceFieldEnum_VOLUME_instance = new PriceFieldEnum('VOLUME', 8, 'volume');
  Companion_getInstance_6();
}
function PriceFieldEnum(name, ordinal, title) {
  Enum.call(this, name, ordinal);
  this.ue_1 = title;
}
protoOf(PriceFieldEnum).toString = function () {
  return this.ue_1;
};
function PriceFieldEnum_OPEN_getInstance() {
  PriceFieldEnum_initEntries();
  return PriceFieldEnum_OPEN_instance;
}
function PriceFieldEnum_HIGH_getInstance() {
  PriceFieldEnum_initEntries();
  return PriceFieldEnum_HIGH_instance;
}
function PriceFieldEnum_LOW_getInstance() {
  PriceFieldEnum_initEntries();
  return PriceFieldEnum_LOW_instance;
}
function PriceFieldEnum_CLOSE_getInstance() {
  PriceFieldEnum_initEntries();
  return PriceFieldEnum_CLOSE_instance;
}
function PriceFieldEnum_IMP_VOLATILITY_getInstance() {
  PriceFieldEnum_initEntries();
  return PriceFieldEnum_IMP_VOLATILITY_instance;
}
function PriceFieldEnum_MEDIAN_getInstance() {
  PriceFieldEnum_initEntries();
  return PriceFieldEnum_MEDIAN_instance;
}
function PriceFieldEnum_TYPICAL_getInstance() {
  PriceFieldEnum_initEntries();
  return PriceFieldEnum_TYPICAL_instance;
}
function PriceFieldEnum_OHLC_AVERAGE_getInstance() {
  PriceFieldEnum_initEntries();
  return PriceFieldEnum_OHLC_AVERAGE_instance;
}
function PriceFieldEnum_VOLUME_getInstance() {
  PriceFieldEnum_initEntries();
  return PriceFieldEnum_VOLUME_instance;
}
function getOverallPrefetch($this, functions) {
  var prefetch = 0;
  var tmp0_iterator = functions.c();
  while (tmp0_iterator.d()) {
    var function_0 = tmp0_iterator.e();
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp2_maxOf = getOverallPrefetch($this, function_0.childFunctions);
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = function_0.prefetchSize;
    var tmp1_maxOf = prefetch;
    var tmp3_maxOf = Math.max(tmp0_maxOf, tmp1_maxOf);
    prefetch = Math.max(tmp2_maxOf, tmp3_maxOf);
  }
  return prefetch;
}
function Study$Companion$create$lambda(it) {
  return Companion_getInstance_7().getOverallPastOffset(it);
}
function Companion_4() {
  Companion_instance_4 = this;
}
protoOf(Companion_4).ab = function (id, dataItems, params) {
  // Inline function 'kotlin.collections.mutableMapOf' call
  var paramMap = LinkedHashMap_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  // Inline function 'kotlin.collections.iterator' call
  var tmp0_iterator = arrayIterator(params);
  while (tmp0_iterator.d()) {
    var element = tmp0_iterator.e();
    // Inline function 'com.devexperts.dxst.api.Companion.create.<anonymous>' call
    paramMap.v4(element.key, element.value);
  }
  var builderFactory = Companion_getInstance_51().we(id);
  var builder = builderFactory.bf();
  var dataItemsView = new DataItemsView(dataItems);
  var functions = builder.cf(dataItemsView, paramMap);
  var aggregationType = builder.df(paramMap);
  return this.gf(functions, dataItemsView, builder.ef(paramMap), getOverallPrefetch(this, functions), aggregationType, builder.ff(paramMap));
};
protoOf(Companion_4).gf = function (lineFunctions, dataItems, expansionSize, prefetchSize, aggregationType, onlyLastAggregatedPeriod) {
  if (lineFunctions.h()) {
    throw IllegalArgumentException_init_$Create$('Collection of functions is empty!');
  }
  if (dataItems == null) {
    throw NullPointerException_init_$Create$('null data items');
  }
  var pastOffset = this.maxValue(lineFunctions, Study$Companion$create$lambda);
  var tmp$ret$0;
  // Inline function 'kotlin.comparisons.maxOf' call
  tmp$ret$0 = Math.max(0, expansionSize);
  return new Study(lineFunctions, dataItems, pastOffset, tmp$ret$0, prefetchSize, aggregationType, onlyLastAggregatedPeriod);
};
protoOf(Companion_4).maxValue = function (functions, calculator) {
  var max = IntCompanionObject_getInstance().MIN_VALUE;
  var tmp0_iterator = functions.c();
  while (tmp0_iterator.d()) {
    var f = tmp0_iterator.e();
    var value = calculator(f);
    if (max < value) {
      max = value;
    }
  }
  return max;
};
protoOf(Companion_4).getOverallPastOffset = function (function_0) {
  var ownPastOffset = function_0.ownPastOffset;
  var maxChildPastOffset = 0;
  var tmp0_iterator = function_0.childFunctions.c();
  while (tmp0_iterator.d()) {
    var func = tmp0_iterator.e();
    var srcPastOffset = this.getOverallPastOffset(func);
    if (maxChildPastOffset < srcPastOffset) {
      maxChildPastOffset = srcPastOffset;
    }
  }
  return ownPastOffset + maxChildPastOffset | 0;
};
protoOf(Companion_4).create = function (builder, dataItems, params) {
  var dataItemsView = new DataItemsView(dataItems);
  var functions = builder.cf(dataItemsView, params);
  var aggregationType = builder.df(params);
  return this.gf(functions, dataItemsView, builder.ef(params), getOverallPrefetch(this, functions), aggregationType, builder.ff(params));
};
var Companion_instance_4;
function Companion_getInstance_7() {
  if (Companion_instance_4 == null)
    new Companion_4();
  return Companion_instance_4;
}
function Study(lineFunctions, dataItems, pastOffset, expansionSize, prefetchSize, aggregationType, isOnlyLastAggregatedPeriod) {
  Companion_getInstance_7();
  this.mb_1 = lineFunctions;
  this.nb_1 = dataItems;
  this.pastOffset = pastOffset;
  this.expansionSize = expansionSize;
  this.prefetchSize = prefetchSize;
  this.aggregationType = aggregationType;
  this.isOnlyLastAggregatedPeriod = isOnlyLastAggregatedPeriod;
}
protoOf(Study).hf = function () {
  return this.pastOffset;
};
protoOf(Study).if = function () {
  return this.expansionSize;
};
protoOf(Study).re = function () {
  return this.prefetchSize;
};
protoOf(Study).jf = function () {
  return this.aggregationType;
};
protoOf(Study).kf = function () {
  return this.isOnlyLastAggregatedPeriod;
};
protoOf(Study).lf = function () {
  return this.mb_1.f();
};
protoOf(Study).ob = function (changes) {
  var tmp0_iterator = this.mb_1.c();
  while (tmp0_iterator.d()) {
    var lineFunction = tmp0_iterator.e();
    lineFunction.dataChanged(changes);
  }
  return 0;
};
protoOf(Study).dataChanged = function (changes) {
  return this.ob(changes);
};
protoOf(Study).getLine = function (index) {
  return this.mb_1.g(index);
};
protoOf(Study).calculateAll = function () {
  // Inline function 'kotlin.arrayOfNulls' call
  var tmp0_arrayOfNulls = this.nb_1.uc();
  var lines = fillArrayVal(Array(tmp0_arrayOfNulls), null);
  var inductionVariable = 0;
  var last = this.nb_1.uc() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = this.mb_1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator = tmp1_map.c();
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'com.devexperts.dxst.api.Study.calculateAll.<anonymous>' call
        tmp$ret$1 = item.calculateAt(i);
        tmp0_mapTo.a(tmp$ret$1);
      }
      lines[i] = toDoubleArray(tmp0_mapTo);
    }
     while (!(i === last));
  return lines;
};
protoOf(Study).calculateAt = function (index) {
  // Inline function 'kotlin.collections.map' call
  var tmp0_map = this.mb_1;
  // Inline function 'kotlin.collections.mapTo' call
  var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
  var tmp0_iterator = tmp0_map.c();
  while (tmp0_iterator.d()) {
    var item = tmp0_iterator.e();
    var tmp$ret$0;
    // Inline function 'com.devexperts.dxst.api.Study.calculateAt.<anonymous>' call
    tmp$ret$0 = item.calculateAt(index);
    tmp0_mapTo.a(tmp$ret$0);
  }
  return toDoubleArray(tmp0_mapTo);
};
protoOf(Study).setCalculationOffset = function (offset) {
  this.nb_1.oe(offset);
};
protoOf(Study).dispose = function () {
  this.nb_1.removeChangeListener(this);
};
function Companion_5() {
  Companion_instance_5 = this;
  this.mf_1 = 'length';
  this.nf_1 = 'displace';
  this.of_1 = 'price';
  this.pf_1 = 'average';
}
var Companion_instance_5;
function Companion_getInstance_8() {
  if (Companion_instance_5 == null)
    new Companion_5();
  return Companion_instance_5;
}
function StudyBuilder() {
  Companion_getInstance_8();
}
protoOf(StudyBuilder).cf = function (data, params) {
  this.qf(params);
  return this.rf(data, params);
};
protoOf(StudyBuilder).qf = function (params) {
};
protoOf(StudyBuilder).ef = function (params) {
  return 0;
};
protoOf(StudyBuilder).df = function (params) {
  return AggregationTypeEnum_DEFAULT_getInstance();
};
protoOf(StudyBuilder).ff = function (params) {
  return false;
};
protoOf(StudyBuilder).sf = function (params) {
  this.tf(params, Companion_getInstance_8().nf_1);
};
protoOf(StudyBuilder).uf = function (params) {
  this.tf(params, Companion_getInstance_8().mf_1);
};
protoOf(StudyBuilder).vf = function (params) {
  this.wf(params, Companion_getInstance_8().of_1);
};
protoOf(StudyBuilder).xf = function (params) {
  this.wf(params, Companion_getInstance_8().pf_1);
};
protoOf(StudyBuilder).yf = function (params, name) {
  this.wf(params, name);
};
protoOf(StudyBuilder).tf = function (params, name) {
  this.wf(params, name);
};
protoOf(StudyBuilder).zf = function (params, name) {
  this.wf(params, name);
};
protoOf(StudyBuilder).ag = function (params, name) {
  this.wf(params, name);
};
protoOf(StudyBuilder).wf = function (params, name) {
  if (params.k1(name) == null)
    throw IllegalArgumentException_init_$Create$("Couldn't find parameter '" + name);
};
function Companion_6() {
  Companion_instance_6 = this;
}
protoOf(Companion_6).of = function (key, value) {
  return new StudyParam(key, value);
};
var Companion_instance_6;
function Companion_getInstance_9() {
  if (Companion_instance_6 == null)
    new Companion_6();
  return Companion_instance_6;
}
function StudyParam(key, value) {
  Companion_getInstance_9();
  this.key = key;
  this.value = value;
}
protoOf(StudyParam).z = function () {
  return this.key;
};
protoOf(StudyParam).bg = function (_set____db54di) {
  this.value = _set____db54di;
};
protoOf(StudyParam).b1 = function () {
  return this.value;
};
function TradeDataItem() {
}
function TradingSessionData() {
}
function ADX() {
  StudyBuilder.call(this);
}
protoOf(ADX).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(ADX).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_0 instanceof AverageTypeEnum ? tmp_0 : THROW_CCE();
  return listOf_0(CommonFunctions_getInstance().gg(data, length, averageType));
};
function negateExact($this, a) {
  if (a === IntCompanionObject_getInstance().MIN_VALUE) {
    throw Exception_init_$Create$('Integer overflow');
  }
  return -a | 0;
}
function Companion_7() {
  Companion_instance_7 = this;
}
protoOf(Companion_7).hg = function (data, length, averageType) {
  var displace = negateExact(this, length - 1 | 0);
  var todayADX = CommonFunctions_getInstance().gg(data, length, averageType);
  var periodADX = new DisplacementFunction(CommonFunctions_getInstance().gg(data, length, averageType), displace);
  return new ArithmeticFunction(todayADX, periodADX, ArithmeticOperation_MIDPOINT_getInstance());
};
var Companion_instance_7;
function Companion_getInstance_10() {
  if (Companion_instance_7 == null)
    new Companion_7();
  return Companion_instance_7;
}
function ADXR() {
  Companion_getInstance_10();
  StudyBuilder.call(this);
}
protoOf(ADXR).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(ADXR).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_0 instanceof AverageTypeEnum ? tmp_0 : THROW_CCE();
  return listOf([CommonFunctions_getInstance().gg(data, length, averageType), Companion_getInstance_10().hg(data, length, averageType)]);
};
function AccelerationDeceleration() {
  StudyBuilder.call(this);
}
protoOf(AccelerationDeceleration).rf = function (data, params) {
  var awesome = CommonFunctions_getInstance().ig(data);
  var avgAwesome = new MovingAverageSimple(CommonFunctions_getInstance().ig(data), 5);
  var accDec = new ArithmeticFunction(awesome, avgAwesome, ArithmeticOperation_MINUS_getInstance());
  var zero = new ZeroFunction();
  return listOf([accDec, zero]);
};
function AccumulationDistribution() {
  StudyBuilder.call(this);
}
protoOf(AccumulationDistribution).rf = function (data, params) {
  var accDist = WindowFunction_init_$Create$(CommonFunctions_getInstance().jg(data), 0, true);
  var zero = new ZeroFunction();
  return listOf([accDist, zero]);
};
function constructAroonFunction($this, length, daysSince) {
  var arg1 = new ArithmeticFunction(new ArithmeticFunction(new ConstantFunction(length - 1 | 0), daysSince, ArithmeticOperation_MINUS_getInstance()), new ConstantFunction(length - 1 | 0), ArithmeticOperation_DIV_ZERO_getInstance());
  return new ArithmeticFunction(new ConstantFunction(100.0), arg1, ArithmeticOperation_MULT_getInstance());
}
function Companion_8() {
  Companion_instance_8 = this;
  this.kg_1 = 'overbought';
  this.lg_1 = 'oversold';
}
protoOf(Companion_8).mg = function (data, length) {
  return constructAroonFunction(this, length, new HighestHighPeriod(new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance()), length));
};
protoOf(Companion_8).ng = function (data, length) {
  return constructAroonFunction(this, length, new LowestLowPeriod(new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance()), length));
};
var Companion_instance_8;
function Companion_getInstance_11() {
  if (Companion_instance_8 == null)
    new Companion_8();
  return Companion_instance_8;
}
function Aroon() {
  Companion_getInstance_11();
  StudyBuilder.call(this);
}
protoOf(Aroon).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_8().mf_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_11().kg_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_11().lg_1);
};
protoOf(Aroon).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_11().kg_1);
  var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_11().lg_1);
  var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var aroonUp = Companion_getInstance_11().mg(data, length);
  var aroonDown = Companion_getInstance_11().ng(data, length);
  var oversoldFunction = new ConstantFunction(oversold);
  var overboughtFunction = new ConstantFunction(overbought);
  return listOf([aroonUp, aroonDown, overboughtFunction, oversoldFunction]);
};
function Companion_9() {
  Companion_instance_9 = this;
  this.og_1 = 'overbought';
  this.pg_1 = 'oversold';
}
var Companion_instance_9;
function Companion_getInstance_12() {
  if (Companion_instance_9 == null)
    new Companion_9();
  return Companion_instance_9;
}
function AroonOscillator() {
  Companion_getInstance_12();
  StudyBuilder.call(this);
}
protoOf(AroonOscillator).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_12().og_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_12().pg_1);
};
protoOf(AroonOscillator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_12().og_1);
  var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_12().pg_1);
  var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var aroonUp = Companion_getInstance_11().mg(data, length);
  var aroonDown = Companion_getInstance_11().ng(data, length);
  var aroonOscillator = new ArithmeticFunction(aroonUp, aroonDown, ArithmeticOperation_MINUS_getInstance());
  var overboughtFunction = new ConstantFunction(overbought);
  var midLine = new ZeroFunction();
  var oversoldFunction = new ConstantFunction(oversold);
  return listOf([overboughtFunction, midLine, oversoldFunction, aroonOscillator]);
};
function AverageTrueRange() {
  StudyBuilder.call(this);
}
protoOf(AverageTrueRange).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(AverageTrueRange).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_0 instanceof AverageTypeEnum ? tmp_0 : THROW_CCE();
  var tr = CommonFunctions_getInstance().qg(data);
  var atr = CommonFunctions_getInstance().rg(averageType, tr, length);
  return listOf_0(atr);
};
function AwesomeOscillator() {
  StudyBuilder.call(this);
}
protoOf(AwesomeOscillator).rf = function (data, params) {
  var awesome = CommonFunctions_getInstance().ig(data);
  var zero = new ZeroFunction();
  return listOf([awesome, zero]);
};
function constructBandFunction($this, price, params, numDev, averageType) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var deviation = new StandardDeviationFunction(price, length);
  var displacedDeviation = new DisplacementFunction(deviation, displace);
  var average = CommonFunctions_getInstance().rg(averageType, price, length);
  var displacedEma = new DisplacementFunction(average, displace);
  return new ArithmeticFunction(displacedEma, new ArithmeticFunction(displacedDeviation, new ConstantFunction(numDev), ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_PLUS_getInstance());
}
function BollingerBands() {
  StudyBuilder.call(this);
  this.sg_1 = 'numDevUp';
  this.tg_1 = 'numDevDown';
}
protoOf(BollingerBands).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
  protoOf(StudyBuilder).zf.call(this, params, this.sg_1);
  protoOf(StudyBuilder).zf.call(this, params, this.tg_1);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(BollingerBands).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_2 instanceof AverageTypeEnum ? tmp_2 : THROW_CCE();
  var price = new PriceSourceFunction(data, priceField);
  var average = CommonFunctions_getInstance().rg(averageType, price, length);
  var displacedEma = new DisplacementFunction(average, displace);
  var tmp_3 = params.k1(this.sg_1);
  var numDevUp = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
  var upBand = constructBandFunction(this, price, params, numDevUp, averageType);
  var tmp_4 = params.k1(this.tg_1);
  var numDevDown = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
  var lowBand = constructBandFunction(this, price, params, numDevDown, averageType);
  return listOf([lowBand, displacedEma, upBand]);
};
protoOf(BollingerBands).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function Companion_10() {
  Companion_instance_10 = this;
  this.ug_1 = 'oversold';
  this.vg_1 = 'overbought';
}
var Companion_instance_10;
function Companion_getInstance_13() {
  if (Companion_instance_10 == null)
    new Companion_10();
  return Companion_instance_10;
}
function CCI() {
  Companion_getInstance_13();
  StudyBuilder.call(this);
}
protoOf(CCI).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_13().vg_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_13().ug_1);
};
protoOf(CCI).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_13().vg_1);
  var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_13().ug_1);
  var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var price = CommonFunctions_getInstance().wg(data);
  var avg = new MovingAverageSimple(price, length);
  var linDev = new LinearDeviationFunction(price, length);
  var c0015 = new ConstantFunction(0.015);
  var cci = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(price, avg, ArithmeticOperation_MINUS_getInstance()), linDev, ArithmeticOperation_DIV_ZERO_getInstance()), c0015, ArithmeticOperation_DIV_getInstance());
  var zero = new ZeroFunction();
  var overboughtF = new ConstantFunction(overbought);
  var oversoldF = new ConstantFunction(oversold);
  return listOf([cci, overboughtF, zero, oversoldF]);
};
function Companion_11() {
  Companion_instance_11 = this;
  this.xg_1 = 'period';
}
var Companion_instance_11;
function Companion_getInstance_14() {
  if (Companion_instance_11 == null)
    new Companion_11();
  return Companion_instance_11;
}
function CenterOfGravityOscillator() {
  Companion_getInstance_14();
  StudyBuilder.call(this);
}
protoOf(CenterOfGravityOscillator).qf = function (params) {
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_14().xg_1);
};
protoOf(CenterOfGravityOscillator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_14().xg_1);
  var period = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var price = new PriceSourceFunction(data, priceField);
  var weightedSum = new SimpleWeightedSumFunction(price, period);
  var sum = new SumFunction(price, period);
  var minuFactor = new ConstantFunction(-1.0);
  var cog = new ArithmeticFunction(new ArithmeticFunction(weightedSum, sum, ArithmeticOperation_DIV_getInstance()), minuFactor, ArithmeticOperation_MULT_getInstance());
  return listOf_0(cog);
};
function constructEmaDistributionFunction($this, accDist, length) {
  return new MovingAverageExponential(accDist, length);
}
function Companion_12() {
  Companion_instance_12 = this;
  this.yg_1 = 'shortLength';
  this.zg_1 = 'longLength';
}
var Companion_instance_12;
function Companion_getInstance_15() {
  if (Companion_instance_12 == null)
    new Companion_12();
  return Companion_instance_12;
}
function ChaikinOscillator() {
  Companion_getInstance_15();
  StudyBuilder.call(this);
}
protoOf(ChaikinOscillator).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_15().yg_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_15().zg_1);
};
protoOf(ChaikinOscillator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_15().yg_1);
  var shortLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_15().zg_1);
  var longLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var emaShort = constructEmaDistributionFunction(Companion_getInstance_15(), CommonFunctions_getInstance().jg(data), shortLength);
  var emaLong = constructEmaDistributionFunction(Companion_getInstance_15(), CommonFunctions_getInstance().jg(data), longLength);
  var chaikinOsc = WindowFunction_init_$Create$(new ArithmeticFunction(emaShort, emaLong, ArithmeticOperation_MINUS_getInstance()), 0, true);
  var zero = new ZeroFunction();
  return listOf([chaikinOsc, zero]);
};
function constructSmaHighLowDiffFunction($this, data, length) {
  var diffPrice = CommonFunctions_getInstance().ah(data);
  return new MovingAverageSimple(diffPrice, length);
}
function Companion_13() {
  Companion_instance_13 = this;
  this.bh_1 = 1.0E-7;
  this.ch_1 = 'shiftLength';
}
var Companion_instance_13;
function Companion_getInstance_16() {
  if (Companion_instance_13 == null)
    new Companion_13();
  return Companion_instance_13;
}
function ChaikinVolatility() {
  Companion_getInstance_16();
  StudyBuilder.call(this);
}
protoOf(ChaikinVolatility).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_16().ch_1);
};
protoOf(ChaikinVolatility).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_16().ch_1);
  var shiftLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var smaDelayed = new DisplacementFunction(constructSmaHighLowDiffFunction(Companion_getInstance_16(), data, length), -shiftLength | 0);
  var sma = constructSmaHighLowDiffFunction(Companion_getInstance_16(), data, length);
  var chvFract = new IfFunction(CommonFunctions_getInstance().dh(Companion_getInstance_16().bh_1), smaDelayed, new ArithmeticFunction(sma, smaDelayed, ArithmeticOperation_DIFF_DIV_RIGHT_getInstance()), CommonFunctions_getInstance().dg_1);
  var chv = new ArithmeticFunction(chvFract, CommonFunctions_getInstance().fg_1, ArithmeticOperation_MULT_getInstance());
  var zero = new ZeroFunction();
  return listOf([chv, zero]);
};
function constructInOrDecrementFunction($this, closeDiffFactor, factor) {
  var closeDiff = new ArithmeticFunction(closeDiffFactor, new ConstantFunction(factor), ArithmeticOperation_MULT_getInstance());
  return new ArithmeticFunction(closeDiff, new ConstantFunction(0.0), ArithmeticOperation_MAX_getInstance());
}
function ChandeMomentumOscillator() {
  StudyBuilder.call(this);
}
protoOf(ChandeMomentumOscillator).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
};
protoOf(ChandeMomentumOscillator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var price = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var increment = constructInOrDecrementFunction(this, new DiffPrevFunction(price), 1);
  var sumIncrement = new SumFunction(increment, length);
  var decrement = constructInOrDecrementFunction(this, new DiffPrevFunction(price), -1);
  var sumDecrement = new SumFunction(decrement, length);
  var cmoFract = new ArithmeticFunction(sumIncrement, sumDecrement, ArithmeticOperation_DIFF_DIV_SUM_ZERO_getInstance());
  var cmo = WindowFunction_init_$Create$(new ArithmeticFunction(cmoFract, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance()), 0, true);
  var upper = new ConstantFunction(50.0);
  var lower = new ConstantFunction(-50.0);
  var zero = new ZeroFunction();
  return listOf([cmo, upper, lower, zero]);
};
function constructCommoditySelection($this, data, params) {
  var tmp = params.k1($this.eh_1);
  var bigPointValue = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1($this.fh_1);
  var myCommission = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1($this.gh_1);
  var myMargin = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_3 instanceof AverageTypeEnum ? tmp_3 : THROW_CCE();
  var coefficient = constructCoefficient($this, bigPointValue, myCommission, myMargin);
  var adxr = Companion_getInstance_10().hg(data, length, averageType);
  var movingAverage = CommonFunctions_getInstance().rg(averageType, CommonFunctions_getInstance().qg(data), length);
  var coefficientMultByMovingAverage = new ArithmeticFunction(coefficient, movingAverage, ArithmeticOperation_MULT_getInstance());
  return new ArithmeticFunction(coefficientMultByMovingAverage, adxr, ArithmeticOperation_MULT_getInstance());
}
function constructCoefficient($this, bigPointValue, myCommission, myMargin) {
  var c100 = new ConstantFunction(100.0);
  var tmp = new ConstantFunction(bigPointValue);
  var tmp$ret$0;
  // Inline function 'kotlin.math.sqrt' call
  tmp$ret$0 = Math.sqrt(myMargin);
  var x = new ArithmeticFunction(tmp, new ConstantFunction(tmp$ret$0), ArithmeticOperation_DIV_getInstance());
  var y = new ConstantFunction(150 + myCommission);
  var z = new ArithmeticFunction(x, y, ArithmeticOperation_DIV_getInstance());
  return new ArithmeticFunction(c100, z, ArithmeticOperation_MULT_getInstance());
}
function CommoditySelection() {
  StudyBuilder.call(this);
  this.eh_1 = 'bigPointValue';
  this.fh_1 = 'myCommission';
  this.gh_1 = 'myMargin';
}
protoOf(CommoditySelection).qf = function (params) {
  protoOf(StudyBuilder).zf.call(this, params, this.eh_1);
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).zf.call(this, params, this.fh_1);
  protoOf(StudyBuilder).zf.call(this, params, this.gh_1);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(CommoditySelection).rf = function (data, params) {
  var si = constructCommoditySelection(this, data, params);
  return listOf_0(si);
};
function Comparative() {
  StudyBuilder.call(this);
}
protoOf(Comparative).rf = function (data, params) {
  var function_0 = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  return listOf_0(function_0);
};
function DEMA() {
  StudyBuilder.call(this);
}
protoOf(DEMA).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
};
protoOf(DEMA).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var term1 = new ArithmeticFunction(new ConstantFunction(2.0), new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), ArithmeticOperation_MULT_getInstance());
  var term2 = new MovingAverageExponential(new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), length, length);
  var dema = new ArithmeticFunction(term1, term2, ArithmeticOperation_MINUS_getInstance());
  return listOf_0(new DisplacementFunction(dema, displace));
};
protoOf(DEMA).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function DMI() {
  StudyBuilder.call(this);
}
protoOf(DMI).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(DMI).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_0 instanceof AverageTypeEnum ? tmp_0 : THROW_CCE();
  var diPlus = CommonFunctions_getInstance().hh(data, length, true, averageType);
  var diMinus = CommonFunctions_getInstance().hh(data, length, false, averageType);
  var aDx = CommonFunctions_getInstance().gg(data, length, averageType);
  return listOf([WindowFunction_init_$Create$(diMinus, 0, true), WindowFunction_init_$Create$(diPlus, 0, true), aDx]);
};
function Companion_14() {
  Companion_instance_14 = this;
  this.ih_1 = 'aggregation';
  this.jh_1 = 'showOnlyLast';
  this.kh_1 = 'rightexpansion';
}
var Companion_instance_14;
function Companion_getInstance_17() {
  if (Companion_instance_14 == null)
    new Companion_14();
  return Companion_instance_14;
}
function DayOpenClose() {
  Companion_getInstance_17();
  StudyBuilder.call(this);
}
protoOf(DayOpenClose).qf = function (params) {
  protoOf(StudyBuilder).ag.call(this, params, Companion_getInstance_17().ih_1);
  protoOf(StudyBuilder).yf.call(this, params, Companion_getInstance_17().jh_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_17().kh_1);
};
protoOf(DayOpenClose).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_17().ih_1);
  var aggregation = tmp instanceof AggregationTypeEnum ? tmp : THROW_CCE();
  var open = new PriceAggregatedSourceFunction(data, aggregation, PriceFieldEnum_OPEN_getInstance());
  var close = new PriceAggregatedSourceFunction(data, aggregation, PriceFieldEnum_CLOSE_getInstance());
  return listOf([open, close]);
};
protoOf(DayOpenClose).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_17().kh_1);
  return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
};
protoOf(DayOpenClose).df = function (params) {
  var tmp = params.k1(Companion_getInstance_17().ih_1);
  return tmp instanceof AggregationTypeEnum ? tmp : THROW_CCE();
};
protoOf(DayOpenClose).ff = function (params) {
  var tmp = params.k1(Companion_getInstance_17().jh_1);
  return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
};
function constructHighAverageFunction($this, data) {
  var highDiff = new DiffPrevFunction(new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance()));
  var highDiffPos = new ArithmeticFunction(new ZeroFunction(), highDiff, ArithmeticOperation_MAX_getInstance());
  return new MovingAverageSimple(highDiffPos, 8);
}
function constructLowAverageFunction($this, data) {
  var lowDiff = new DiffPrevFunction(new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance()));
  var negLowDiff = new ArithmeticFunction(new ZeroFunction(), lowDiff, ArithmeticOperation_MINUS_getInstance());
  var lowDiffPos = new ArithmeticFunction(new ZeroFunction(), negLowDiff, ArithmeticOperation_MAX_getInstance());
  return new MovingAverageSimple(lowDiffPos, 8);
}
function DeMarker() {
  StudyBuilder.call(this);
}
protoOf(DeMarker).rf = function (data, params) {
  var c100 = new ConstantFunction(100.0);
  var function_0 = new ArithmeticFunction(constructHighAverageFunction(this, data), constructLowAverageFunction(this, data), ArithmeticOperation_PLUS_getInstance());
  var dm = WindowFunction_init_$Create$(new ArithmeticFunction(new ArithmeticFunction(constructHighAverageFunction(this, data), function_0, ArithmeticOperation_DIV_ZERO_getInstance()), c100, ArithmeticOperation_MULT_getInstance()), 0, true);
  return listOf_0(dm);
};
function DetrendedPriceOsc() {
  StudyBuilder.call(this);
}
protoOf(DetrendedPriceOsc).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
};
protoOf(DetrendedPriceOsc).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var disp = (length / 2 | 0) + 1 | 0;
  var price = new PriceSourceFunction(data, priceField);
  var dispPriceAv = new DisplacementFunction(price, -disp | 0);
  var sma = new MovingAverageSimple(dispPriceAv, length);
  var dpo = new ArithmeticFunction(price, sma, ArithmeticOperation_MINUS_getInstance());
  var zero = new ZeroFunction();
  return listOf([dpo, zero]);
};
function constructRatio($this, priceSource, stdevLength, avgOfStdevLength) {
  var std = new StandardDeviationFunction(priceSource, stdevLength);
  var stdAverage = new MovingAverageSimple(std, avgOfStdevLength);
  return new ArithmeticFunction(std, stdAverage, ArithmeticOperation_DIV_getInstance());
}
function constructDynamicLength($this, ratio, dymiLength) {
  return new Floor(new ArithmeticFunction(new ConstantFunction(dymiLength), ratio, ArithmeticOperation_DIV_getInstance()));
}
function Companion_15() {
  Companion_instance_15 = this;
  this.lh_1 = 'maxDynamicLength';
  this.mh_1 = 'minDynamicLength';
  this.nh_1 = 'stDevLength';
  this.oh_1 = 'stDevAverageLength';
  this.ph_1 = 'dynamicLength';
  this.qh_1 = 'oversold';
  this.rh_1 = 'overbought';
}
protoOf(Companion_15).sh = function (priceSource, stdevLength, avgOfStdevLength, dymiLength, lowerLimit, upperLimit, averageType) {
  var ratio = constructRatio(this, priceSource, stdevLength, avgOfStdevLength);
  var dynamicLength = constructDynamicLength(this, ratio, dymiLength);
  return new DynamicMomentumIndexFunction(priceSource, dynamicLength, lowerLimit, upperLimit, averageType);
};
var Companion_instance_15;
function Companion_getInstance_18() {
  if (Companion_instance_15 == null)
    new Companion_15();
  return Companion_instance_15;
}
function DynamicMomentumIndex() {
  Companion_getInstance_18();
  StudyBuilder.call(this);
}
protoOf(DynamicMomentumIndex).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_18().lh_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_18().mh_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_18().nh_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_18().oh_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_18().ph_1);
};
protoOf(DynamicMomentumIndex).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_18().nh_1);
  var stdevLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_18().oh_1);
  var avgOfStdevLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_18().ph_1);
  var dymiLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_18().lh_1);
  var upperLimit = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_18().mh_1);
  var lowerLimit = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
  var tmp_4 = params.k1(Companion_getInstance_18().qh_1);
  var oversold = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
  var tmp_5 = params.k1(Companion_getInstance_18().rh_1);
  var overbought = (!(tmp_5 == null) ? typeof tmp_5 === 'number' : false) ? tmp_5 : THROW_CCE();
  var tmp_6 = params.k1(Companion_getInstance_8().of_1);
  var priceFieldEnum = tmp_6 instanceof PriceFieldEnum ? tmp_6 : THROW_CCE();
  var priceSource = new PriceSourceFunction(data, priceFieldEnum);
  var dmi = Companion_getInstance_18().sh(priceSource, stdevLength, avgOfStdevLength, dymiLength, lowerLimit, upperLimit, AverageTypeEnum_WILDERS_getInstance());
  return listOf([dmi, new ConstantFunction(overbought), new ConstantFunction(oversold)]);
};
function EMA() {
  StudyBuilder.call(this);
}
protoOf(EMA).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
};
protoOf(EMA).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var priceFunc = new PriceSourceFunction(data, priceField);
  var emaFunc = new MovingAverageExponential(priceFunc, length);
  return listOf_0(displace === 0 ? emaFunc : new DisplacementFunction(emaFunc, displace));
};
protoOf(EMA).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function Elder() {
  StudyBuilder.call(this);
}
protoOf(Elder).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
};
protoOf(Elder).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var closePriceSource = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var avgBull = new MovingAverageExponential(closePriceSource, length);
  var avgBear = new MovingAverageExponential(closePriceSource, length);
  var high = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var low = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var bull = new ArithmeticFunction(high, avgBull, ArithmeticOperation_MINUS_getInstance());
  var bear = new ArithmeticFunction(low, avgBear, ArithmeticOperation_MINUS_getInstance());
  var zero = new ZeroFunction();
  return listOf([bull, bear, zero]);
};
function Companion_16() {
  Companion_instance_16 = this;
  this.th_1 = 'priceAbove';
  this.uh_1 = 'percentAbove';
  this.vh_1 = 'priceBelow';
  this.wh_1 = 'percentBelow';
}
var Companion_instance_16;
function Companion_getInstance_19() {
  if (Companion_instance_16 == null)
    new Companion_16();
  return Companion_instance_16;
}
function EnvelopeCommon() {
  Companion_getInstance_19();
  StudyBuilder.call(this);
}
protoOf(EnvelopeCommon).xh = function (data, params, isAbove) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var priceField;
  var percent;
  if (isAbove) {
    var tmp_1 = params.k1(Companion_getInstance_19().th_1);
    priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
    var tmp_2 = params.k1(Companion_getInstance_19().uh_1);
    percent = 1 + ((!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE()) / 100;
  } else {
    var tmp_3 = params.k1(Companion_getInstance_19().vh_1);
    priceField = tmp_3 instanceof PriceFieldEnum ? tmp_3 : THROW_CCE();
    var tmp_4 = params.k1(Companion_getInstance_19().wh_1);
    percent = 1 - ((!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE()) / 100;
  }
  var price = new PriceSourceFunction(data, priceField);
  var average = this.yh(price, length);
  var displacement = new DisplacementFunction(average, displace);
  return new ArithmeticFunction(displacement, new ConstantFunction(percent), ArithmeticOperation_MULT_getInstance());
};
protoOf(EnvelopeCommon).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
  protoOf(StudyBuilder).wf.call(this, params, Companion_getInstance_19().th_1);
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_19().uh_1);
  protoOf(StudyBuilder).wf.call(this, params, Companion_getInstance_19().vh_1);
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_19().wh_1);
};
protoOf(EnvelopeCommon).rf = function (data, params) {
  var above = this.xh(data, params, true);
  var below = this.xh(data, params, false);
  return listOf([above, below]);
};
protoOf(EnvelopeCommon).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function EnvelopeEMA() {
  EnvelopeCommon.call(this);
}
protoOf(EnvelopeEMA).yh = function (price, length) {
  return new MovingAverageExponential(price, length);
};
function EnvelopeSMA() {
  EnvelopeCommon.call(this);
}
protoOf(EnvelopeSMA).yh = function (price, length) {
  return new MovingAverageSimple(price, length);
};
function EnvelopeSMMA() {
  EnvelopeCommon.call(this);
}
protoOf(EnvelopeSMMA).yh = function (price, length) {
  return new MovingAverageSmoothed(price, length);
};
function EnvelopeWMA() {
  EnvelopeCommon.call(this);
}
protoOf(EnvelopeWMA).yh = function (price, length) {
  return new MovingAverageWeighted(price, length);
};
function Companion_17() {
  Companion_instance_17 = this;
  this.zh_1 = 'kPeriod';
  this.ai_1 = 'dPeriod';
  this.bi_1 = 'overbought';
  this.ci_1 = 'oversold';
}
var Companion_instance_17;
function Companion_getInstance_20() {
  if (Companion_instance_17 == null)
    new Companion_17();
  return Companion_instance_17;
}
function FastStochastic() {
  Companion_getInstance_20();
  StudyBuilder.call(this);
}
protoOf(FastStochastic).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_20().zh_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_20().ai_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_20().bi_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_20().ci_1);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(FastStochastic).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_20().zh_1);
  var kperiod = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_20().ai_1);
  var dperiod = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_20().bi_1);
  var overbought = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_20().ci_1);
  var oversold = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_3 instanceof AverageTypeEnum ? tmp_3 : THROW_CCE();
  return CommonFunctions_getInstance().di(data, dperiod, overbought, oversold, kperiod, 1, averageType);
};
function Companion_18() {
  Companion_instance_18 = this;
  this.ei_1 = 'multiplier';
}
var Companion_instance_18;
function Companion_getInstance_21() {
  if (Companion_instance_18 == null)
    new Companion_18();
  return Companion_instance_18;
}
function FibonacciBollingerBands() {
  Companion_getInstance_21();
  StudyBuilder.call(this);
}
protoOf(FibonacciBollingerBands).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_21().ei_1);
};
protoOf(FibonacciBollingerBands).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_21().ei_1);
  var mult = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
  var src = new PriceSourceFunction(data, priceField);
  var sma1 = new MovingAverageSimple(new ArithmeticFunction(volume, src, ArithmeticOperation_MULT_getInstance()), length);
  var sma2 = new MovingAverageSimple(volume, length);
  var basis = new ArithmeticFunction(sma1, sma2, ArithmeticOperation_DIV_getInstance());
  var dev = new ArithmeticFunction(new ConstantFunction(mult), new StandardDeviationFunction(src, length), ArithmeticOperation_MULT_getInstance());
  var const1 = new ArithmeticFunction(new ConstantFunction(0.236), dev, ArithmeticOperation_MULT_getInstance());
  var const2 = new ArithmeticFunction(new ConstantFunction(0.382), dev, ArithmeticOperation_MULT_getInstance());
  var const3 = new ArithmeticFunction(new ConstantFunction(0.5), dev, ArithmeticOperation_MULT_getInstance());
  var const4 = new ArithmeticFunction(new ConstantFunction(0.618), dev, ArithmeticOperation_MULT_getInstance());
  var const5 = new ArithmeticFunction(new ConstantFunction(0.764), dev, ArithmeticOperation_MULT_getInstance());
  var const6 = new ArithmeticFunction(new ConstantFunction(1.0), dev, ArithmeticOperation_MULT_getInstance());
  var upper_1 = new ArithmeticFunction(basis, const1, ArithmeticOperation_PLUS_getInstance());
  var upper_2 = new ArithmeticFunction(basis, const2, ArithmeticOperation_PLUS_getInstance());
  var upper_3 = new ArithmeticFunction(basis, const3, ArithmeticOperation_PLUS_getInstance());
  var upper_4 = new ArithmeticFunction(basis, const4, ArithmeticOperation_PLUS_getInstance());
  var upper_5 = new ArithmeticFunction(basis, const5, ArithmeticOperation_PLUS_getInstance());
  var upper_6 = new ArithmeticFunction(basis, const6, ArithmeticOperation_PLUS_getInstance());
  var lower_1 = new ArithmeticFunction(basis, const1, ArithmeticOperation_MINUS_getInstance());
  var lower_2 = new ArithmeticFunction(basis, const2, ArithmeticOperation_MINUS_getInstance());
  var lower_3 = new ArithmeticFunction(basis, const3, ArithmeticOperation_MINUS_getInstance());
  var lower_4 = new ArithmeticFunction(basis, const4, ArithmeticOperation_MINUS_getInstance());
  var lower_5 = new ArithmeticFunction(basis, const5, ArithmeticOperation_MINUS_getInstance());
  var lower_6 = new ArithmeticFunction(basis, const6, ArithmeticOperation_MINUS_getInstance());
  return listOf([basis, upper_1, upper_2, upper_3, upper_4, upper_5, upper_6, lower_1, lower_2, lower_3, lower_4, lower_5, lower_6]);
};
function ForceIndex() {
  StudyBuilder.call(this);
}
protoOf(ForceIndex).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
};
protoOf(ForceIndex).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var closeDiff = new DiffPrevFunction(new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance()));
  var cv = new ArithmeticFunction(closeDiff, new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance()), ArithmeticOperation_MULT_getInstance());
  var fi = new MovingAverageExponential(cv, length, 1);
  var zero = new ZeroFunction();
  return listOf([fi, zero]);
};
function constructFosc($this, data, params) {
  var priceClose = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var yForecast = new DisplacementFunction(constructForecast($this, data, params), -1);
  var priceCloseMinusForecast = new ArithmeticFunction(priceClose, yForecast, ArithmeticOperation_MINUS_getInstance());
  var divPriceClose = new ArithmeticFunction(priceCloseMinusForecast, priceClose, ArithmeticOperation_DIV_getInstance());
  return new ArithmeticFunction(divPriceClose, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
}
function constructForecast($this, data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var priceClose = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var linearRegressionCurve = new LinearRegressionCurveFunction(priceClose, length);
  var linearRegressionSlope = Companion_getInstance_32().fi(data, length, PriceFieldEnum_CLOSE_getInstance());
  return new ArithmeticFunction(linearRegressionCurve, linearRegressionSlope, ArithmeticOperation_PLUS_getInstance());
}
function Companion_19() {
  Companion_instance_19 = this;
  this.gi_1 = 'smLength';
}
var Companion_instance_19;
function Companion_getInstance_22() {
  if (Companion_instance_19 == null)
    new Companion_19();
  return Companion_instance_19;
}
function ForecastOscillator() {
  Companion_getInstance_22();
  StudyBuilder.call(this);
}
protoOf(ForecastOscillator).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_22().gi_1);
};
protoOf(ForecastOscillator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_22().gi_1);
  var smLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var fosc = constructFosc(this, data, params);
  var zero = new ZeroFunction();
  var sma = new MovingAverageSimple(fosc, smLength);
  return listOf([fosc, sma, zero]);
};
function Companion_20() {
  Companion_instance_20 = this;
  this.hi_1 = 'kPeriod';
  this.ii_1 = 'kSlowing';
  this.ji_1 = 'dPeriod';
  this.ki_1 = 'overbought';
  this.li_1 = 'oversold';
}
var Companion_instance_20;
function Companion_getInstance_23() {
  if (Companion_instance_20 == null)
    new Companion_20();
  return Companion_instance_20;
}
function FullStochastic() {
  Companion_getInstance_23();
  StudyBuilder.call(this);
}
protoOf(FullStochastic).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_23().hi_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_23().ii_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_23().ji_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_23().ki_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_23().li_1);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(FullStochastic).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_23().hi_1);
  var kperiod = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_23().ii_1);
  var kslowing = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_23().ji_1);
  var dperiod = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_23().ki_1);
  var overbought = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_23().li_1);
  var oversold = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
  var tmp_4 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_4 instanceof AverageTypeEnum ? tmp_4 : THROW_CCE();
  return CommonFunctions_getInstance().di(data, dperiod, overbought, oversold, kperiod, kslowing, averageType);
};
function Companion_21() {
  Companion_instance_21 = this;
  this.mi_1 = 'showPriceLines';
}
var Companion_instance_21;
function Companion_getInstance_24() {
  if (Companion_instance_21 == null)
    new Companion_21();
  return Companion_instance_21;
}
function GTRAP() {
  Companion_getInstance_24();
  StudyBuilder.call(this);
}
protoOf(GTRAP).qf = function (params) {
  protoOf(StudyBuilder).yf.call(this, params, Companion_getInstance_24().mi_1);
};
protoOf(GTRAP).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_24().mi_1);
  var showPriceLines = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  var highPriceLast = new ETHPriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance(), SessionSet_ONLY_LAST_getInstance());
  var lowPriceLast = new ETHPriceSourceFunction(data, PriceFieldEnum_LOW_getInstance(), SessionSet_ONLY_LAST_getInstance());
  var highPrice = new ETHPriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance(), SessionSet_WITHOUT_LAST_getInstance());
  var lowPrice = new ETHPriceSourceFunction(data, PriceFieldEnum_LOW_getInstance(), SessionSet_WITHOUT_LAST_getInstance());
  var lastHighForAllCandles = new ETHPriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance(), SessionSet_ONLY_LAST_FOR_ALL_CANDLES_getInstance());
  var lastLowForAllCandles = new ETHPriceSourceFunction(data, PriceFieldEnum_LOW_getInstance(), SessionSet_ONLY_LAST_FOR_ALL_CANDLES_getInstance());
  var lines = mutableListOf([highPrice, lowPrice, highPriceLast, lowPriceLast]);
  if (showPriceLines) {
    lines.i3(listOf([lastHighForAllCandles, lastLowForAllCandles]));
  } else {
    DoubleCompanionObject_getInstance();
    var tmp_0 = new ConstantFunction(NaN);
    DoubleCompanionObject_getInstance();
    lines.i3(listOf([tmp_0, new ConstantFunction(NaN)]));
  }
  return lines;
};
function GatorOscillator() {
  WilliamsAlligator.call(this);
}
protoOf(GatorOscillator).qf = function (params) {
  this.wf(params, Companion_getInstance_59().ti_1);
  this.wf(params, Companion_getInstance_59().ui_1);
  this.tf(params, Companion_getInstance_59().ni_1);
  this.tf(params, Companion_getInstance_59().oi_1);
  this.tf(params, Companion_getInstance_59().pi_1);
  this.tf(params, Companion_getInstance_59().qi_1);
  this.tf(params, Companion_getInstance_59().ri_1);
  this.tf(params, Companion_getInstance_59().si_1);
  this.xf(params);
};
protoOf(GatorOscillator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_59().ti_1);
  var priceHigh = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_59().ui_1);
  var priceLow = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_59().ni_1);
  var jawLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_59().oi_1);
  var jawDisplace = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_59().pi_1);
  var teethLength = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
  var tmp_4 = params.k1(Companion_getInstance_59().qi_1);
  var teethDisplace = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
  var tmp_5 = params.k1(Companion_getInstance_59().ri_1);
  var lipsLength = (!(tmp_5 == null) ? typeof tmp_5 === 'number' : false) ? tmp_5 : THROW_CCE();
  var tmp_6 = params.k1(Companion_getInstance_59().si_1);
  var lipsDisplace = (!(tmp_6 == null) ? typeof tmp_6 === 'number' : false) ? tmp_6 : THROW_CCE();
  var tmp_7 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_7 instanceof AverageTypeEnum ? tmp_7 : THROW_CCE();
  var medianPrice = Companion_getInstance_59().vi(data, priceHigh, priceLow);
  var jawFunction = Companion_getInstance_59().wi(medianPrice, jawLength, -jawDisplace | 0, averageType);
  var teeth1Function = Companion_getInstance_59().wi(medianPrice, teethLength, -teethDisplace | 0, averageType);
  var teeth2Function = Companion_getInstance_59().wi(medianPrice, teethLength, -teethDisplace | 0, averageType);
  var lipsFunction = Companion_getInstance_59().wi(medianPrice, lipsLength, -lipsDisplace | 0, averageType);
  var histogram1 = new AbsFunction(new ArithmeticFunction(jawFunction, teeth1Function, ArithmeticOperation_MINUS_getInstance()));
  var histogram2 = new ArithmeticFunction(new AbsFunction(new ArithmeticFunction(teeth2Function, lipsFunction, ArithmeticOperation_MINUS_getInstance())), new ConstantFunction(-1.0), ArithmeticOperation_MULT_getInstance());
  var zero = new ZeroFunction();
  return listOf([histogram1, histogram2, zero]);
};
protoOf(GatorOscillator).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_59().oi_1);
  var jawDisplace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_59().qi_1);
  var teethDisplace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_59().si_1);
  var lipsDisplace = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  return MathUtils_getInstance().xi(new Int32Array([jawDisplace, teethDisplace, lipsDisplace]));
};
function HLVolatility() {
  StudyBuilder.call(this);
}
protoOf(HLVolatility).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
};
protoOf(HLVolatility).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var highest = new HighestFunction(highPrice, length);
  var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var lowest = new LowestFunction(lowPrice, length);
  var numerator = new ArithmeticFunction(highest, lowest, ArithmeticOperation_MINUS_getInstance());
  var emaNumerator = new MovingAverageExponential(numerator, length, length);
  var closePrice = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var emaClose = new MovingAverageExponential(closePrice, length);
  var hlvFactor = new ArithmeticFunction(emaNumerator, emaClose, ArithmeticOperation_DIV_ZERO_getInstance());
  var hlv = new ArithmeticFunction(hlvFactor, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
  var zero = new ZeroFunction();
  return listOf([hlv, zero]);
};
function createIchimokuSen($this, highPrice, lowPrice, length) {
  var maxPrice = new HighestFunction(highPrice, length);
  var minPrice = new LowestFunction(lowPrice, length);
  var maxPlusMin = new ArithmeticFunction(maxPrice, minPrice, ArithmeticOperation_PLUS_getInstance());
  return new ArithmeticFunction(maxPlusMin, new ConstantFunction(2.0), ArithmeticOperation_DIV_getInstance());
}
function createIchimokuSenkouSpanA($this, tenkanSen, kijunSen, displace) {
  var sum = new ArithmeticFunction(tenkanSen, kijunSen, ArithmeticOperation_PLUS_getInstance());
  var sumDiv2 = new ArithmeticFunction(sum, new ConstantFunction(2.0), ArithmeticOperation_DIV_getInstance());
  return new DisplacementFunction(sumDiv2, -displace | 0);
}
function Companion_22() {
  Companion_instance_22 = this;
  this.yi_1 = 'tenkanPeriod';
  this.zi_1 = 'kijunPeriod';
}
var Companion_instance_22;
function Companion_getInstance_25() {
  if (Companion_instance_22 == null)
    new Companion_22();
  return Companion_instance_22;
}
function Ichimoku() {
  Companion_getInstance_25();
  StudyBuilder.call(this);
}
protoOf(Ichimoku).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_25().yi_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_25().zi_1);
};
protoOf(Ichimoku).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_25().yi_1);
  var tenkanPeriod = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_25().zi_1);
  var kijunPeriod = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var periods = imul(kijunPeriod, 2);
  var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var tenkanSenShow = WindowFunction_init_$Create$(createIchimokuSen(Companion_getInstance_25(), highPrice, lowPrice, tenkanPeriod), 0, true);
  var tenkanSen = WindowFunction_init_$Create$(createIchimokuSen(Companion_getInstance_25(), highPrice, lowPrice, tenkanPeriod), 0, true);
  var kijunSenShow = WindowFunction_init_$Create$(createIchimokuSen(Companion_getInstance_25(), highPrice, lowPrice, kijunPeriod), 0, true);
  var kijunSen = WindowFunction_init_$Create$(createIchimokuSen(Companion_getInstance_25(), highPrice, lowPrice, kijunPeriod), 0, true);
  var chikouSpan = WindowFunction_init_$Create$(new DisplacementFunction(close, kijunPeriod), -kijunPeriod | 0, true);
  var senkouSpanA = WindowFunction_init_$Create$(createIchimokuSenkouSpanA(Companion_getInstance_25(), tenkanSen, kijunSen, kijunPeriod), kijunPeriod, true);
  var senkouSpanB = WindowFunction_init_$Create$(new DisplacementFunction(createIchimokuSen(Companion_getInstance_25(), highPrice, lowPrice, periods), -kijunPeriod | 0), kijunPeriod, true);
  return listOf([tenkanSenShow, kijunSenShow, chikouSpan, senkouSpanA, senkouSpanB]);
};
protoOf(Ichimoku).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_25().zi_1);
  return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
};
function ImpliedVolatility() {
  StudyBuilder.call(this);
}
protoOf(ImpliedVolatility).rf = function (data, params) {
  return listOf_0(new PriceSourceFunction(data, PriceFieldEnum_IMP_VOLATILITY_getInstance()));
};
function Companion_23() {
  Companion_instance_23 = this;
  this.aj_1 = 'showHistoricalVolatility';
  this.bj_1 = 30;
  this.cj_1 = 252;
  this.dj_1 = 5;
}
var Companion_instance_23;
function Companion_getInstance_26() {
  if (Companion_instance_23 == null)
    new Companion_23();
  return Companion_instance_23;
}
function getVolatilitySegregationFunctions($this, data, yearHigh, yearLow) {
  var lines = ArrayList_init_$Create$_0(Companion_getInstance_26().dj_1 - 1 | 0);
  var distanceHistoricalVolatility = new ArithmeticFunction(new ArithmeticFunction(yearHigh, yearLow, ArithmeticOperation_MINUS_getInstance()), new ConstantFunction(Companion_getInstance_26().dj_1), ArithmeticOperation_DIV_getInstance());
  var inductionVariable = Companion_getInstance_26().dj_1 - 1 | 0;
  if (1 <= inductionVariable)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + -1 | 0;
      lines.a(limit($this, data, new ArithmeticFunction(yearLow, new ArithmeticFunction(new ConstantFunction(i), distanceHistoricalVolatility, ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_PLUS_getInstance())));
    }
     while (1 <= inductionVariable);
  return lines;
}
function getHistoricalVolatilityFunction($this, data) {
  var continuouslyCompoundedReturn = new LnDivPrevFunction(new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance()));
  // Inline function 'kotlin.math.sqrt' call
  var tmp0_sqrt = 1.0 * Companion_getInstance_26().bj_1 * Companion_getInstance_26().cj_1 / (Companion_getInstance_26().bj_1 - 1 | 0);
  var annualizingFactor = Math.sqrt(tmp0_sqrt);
  return new ArithmeticFunction(new StandardDeviationFunction(continuouslyCompoundedReturn, Companion_getInstance_26().bj_1), new ConstantFunction(annualizingFactor), ArithmeticOperation_MULT_getInstance());
}
function getImpVolatilityFunction($this, data) {
  return new PriceSourceFunction(data, PriceFieldEnum_IMP_VOLATILITY_getInstance());
}
function limit($this, tradeDataHolder, srcFunction) {
  return new LimitFunction(tradeDataHolder, srcFunction, Companion_getInstance_26().cj_1);
}
function ImpliedVolatilityGauge() {
  Companion_getInstance_26();
  StudyBuilder.call(this);
}
protoOf(ImpliedVolatilityGauge).rf = function (data, params) {
  var lines = ArrayList_init_$Create$_0((2 + Companion_getInstance_26().dj_1 | 0) + 1 | 0);
  var impVolatility = getImpVolatilityFunction(this, data);
  var historicalVolatility = getHistoricalVolatilityFunction(this, data);
  var yearHigh = new HighestFunction(historicalVolatility, Companion_getInstance_26().cj_1);
  lines.a(limit(this, data, yearHigh));
  var yearLow = new LowestFunction(historicalVolatility, Companion_getInstance_26().cj_1);
  lines.i3(getVolatilitySegregationFunctions(this, data, yearHigh, yearLow));
  lines.a(limit(this, data, yearLow));
  lines.a(limit(this, data, impVolatility));
  var tmp = params.k1(Companion_getInstance_26().aj_1);
  var showHistoricalVolatility = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  if (showHistoricalVolatility) {
    lines.a(limit(this, data, historicalVolatility));
  } else {
    DoubleCompanionObject_getInstance();
    lines.a(new ConstantFunction(NaN));
  }
  return lines;
};
protoOf(ImpliedVolatilityGauge).qf = function (params) {
  this.yf(params, Companion_getInstance_26().aj_1);
};
function constructInertia($this, data, regressionLength, rviLength) {
  var rvi = Companion_getInstance_44().gj(data, rviLength);
  return new LinearRegressionCurveFunction(rvi, regressionLength);
}
function Companion_24() {
  Companion_instance_24 = this;
  this.hj_1 = 'rviLength';
  this.ij_1 = 'regressionLength';
  this.jj_1 = new ConstantFunction(50.0);
}
var Companion_instance_24;
function Companion_getInstance_27() {
  if (Companion_instance_24 == null)
    new Companion_24();
  return Companion_instance_24;
}
function Inertia() {
  Companion_getInstance_27();
  StudyBuilder.call(this);
}
protoOf(Inertia).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_27().hj_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_27().ij_1);
};
protoOf(Inertia).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_27().ij_1);
  var regressionLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_27().hj_1);
  var rviLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var inertia = constructInertia(this, data, regressionLength, rviLength);
  return listOf([inertia, Companion_getInstance_27().jj_1]);
};
function Companion_25() {
  Companion_instance_25 = this;
  this.kj_1 = 'overbought';
  this.lj_1 = 'oversold';
}
var Companion_instance_25;
function Companion_getInstance_28() {
  if (Companion_instance_25 == null)
    new Companion_25();
  return Companion_instance_25;
}
function IntradayMomentumIndex() {
  Companion_getInstance_28();
  StudyBuilder.call(this);
}
protoOf(IntradayMomentumIndex).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_28().kj_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_28().lj_1);
};
protoOf(IntradayMomentumIndex).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_28().kj_1);
  var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_28().lj_1);
  var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var openPriceSourceFunction = new PriceSourceFunction(data, PriceFieldEnum_OPEN_getInstance());
  var closePriceSourceFunction = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var siUp = new IntradaySumFunction(new ArithmeticFunction(closePriceSourceFunction, openPriceSourceFunction, ArithmeticOperation_MINUS_getInstance()), length);
  var siDown = new IntradaySumFunction(new ArithmeticFunction(openPriceSourceFunction, closePriceSourceFunction, ArithmeticOperation_MINUS_getInstance()), length);
  var imi = new ArithmeticFunction(new ArithmeticFunction(siUp, new ArithmeticFunction(siUp, siDown, ArithmeticOperation_PLUS_getInstance()), ArithmeticOperation_DIV_ZERO_getInstance()), new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
  var overboughtF = new ConstantFunction(overbought);
  var oversoldF = new ConstantFunction(oversold);
  return listOf([imi, overboughtF, oversoldF]);
};
function constructKRI($this, data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var smaAverage = new MovingAverageSimple(new PriceSourceFunction(data, priceField), length);
  var smaAverage2 = new MovingAverageSimple(new PriceSourceFunction(data, priceField), length);
  var priceMinusSmaAverage = new ArithmeticFunction(new PriceSourceFunction(data, priceField), smaAverage, ArithmeticOperation_MINUS_getInstance());
  var priceMinusSmaAverageDivSmaAverage = new ArithmeticFunction(priceMinusSmaAverage, smaAverage2, ArithmeticOperation_DIV_getInstance());
  return new ArithmeticFunction(priceMinusSmaAverageDivSmaAverage, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
}
function KRI() {
  StudyBuilder.call(this);
}
protoOf(KRI).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
};
protoOf(KRI).rf = function (data, params) {
  return listOf([constructKRI(this, data, params), new ZeroFunction()]);
};
var nfastend;
var nslowend;
function Companion_26() {
  Companion_instance_26 = this;
  this.mj_1 = 1.0E-7;
}
var Companion_instance_26;
function Companion_getInstance_29() {
  if (Companion_instance_26 == null)
    new Companion_26();
  return Companion_instance_26;
}
function KaufmanMovingAverage() {
  Companion_getInstance_29();
  StudyBuilder.call(this);
}
protoOf(KaufmanMovingAverage).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
};
protoOf(KaufmanMovingAverage).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var Length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var xPrice = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var xvnoise = new AbsFunction(new DiffPrevFunction(xPrice));
  var nsignal = new AbsFunction(new DiffPrevFunction(xPrice, Length));
  var nnoise = new SumFunction(xvnoise, Length);
  var nefratio = new IfFunction(CommonFunctions_getInstance().dh(Companion_getInstance_29().mj_1), nnoise, new ArithmeticFunction(nsignal, nnoise, ArithmeticOperation_DIV_getInstance()), new ZeroFunction());
  var nsmooth = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(nefratio, new ConstantFunction(nfastend - nslowend), ArithmeticOperation_MULT_getInstance()), new ConstantFunction(nslowend), ArithmeticOperation_PLUS_getInstance()), new ConstantFunction(2.0), ArithmeticOperation_POW_getInstance());
  var nAMA = new KaufmanNamaFunction(nsmooth, xPrice);
  return listOf_0(nAMA);
};
function Companion_27() {
  Companion_instance_27 = this;
  this.nj_1 = 'factor';
}
var Companion_instance_27;
function Companion_getInstance_30() {
  if (Companion_instance_27 == null)
    new Companion_27();
  return Companion_instance_27;
}
function KeltnerChannels() {
  Companion_getInstance_30();
  StudyBuilder.call(this);
}
protoOf(KeltnerChannels).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_30().nj_1);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(KeltnerChannels).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_30().nj_1);
  var factor = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_2 instanceof AverageTypeEnum ? tmp_2 : THROW_CCE();
  var price = new PriceSourceFunction(data, priceField);
  var midLine = CommonFunctions_getInstance().rg(averageType, price, length);
  var ucEma = CommonFunctions_getInstance().rg(averageType, price, length);
  var lcEma = CommonFunctions_getInstance().rg(averageType, price, length);
  var ucAtr = new MovingAverageSimple(CommonFunctions_getInstance().qg(data), length);
  var lcAtr = new MovingAverageSimple(CommonFunctions_getInstance().qg(data), length);
  var upperBand = new ArithmeticFunction(ucEma, new ArithmeticFunction(new ConstantFunction(factor), ucAtr, ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_PLUS_getInstance());
  var lowerBand = new ArithmeticFunction(lcEma, new ArithmeticFunction(new ConstantFunction(factor), lcAtr, ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_MINUS_getInstance());
  return listOf([lowerBand, midLine, upperBand]);
};
function constructLinearRegressionCurve($this, data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var priceSource = new PriceSourceFunction(data, priceField);
  return new LinearRegressionCurveFunction(priceSource, length);
}
function LinearRegression() {
  StudyBuilder.call(this);
}
protoOf(LinearRegression).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
};
protoOf(LinearRegression).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var linearRegressionCurve = constructLinearRegressionCurve(this, data, params);
  return listOf_0(new DisplacementFunction(linearRegressionCurve, displace));
};
protoOf(LinearRegression).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function Companion_28() {
  Companion_instance_28 = this;
  this.oj_1 = 'width';
}
var Companion_instance_28;
function Companion_getInstance_31() {
  if (Companion_instance_28 == null)
    new Companion_28();
  return Companion_instance_28;
}
function LinearRegressionChannel() {
  Companion_getInstance_31();
  StudyBuilder.call(this);
}
protoOf(LinearRegressionChannel).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_31().oj_1);
};
protoOf(LinearRegressionChannel).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_31().oj_1);
  var width = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var dataObj = data instanceof DataItemsView ? data : THROW_CCE();
  var tmp_2 = dataObj.me_1;
  var candlesDataHolder = tmp_2 instanceof CandleTradeDataHolder ? tmp_2 : THROW_CCE();
  var tmp_3 = candlesDataHolder.bb_1.a4(data.lb() - length | 0, data.lb());
  var targetCandles = isInterface(tmp_3, MutableList) ? tmp_3 : THROW_CCE();
  var newCandlesDataHolder = new CandleTradeDataHolder(targetCandles);
  var priceSource = new PriceSourceFunction(newCandlesDataHolder, priceField);
  var lrcShow = WindowFunction_init_$Create$(new LinearRegressionFunction(priceSource), 0, true);
  var midLine = new DisplacementFunction(lrcShow, (-data.lb() | 0) + length | 0);
  var lowerLineChannel = new ArithmeticFunction(lrcShow, new ConstantFunction(width / 3.0), ArithmeticOperation_MINUS_getInstance());
  var lowerLine = new DisplacementFunction(lowerLineChannel, (-data.lb() | 0) + length | 0);
  var upperLineChannel = new ArithmeticFunction(lrcShow, new ConstantFunction(width / 3.0), ArithmeticOperation_PLUS_getInstance());
  var upperLine = new DisplacementFunction(upperLineChannel, (-data.lb() | 0) + length | 0);
  return listOf([lowerLine, midLine, upperLine]);
};
function Companion_29() {
  Companion_instance_29 = this;
}
protoOf(Companion_29).fi = function (data, length, priceField) {
  var c6 = new ConstantFunction(6.0);
  var priceSource = new PriceSourceFunction(data, priceField);
  var priceWma = new MovingAverageWeighted(priceSource, length);
  var priceSma = new MovingAverageSimple(priceSource, length);
  var lengthMinusOne = new ConstantFunction(length - 1 | 0);
  var priceWmaMinusPriceSma = new ArithmeticFunction(priceWma, priceSma, ArithmeticOperation_MINUS_getInstance());
  var priceWmaMinusPriceSmaMultBy6 = new ArithmeticFunction(priceWmaMinusPriceSma, c6, ArithmeticOperation_MULT_getInstance());
  return new ArithmeticFunction(priceWmaMinusPriceSmaMultBy6, lengthMinusOne, ArithmeticOperation_DIV_getInstance());
};
var Companion_instance_29;
function Companion_getInstance_32() {
  if (Companion_instance_29 == null)
    new Companion_29();
  return Companion_instance_29;
}
function LinearRegressionSlope() {
  Companion_getInstance_32();
  StudyBuilder.call(this);
}
protoOf(LinearRegressionSlope).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
};
protoOf(LinearRegressionSlope).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  return listOf_0(Companion_getInstance_32().fi(data, length, priceField));
};
function constructMACDValue($this, data, params) {
  var tmp = params.k1($this.pj_1);
  var fastLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1($this.qj_1);
  var slowLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_1 instanceof AverageTypeEnum ? tmp_1 : THROW_CCE();
  var price = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  return $this.sj(fastLength, slowLength, averageType, price);
}
function constructMACDAverage($this, macd, params) {
  var tmp = params.k1($this.pj_1);
  var fastLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1($this.qj_1);
  var slowLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1($this.rj_1);
  var macdLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_2 instanceof AverageTypeEnum ? tmp_2 : THROW_CCE();
  var tmp_3 = CommonFunctions_getInstance();
  var tmp$ret$0;
  // Inline function 'kotlin.comparisons.maxOf' call
  tmp$ret$0 = Math.max(slowLength, fastLength);
  return tmp_3.tj(averageType, macd, macdLength, tmp$ret$0);
}
function constructMACDDiff($this, macd, macdAverage) {
  return new ArithmeticFunction(macd, macdAverage, ArithmeticOperation_MINUS_getInstance());
}
function Companion_30() {
  Companion_instance_30 = this;
  this.pj_1 = 'fastLength';
  this.qj_1 = 'slowLength';
  this.rj_1 = 'macdLength';
}
protoOf(Companion_30).sj = function (fastLength, slowLength, averageType, price) {
  var emaFast = CommonFunctions_getInstance().rg(averageType, price, fastLength);
  var emaSlow = CommonFunctions_getInstance().rg(averageType, price, slowLength);
  return new ArithmeticFunction(emaFast, emaSlow, ArithmeticOperation_MINUS_getInstance());
};
var Companion_instance_30;
function Companion_getInstance_33() {
  if (Companion_instance_30 == null)
    new Companion_30();
  return Companion_instance_30;
}
function MACD() {
  Companion_getInstance_33();
  StudyBuilder.call(this);
}
protoOf(MACD).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_33().pj_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_33().qj_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_33().rj_1);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(MACD).rf = function (data, params) {
  var valueForAvg1 = constructMACDValue(Companion_getInstance_33(), data, params);
  var valueForAvg2 = constructMACDValue(Companion_getInstance_33(), data, params);
  var valueForDiff = constructMACDValue(Companion_getInstance_33(), data, params);
  var valueShow = constructMACDValue(Companion_getInstance_33(), data, params);
  var avg = constructMACDAverage(Companion_getInstance_33(), valueForAvg1, params);
  var avgForDiff = constructMACDAverage(Companion_getInstance_33(), valueForAvg2, params);
  var diff = constructMACDDiff(Companion_getInstance_33(), valueForDiff, avgForDiff);
  return listOf([valueShow, avg, diff]);
};
function MarketFacilitationIndex() {
  StudyBuilder.call(this);
}
protoOf(MarketFacilitationIndex).rf = function (data, params) {
  var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
  var c100 = new ConstantFunction(100.0);
  var mfi = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation_MINUS_getInstance()), volume, ArithmeticOperation_DIV_ZERO_getInstance()), c100, ArithmeticOperation_MULT_getInstance());
  return listOf_0(mfi);
};
function constructEmaHighLowDiffFunction($this, data, length) {
  var diffPrice = CommonFunctions_getInstance().ah(data);
  return new MovingAverageExponential(diffPrice, length);
}
function Companion_31() {
  Companion_instance_31 = this;
  this.uj_1 = 'sumLength';
  this.vj_1 = 'setup';
  this.wj_1 = 'trigger';
}
var Companion_instance_31;
function Companion_getInstance_34() {
  if (Companion_instance_31 == null)
    new Companion_31();
  return Companion_instance_31;
}
function MassIndex() {
  Companion_getInstance_34();
  StudyBuilder.call(this);
}
protoOf(MassIndex).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_34().uj_1);
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_34().vj_1);
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_34().wj_1);
};
protoOf(MassIndex).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_34().uj_1);
  var sumLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_34().vj_1);
  var setupLevel = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_34().wj_1);
  var triggerLevel = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var emaDiff1 = constructEmaHighLowDiffFunction(Companion_getInstance_34(), data, length);
  var emaDiff2 = constructEmaHighLowDiffFunction(Companion_getInstance_34(), data, length);
  var emaEmaDiff = new MovingAverageExponential(emaDiff1, length, length);
  var miFract = new ArithmeticFunction(emaDiff2, emaEmaDiff, ArithmeticOperation_DIV_ZERO_getInstance());
  var mi = new SumFunction(miFract, sumLength);
  var setup = new ConstantFunction(setupLevel);
  var trigger = new ConstantFunction(triggerLevel);
  return listOf([mi, trigger, setup]);
};
function MedianPrice() {
  StudyBuilder.call(this);
}
protoOf(MedianPrice).rf = function (data, params) {
  var medianPrice = new PriceSourceFunction(data, PriceFieldEnum_MEDIAN_getInstance());
  return listOf_0(medianPrice);
};
function Momentum() {
  StudyBuilder.call(this);
}
protoOf(Momentum).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
};
protoOf(Momentum).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var price = new PriceSourceFunction(data, priceField);
  var pDelayed = new DisplacementFunction(price, -length | 0);
  var momentum = new ArithmeticFunction(price, pDelayed, ArithmeticOperation_MINUS_getInstance());
  var zero = new ZeroFunction();
  return listOf([momentum, zero]);
};
function constructMFI($this, data, length) {
  var sumPrice = CommonFunctions_getInstance().wg(data);
  var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
  var moneyFlowPositive = new MoneyFlowFunction(sumPrice, volume, true);
  var posAvgMF = new MovingAverageSimple(moneyFlowPositive, length);
  var moneyFlowNegative = new MoneyFlowFunction(sumPrice, volume, false);
  var totalAvgMF = new MovingAverageSimple(moneyFlowNegative, length);
  var c100 = new ConstantFunction(100.0);
  return new ArithmeticFunction(new ArithmeticFunction(posAvgMF, totalAvgMF, ArithmeticOperation_DIV_ZERO_getInstance()), c100, ArithmeticOperation_MULT_getInstance());
}
function Companion_32() {
  Companion_instance_32 = this;
  this.xj_1 = 'overbought';
  this.yj_1 = 'oversold';
}
var Companion_instance_32;
function Companion_getInstance_35() {
  if (Companion_instance_32 == null)
    new Companion_32();
  return Companion_instance_32;
}
function MoneyFlowIndex() {
  Companion_getInstance_35();
  StudyBuilder.call(this);
}
protoOf(MoneyFlowIndex).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_35().xj_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_35().yj_1);
};
protoOf(MoneyFlowIndex).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_35().xj_1);
  var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_35().yj_1);
  var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var overboughtF = new ConstantFunction(overbought);
  var oversoldF = new ConstantFunction(oversold);
  var mfi = constructMFI(Companion_getInstance_35(), data, length);
  return listOf([mfi, overboughtF, oversoldF]);
};
function NegativeVolumeIndex() {
  StudyBuilder.call(this);
}
protoOf(NegativeVolumeIndex).rf = function (data, params) {
  var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
  var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var nvi = new NegativeVolumeIndexFunction(volume, close);
  return listOf_0(nvi);
};
function OnBalanceVolume() {
  StudyBuilder.call(this);
}
protoOf(OnBalanceVolume).rf = function (data, params) {
  var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
  var diffPrev = new DiffPrevFunction(close);
  var sign = new SignFunction(diffPrev);
  var bv = new ArithmeticFunction(sign, volume, ArithmeticOperation_MULT_getInstance());
  var obv = WindowFunction_init_$Create$(new CumulativeSumFunction(bv), 0, true);
  return listOf_0(obv);
};
function Companion_33() {
  Companion_instance_33 = this;
  this.zj_1 = 'fastLength';
  this.ak_1 = 'slowLength';
}
var Companion_instance_33;
function Companion_getInstance_36() {
  if (Companion_instance_33 == null)
    new Companion_33();
  return Companion_instance_33;
}
function Oscillator() {
  Companion_getInstance_36();
  StudyBuilder.call(this);
}
protoOf(Oscillator).qf = function (params) {
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_36().zj_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_36().ak_1);
};
protoOf(Oscillator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_36().zj_1);
  var fastLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_36().ak_1);
  var slowLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var price = new PriceSourceFunction(data, priceField);
  var smaFast = new MovingAverageSimple(price, fastLength);
  var smaSlow = new MovingAverageSimple(price, slowLength);
  var oscFactor = new ArithmeticFunction(smaFast, smaSlow, ArithmeticOperation_DIFF_DIV_RIGHT_getInstance());
  var osc = new ArithmeticFunction(oscFactor, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
  var zero = new ZeroFunction();
  return listOf([osc, zero]);
};
function Companion_34() {
  Companion_instance_34 = this;
  this.bk_1 = 'high';
  this.ck_1 = 'low';
}
var Companion_instance_34;
function Companion_getInstance_37() {
  if (Companion_instance_34 == null)
    new Companion_34();
  return Companion_instance_34;
}
function ParabolicSAR() {
  Companion_getInstance_37();
  StudyBuilder.call(this);
}
protoOf(ParabolicSAR).qf = function (params) {
  protoOf(StudyBuilder).wf.call(this, params, Companion_getInstance_37().bk_1);
  protoOf(StudyBuilder).wf.call(this, params, Companion_getInstance_37().ck_1);
};
protoOf(ParabolicSAR).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_37().bk_1);
  var highField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_37().ck_1);
  var lowField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var accFactor = 0.02;
  var accLimit = 0.2;
  var highPrice = new PriceSourceFunction(data, highField);
  var lowPrice = new PriceSourceFunction(data, lowField);
  var sar = WindowFunction_init_$Create$(new ParabolicSarFunction(highPrice, lowPrice, accFactor, accLimit), 0, true);
  return listOf_0(sar);
};
function constructPercentChange($this, data, priceField) {
  var price = new PriceSourceFunction(data, priceField);
  var priceDisplace = new DisplacementFunction(price, -1);
  var priceMinusDisplaced = new ArithmeticFunction(price, priceDisplace, ArithmeticOperation_MINUS_getInstance());
  var priceMinusDisplacedMultBy100 = new ArithmeticFunction(new ConstantFunction(100.0), priceMinusDisplaced, ArithmeticOperation_MULT_getInstance());
  return new ArithmeticFunction(priceMinusDisplacedMultBy100, priceDisplace, ArithmeticOperation_DIV_getInstance());
}
function PercentChange() {
  StudyBuilder.call(this);
}
protoOf(PercentChange).qf = function (params) {
  protoOf(StudyBuilder).vf.call(this, params);
};
protoOf(PercentChange).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var percentChange = constructPercentChange(this, data, priceField);
  return listOf([percentChange, new ZeroFunction()]);
};
function Companion_35() {
  Companion_instance_35 = this;
  this.dk_1 = 'overbought';
  this.ek_1 = 'oversold';
}
var Companion_instance_35;
function Companion_getInstance_38() {
  if (Companion_instance_35 == null)
    new Companion_35();
  return Companion_instance_35;
}
function PercentOfResistance() {
  Companion_getInstance_38();
  StudyBuilder.call(this);
}
protoOf(PercentOfResistance).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_8().mf_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_38().dk_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_38().ek_1);
};
protoOf(PercentOfResistance).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_38().dk_1);
  var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_38().ek_1);
  var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var low = new LowestFunction(lowPrice, length);
  var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var high = new HighestFunction(highPrice, length);
  var high2 = new HighestFunction(highPrice, length);
  var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var cMinus100 = new ConstantFunction(-100.0);
  var numerator = new ArithmeticFunction(high, close, ArithmeticOperation_MINUS_getInstance());
  var denominator = new ArithmeticFunction(high2, low, ArithmeticOperation_MINUS_getInstance());
  var divResult = new ArithmeticFunction(numerator, denominator, ArithmeticOperation_DIV_getInstance());
  var multBycMinus100 = new ArithmeticFunction(divResult, cMinus100, ArithmeticOperation_MULT_getInstance());
  var pcrF = new ArithmeticFunction(multBycMinus100, cMinus100, ArithmeticOperation_MINUS_getInstance());
  var overboughtF = new ConstantFunction(overbought);
  var oversoldF = new ConstantFunction(oversold);
  return listOf([pcrF, overboughtF, oversoldF]);
};
function Companion_36() {
  Companion_instance_36 = this;
  this.fk_1 = 'fastLength';
  this.gk_1 = 'slowLength';
}
protoOf(Companion_36).hk = function (data, fastLength, slowLength, priceField, averageType) {
  var priceSource = new PriceSourceFunction(data, priceField);
  var priceOscillator = Companion_getInstance_42().kk(data, fastLength, slowLength, priceField, averageType);
  var priceOscillatorMultBy100 = new ArithmeticFunction(priceOscillator, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
  return new ArithmeticFunction(priceOscillatorMultBy100, new MovingAverageExponential(priceSource, slowLength), ArithmeticOperation_DIV_getInstance());
};
var Companion_instance_36;
function Companion_getInstance_39() {
  if (Companion_instance_36 == null)
    new Companion_36();
  return Companion_instance_36;
}
function PercentagePriceOscillator() {
  Companion_getInstance_39();
  StudyBuilder.call(this);
}
protoOf(PercentagePriceOscillator).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_39().fk_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_39().gk_1);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(PercentagePriceOscillator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_39().fk_1);
  var fastLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_39().gk_1);
  var slowLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_2 instanceof AverageTypeEnum ? tmp_2 : THROW_CCE();
  var priceOscillator = Companion_getInstance_39().hk(data, fastLength, slowLength, priceField, averageType);
  return listOf([priceOscillator, new ZeroFunction()]);
};
function constructPivot($this, data, type) {
  var prevAggregationContainer = new PrevAggregationContainer(data, type);
  var close = new PrevAggregationFunction(prevAggregationContainer, PriceFieldEnum_CLOSE_getInstance());
  var hi = new PrevAggregationFunction(prevAggregationContainer, PriceFieldEnum_HIGH_getInstance());
  var low = new PrevAggregationFunction(prevAggregationContainer, PriceFieldEnum_LOW_getInstance());
  var pivot = new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(hi, low, ArithmeticOperation_PLUS_getInstance()), close, ArithmeticOperation_PLUS_getInstance()), new ConstantFunction(3.0), ArithmeticOperation_DIV_getInstance());
  var doublePivot = new ArithmeticFunction(pivot, new ConstantFunction(2.0), ArithmeticOperation_MULT_getInstance());
  var r1 = new ArithmeticFunction(doublePivot, low, ArithmeticOperation_MINUS_getInstance());
  var s1 = new ArithmeticFunction(doublePivot, hi, ArithmeticOperation_MINUS_getInstance());
  var hml = new ArithmeticFunction(hi, low, ArithmeticOperation_MINUS_getInstance());
  var r2 = new ArithmeticFunction(pivot, hml, ArithmeticOperation_PLUS_getInstance());
  var r3 = new ArithmeticFunction(r2, hml, ArithmeticOperation_PLUS_getInstance());
  var lmh = new ArithmeticFunction(low, hi, ArithmeticOperation_MINUS_getInstance());
  var s2 = new ArithmeticFunction(pivot, lmh, ArithmeticOperation_PLUS_getInstance());
  var s3 = new ArithmeticFunction(s2, lmh, ArithmeticOperation_PLUS_getInstance());
  return listOf([r3, r2, r1, pivot, s1, s2, s3]);
}
function Companion_37() {
  Companion_instance_37 = this;
  this.lk_1 = 'aggregation';
  this.mk_1 = 'showOnlyLast';
}
var Companion_instance_37;
function Companion_getInstance_40() {
  if (Companion_instance_37 == null)
    new Companion_37();
  return Companion_instance_37;
}
function PivotPoints() {
  Companion_getInstance_40();
  StudyBuilder.call(this);
}
protoOf(PivotPoints).qf = function (params) {
  protoOf(StudyBuilder).ag.call(this, params, Companion_getInstance_40().lk_1);
  protoOf(StudyBuilder).yf.call(this, params, Companion_getInstance_40().mk_1);
};
protoOf(PivotPoints).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_40().lk_1);
  var aggregation = tmp instanceof AggregationTypeEnum ? tmp : THROW_CCE();
  return constructPivot(Companion_getInstance_40(), data, aggregation);
};
protoOf(PivotPoints).df = function (params) {
  var tmp = params.k1(Companion_getInstance_40().lk_1);
  return tmp instanceof AggregationTypeEnum ? tmp : THROW_CCE();
};
protoOf(PivotPoints).ff = function (params) {
  var tmp = params.k1(Companion_getInstance_40().mk_1);
  return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
};
function Companion_38() {
  Companion_instance_38 = this;
  this.nk_1 = 'shiftLength';
}
var Companion_instance_38;
function Companion_getInstance_41() {
  if (Companion_instance_38 == null)
    new Companion_38();
  return Companion_instance_38;
}
function PriceChannel() {
  Companion_getInstance_41();
  StudyBuilder.call(this);
}
protoOf(PriceChannel).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_41().nk_1);
};
protoOf(PriceChannel).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_41().nk_1);
  var shiftLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var highest = new HighestFunction(highPrice, length);
  var highestDisplaced = new DisplacementFunction(highest, shiftLength - 1 | 0);
  var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var lowest = new LowestFunction(lowPrice, length);
  var lowestDisplaced = new DisplacementFunction(lowest, shiftLength - 1 | 0);
  return listOf([highestDisplaced, lowestDisplaced]);
};
protoOf(PriceChannel).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_41().nk_1);
  var shiftLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -shiftLength | 0;
};
function Companion_39() {
  Companion_instance_39 = this;
  this.ik_1 = 'fastLength';
  this.jk_1 = 'slowLength';
}
protoOf(Companion_39).kk = function (data, fastLength, slowLength, priceField, averageType) {
  var priceSource = new PriceSourceFunction(data, priceField);
  var firstMovingAverage = CommonFunctions_getInstance().rg(averageType, priceSource, fastLength);
  var secondMovingAverage = CommonFunctions_getInstance().rg(averageType, priceSource, slowLength);
  return new ArithmeticFunction(firstMovingAverage, secondMovingAverage, ArithmeticOperation_MINUS_getInstance());
};
var Companion_instance_39;
function Companion_getInstance_42() {
  if (Companion_instance_39 == null)
    new Companion_39();
  return Companion_instance_39;
}
function PriceOscillator() {
  Companion_getInstance_42();
  StudyBuilder.call(this);
}
protoOf(PriceOscillator).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_42().ik_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_42().jk_1);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(PriceOscillator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_42().ik_1);
  var fastLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_42().jk_1);
  var slowLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_2 instanceof AverageTypeEnum ? tmp_2 : THROW_CCE();
  var priceOscillator = Companion_getInstance_42().kk(data, fastLength, slowLength, priceField, averageType);
  return listOf([priceOscillator, new ZeroFunction()]);
};
function PriceVolumeTrend() {
  StudyBuilder.call(this);
}
protoOf(PriceVolumeTrend).rf = function (data, params) {
  var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
  var diffDivPrev = new DiffDivPrevFunction(close);
  var pv = new ArithmeticFunction(diffDivPrev, volume, ArithmeticOperation_MULT_getInstance());
  var pvt = WindowFunction_init_$Create$(new CumulativeSumFunction(pv), 0, true);
  return listOf_0(pvt);
};
function ROC() {
  StudyBuilder.call(this);
}
protoOf(ROC).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
};
protoOf(ROC).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var price = new PriceSourceFunction(data, priceField);
  var pDelayed = new DisplacementFunction(price, -length | 0);
  var rocFract = new ArithmeticFunction(price, pDelayed, ArithmeticOperation_DIFF_DIV_RIGHT_getInstance());
  var roc = new ArithmeticFunction(rocFract, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
  var zero = new ZeroFunction();
  return listOf([roc, zero]);
};
function createRCI($this, data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var priceSource = new PriceSourceFunction(data, priceField);
  var sumOfSquareRanks = new SpearmansRho(priceSource, length);
  return new ArithmeticFunction(sumOfSquareRanks, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
}
function RankCorrelationIndex() {
  StudyBuilder.call(this);
  this.ok_1 = 'overbought';
  this.pk_1 = 'oversold';
  this.qk_1 = 'averageLength';
}
protoOf(RankCorrelationIndex).qf = function (params) {
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, this.ok_1);
  protoOf(StudyBuilder).tf.call(this, params, this.pk_1);
  protoOf(StudyBuilder).tf.call(this, params, this.qk_1);
};
protoOf(RankCorrelationIndex).rf = function (data, params) {
  var tmp = params.k1(this.ok_1);
  var overbought = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(this.pk_1);
  var oversold = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(this.qk_1);
  var averageLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var zero = new ZeroFunction();
  var rci = createRCI(this, data, params);
  var rciAverage = new MovingAverageSimple(createRCI(this, data, params), averageLength);
  return listOf([rci, rciAverage, new ConstantFunction(overbought), zero, new ConstantFunction(oversold)]);
};
function Companion_40() {
  Companion_instance_40 = this;
  this.rk_1 = 'overbought';
  this.sk_1 = 'oversold';
}
var Companion_instance_40;
function Companion_getInstance_43() {
  if (Companion_instance_40 == null)
    new Companion_40();
  return Companion_instance_40;
}
function RelativeStrengthIndex() {
  Companion_getInstance_43();
  StudyBuilder.call(this);
}
protoOf(RelativeStrengthIndex).qf = function (params) {
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_43().rk_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_43().sk_1);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(RelativeStrengthIndex).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_43().rk_1);
  var overbought = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_43().sk_1);
  var oversold = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_3 instanceof AverageTypeEnum ? tmp_3 : THROW_CCE();
  var priceSourceFunction = new PriceSourceFunction(data, priceField);
  var overboughtF = new ConstantFunction(overbought);
  var oversoldF = new ConstantFunction(oversold);
  var rsi = CommonFunctions_getInstance().tk(priceSourceFunction, length, averageType);
  return listOf([rsi, overboughtF, oversoldF]);
};
function RelativeVigorIndex() {
  StudyBuilder.call(this);
}
protoOf(RelativeVigorIndex).rf = function (data, params) {
  var rvi = CommonFunctions_getInstance().uk(data);
  return listOf_0(rvi);
};
function RelativeVigorIndexSMA() {
  StudyBuilder.call(this);
}
protoOf(RelativeVigorIndexSMA).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
};
protoOf(RelativeVigorIndexSMA).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var smaRvi = new MovingAverageSimple(CommonFunctions_getInstance().uk(data), length);
  return listOf_0(smaRvi);
};
function Companion_41() {
  Companion_instance_41 = this;
  this.ej_1 = 'overbought';
  this.fj_1 = 'oversold';
}
protoOf(Companion_41).gj = function (data, length) {
  var hiPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var loPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var highRVI = new RelativeVolatilityFunction(hiPrice, length);
  var lowRVI = new RelativeVolatilityFunction(loPrice, length);
  return new ArithmeticFunction(new ArithmeticFunction(highRVI, lowRVI, ArithmeticOperation_PLUS_getInstance()), new ConstantFunction(2.0), ArithmeticOperation_DIV_getInstance());
};
var Companion_instance_41;
function Companion_getInstance_44() {
  if (Companion_instance_41 == null)
    new Companion_41();
  return Companion_instance_41;
}
function RelativeVolatilityIndex() {
  Companion_getInstance_44();
  StudyBuilder.call(this);
}
protoOf(RelativeVolatilityIndex).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_44().ej_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_44().fj_1);
};
protoOf(RelativeVolatilityIndex).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_44().ej_1);
  var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_44().fj_1);
  var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var rvi = Companion_getInstance_44().gj(data, length);
  return listOf([rvi, new ConstantFunction(overbought), new ConstantFunction(oversold)]);
};
function SMA() {
  StudyBuilder.call(this);
}
protoOf(SMA).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
};
protoOf(SMA).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var priceFunc = new PriceSourceFunction(data, priceField);
  var smaFunc = new MovingAverageSimple(priceFunc, length);
  var displacedSmaFunc = new DisplacementFunction(smaFunc, displace);
  return listOf_0(displacedSmaFunc);
};
protoOf(SMA).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function SMMA() {
  StudyBuilder.call(this);
}
protoOf(SMMA).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
};
protoOf(SMMA).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var priceFunc = new PriceSourceFunction(data, priceField);
  var smaFunc = new MovingAverageSmoothed(priceFunc, length);
  var displacedSmaFunc = new DisplacementFunction(smaFunc, displace);
  return listOf_0(displacedSmaFunc);
};
protoOf(SMMA).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function Companion_42() {
  Companion_instance_42 = this;
  this.vk_1 = 'shiftLength';
}
var Companion_instance_42;
function Companion_getInstance_45() {
  if (Companion_instance_42 == null)
    new Companion_42();
  return Companion_instance_42;
}
function SROC() {
  Companion_getInstance_45();
  StudyBuilder.call(this);
}
protoOf(SROC).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_45().vk_1);
};
protoOf(SROC).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_45().vk_1);
  var shiftLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var price = new PriceSourceFunction(data, priceField);
  var emaPrice = new MovingAverageExponential(price, length);
  var emaPriceForDelay = new MovingAverageExponential(price, length);
  var emaPriceDelayed = new DisplacementFunction(emaPriceForDelay, -shiftLength | 0);
  var srocFract = new ArithmeticFunction(emaPrice, emaPriceDelayed, ArithmeticOperation_DIFF_DIV_RIGHT_getInstance());
  var sroc = new ArithmeticFunction(srocFract, new ConstantFunction(100.0), ArithmeticOperation_MULT_getInstance());
  var zero = new ZeroFunction();
  return listOf([sroc, zero]);
};
function priceSma($this, data, priceField, smaLength) {
  return new MovingAverageSimple(new PriceSourceFunction(data, priceField), smaLength);
}
function Companion_43() {
  Companion_instance_43 = this;
  this.wk_1 = 'multiplierFactor';
  this.xk_1 = 'atrLength';
  this.yk_1 = 'smaLength';
}
var Companion_instance_43;
function Companion_getInstance_46() {
  if (Companion_instance_43 == null)
    new Companion_43();
  return Companion_instance_43;
}
function STARCBands() {
  Companion_getInstance_46();
  StudyBuilder.call(this);
}
protoOf(STARCBands).qf = function (params) {
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_46().wk_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_46().xk_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_46().yk_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_8().nf_1);
};
protoOf(STARCBands).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_46().wk_1);
  var multiplierFactor = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_46().xk_1);
  var atrLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_46().yk_1);
  var smaLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_3 instanceof PriceFieldEnum ? tmp_3 : THROW_CCE();
  var upper = new ArithmeticFunction(priceSma(Companion_getInstance_46(), data, priceField, smaLength), new ArithmeticFunction(new ConstantFunction(multiplierFactor), CommonFunctions_getInstance().zk(data, atrLength), ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_PLUS_getInstance());
  var upperDisplace = new DisplacementFunction(upper, displace);
  var lower = new ArithmeticFunction(priceSma(Companion_getInstance_46(), data, priceField, smaLength), new ArithmeticFunction(new ConstantFunction(multiplierFactor), CommonFunctions_getInstance().zk(data, atrLength), ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_MINUS_getInstance());
  var lowerDisplace = new DisplacementFunction(lower, displace);
  var sma = priceSma(Companion_getInstance_46(), data, priceField, smaLength);
  var smaDisplace = new DisplacementFunction(sma, displace);
  return listOf([lowerDisplace, smaDisplace, upperDisplace]);
};
protoOf(STARCBands).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function buildSchaffPF($this, length, func, slowing, offset) {
  var lowest = new LowestFunction(func, length);
  var range = new ArithmeticFunction(new HighestFunction(func, length), lowest, ArithmeticOperation_MINUS_getInstance());
  var fastK = CommonFunctions_getInstance().al(func, lowest, range);
  var scaffFracOffset = offset + (length - 1 | 0) | 0;
  var schaffFrac = new SchaffTrendFrac(range, fastK, scaffFracOffset);
  return new MovingAverageExponential(schaffFrac, slowing, scaffFracOffset);
}
function Companion_44() {
  Companion_instance_44 = this;
  this.bl_1 = 'fastLength';
  this.cl_1 = 'slowLength';
  this.dl_1 = 'kPeriod';
  this.el_1 = 'kSlowing';
  this.fl_1 = new ConstantFunction(20.0);
  this.gl_1 = new ConstantFunction(80.0);
}
var Companion_instance_44;
function Companion_getInstance_47() {
  if (Companion_instance_44 == null)
    new Companion_44();
  return Companion_instance_44;
}
function SchaffTrendCycle() {
  Companion_getInstance_47();
  StudyBuilder.call(this);
}
protoOf(SchaffTrendCycle).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_47().dl_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_47().bl_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_47().cl_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_47().el_1);
};
protoOf(SchaffTrendCycle).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_47().dl_1);
  var kPeriod = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_47().bl_1);
  var fastLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_47().cl_1);
  var slowLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_47().el_1);
  var slowing = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var price = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var macd = Companion_getInstance_33().sj(fastLength, slowLength, AverageTypeEnum_EXPONENTIAL_getInstance(), price);
  // Inline function 'kotlin.comparisons.maxOf' call
  var pfOffset = Math.max(fastLength, slowLength) - 1 | 0;
  var pf = buildSchaffPF(this, kPeriod, macd, slowing, pfOffset);
  var pffOffset = (pfOffset + (kPeriod - 1 | 0) | 0) + (slowing - 1 | 0) | 0;
  var pff = buildSchaffPF(this, kPeriod, pf, slowing, pffOffset);
  return listOf([pff, Companion_getInstance_47().gl_1, Companion_getInstance_47().fl_1]);
};
function Companion_45() {
  Companion_instance_45 = this;
  this.hl_1 = 'kPeriod';
  this.il_1 = 'dPeriod';
  this.jl_1 = 'overbought';
  this.kl_1 = 'oversold';
}
var Companion_instance_45;
function Companion_getInstance_48() {
  if (Companion_instance_45 == null)
    new Companion_45();
  return Companion_instance_45;
}
function SlowStochastic() {
  Companion_getInstance_48();
  StudyBuilder.call(this);
}
protoOf(SlowStochastic).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_48().hl_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_48().il_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_48().jl_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_48().kl_1);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(SlowStochastic).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_48().hl_1);
  var kperiod = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_48().il_1);
  var dperiod = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_48().jl_1);
  var overbought = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_48().kl_1);
  var oversold = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_3 instanceof AverageTypeEnum ? tmp_3 : THROW_CCE();
  return CommonFunctions_getInstance().di(data, dperiod, overbought, oversold, kperiod, 3, averageType);
};
function StandardDeviation() {
  StudyBuilder.call(this);
}
protoOf(StandardDeviation).qf = function (params) {
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).uf.call(this, params);
};
protoOf(StandardDeviation).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var price = new PriceSourceFunction(data, priceField);
  var stdDev = new StandardDeviationFunction(price, length);
  return listOf_0(stdDev);
};
function Companion_46() {
  Companion_instance_46 = this;
  this.ll_1 = 'deviations';
}
var Companion_instance_46;
function Companion_getInstance_49() {
  if (Companion_instance_46 == null)
    new Companion_46();
  return Companion_instance_46;
}
function StandardDeviationChannel() {
  Companion_getInstance_49();
  StudyBuilder.call(this);
}
protoOf(StandardDeviationChannel).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_49().ll_1);
};
protoOf(StandardDeviationChannel).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_49().ll_1);
  var deviations = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var dataObj = data instanceof DataItemsView ? data : THROW_CCE();
  var tmp_2 = dataObj.me_1;
  var candlesDataHolder = tmp_2 instanceof CandleTradeDataHolder ? tmp_2 : THROW_CCE();
  var tmp_3 = candlesDataHolder.bb_1.a4(data.lb() - length | 0, data.lb());
  var targetCandles = isInterface(tmp_3, MutableList) ? tmp_3 : THROW_CCE();
  var newCandlesDataHolder = new CandleTradeDataHolder(targetCandles);
  var price = new PriceSourceFunction(newCandlesDataHolder, priceField);
  var lrcForHigh = WindowFunction_init_$Create$(new LinearRegressionFunction(price), 0, true);
  var lrcForLow = WindowFunction_init_$Create$(new LinearRegressionFunction(price), 0, true);
  var lrcShow = WindowFunction_init_$Create$(new LinearRegressionFunction(price), 0, true);
  var stdhMultHigh = new ArithmeticFunction(lrcForHigh, new ConstantFunction(deviations / 10), ArithmeticOperation_MULT_getInstance());
  var stdhMultLow = new ArithmeticFunction(lrcForLow, new ConstantFunction(deviations / 10), ArithmeticOperation_MULT_getInstance());
  var highLineAr = new ArithmeticFunction(lrcForHigh, stdhMultHigh, ArithmeticOperation_PLUS_getInstance());
  var lowLineAr = new ArithmeticFunction(lrcForLow, stdhMultLow, ArithmeticOperation_MINUS_getInstance());
  var highLine = new DisplacementFunction(highLineAr, (-data.lb() | 0) + length | 0);
  var midLine = new DisplacementFunction(lrcShow, (-data.lb() | 0) + length | 0);
  var lowLine = new DisplacementFunction(lowLineAr, (-data.lb() | 0) + length | 0);
  return listOf([midLine, highLine, lowLine]);
};
function constructMainFunction($this, data, priceField, smLength, linRegLength) {
  var lrc = new LinearRegressionCurveFunction(new PriceSourceFunction(data, priceField), linRegLength);
  return new MovingAverageSimple(lrc, smLength);
}
function constructBandFunction_0($this, data, priceField, smLength, linRegLength, numDev) {
  var mainFunction = constructMainFunction($this, data, priceField, smLength, linRegLength);
  var see = new MovingAverageSimple(new StandardErrorOfEstimationFunction(new PriceSourceFunction(data, priceField), linRegLength), smLength);
  return new ArithmeticFunction(new ArithmeticFunction(see, new ConstantFunction(numDev), ArithmeticOperation_MULT_getInstance()), mainFunction, ArithmeticOperation_PLUS_getInstance());
}
function Companion_47() {
  Companion_instance_47 = this;
  this.ml_1 = 'linRegLength';
  this.nl_1 = 'smLength';
  this.ol_1 = 'numDevUp';
  this.pl_1 = 'numDevDown';
}
var Companion_instance_47;
function Companion_getInstance_50() {
  if (Companion_instance_47 == null)
    new Companion_47();
  return Companion_instance_47;
}
function StandardErrorBands() {
  Companion_getInstance_50();
  StudyBuilder.call(this);
}
protoOf(StandardErrorBands).qf = function (params) {
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_50().ml_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_50().nl_1);
  protoOf(StudyBuilder).sf.call(this, params);
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_50().ol_1);
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_50().pl_1);
};
protoOf(StandardErrorBands).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_50().ml_1);
  var linRegLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_50().nl_1);
  var smLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_50().ol_1);
  var numDevUp = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
  var tmp_4 = params.k1(Companion_getInstance_50().pl_1);
  var numDevDown = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
  return listOf([new DisplacementFunction(constructBandFunction_0(Companion_getInstance_50(), data, priceField, smLength, linRegLength, numDevDown), displace), new DisplacementFunction(constructMainFunction(Companion_getInstance_50(), data, priceField, smLength, linRegLength), displace), new DisplacementFunction(constructBandFunction_0(Companion_getInstance_50(), data, priceField, smLength, linRegLength, numDevUp), displace)]);
};
protoOf(StandardErrorBands).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function StdDevVolatility() {
  StudyBuilder.call(this);
}
protoOf(StdDevVolatility).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
};
protoOf(StdDevVolatility).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var priceFunction = new PriceSourceFunction(data, priceField);
  var lnDivPrevious = new LnDivPrevFunction(priceFunction);
  var sigma = new StandardDeviationFunction(lnDivPrevious, length);
  return listOf_0(sigma);
};
var StudyBuilderFactory_WILLIAMS_FRACTAL_instance;
var StudyBuilderFactory_PERCENTAGE_PRICE_OSCILLATOR_instance;
var StudyBuilderFactory_DYNAMIC_MOMENTUM_INDEX_instance;
var StudyBuilderFactory_WILLIAMS_AD_instance;
var StudyBuilderFactory_PRICE_OSCILLATOR_instance;
var StudyBuilderFactory_PERCENT_CHANGE_instance;
var StudyBuilderFactory_LINEAR_REGRESSION_SLOPE_instance;
var StudyBuilderFactory_LINEAR_REGRESSION_CHANNEL_instance;
var StudyBuilderFactory_COMMODITY_SELECTION_instance;
var StudyBuilderFactory_LINEAR_REGRESSION_instance;
var StudyBuilderFactory_INERTIA_instance;
var StudyBuilderFactory_KRI_instance;
var StudyBuilderFactory_RANK_CORRELATION_INDEX_instance;
var StudyBuilderFactory_SWING_ACCUMULATION_instance;
var StudyBuilderFactory_AROON_OSCILLATOR_instance;
var StudyBuilderFactory_AROON_instance;
var StudyBuilderFactory_SWING_INDEX_instance;
var StudyBuilderFactory_STARCBANDS_instance;
var StudyBuilderFactory_FORECAST_OSCILLATOR_instance;
var StudyBuilderFactory_KELTNER_CHANNELS_instance;
var StudyBuilderFactory_TEMA_instance;
var StudyBuilderFactory_TYPICAL_PRICE_instance;
var StudyBuilderFactory_DEMA_instance;
var StudyBuilderFactory_MEDIAN_PRICE_instance;
var StudyBuilderFactory_FULL_STOCHASTIC_instance;
var StudyBuilderFactory_STANDARD_ERROR_BANDS_instance;
var StudyBuilderFactory_PERCENT_OF_RESISTANCE_instance;
var StudyBuilderFactory_CENTER_OF_GRAVITY_OSCILLATOR_instance;
var StudyBuilderFactory_ACCELERATION_DECELERATION_instance;
var StudyBuilderFactory_ACCUMULATION_DISTRIBUTION_instance;
var StudyBuilderFactory_ADX_instance;
var StudyBuilderFactory_ADXR_instance;
var StudyBuilderFactory_AVERAGE_TRUE_RANGE_instance;
var StudyBuilderFactory_AWESOME_OSCILLATOR_instance;
var StudyBuilderFactory_BOLLINGER_BANDS_instance;
var StudyBuilderFactory_CCI_instance;
var StudyBuilderFactory_CHAIKIN_OSCILLATOR_instance;
var StudyBuilderFactory_CHAIKIN_VOLATILITY_instance;
var StudyBuilderFactory_CHANDE_MOMENTUM_OSCILLATOR_instance;
var StudyBuilderFactory_DE_MARKER_instance;
var StudyBuilderFactory_DETRENDED_PRICE_OSC_instance;
var StudyBuilderFactory_DMI_instance;
var StudyBuilderFactory_ELDER_instance;
var StudyBuilderFactory_EMA_instance;
var StudyBuilderFactory_ENVELOPE_EMA_instance;
var StudyBuilderFactory_ENVELOPE_SMA_instance;
var StudyBuilderFactory_ENVELOPE_SMMA_instance;
var StudyBuilderFactory_ENVELOPE_WMA_instance;
var StudyBuilderFactory_FAST_STOCHASTIC_instance;
var StudyBuilderFactory_FORCE_INDEX_instance;
var StudyBuilderFactory_GATOR_OSCILLATOR_instance;
var StudyBuilderFactory_HLVOLATILITY_instance;
var StudyBuilderFactory_ICHIMOKU_instance;
var StudyBuilderFactory_INTRADAY_MOMENTUM_INDEX_instance;
var StudyBuilderFactory_MACD_instance;
var StudyBuilderFactory_MARKET_FACILITATION_INDEX_instance;
var StudyBuilderFactory_MASS_INDEX_instance;
var StudyBuilderFactory_MOMENTUM_instance;
var StudyBuilderFactory_MONEY_FLOW_INDEX_instance;
var StudyBuilderFactory_NEGATIVE_VOLUME_INDEX_instance;
var StudyBuilderFactory_ON_BALANCE_VOLUME_instance;
var StudyBuilderFactory_DAY_OPEN_CLOSE_instance;
var StudyBuilderFactory_OSCILLATOR_instance;
var StudyBuilderFactory_PARABOLIC_SAR_instance;
var StudyBuilderFactory_PIVOT_POINTS_instance;
var StudyBuilderFactory_PRICE_CHANNEL_instance;
var StudyBuilderFactory_PRICE_VOLUME_TREND_instance;
var StudyBuilderFactory_RELATIVE_STRENGTH_INDEX_instance;
var StudyBuilderFactory_RELATIVE_VIGOR_INDEX_instance;
var StudyBuilderFactory_RELATIVE_VIGOR_INDEX_SMA_instance;
var StudyBuilderFactory_RELATIVE_VOLATILITY_INDEX_instance;
var StudyBuilderFactory_ROC_instance;
var StudyBuilderFactory_SLOW_STOCHASTIC_instance;
var StudyBuilderFactory_SMA_instance;
var StudyBuilderFactory_SMMA_instance;
var StudyBuilderFactory_SROC_instance;
var StudyBuilderFactory_SCHAFF_TREND_CYCLE_instance;
var StudyBuilderFactory_STANDARD_DEVIATION_CHANNEL_instance;
var StudyBuilderFactory_STANDARD_DEVIATION_instance;
var StudyBuilderFactory_STD_DEV_VOLATILITY_instance;
var StudyBuilderFactory_TIME_SERIES_FORECAST_instance;
var StudyBuilderFactory_TMA_instance;
var StudyBuilderFactory_TRIPLE_EMA_instance;
var StudyBuilderFactory_TRUE_STRENGTH_INDEX_instance;
var StudyBuilderFactory_ULTIMATE_OSCILLATOR_instance;
var StudyBuilderFactory_VERTICAL_HORIZONTAL_FILTER_instance;
var StudyBuilderFactory_VWAP_instance;
var StudyBuilderFactory_WEIGHTED_CLOSE_instance;
var StudyBuilderFactory_WILDERS_SMOOTHING_instance;
var StudyBuilderFactory_WILLIAMS_ALLIGATOR_instance;
var StudyBuilderFactory_WILLIAMS_PERCENT_RANGE_instance;
var StudyBuilderFactory_WMA_instance;
var StudyBuilderFactory_ZIG_ZAG_instance;
var StudyBuilderFactory_COMPARATIVE_instance;
var StudyBuilderFactory_IMPLIED_VOLATILITY_instance;
var StudyBuilderFactory_IMPLIED_VOLATILITY_GAUGE_instance;
var StudyBuilderFactory_TD_SEQUENTIAL_instance;
var StudyBuilderFactory_GTRAP_instance;
var StudyBuilderFactory_KAUFMAN_MOVING_AVERAGE_instance;
var StudyBuilderFactory_WAVE_TREND_WITH_CROSSES_instance;
var StudyBuilderFactory_FIBONACCI_BOLLINGER_BANDS_instance;
var StudyBuilderFactory_WAVE_TREND_instance;
function Companion_48() {
  Companion_instance_48 = this;
  this.ve_1 = HashMap_init_$Create$();
  var indexedObject = values_3();
  var inductionVariable = 0;
  var last = indexedObject.length;
  while (inductionVariable < last) {
    var studyBuilderFactory = indexedObject[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    // Inline function 'kotlin.collections.set' call
    var tmp1_set = this.ve_1;
    // Inline function 'kotlin.text.toUpperCase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2_set = studyBuilderFactory.ze_1.toUpperCase();
    tmp1_set.v4(tmp2_set, studyBuilderFactory);
  }
}
protoOf(Companion_48).we = function (id) {
  var tmp$ret$1;
  // Inline function 'kotlin.text.toUpperCase' call
  // Inline function 'kotlin.js.asDynamic' call
  tmp$ret$1 = id.toUpperCase();
  return ensureNotNull(this.ve_1.k1(tmp$ret$1));
};
var Companion_instance_48;
function Companion_getInstance_51() {
  StudyBuilderFactory_initEntries();
  if (Companion_instance_48 == null)
    new Companion_48();
  return Companion_instance_48;
}
function values_3() {
  return [StudyBuilderFactory_WILLIAMS_FRACTAL_getInstance(), StudyBuilderFactory_PERCENTAGE_PRICE_OSCILLATOR_getInstance(), StudyBuilderFactory_DYNAMIC_MOMENTUM_INDEX_getInstance(), StudyBuilderFactory_WILLIAMS_AD_getInstance(), StudyBuilderFactory_PRICE_OSCILLATOR_getInstance(), StudyBuilderFactory_PERCENT_CHANGE_getInstance(), StudyBuilderFactory_LINEAR_REGRESSION_SLOPE_getInstance(), StudyBuilderFactory_LINEAR_REGRESSION_CHANNEL_getInstance(), StudyBuilderFactory_COMMODITY_SELECTION_getInstance(), StudyBuilderFactory_LINEAR_REGRESSION_getInstance(), StudyBuilderFactory_INERTIA_getInstance(), StudyBuilderFactory_KRI_getInstance(), StudyBuilderFactory_RANK_CORRELATION_INDEX_getInstance(), StudyBuilderFactory_SWING_ACCUMULATION_getInstance(), StudyBuilderFactory_AROON_OSCILLATOR_getInstance(), StudyBuilderFactory_AROON_getInstance(), StudyBuilderFactory_SWING_INDEX_getInstance(), StudyBuilderFactory_STARCBANDS_getInstance(), StudyBuilderFactory_FORECAST_OSCILLATOR_getInstance(), StudyBuilderFactory_KELTNER_CHANNELS_getInstance(), StudyBuilderFactory_TEMA_getInstance(), StudyBuilderFactory_TYPICAL_PRICE_getInstance(), StudyBuilderFactory_DEMA_getInstance(), StudyBuilderFactory_MEDIAN_PRICE_getInstance(), StudyBuilderFactory_FULL_STOCHASTIC_getInstance(), StudyBuilderFactory_STANDARD_ERROR_BANDS_getInstance(), StudyBuilderFactory_PERCENT_OF_RESISTANCE_getInstance(), StudyBuilderFactory_CENTER_OF_GRAVITY_OSCILLATOR_getInstance(), StudyBuilderFactory_ACCELERATION_DECELERATION_getInstance(), StudyBuilderFactory_ACCUMULATION_DISTRIBUTION_getInstance(), StudyBuilderFactory_ADX_getInstance(), StudyBuilderFactory_ADXR_getInstance(), StudyBuilderFactory_AVERAGE_TRUE_RANGE_getInstance(), StudyBuilderFactory_AWESOME_OSCILLATOR_getInstance(), StudyBuilderFactory_BOLLINGER_BANDS_getInstance(), StudyBuilderFactory_CCI_getInstance(), StudyBuilderFactory_CHAIKIN_OSCILLATOR_getInstance(), StudyBuilderFactory_CHAIKIN_VOLATILITY_getInstance(), StudyBuilderFactory_CHANDE_MOMENTUM_OSCILLATOR_getInstance(), StudyBuilderFactory_DE_MARKER_getInstance(), StudyBuilderFactory_DETRENDED_PRICE_OSC_getInstance(), StudyBuilderFactory_DMI_getInstance(), StudyBuilderFactory_ELDER_getInstance(), StudyBuilderFactory_EMA_getInstance(), StudyBuilderFactory_ENVELOPE_EMA_getInstance(), StudyBuilderFactory_ENVELOPE_SMA_getInstance(), StudyBuilderFactory_ENVELOPE_SMMA_getInstance(), StudyBuilderFactory_ENVELOPE_WMA_getInstance(), StudyBuilderFactory_FAST_STOCHASTIC_getInstance(), StudyBuilderFactory_FORCE_INDEX_getInstance(), StudyBuilderFactory_GATOR_OSCILLATOR_getInstance(), StudyBuilderFactory_HLVOLATILITY_getInstance(), StudyBuilderFactory_ICHIMOKU_getInstance(), StudyBuilderFactory_INTRADAY_MOMENTUM_INDEX_getInstance(), StudyBuilderFactory_MACD_getInstance(), StudyBuilderFactory_MARKET_FACILITATION_INDEX_getInstance(), StudyBuilderFactory_MASS_INDEX_getInstance(), StudyBuilderFactory_MOMENTUM_getInstance(), StudyBuilderFactory_MONEY_FLOW_INDEX_getInstance(), StudyBuilderFactory_NEGATIVE_VOLUME_INDEX_getInstance(), StudyBuilderFactory_ON_BALANCE_VOLUME_getInstance(), StudyBuilderFactory_DAY_OPEN_CLOSE_getInstance(), StudyBuilderFactory_OSCILLATOR_getInstance(), StudyBuilderFactory_PARABOLIC_SAR_getInstance(), StudyBuilderFactory_PIVOT_POINTS_getInstance(), StudyBuilderFactory_PRICE_CHANNEL_getInstance(), StudyBuilderFactory_PRICE_VOLUME_TREND_getInstance(), StudyBuilderFactory_RELATIVE_STRENGTH_INDEX_getInstance(), StudyBuilderFactory_RELATIVE_VIGOR_INDEX_getInstance(), StudyBuilderFactory_RELATIVE_VIGOR_INDEX_SMA_getInstance(), StudyBuilderFactory_RELATIVE_VOLATILITY_INDEX_getInstance(), StudyBuilderFactory_ROC_getInstance(), StudyBuilderFactory_SLOW_STOCHASTIC_getInstance(), StudyBuilderFactory_SMA_getInstance(), StudyBuilderFactory_SMMA_getInstance(), StudyBuilderFactory_SROC_getInstance(), StudyBuilderFactory_SCHAFF_TREND_CYCLE_getInstance(), StudyBuilderFactory_STANDARD_DEVIATION_CHANNEL_getInstance(), StudyBuilderFactory_STANDARD_DEVIATION_getInstance(), StudyBuilderFactory_STD_DEV_VOLATILITY_getInstance(), StudyBuilderFactory_TIME_SERIES_FORECAST_getInstance(), StudyBuilderFactory_TMA_getInstance(), StudyBuilderFactory_TRIPLE_EMA_getInstance(), StudyBuilderFactory_TRUE_STRENGTH_INDEX_getInstance(), StudyBuilderFactory_ULTIMATE_OSCILLATOR_getInstance(), StudyBuilderFactory_VERTICAL_HORIZONTAL_FILTER_getInstance(), StudyBuilderFactory_VWAP_getInstance(), StudyBuilderFactory_WEIGHTED_CLOSE_getInstance(), StudyBuilderFactory_WILDERS_SMOOTHING_getInstance(), StudyBuilderFactory_WILLIAMS_ALLIGATOR_getInstance(), StudyBuilderFactory_WILLIAMS_PERCENT_RANGE_getInstance(), StudyBuilderFactory_WMA_getInstance(), StudyBuilderFactory_ZIG_ZAG_getInstance(), StudyBuilderFactory_COMPARATIVE_getInstance(), StudyBuilderFactory_IMPLIED_VOLATILITY_getInstance(), StudyBuilderFactory_IMPLIED_VOLATILITY_GAUGE_getInstance(), StudyBuilderFactory_TD_SEQUENTIAL_getInstance(), StudyBuilderFactory_GTRAP_getInstance(), StudyBuilderFactory_KAUFMAN_MOVING_AVERAGE_getInstance(), StudyBuilderFactory_WAVE_TREND_WITH_CROSSES_getInstance(), StudyBuilderFactory_FIBONACCI_BOLLINGER_BANDS_getInstance(), StudyBuilderFactory_WAVE_TREND_getInstance()];
}
function StudyBuilderFactory$1() {
}
protoOf(StudyBuilderFactory$1).bf = function () {
  return new WilliamsFractal();
};
function StudyBuilderFactory$2() {
}
protoOf(StudyBuilderFactory$2).bf = function () {
  return new PercentagePriceOscillator();
};
function StudyBuilderFactory$3() {
}
protoOf(StudyBuilderFactory$3).bf = function () {
  return new DynamicMomentumIndex();
};
function StudyBuilderFactory$4() {
}
protoOf(StudyBuilderFactory$4).bf = function () {
  return new WilliamsAD();
};
function StudyBuilderFactory$5() {
}
protoOf(StudyBuilderFactory$5).bf = function () {
  return new PriceOscillator();
};
function StudyBuilderFactory$6() {
}
protoOf(StudyBuilderFactory$6).bf = function () {
  return new PercentChange();
};
function StudyBuilderFactory$7() {
}
protoOf(StudyBuilderFactory$7).bf = function () {
  return new LinearRegressionSlope();
};
function StudyBuilderFactory$8() {
}
protoOf(StudyBuilderFactory$8).bf = function () {
  return new LinearRegressionChannel();
};
function StudyBuilderFactory$9() {
}
protoOf(StudyBuilderFactory$9).bf = function () {
  return new CommoditySelection();
};
function StudyBuilderFactory$10() {
}
protoOf(StudyBuilderFactory$10).bf = function () {
  return new LinearRegression();
};
function StudyBuilderFactory$11() {
}
protoOf(StudyBuilderFactory$11).bf = function () {
  return new Inertia();
};
function StudyBuilderFactory$12() {
}
protoOf(StudyBuilderFactory$12).bf = function () {
  return new KRI();
};
function StudyBuilderFactory$13() {
}
protoOf(StudyBuilderFactory$13).bf = function () {
  return new RankCorrelationIndex();
};
function StudyBuilderFactory$14() {
}
protoOf(StudyBuilderFactory$14).bf = function () {
  return new SwingAccumulation();
};
function StudyBuilderFactory$15() {
}
protoOf(StudyBuilderFactory$15).bf = function () {
  return new AroonOscillator();
};
function StudyBuilderFactory$16() {
}
protoOf(StudyBuilderFactory$16).bf = function () {
  return new Aroon();
};
function StudyBuilderFactory$17() {
}
protoOf(StudyBuilderFactory$17).bf = function () {
  return new SwingIndex();
};
function StudyBuilderFactory$18() {
}
protoOf(StudyBuilderFactory$18).bf = function () {
  return new STARCBands();
};
function StudyBuilderFactory$19() {
}
protoOf(StudyBuilderFactory$19).bf = function () {
  return new ForecastOscillator();
};
function StudyBuilderFactory$20() {
}
protoOf(StudyBuilderFactory$20).bf = function () {
  return new KeltnerChannels();
};
function StudyBuilderFactory$21() {
}
protoOf(StudyBuilderFactory$21).bf = function () {
  return new TEMA();
};
function StudyBuilderFactory$22() {
}
protoOf(StudyBuilderFactory$22).bf = function () {
  return new TypicalPrice();
};
function StudyBuilderFactory$23() {
}
protoOf(StudyBuilderFactory$23).bf = function () {
  return new DEMA();
};
function StudyBuilderFactory$24() {
}
protoOf(StudyBuilderFactory$24).bf = function () {
  return new MedianPrice();
};
function StudyBuilderFactory$25() {
}
protoOf(StudyBuilderFactory$25).bf = function () {
  return new FullStochastic();
};
function StudyBuilderFactory$26() {
}
protoOf(StudyBuilderFactory$26).bf = function () {
  return new StandardErrorBands();
};
function StudyBuilderFactory$27() {
}
protoOf(StudyBuilderFactory$27).bf = function () {
  return new PercentOfResistance();
};
function StudyBuilderFactory$28() {
}
protoOf(StudyBuilderFactory$28).bf = function () {
  return new CenterOfGravityOscillator();
};
function StudyBuilderFactory$29() {
}
protoOf(StudyBuilderFactory$29).bf = function () {
  return new AccelerationDeceleration();
};
function StudyBuilderFactory$30() {
}
protoOf(StudyBuilderFactory$30).bf = function () {
  return new AccumulationDistribution();
};
function StudyBuilderFactory$31() {
}
protoOf(StudyBuilderFactory$31).bf = function () {
  return new ADX();
};
function StudyBuilderFactory$32() {
}
protoOf(StudyBuilderFactory$32).bf = function () {
  return new ADXR();
};
function StudyBuilderFactory$33() {
}
protoOf(StudyBuilderFactory$33).bf = function () {
  return new AverageTrueRange();
};
function StudyBuilderFactory$34() {
}
protoOf(StudyBuilderFactory$34).bf = function () {
  return new AwesomeOscillator();
};
function StudyBuilderFactory$35() {
}
protoOf(StudyBuilderFactory$35).bf = function () {
  return new BollingerBands();
};
function StudyBuilderFactory$36() {
}
protoOf(StudyBuilderFactory$36).bf = function () {
  return new CCI();
};
function StudyBuilderFactory$37() {
}
protoOf(StudyBuilderFactory$37).bf = function () {
  return new ChaikinOscillator();
};
function StudyBuilderFactory$38() {
}
protoOf(StudyBuilderFactory$38).bf = function () {
  return new ChaikinVolatility();
};
function StudyBuilderFactory$39() {
}
protoOf(StudyBuilderFactory$39).bf = function () {
  return new ChandeMomentumOscillator();
};
function StudyBuilderFactory$40() {
}
protoOf(StudyBuilderFactory$40).bf = function () {
  return new DeMarker();
};
function StudyBuilderFactory$41() {
}
protoOf(StudyBuilderFactory$41).bf = function () {
  return new DetrendedPriceOsc();
};
function StudyBuilderFactory$42() {
}
protoOf(StudyBuilderFactory$42).bf = function () {
  return new DMI();
};
function StudyBuilderFactory$43() {
}
protoOf(StudyBuilderFactory$43).bf = function () {
  return new Elder();
};
function StudyBuilderFactory$44() {
}
protoOf(StudyBuilderFactory$44).bf = function () {
  return new EMA();
};
function StudyBuilderFactory$45() {
}
protoOf(StudyBuilderFactory$45).bf = function () {
  return new EnvelopeEMA();
};
function StudyBuilderFactory$46() {
}
protoOf(StudyBuilderFactory$46).bf = function () {
  return new EnvelopeSMA();
};
function StudyBuilderFactory$47() {
}
protoOf(StudyBuilderFactory$47).bf = function () {
  return new EnvelopeSMMA();
};
function StudyBuilderFactory$48() {
}
protoOf(StudyBuilderFactory$48).bf = function () {
  return new EnvelopeWMA();
};
function StudyBuilderFactory$49() {
}
protoOf(StudyBuilderFactory$49).bf = function () {
  return new FastStochastic();
};
function StudyBuilderFactory$50() {
}
protoOf(StudyBuilderFactory$50).bf = function () {
  return new ForceIndex();
};
function StudyBuilderFactory$51() {
}
protoOf(StudyBuilderFactory$51).bf = function () {
  return new GatorOscillator();
};
function StudyBuilderFactory$52() {
}
protoOf(StudyBuilderFactory$52).bf = function () {
  return new HLVolatility();
};
function StudyBuilderFactory$53() {
}
protoOf(StudyBuilderFactory$53).bf = function () {
  return new Ichimoku();
};
function StudyBuilderFactory$54() {
}
protoOf(StudyBuilderFactory$54).bf = function () {
  return new IntradayMomentumIndex();
};
function StudyBuilderFactory$55() {
}
protoOf(StudyBuilderFactory$55).bf = function () {
  return new MACD();
};
function StudyBuilderFactory$56() {
}
protoOf(StudyBuilderFactory$56).bf = function () {
  return new MarketFacilitationIndex();
};
function StudyBuilderFactory$57() {
}
protoOf(StudyBuilderFactory$57).bf = function () {
  return new MassIndex();
};
function StudyBuilderFactory$58() {
}
protoOf(StudyBuilderFactory$58).bf = function () {
  return new Momentum();
};
function StudyBuilderFactory$59() {
}
protoOf(StudyBuilderFactory$59).bf = function () {
  return new MoneyFlowIndex();
};
function StudyBuilderFactory$60() {
}
protoOf(StudyBuilderFactory$60).bf = function () {
  return new NegativeVolumeIndex();
};
function StudyBuilderFactory$61() {
}
protoOf(StudyBuilderFactory$61).bf = function () {
  return new OnBalanceVolume();
};
function StudyBuilderFactory$62() {
}
protoOf(StudyBuilderFactory$62).bf = function () {
  return new DayOpenClose();
};
function StudyBuilderFactory$63() {
}
protoOf(StudyBuilderFactory$63).bf = function () {
  return new Oscillator();
};
function StudyBuilderFactory$64() {
}
protoOf(StudyBuilderFactory$64).bf = function () {
  return new ParabolicSAR();
};
function StudyBuilderFactory$65() {
}
protoOf(StudyBuilderFactory$65).bf = function () {
  return new PivotPoints();
};
function StudyBuilderFactory$66() {
}
protoOf(StudyBuilderFactory$66).bf = function () {
  return new PriceChannel();
};
function StudyBuilderFactory$67() {
}
protoOf(StudyBuilderFactory$67).bf = function () {
  return new PriceVolumeTrend();
};
function StudyBuilderFactory$68() {
}
protoOf(StudyBuilderFactory$68).bf = function () {
  return new RelativeStrengthIndex();
};
function StudyBuilderFactory$69() {
}
protoOf(StudyBuilderFactory$69).bf = function () {
  return new RelativeVigorIndex();
};
function StudyBuilderFactory$70() {
}
protoOf(StudyBuilderFactory$70).bf = function () {
  return new RelativeVigorIndexSMA();
};
function StudyBuilderFactory$71() {
}
protoOf(StudyBuilderFactory$71).bf = function () {
  return new RelativeVolatilityIndex();
};
function StudyBuilderFactory$72() {
}
protoOf(StudyBuilderFactory$72).bf = function () {
  return new ROC();
};
function StudyBuilderFactory$73() {
}
protoOf(StudyBuilderFactory$73).bf = function () {
  return new SlowStochastic();
};
function StudyBuilderFactory$74() {
}
protoOf(StudyBuilderFactory$74).bf = function () {
  return new SMA();
};
function StudyBuilderFactory$75() {
}
protoOf(StudyBuilderFactory$75).bf = function () {
  return new SMMA();
};
function StudyBuilderFactory$76() {
}
protoOf(StudyBuilderFactory$76).bf = function () {
  return new SROC();
};
function StudyBuilderFactory$77() {
}
protoOf(StudyBuilderFactory$77).bf = function () {
  return new SchaffTrendCycle();
};
function StudyBuilderFactory$78() {
}
protoOf(StudyBuilderFactory$78).bf = function () {
  return new StandardDeviationChannel();
};
function StudyBuilderFactory$79() {
}
protoOf(StudyBuilderFactory$79).bf = function () {
  return new StandardDeviation();
};
function StudyBuilderFactory$80() {
}
protoOf(StudyBuilderFactory$80).bf = function () {
  return new StdDevVolatility();
};
function StudyBuilderFactory$81() {
}
protoOf(StudyBuilderFactory$81).bf = function () {
  return new TimeSeriesForecast();
};
function StudyBuilderFactory$82() {
}
protoOf(StudyBuilderFactory$82).bf = function () {
  return new TMA();
};
function StudyBuilderFactory$83() {
}
protoOf(StudyBuilderFactory$83).bf = function () {
  return new TripleEMA();
};
function StudyBuilderFactory$84() {
}
protoOf(StudyBuilderFactory$84).bf = function () {
  return new TrueStrengthIndex();
};
function StudyBuilderFactory$85() {
}
protoOf(StudyBuilderFactory$85).bf = function () {
  return new UltimateOscillator();
};
function StudyBuilderFactory$86() {
}
protoOf(StudyBuilderFactory$86).bf = function () {
  return new VerticalHorizontalFilter();
};
function StudyBuilderFactory$87() {
}
protoOf(StudyBuilderFactory$87).bf = function () {
  return new VWAP();
};
function StudyBuilderFactory$88() {
}
protoOf(StudyBuilderFactory$88).bf = function () {
  return new WeightedClose();
};
function StudyBuilderFactory$89() {
}
protoOf(StudyBuilderFactory$89).bf = function () {
  return new WildersSmoothing();
};
function StudyBuilderFactory$90() {
}
protoOf(StudyBuilderFactory$90).bf = function () {
  return new WilliamsAlligator();
};
function StudyBuilderFactory$91() {
}
protoOf(StudyBuilderFactory$91).bf = function () {
  return new WilliamsPercentRange();
};
function StudyBuilderFactory$92() {
}
protoOf(StudyBuilderFactory$92).bf = function () {
  return new WMA();
};
function StudyBuilderFactory$93() {
}
protoOf(StudyBuilderFactory$93).bf = function () {
  return new ZigZag();
};
function StudyBuilderFactory$94() {
}
protoOf(StudyBuilderFactory$94).bf = function () {
  return new Comparative();
};
function StudyBuilderFactory$95() {
}
protoOf(StudyBuilderFactory$95).bf = function () {
  return new ImpliedVolatility();
};
function StudyBuilderFactory$96() {
}
protoOf(StudyBuilderFactory$96).bf = function () {
  return new ImpliedVolatilityGauge();
};
function StudyBuilderFactory$97() {
}
protoOf(StudyBuilderFactory$97).bf = function () {
  return new TDSequential();
};
function StudyBuilderFactory$98() {
}
protoOf(StudyBuilderFactory$98).bf = function () {
  return new GTRAP();
};
function StudyBuilderFactory$99() {
}
protoOf(StudyBuilderFactory$99).bf = function () {
  return new KaufmanMovingAverage();
};
function StudyBuilderFactory$100() {
}
protoOf(StudyBuilderFactory$100).bf = function () {
  return new WaveTrendWithCrosses();
};
function StudyBuilderFactory$101() {
}
protoOf(StudyBuilderFactory$101).bf = function () {
  return new FibonacciBollingerBands();
};
function StudyBuilderFactory$102() {
}
protoOf(StudyBuilderFactory$102).bf = function () {
  return new WaveTrend();
};
var StudyBuilderFactory_entriesInitialized;
function StudyBuilderFactory_initEntries() {
  if (StudyBuilderFactory_entriesInitialized)
    return Unit_getInstance();
  StudyBuilderFactory_entriesInitialized = true;
  StudyBuilderFactory_WILLIAMS_FRACTAL_instance = new StudyBuilderFactory('WILLIAMS_FRACTAL', 0, 'WilliamsFractal', new StudyBuilderFactory$1());
  StudyBuilderFactory_PERCENTAGE_PRICE_OSCILLATOR_instance = new StudyBuilderFactory('PERCENTAGE_PRICE_OSCILLATOR', 1, 'PercentagePriceOscillator', new StudyBuilderFactory$2());
  StudyBuilderFactory_DYNAMIC_MOMENTUM_INDEX_instance = new StudyBuilderFactory('DYNAMIC_MOMENTUM_INDEX', 2, 'DynamicMomentumIndex', new StudyBuilderFactory$3());
  StudyBuilderFactory_WILLIAMS_AD_instance = new StudyBuilderFactory('WILLIAMS_AD', 3, 'WilliamsAD', new StudyBuilderFactory$4());
  StudyBuilderFactory_PRICE_OSCILLATOR_instance = new StudyBuilderFactory('PRICE_OSCILLATOR', 4, 'PriceOscillator', new StudyBuilderFactory$5());
  StudyBuilderFactory_PERCENT_CHANGE_instance = new StudyBuilderFactory('PERCENT_CHANGE', 5, 'PercentChange', new StudyBuilderFactory$6());
  StudyBuilderFactory_LINEAR_REGRESSION_SLOPE_instance = new StudyBuilderFactory('LINEAR_REGRESSION_SLOPE', 6, 'LinearRegressionSlope', new StudyBuilderFactory$7());
  StudyBuilderFactory_LINEAR_REGRESSION_CHANNEL_instance = new StudyBuilderFactory('LINEAR_REGRESSION_CHANNEL', 7, 'LinearRegressionChannel', new StudyBuilderFactory$8());
  StudyBuilderFactory_COMMODITY_SELECTION_instance = new StudyBuilderFactory('COMMODITY_SELECTION', 8, 'CommoditySelection', new StudyBuilderFactory$9());
  StudyBuilderFactory_LINEAR_REGRESSION_instance = new StudyBuilderFactory('LINEAR_REGRESSION', 9, 'LinearRegression', new StudyBuilderFactory$10());
  StudyBuilderFactory_INERTIA_instance = new StudyBuilderFactory('INERTIA', 10, 'Inertia', new StudyBuilderFactory$11());
  StudyBuilderFactory_KRI_instance = new StudyBuilderFactory('KRI', 11, 'KRI', new StudyBuilderFactory$12());
  StudyBuilderFactory_RANK_CORRELATION_INDEX_instance = new StudyBuilderFactory('RANK_CORRELATION_INDEX', 12, 'RankCorrelationIndex', new StudyBuilderFactory$13());
  StudyBuilderFactory_SWING_ACCUMULATION_instance = new StudyBuilderFactory('SWING_ACCUMULATION', 13, 'SwingAccumulation', new StudyBuilderFactory$14());
  StudyBuilderFactory_AROON_OSCILLATOR_instance = new StudyBuilderFactory('AROON_OSCILLATOR', 14, 'AroonOscillator', new StudyBuilderFactory$15());
  StudyBuilderFactory_AROON_instance = new StudyBuilderFactory('AROON', 15, 'Aroon', new StudyBuilderFactory$16());
  StudyBuilderFactory_SWING_INDEX_instance = new StudyBuilderFactory('SWING_INDEX', 16, 'SwingIndex', new StudyBuilderFactory$17());
  StudyBuilderFactory_STARCBANDS_instance = new StudyBuilderFactory('STARCBANDS', 17, 'STARCBands', new StudyBuilderFactory$18());
  StudyBuilderFactory_FORECAST_OSCILLATOR_instance = new StudyBuilderFactory('FORECAST_OSCILLATOR', 18, 'ForecastOscillator', new StudyBuilderFactory$19());
  StudyBuilderFactory_KELTNER_CHANNELS_instance = new StudyBuilderFactory('KELTNER_CHANNELS', 19, 'KeltnerChannels', new StudyBuilderFactory$20());
  StudyBuilderFactory_TEMA_instance = new StudyBuilderFactory('TEMA', 20, 'TEMA', new StudyBuilderFactory$21());
  StudyBuilderFactory_TYPICAL_PRICE_instance = new StudyBuilderFactory('TYPICAL_PRICE', 21, 'TypicalPrice', new StudyBuilderFactory$22());
  StudyBuilderFactory_DEMA_instance = new StudyBuilderFactory('DEMA', 22, 'DEMA', new StudyBuilderFactory$23());
  StudyBuilderFactory_MEDIAN_PRICE_instance = new StudyBuilderFactory('MEDIAN_PRICE', 23, 'MedianPrice', new StudyBuilderFactory$24());
  StudyBuilderFactory_FULL_STOCHASTIC_instance = new StudyBuilderFactory('FULL_STOCHASTIC', 24, 'FullStochastic', new StudyBuilderFactory$25());
  StudyBuilderFactory_STANDARD_ERROR_BANDS_instance = new StudyBuilderFactory('STANDARD_ERROR_BANDS', 25, 'StandardErrorBands', new StudyBuilderFactory$26());
  StudyBuilderFactory_PERCENT_OF_RESISTANCE_instance = new StudyBuilderFactory('PERCENT_OF_RESISTANCE', 26, 'PercentOfResistance', new StudyBuilderFactory$27());
  StudyBuilderFactory_CENTER_OF_GRAVITY_OSCILLATOR_instance = new StudyBuilderFactory('CENTER_OF_GRAVITY_OSCILLATOR', 27, 'CenterOfGravityOscillator', new StudyBuilderFactory$28());
  StudyBuilderFactory_ACCELERATION_DECELERATION_instance = new StudyBuilderFactory('ACCELERATION_DECELERATION', 28, 'AccelerationDeceleration', new StudyBuilderFactory$29());
  StudyBuilderFactory_ACCUMULATION_DISTRIBUTION_instance = new StudyBuilderFactory('ACCUMULATION_DISTRIBUTION', 29, 'AccumulationDistribution', new StudyBuilderFactory$30());
  StudyBuilderFactory_ADX_instance = new StudyBuilderFactory('ADX', 30, 'ADX', new StudyBuilderFactory$31());
  StudyBuilderFactory_ADXR_instance = new StudyBuilderFactory('ADXR', 31, 'ADXR', new StudyBuilderFactory$32());
  StudyBuilderFactory_AVERAGE_TRUE_RANGE_instance = new StudyBuilderFactory('AVERAGE_TRUE_RANGE', 32, 'AverageTrueRange', new StudyBuilderFactory$33());
  StudyBuilderFactory_AWESOME_OSCILLATOR_instance = new StudyBuilderFactory('AWESOME_OSCILLATOR', 33, 'AwesomeOscillator', new StudyBuilderFactory$34());
  StudyBuilderFactory_BOLLINGER_BANDS_instance = new StudyBuilderFactory('BOLLINGER_BANDS', 34, 'BollingerBands', new StudyBuilderFactory$35());
  StudyBuilderFactory_CCI_instance = new StudyBuilderFactory('CCI', 35, 'CCI', new StudyBuilderFactory$36());
  StudyBuilderFactory_CHAIKIN_OSCILLATOR_instance = new StudyBuilderFactory('CHAIKIN_OSCILLATOR', 36, 'ChaikinOscillator', new StudyBuilderFactory$37());
  StudyBuilderFactory_CHAIKIN_VOLATILITY_instance = new StudyBuilderFactory('CHAIKIN_VOLATILITY', 37, 'ChaikinVolatility', new StudyBuilderFactory$38());
  StudyBuilderFactory_CHANDE_MOMENTUM_OSCILLATOR_instance = new StudyBuilderFactory('CHANDE_MOMENTUM_OSCILLATOR', 38, 'ChandeMomentumOscillator', new StudyBuilderFactory$39());
  StudyBuilderFactory_DE_MARKER_instance = new StudyBuilderFactory('DE_MARKER', 39, 'DeMarker', new StudyBuilderFactory$40());
  StudyBuilderFactory_DETRENDED_PRICE_OSC_instance = new StudyBuilderFactory('DETRENDED_PRICE_OSC', 40, 'DetrendedPriceOsc', new StudyBuilderFactory$41());
  StudyBuilderFactory_DMI_instance = new StudyBuilderFactory('DMI', 41, 'DMI', new StudyBuilderFactory$42());
  StudyBuilderFactory_ELDER_instance = new StudyBuilderFactory('ELDER', 42, 'Elder', new StudyBuilderFactory$43());
  StudyBuilderFactory_EMA_instance = new StudyBuilderFactory('EMA', 43, 'EMA', new StudyBuilderFactory$44());
  StudyBuilderFactory_ENVELOPE_EMA_instance = new StudyBuilderFactory('ENVELOPE_EMA', 44, 'EnvelopeEMA', new StudyBuilderFactory$45());
  StudyBuilderFactory_ENVELOPE_SMA_instance = new StudyBuilderFactory('ENVELOPE_SMA', 45, 'EnvelopeSMA', new StudyBuilderFactory$46());
  StudyBuilderFactory_ENVELOPE_SMMA_instance = new StudyBuilderFactory('ENVELOPE_SMMA', 46, 'EnvelopeSMMA', new StudyBuilderFactory$47());
  StudyBuilderFactory_ENVELOPE_WMA_instance = new StudyBuilderFactory('ENVELOPE_WMA', 47, 'EnvelopeWMA', new StudyBuilderFactory$48());
  StudyBuilderFactory_FAST_STOCHASTIC_instance = new StudyBuilderFactory('FAST_STOCHASTIC', 48, 'FastStochastic', new StudyBuilderFactory$49());
  StudyBuilderFactory_FORCE_INDEX_instance = new StudyBuilderFactory('FORCE_INDEX', 49, 'ForceIndex', new StudyBuilderFactory$50());
  StudyBuilderFactory_GATOR_OSCILLATOR_instance = new StudyBuilderFactory('GATOR_OSCILLATOR', 50, 'GatorOscillator', new StudyBuilderFactory$51());
  StudyBuilderFactory_HLVOLATILITY_instance = new StudyBuilderFactory('HLVOLATILITY', 51, 'HLVolatility', new StudyBuilderFactory$52());
  StudyBuilderFactory_ICHIMOKU_instance = new StudyBuilderFactory('ICHIMOKU', 52, 'Ichimoku', new StudyBuilderFactory$53());
  StudyBuilderFactory_INTRADAY_MOMENTUM_INDEX_instance = new StudyBuilderFactory('INTRADAY_MOMENTUM_INDEX', 53, 'IntradayMomentumIndex', new StudyBuilderFactory$54());
  StudyBuilderFactory_MACD_instance = new StudyBuilderFactory('MACD', 54, 'MACD', new StudyBuilderFactory$55());
  StudyBuilderFactory_MARKET_FACILITATION_INDEX_instance = new StudyBuilderFactory('MARKET_FACILITATION_INDEX', 55, 'MarketFacilitationIndex', new StudyBuilderFactory$56());
  StudyBuilderFactory_MASS_INDEX_instance = new StudyBuilderFactory('MASS_INDEX', 56, 'MassIndex', new StudyBuilderFactory$57());
  StudyBuilderFactory_MOMENTUM_instance = new StudyBuilderFactory('MOMENTUM', 57, 'Momentum', new StudyBuilderFactory$58());
  StudyBuilderFactory_MONEY_FLOW_INDEX_instance = new StudyBuilderFactory('MONEY_FLOW_INDEX', 58, 'MoneyFlowIndex', new StudyBuilderFactory$59());
  StudyBuilderFactory_NEGATIVE_VOLUME_INDEX_instance = new StudyBuilderFactory('NEGATIVE_VOLUME_INDEX', 59, 'NegativeVolumeIndex', new StudyBuilderFactory$60());
  StudyBuilderFactory_ON_BALANCE_VOLUME_instance = new StudyBuilderFactory('ON_BALANCE_VOLUME', 60, 'OnBalanceVolume', new StudyBuilderFactory$61());
  StudyBuilderFactory_DAY_OPEN_CLOSE_instance = new StudyBuilderFactory('DAY_OPEN_CLOSE', 61, 'DayOpenClose', new StudyBuilderFactory$62());
  StudyBuilderFactory_OSCILLATOR_instance = new StudyBuilderFactory('OSCILLATOR', 62, 'Oscillator', new StudyBuilderFactory$63());
  StudyBuilderFactory_PARABOLIC_SAR_instance = new StudyBuilderFactory('PARABOLIC_SAR', 63, 'ParabolicSAR', new StudyBuilderFactory$64());
  StudyBuilderFactory_PIVOT_POINTS_instance = new StudyBuilderFactory('PIVOT_POINTS', 64, 'PivotPoints', new StudyBuilderFactory$65());
  StudyBuilderFactory_PRICE_CHANNEL_instance = new StudyBuilderFactory('PRICE_CHANNEL', 65, 'PriceChannel', new StudyBuilderFactory$66());
  StudyBuilderFactory_PRICE_VOLUME_TREND_instance = new StudyBuilderFactory('PRICE_VOLUME_TREND', 66, 'PriceVolumeTrend', new StudyBuilderFactory$67());
  StudyBuilderFactory_RELATIVE_STRENGTH_INDEX_instance = new StudyBuilderFactory('RELATIVE_STRENGTH_INDEX', 67, 'RelativeStrengthIndex', new StudyBuilderFactory$68());
  StudyBuilderFactory_RELATIVE_VIGOR_INDEX_instance = new StudyBuilderFactory('RELATIVE_VIGOR_INDEX', 68, 'RelativeVigorIndex', new StudyBuilderFactory$69());
  StudyBuilderFactory_RELATIVE_VIGOR_INDEX_SMA_instance = new StudyBuilderFactory('RELATIVE_VIGOR_INDEX_SMA', 69, 'RelativeVigorIndexSMA', new StudyBuilderFactory$70());
  StudyBuilderFactory_RELATIVE_VOLATILITY_INDEX_instance = new StudyBuilderFactory('RELATIVE_VOLATILITY_INDEX', 70, 'RelativeVolatilityIndex', new StudyBuilderFactory$71());
  StudyBuilderFactory_ROC_instance = new StudyBuilderFactory('ROC', 71, 'ROC', new StudyBuilderFactory$72());
  StudyBuilderFactory_SLOW_STOCHASTIC_instance = new StudyBuilderFactory('SLOW_STOCHASTIC', 72, 'SlowStochastic', new StudyBuilderFactory$73());
  StudyBuilderFactory_SMA_instance = new StudyBuilderFactory('SMA', 73, 'SMA', new StudyBuilderFactory$74());
  StudyBuilderFactory_SMMA_instance = new StudyBuilderFactory('SMMA', 74, 'SMMA', new StudyBuilderFactory$75());
  StudyBuilderFactory_SROC_instance = new StudyBuilderFactory('SROC', 75, 'SROC', new StudyBuilderFactory$76());
  StudyBuilderFactory_SCHAFF_TREND_CYCLE_instance = new StudyBuilderFactory('SCHAFF_TREND_CYCLE', 76, 'SchaffTrendCycle', new StudyBuilderFactory$77());
  StudyBuilderFactory_STANDARD_DEVIATION_CHANNEL_instance = new StudyBuilderFactory('STANDARD_DEVIATION_CHANNEL', 77, 'StandardDeviationChannel', new StudyBuilderFactory$78());
  StudyBuilderFactory_STANDARD_DEVIATION_instance = new StudyBuilderFactory('STANDARD_DEVIATION', 78, 'StandardDeviation', new StudyBuilderFactory$79());
  StudyBuilderFactory_STD_DEV_VOLATILITY_instance = new StudyBuilderFactory('STD_DEV_VOLATILITY', 79, 'StdDevVolatility', new StudyBuilderFactory$80());
  StudyBuilderFactory_TIME_SERIES_FORECAST_instance = new StudyBuilderFactory('TIME_SERIES_FORECAST', 80, 'TimeSeriesForecast', new StudyBuilderFactory$81());
  StudyBuilderFactory_TMA_instance = new StudyBuilderFactory('TMA', 81, 'TMA', new StudyBuilderFactory$82());
  StudyBuilderFactory_TRIPLE_EMA_instance = new StudyBuilderFactory('TRIPLE_EMA', 82, 'TripleEMA', new StudyBuilderFactory$83());
  StudyBuilderFactory_TRUE_STRENGTH_INDEX_instance = new StudyBuilderFactory('TRUE_STRENGTH_INDEX', 83, 'TrueStrengthIndex', new StudyBuilderFactory$84());
  StudyBuilderFactory_ULTIMATE_OSCILLATOR_instance = new StudyBuilderFactory('ULTIMATE_OSCILLATOR', 84, 'UltimateOscillator', new StudyBuilderFactory$85());
  StudyBuilderFactory_VERTICAL_HORIZONTAL_FILTER_instance = new StudyBuilderFactory('VERTICAL_HORIZONTAL_FILTER', 85, 'VerticalHorizontalFilter', new StudyBuilderFactory$86());
  StudyBuilderFactory_VWAP_instance = new StudyBuilderFactory('VWAP', 86, 'VWAP', new StudyBuilderFactory$87());
  StudyBuilderFactory_WEIGHTED_CLOSE_instance = new StudyBuilderFactory('WEIGHTED_CLOSE', 87, 'WeightedClose', new StudyBuilderFactory$88());
  StudyBuilderFactory_WILDERS_SMOOTHING_instance = new StudyBuilderFactory('WILDERS_SMOOTHING', 88, 'WildersSmoothing', new StudyBuilderFactory$89());
  StudyBuilderFactory_WILLIAMS_ALLIGATOR_instance = new StudyBuilderFactory('WILLIAMS_ALLIGATOR', 89, 'WilliamsAlligator', new StudyBuilderFactory$90());
  StudyBuilderFactory_WILLIAMS_PERCENT_RANGE_instance = new StudyBuilderFactory('WILLIAMS_PERCENT_RANGE', 90, 'WilliamsPercentRange', new StudyBuilderFactory$91());
  StudyBuilderFactory_WMA_instance = new StudyBuilderFactory('WMA', 91, 'WMA', new StudyBuilderFactory$92());
  StudyBuilderFactory_ZIG_ZAG_instance = new StudyBuilderFactory('ZIG_ZAG', 92, 'ZigZag', new StudyBuilderFactory$93());
  StudyBuilderFactory_COMPARATIVE_instance = new StudyBuilderFactory('COMPARATIVE', 93, 'COMPARATIVE', new StudyBuilderFactory$94());
  StudyBuilderFactory_IMPLIED_VOLATILITY_instance = new StudyBuilderFactory('IMPLIED_VOLATILITY', 94, 'ImpliedVolatility', new StudyBuilderFactory$95());
  StudyBuilderFactory_IMPLIED_VOLATILITY_GAUGE_instance = new StudyBuilderFactory('IMPLIED_VOLATILITY_GAUGE', 95, 'ImpliedVolatilityGauge', new StudyBuilderFactory$96());
  StudyBuilderFactory_TD_SEQUENTIAL_instance = new StudyBuilderFactory('TD_SEQUENTIAL', 96, 'TDSequential', new StudyBuilderFactory$97());
  StudyBuilderFactory_GTRAP_instance = new StudyBuilderFactory('GTRAP', 97, 'GTRAP', new StudyBuilderFactory$98());
  StudyBuilderFactory_KAUFMAN_MOVING_AVERAGE_instance = new StudyBuilderFactory('KAUFMAN_MOVING_AVERAGE', 98, 'KAMA', new StudyBuilderFactory$99());
  StudyBuilderFactory_WAVE_TREND_WITH_CROSSES_instance = new StudyBuilderFactory('WAVE_TREND_WITH_CROSSES', 99, 'WaveTrendWithCrosses', new StudyBuilderFactory$100());
  StudyBuilderFactory_FIBONACCI_BOLLINGER_BANDS_instance = new StudyBuilderFactory('FIBONACCI_BOLLINGER_BANDS', 100, 'FibonacciBollingerBands', new StudyBuilderFactory$101());
  StudyBuilderFactory_WAVE_TREND_instance = new StudyBuilderFactory('WAVE_TREND', 101, 'WaveTrend', new StudyBuilderFactory$102());
  Companion_getInstance_51();
}
function StudyBuilderFactory(name, ordinal, id, factory) {
  Enum.call(this, name, ordinal);
  this.ze_1 = id;
  this.af_1 = factory;
}
protoOf(StudyBuilderFactory).bf = function () {
  return this.af_1.bf();
};
function StudyBuilderFactory_WILLIAMS_FRACTAL_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_WILLIAMS_FRACTAL_instance;
}
function StudyBuilderFactory_PERCENTAGE_PRICE_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_PERCENTAGE_PRICE_OSCILLATOR_instance;
}
function StudyBuilderFactory_DYNAMIC_MOMENTUM_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_DYNAMIC_MOMENTUM_INDEX_instance;
}
function StudyBuilderFactory_WILLIAMS_AD_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_WILLIAMS_AD_instance;
}
function StudyBuilderFactory_PRICE_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_PRICE_OSCILLATOR_instance;
}
function StudyBuilderFactory_PERCENT_CHANGE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_PERCENT_CHANGE_instance;
}
function StudyBuilderFactory_LINEAR_REGRESSION_SLOPE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_LINEAR_REGRESSION_SLOPE_instance;
}
function StudyBuilderFactory_LINEAR_REGRESSION_CHANNEL_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_LINEAR_REGRESSION_CHANNEL_instance;
}
function StudyBuilderFactory_COMMODITY_SELECTION_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_COMMODITY_SELECTION_instance;
}
function StudyBuilderFactory_LINEAR_REGRESSION_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_LINEAR_REGRESSION_instance;
}
function StudyBuilderFactory_INERTIA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_INERTIA_instance;
}
function StudyBuilderFactory_KRI_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_KRI_instance;
}
function StudyBuilderFactory_RANK_CORRELATION_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_RANK_CORRELATION_INDEX_instance;
}
function StudyBuilderFactory_SWING_ACCUMULATION_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_SWING_ACCUMULATION_instance;
}
function StudyBuilderFactory_AROON_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_AROON_OSCILLATOR_instance;
}
function StudyBuilderFactory_AROON_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_AROON_instance;
}
function StudyBuilderFactory_SWING_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_SWING_INDEX_instance;
}
function StudyBuilderFactory_STARCBANDS_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_STARCBANDS_instance;
}
function StudyBuilderFactory_FORECAST_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_FORECAST_OSCILLATOR_instance;
}
function StudyBuilderFactory_KELTNER_CHANNELS_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_KELTNER_CHANNELS_instance;
}
function StudyBuilderFactory_TEMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_TEMA_instance;
}
function StudyBuilderFactory_TYPICAL_PRICE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_TYPICAL_PRICE_instance;
}
function StudyBuilderFactory_DEMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_DEMA_instance;
}
function StudyBuilderFactory_MEDIAN_PRICE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_MEDIAN_PRICE_instance;
}
function StudyBuilderFactory_FULL_STOCHASTIC_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_FULL_STOCHASTIC_instance;
}
function StudyBuilderFactory_STANDARD_ERROR_BANDS_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_STANDARD_ERROR_BANDS_instance;
}
function StudyBuilderFactory_PERCENT_OF_RESISTANCE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_PERCENT_OF_RESISTANCE_instance;
}
function StudyBuilderFactory_CENTER_OF_GRAVITY_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_CENTER_OF_GRAVITY_OSCILLATOR_instance;
}
function StudyBuilderFactory_ACCELERATION_DECELERATION_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ACCELERATION_DECELERATION_instance;
}
function StudyBuilderFactory_ACCUMULATION_DISTRIBUTION_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ACCUMULATION_DISTRIBUTION_instance;
}
function StudyBuilderFactory_ADX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ADX_instance;
}
function StudyBuilderFactory_ADXR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ADXR_instance;
}
function StudyBuilderFactory_AVERAGE_TRUE_RANGE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_AVERAGE_TRUE_RANGE_instance;
}
function StudyBuilderFactory_AWESOME_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_AWESOME_OSCILLATOR_instance;
}
function StudyBuilderFactory_BOLLINGER_BANDS_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_BOLLINGER_BANDS_instance;
}
function StudyBuilderFactory_CCI_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_CCI_instance;
}
function StudyBuilderFactory_CHAIKIN_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_CHAIKIN_OSCILLATOR_instance;
}
function StudyBuilderFactory_CHAIKIN_VOLATILITY_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_CHAIKIN_VOLATILITY_instance;
}
function StudyBuilderFactory_CHANDE_MOMENTUM_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_CHANDE_MOMENTUM_OSCILLATOR_instance;
}
function StudyBuilderFactory_DE_MARKER_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_DE_MARKER_instance;
}
function StudyBuilderFactory_DETRENDED_PRICE_OSC_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_DETRENDED_PRICE_OSC_instance;
}
function StudyBuilderFactory_DMI_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_DMI_instance;
}
function StudyBuilderFactory_ELDER_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ELDER_instance;
}
function StudyBuilderFactory_EMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_EMA_instance;
}
function StudyBuilderFactory_ENVELOPE_EMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ENVELOPE_EMA_instance;
}
function StudyBuilderFactory_ENVELOPE_SMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ENVELOPE_SMA_instance;
}
function StudyBuilderFactory_ENVELOPE_SMMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ENVELOPE_SMMA_instance;
}
function StudyBuilderFactory_ENVELOPE_WMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ENVELOPE_WMA_instance;
}
function StudyBuilderFactory_FAST_STOCHASTIC_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_FAST_STOCHASTIC_instance;
}
function StudyBuilderFactory_FORCE_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_FORCE_INDEX_instance;
}
function StudyBuilderFactory_GATOR_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_GATOR_OSCILLATOR_instance;
}
function StudyBuilderFactory_HLVOLATILITY_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_HLVOLATILITY_instance;
}
function StudyBuilderFactory_ICHIMOKU_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ICHIMOKU_instance;
}
function StudyBuilderFactory_INTRADAY_MOMENTUM_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_INTRADAY_MOMENTUM_INDEX_instance;
}
function StudyBuilderFactory_MACD_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_MACD_instance;
}
function StudyBuilderFactory_MARKET_FACILITATION_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_MARKET_FACILITATION_INDEX_instance;
}
function StudyBuilderFactory_MASS_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_MASS_INDEX_instance;
}
function StudyBuilderFactory_MOMENTUM_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_MOMENTUM_instance;
}
function StudyBuilderFactory_MONEY_FLOW_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_MONEY_FLOW_INDEX_instance;
}
function StudyBuilderFactory_NEGATIVE_VOLUME_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_NEGATIVE_VOLUME_INDEX_instance;
}
function StudyBuilderFactory_ON_BALANCE_VOLUME_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ON_BALANCE_VOLUME_instance;
}
function StudyBuilderFactory_DAY_OPEN_CLOSE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_DAY_OPEN_CLOSE_instance;
}
function StudyBuilderFactory_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_OSCILLATOR_instance;
}
function StudyBuilderFactory_PARABOLIC_SAR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_PARABOLIC_SAR_instance;
}
function StudyBuilderFactory_PIVOT_POINTS_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_PIVOT_POINTS_instance;
}
function StudyBuilderFactory_PRICE_CHANNEL_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_PRICE_CHANNEL_instance;
}
function StudyBuilderFactory_PRICE_VOLUME_TREND_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_PRICE_VOLUME_TREND_instance;
}
function StudyBuilderFactory_RELATIVE_STRENGTH_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_RELATIVE_STRENGTH_INDEX_instance;
}
function StudyBuilderFactory_RELATIVE_VIGOR_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_RELATIVE_VIGOR_INDEX_instance;
}
function StudyBuilderFactory_RELATIVE_VIGOR_INDEX_SMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_RELATIVE_VIGOR_INDEX_SMA_instance;
}
function StudyBuilderFactory_RELATIVE_VOLATILITY_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_RELATIVE_VOLATILITY_INDEX_instance;
}
function StudyBuilderFactory_ROC_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ROC_instance;
}
function StudyBuilderFactory_SLOW_STOCHASTIC_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_SLOW_STOCHASTIC_instance;
}
function StudyBuilderFactory_SMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_SMA_instance;
}
function StudyBuilderFactory_SMMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_SMMA_instance;
}
function StudyBuilderFactory_SROC_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_SROC_instance;
}
function StudyBuilderFactory_SCHAFF_TREND_CYCLE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_SCHAFF_TREND_CYCLE_instance;
}
function StudyBuilderFactory_STANDARD_DEVIATION_CHANNEL_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_STANDARD_DEVIATION_CHANNEL_instance;
}
function StudyBuilderFactory_STANDARD_DEVIATION_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_STANDARD_DEVIATION_instance;
}
function StudyBuilderFactory_STD_DEV_VOLATILITY_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_STD_DEV_VOLATILITY_instance;
}
function StudyBuilderFactory_TIME_SERIES_FORECAST_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_TIME_SERIES_FORECAST_instance;
}
function StudyBuilderFactory_TMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_TMA_instance;
}
function StudyBuilderFactory_TRIPLE_EMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_TRIPLE_EMA_instance;
}
function StudyBuilderFactory_TRUE_STRENGTH_INDEX_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_TRUE_STRENGTH_INDEX_instance;
}
function StudyBuilderFactory_ULTIMATE_OSCILLATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ULTIMATE_OSCILLATOR_instance;
}
function StudyBuilderFactory_VERTICAL_HORIZONTAL_FILTER_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_VERTICAL_HORIZONTAL_FILTER_instance;
}
function StudyBuilderFactory_VWAP_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_VWAP_instance;
}
function StudyBuilderFactory_WEIGHTED_CLOSE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_WEIGHTED_CLOSE_instance;
}
function StudyBuilderFactory_WILDERS_SMOOTHING_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_WILDERS_SMOOTHING_instance;
}
function StudyBuilderFactory_WILLIAMS_ALLIGATOR_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_WILLIAMS_ALLIGATOR_instance;
}
function StudyBuilderFactory_WILLIAMS_PERCENT_RANGE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_WILLIAMS_PERCENT_RANGE_instance;
}
function StudyBuilderFactory_WMA_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_WMA_instance;
}
function StudyBuilderFactory_ZIG_ZAG_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_ZIG_ZAG_instance;
}
function StudyBuilderFactory_COMPARATIVE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_COMPARATIVE_instance;
}
function StudyBuilderFactory_IMPLIED_VOLATILITY_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_IMPLIED_VOLATILITY_instance;
}
function StudyBuilderFactory_IMPLIED_VOLATILITY_GAUGE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_IMPLIED_VOLATILITY_GAUGE_instance;
}
function StudyBuilderFactory_TD_SEQUENTIAL_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_TD_SEQUENTIAL_instance;
}
function StudyBuilderFactory_GTRAP_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_GTRAP_instance;
}
function StudyBuilderFactory_KAUFMAN_MOVING_AVERAGE_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_KAUFMAN_MOVING_AVERAGE_instance;
}
function StudyBuilderFactory_WAVE_TREND_WITH_CROSSES_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_WAVE_TREND_WITH_CROSSES_instance;
}
function StudyBuilderFactory_FIBONACCI_BOLLINGER_BANDS_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_FIBONACCI_BOLLINGER_BANDS_instance;
}
function StudyBuilderFactory_WAVE_TREND_getInstance() {
  StudyBuilderFactory_initEntries();
  return StudyBuilderFactory_WAVE_TREND_instance;
}
function Companion_49() {
  Companion_instance_49 = this;
  this.ql_1 = 'limit';
}
var Companion_instance_49;
function Companion_getInstance_52() {
  if (Companion_instance_49 == null)
    new Companion_49();
  return Companion_instance_49;
}
function SwingAccumulation() {
  Companion_getInstance_52();
  StudyBuilder.call(this);
}
protoOf(SwingAccumulation).qf = function (params) {
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_52().ql_1);
};
protoOf(SwingAccumulation).rf = function (data, params) {
  var si = Companion_getInstance_53().sl(data, params);
  return listOf([new CumulativeSumFunction(si), new ZeroFunction()]);
};
var PriceValue_TODAY_CLOSE_instance;
var PriceValue_TODAY_OPEN_instance;
var PriceValue_TODAY_HIGH_instance;
var PriceValue_TODAY_LOW_instance;
var PriceValue_YESTERDAY_OPEN_instance;
var PriceValue_YESTERDAY_CLOSE_instance;
var PriceValue_YESTERDAY_HIGH_instance;
var PriceValue_YESTERDAY_LOW_instance;
var PriceValue_entriesInitialized;
function PriceValue_initEntries() {
  if (PriceValue_entriesInitialized)
    return Unit_getInstance();
  PriceValue_entriesInitialized = true;
  PriceValue_TODAY_CLOSE_instance = new PriceValue('TODAY_CLOSE', 0);
  PriceValue_TODAY_OPEN_instance = new PriceValue('TODAY_OPEN', 1);
  PriceValue_TODAY_HIGH_instance = new PriceValue('TODAY_HIGH', 2);
  PriceValue_TODAY_LOW_instance = new PriceValue('TODAY_LOW', 3);
  PriceValue_YESTERDAY_OPEN_instance = new PriceValue('YESTERDAY_OPEN', 4);
  PriceValue_YESTERDAY_CLOSE_instance = new PriceValue('YESTERDAY_CLOSE', 5);
  PriceValue_YESTERDAY_HIGH_instance = new PriceValue('YESTERDAY_HIGH', 6);
  PriceValue_YESTERDAY_LOW_instance = new PriceValue('YESTERDAY_LOW', 7);
}
function getFormula($this, data) {
  var close = getPriceFunction($this, PriceValue_TODAY_CLOSE_getInstance(), data);
  var closeY = getPriceFunction($this, PriceValue_YESTERDAY_CLOSE_getInstance(), data);
  var open = getPriceFunction($this, PriceValue_TODAY_OPEN_getInstance(), data);
  var openY = getPriceFunction($this, PriceValue_YESTERDAY_OPEN_getInstance(), data);
  var c4 = new ConstantFunction(4.0);
  var c2 = new ConstantFunction(2.0);
  var closeMinusOpen = new ArithmeticFunction(close, open, ArithmeticOperation_MINUS_getInstance());
  var closeMinusOpenDiv2 = new ArithmeticFunction(closeMinusOpen, c2, ArithmeticOperation_DIV_getInstance());
  var yCloseMinusYOpen = new ArithmeticFunction(closeY, openY, ArithmeticOperation_MINUS_getInstance());
  var yCloseMinusYOpenDiv4 = new ArithmeticFunction(yCloseMinusYOpen, c4, ArithmeticOperation_DIV_getInstance());
  var closeMinusYClose = new ArithmeticFunction(close, closeY, ArithmeticOperation_MINUS_getInstance());
  var plus = new ArithmeticFunction(closeMinusYClose, closeMinusOpenDiv2, ArithmeticOperation_PLUS_getInstance());
  return new ArithmeticFunction(plus, yCloseMinusYOpenDiv4, ArithmeticOperation_PLUS_getInstance());
}
function getArithmeticPriceFunction($this, first, second, operation, data) {
  var firstFunc = getPriceFunction($this, first, data);
  var secondFunc = getPriceFunction($this, second, data);
  return new ArithmeticFunction(firstFunc, secondFunc, operation);
}
function getPriceFunction($this, value, data) {
  var result;
  switch (value.c2_1) {
    case 0:
      result = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
      break;
    case 1:
      result = new PriceSourceFunction(data, PriceFieldEnum_OPEN_getInstance());
      break;
    case 2:
      result = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
      break;
    case 3:
      result = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
      break;
    case 4:
      result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum_OPEN_getInstance()), -1);
      break;
    case 5:
      result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance()), -1);
      break;
    case 6:
      result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance()), -1);
      break;
    case 7:
      result = new DisplacementFunction(new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance()), -1);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return result;
}
function PriceValue(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Companion_50() {
  Companion_instance_50 = this;
  this.rl_1 = 'limit';
}
protoOf(Companion_50).sl = function (data, params) {
  var tmp = params.k1(this.rl_1);
  var limit = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var hcprev = new AbsFunction(getArithmeticPriceFunction(this, PriceValue_TODAY_HIGH_getInstance(), PriceValue_YESTERDAY_CLOSE_getInstance(), ArithmeticOperation_MINUS_getInstance(), data));
  var lcprev = new AbsFunction(getArithmeticPriceFunction(this, PriceValue_TODAY_LOW_getInstance(), PriceValue_YESTERDAY_CLOSE_getInstance(), ArithmeticOperation_MINUS_getInstance(), data));
  var upper = new MaxValueFunction([new AbsFunction(hcprev), new AbsFunction(lcprev)]);
  var formula = getFormula(this, data);
  var ratio = new SwingIndexRatio(data);
  var c50 = new ConstantFunction(50.0);
  var formulaDivRatio = new ArithmeticFunction(formula, ratio, ArithmeticOperation_DIV_ZERO_getInstance());
  var upperDivLimit = new ArithmeticFunction(upper, new ConstantFunction(limit), ArithmeticOperation_DIV_ZERO_getInstance());
  var formulaDivRatioMultUpperDivLimit = new ArithmeticFunction(formulaDivRatio, upperDivLimit, ArithmeticOperation_MULT_getInstance());
  var min = new MinValueFunction([new ConstantFunction(100.0), new ArithmeticFunction(c50, formulaDivRatioMultUpperDivLimit, ArithmeticOperation_MULT_getInstance())]);
  return new MaxValueFunction([new ConstantFunction(-100.0), min]);
};
var Companion_instance_50;
function Companion_getInstance_53() {
  if (Companion_instance_50 == null)
    new Companion_50();
  return Companion_instance_50;
}
function PriceValue_TODAY_CLOSE_getInstance() {
  PriceValue_initEntries();
  return PriceValue_TODAY_CLOSE_instance;
}
function PriceValue_TODAY_OPEN_getInstance() {
  PriceValue_initEntries();
  return PriceValue_TODAY_OPEN_instance;
}
function PriceValue_TODAY_HIGH_getInstance() {
  PriceValue_initEntries();
  return PriceValue_TODAY_HIGH_instance;
}
function PriceValue_TODAY_LOW_getInstance() {
  PriceValue_initEntries();
  return PriceValue_TODAY_LOW_instance;
}
function PriceValue_YESTERDAY_OPEN_getInstance() {
  PriceValue_initEntries();
  return PriceValue_YESTERDAY_OPEN_instance;
}
function PriceValue_YESTERDAY_CLOSE_getInstance() {
  PriceValue_initEntries();
  return PriceValue_YESTERDAY_CLOSE_instance;
}
function SwingIndex() {
  Companion_getInstance_53();
  StudyBuilder.call(this);
}
protoOf(SwingIndex).qf = function (params) {
  protoOf(StudyBuilder).zf.call(this, params, Companion_getInstance_53().rl_1);
};
protoOf(SwingIndex).rf = function (data, params) {
  var si = Companion_getInstance_53().sl(data, params);
  return listOf([si, new ZeroFunction()]);
};
function TDSequential$constructFunctionsArray$lambda(x, y) {
  var tmp;
  if (isFinite(x)) {
    tmp = 1.0;
  } else if (isFinite(y)) {
    tmp = -1.0;
  } else {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  }
  return tmp;
}
function TDSequential$constructFunctionsArray$lambda_0($countdownStartFromIndex) {
  return function (x) {
    return isFinite(x) ? x >= $countdownStartFromIndex : false;
  };
}
function TDSequential$constructFunctionsArray$lambda_1($countdownBarLength) {
  return function (x) {
    var tmp;
    if (isFinite(x) ? x === -($countdownBarLength - 1.0) : false) {
      tmp = 1.0;
    } else {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    }
    return tmp;
  };
}
function TDSequential$constructFunctionsArray$lambda_2($countdownBarLength) {
  return function (y) {
    var tmp;
    if (isFinite(y) ? y === -($countdownBarLength - 1.0) : false) {
      tmp = 1.0;
    } else {
      DoubleCompanionObject_getInstance();
      tmp = NaN;
    }
    return tmp;
  };
}
function TDSequential$constructFunctionsArray$lambda_3(x) {
  var tmp;
  if (isFinite(x)) {
    tmp = -x;
  } else {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  }
  return tmp;
}
function TDSequential() {
  StudyBuilder.call(this);
  this.tl_1 = 'setupBarLength';
  this.ul_1 = 'countdownBarLength';
  this.vl_1 = 'countdownStartFromIndex';
}
protoOf(TDSequential).qf = function (params) {
  protoOf(StudyBuilder).zf.call(this, params, this.tl_1);
  protoOf(StudyBuilder).zf.call(this, params, this.ul_1);
  protoOf(StudyBuilder).zf.call(this, params, this.vl_1);
};
protoOf(TDSequential).rf = function (data, params) {
  var tmp = params.k1(this.tl_1);
  var setupBarLength = numberToDouble(isNumber(tmp) ? tmp : THROW_CCE());
  var tmp_0 = params.k1(this.ul_1);
  var countdownBarLength = numberToDouble(isNumber(tmp_0) ? tmp_0 : THROW_CCE());
  var tmp_1 = params.k1(this.vl_1);
  var countdownStartFromIndex = numberToDouble(isNumber(tmp_1) ? tmp_1 : THROW_CCE());
  var sellFlip = new PriceFlipFunction(data, TDBuySell_SELL_getInstance());
  var buyFlip = new PriceFlipFunction(data, TDBuySell_BUY_getInstance());
  var buySetup = new SetupFunction(data, sellFlip, TDBuySell_BUY_getInstance(), setupBarLength);
  var sellSetup = new SetupFunction(data, buyFlip, TDBuySell_SELL_getInstance(), setupBarLength);
  var setupSignum = new CombineFunction(data, sellSetup, buySetup, TDSequential$constructFunctionsArray$lambda);
  var countdownBuy = new CountdownFunction(data, buySetup, sellSetup, TDBuySell_BUY_getInstance(), setupBarLength, countdownBarLength);
  var countdownSell = new CountdownFunction(data, sellSetup, buySetup, TDBuySell_SELL_getInstance(), setupBarLength, countdownBarLength);
  var countdownShow = TDSequential$constructFunctionsArray$lambda_0(countdownStartFromIndex);
  var countdownBuyShow = new PredicateFunction(data, countdownBuy, countdownBuy, countdownShow);
  var countdownSellShow = new PredicateFunction(data, countdownSell, countdownSell, countdownShow);
  var countdownBuyExtra = new MapFunction(data, countdownBuy, TDSequential$constructFunctionsArray$lambda_1(countdownBarLength));
  var countdownSellExtra = new MapFunction(data, countdownSell, TDSequential$constructFunctionsArray$lambda_2(countdownBarLength));
  var perfectBuyCountdown = new PerfectCountdownFunction(data, countdownBuy, TDBuySell_BUY_getInstance(), setupBarLength, countdownBarLength);
  var perfectSellCountdown = new PerfectCountdownFunction(data, countdownSell, TDBuySell_SELL_getInstance(), setupBarLength, countdownBarLength);
  var perfectBuySetup = new PerfectSetupFunction(data, buySetup, TDBuySell_BUY_getInstance(), setupBarLength);
  var perfectSellSetup = new PerfectSetupFunction(data, sellSetup, TDBuySell_SELL_getInstance(), setupBarLength);
  var buySetupArrow = perfectBuySetup;
  var sellSetupArrow = new MapFunction(data, perfectSellSetup, TDSequential$constructFunctionsArray$lambda_3);
  var resistance = new SupportResistanceFunction(data, buySetup, TDSupportResistance_Resistance_getInstance(), setupBarLength);
  var support = new SupportResistanceFunction(data, sellSetup, TDSupportResistance_Support_getInstance(), setupBarLength);
  return listOf([buySetup, sellSetup, countdownBuyShow, countdownSellShow, perfectBuySetup, perfectSellSetup, support, resistance, countdownBuyExtra, countdownSellExtra, setupSignum, perfectBuyCountdown, perfectSellCountdown, buySetupArrow, sellSetupArrow]);
};
function TEMA() {
  StudyBuilder.call(this);
}
protoOf(TEMA).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
};
protoOf(TEMA).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var term1 = new ArithmeticFunction(new ConstantFunction(3.0), new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), ArithmeticOperation_MULT_getInstance());
  var term2 = new ArithmeticFunction(new ConstantFunction(3.0), new MovingAverageExponential(new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), length, length), ArithmeticOperation_MULT_getInstance());
  var term3 = new MovingAverageExponential(new MovingAverageExponential(new MovingAverageExponential(new PriceSourceFunction(data, priceField), length), length, length), length, imul(2, length));
  var tema = new ArithmeticFunction(new ArithmeticFunction(term1, term2, ArithmeticOperation_MINUS_getInstance()), term3, ArithmeticOperation_PLUS_getInstance());
  return listOf_0(new DisplacementFunction(tema, displace));
};
protoOf(TEMA).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function TMA() {
  StudyBuilder.call(this);
}
protoOf(TMA).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
};
protoOf(TMA).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var effectiveLength = numberToInt(round((length + 1 | 0) / 2.0));
  var priceFunc = new PriceSourceFunction(data, priceField);
  var smaFunc = new MovingAverageSimple(priceFunc, effectiveLength);
  var tmaFunc = new MovingAverageSimple(smaFunc, effectiveLength);
  var displacedTmaFunc = new DisplacementFunction(tmaFunc, displace);
  return listOf_0(displacedTmaFunc);
};
protoOf(TMA).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function Companion_51() {
  Companion_instance_51 = this;
  this.wl_1 = 'regressionLength';
  this.xl_1 = 'forecastLength';
}
var Companion_instance_51;
function Companion_getInstance_54() {
  if (Companion_instance_51 == null)
    new Companion_51();
  return Companion_instance_51;
}
function TimeSeriesForecast() {
  Companion_getInstance_54();
  StudyBuilder.call(this);
}
protoOf(TimeSeriesForecast).qf = function (params) {
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_54().xl_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_54().wl_1);
};
protoOf(TimeSeriesForecast).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_54().wl_1);
  var regressionLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_54().xl_1);
  var forecastLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var price = new PriceSourceFunction(data, priceField);
  var inertia = new LinearRegressionCurveFunction(price, regressionLength);
  var cPeriod = new ConstantFunction(forecastLength);
  var linRegSl = Companion_getInstance_32().fi(data, regressionLength, priceField);
  var lrs = new ArithmeticFunction(cPeriod, linRegSl, ArithmeticOperation_MULT_getInstance());
  return listOf_0(new ArithmeticFunction(inertia, lrs, ArithmeticOperation_PLUS_getInstance()));
};
function TripleEMA() {
  StudyBuilder.call(this);
}
protoOf(TripleEMA).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
};
protoOf(TripleEMA).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var shiftLength = 1;
  var tmp_0 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var logPriceFunctionForTriple = new LogarithmFunction(new PriceSourceFunction(data, priceField));
  var logPriceFunctionForPrev = new LogarithmFunction(new PriceSourceFunction(data, priceField));
  var triple = new MovingAverageExponential(new MovingAverageExponential(new MovingAverageExponential(logPriceFunctionForTriple, length), length, length), length, imul(2, length));
  var pricePrevious = new DisplacementFunction(logPriceFunctionForPrev, -shiftLength | 0);
  var triplePrevious = new MovingAverageExponential(new MovingAverageExponential(new MovingAverageExponential(pricePrevious, length, shiftLength), length, length + shiftLength | 0), length, imul(2, length) + shiftLength | 0);
  var trixFactor = new ArithmeticFunction(triple, triplePrevious, ArithmeticOperation_MINUS_getInstance());
  var trix = new ArithmeticFunction(trixFactor, new ConstantFunction(10000.0), ArithmeticOperation_MULT_getInstance());
  var zero = new ZeroFunction();
  return listOf([trix, zero]);
};
function getTSI($this, price, longLength, shortLength, averageType) {
  var priceDelayed = new DisplacementFunction(price, -1);
  var momentum = new ArithmeticFunction(price, priceDelayed, ArithmeticOperation_MINUS_getInstance());
  var averageOfAverage = getAverageOfAverage($this, momentum, longLength, shortLength, averageType);
  var absMomentum = new AbsFunction(momentum);
  var absEmaEma = getAverageOfAverage($this, absMomentum, longLength, shortLength, averageType);
  var div = new ArithmeticFunction(averageOfAverage, absEmaEma, ArithmeticOperation_DIV_ZERO_getInstance());
  var c100 = new ConstantFunction(100.0);
  return new ArithmeticFunction(div, c100, ArithmeticOperation_MULT_getInstance());
}
function getAverageOfAverage($this, function_0, longLength, shortLength, averageType) {
  return CommonFunctions_getInstance().tj(averageType, CommonFunctions_getInstance().tj(averageType, function_0, longLength, 1), shortLength, longLength);
}
function Companion_52() {
  Companion_instance_52 = this;
  this.yl_1 = 'longLength';
  this.zl_1 = 'shortLength';
  this.am_1 = 'signalLength';
}
var Companion_instance_52;
function Companion_getInstance_55() {
  if (Companion_instance_52 == null)
    new Companion_52();
  return Companion_instance_52;
}
function TrueStrengthIndex() {
  Companion_getInstance_55();
  StudyBuilder.call(this);
}
protoOf(TrueStrengthIndex).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_55().yl_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_55().zl_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_55().am_1);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(TrueStrengthIndex).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_55().yl_1);
  var longLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_55().zl_1);
  var shortLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_55().am_1);
  var signalLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_2 instanceof PriceFieldEnum ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_3 instanceof AverageTypeEnum ? tmp_3 : THROW_CCE();
  var price = new PriceSourceFunction(data, priceField);
  var tsi = getTSI(this, price, longLength, shortLength, averageType);
  var signalTsi = CommonFunctions_getInstance().tj(averageType, tsi, signalLength, (shortLength + longLength | 0) - 1 | 0);
  return listOf([tsi, signalTsi, new ZeroFunction()]);
};
function TypicalPrice() {
  StudyBuilder.call(this);
}
protoOf(TypicalPrice).rf = function (data, params) {
  var typicalPrice = new PriceSourceFunction(data, PriceFieldEnum_TYPICAL_getInstance());
  return listOf_0(typicalPrice);
};
function constructBuyingPressure($this, data) {
  var low = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  return new BuyingPressure(low, close);
}
function constructValueFunction($this, diff, trRng, factor) {
  var valFactor = new ArithmeticFunction(diff, trRng, ArithmeticOperation_DIV_ZERO_getInstance());
  return new ArithmeticFunction(valFactor, new ConstantFunction(factor), ArithmeticOperation_MULT_getInstance());
}
function Companion_53() {
  Companion_instance_53 = this;
  this.bm_1 = 'fastLength';
  this.cm_1 = 'mediumLength';
  this.dm_1 = 'slowLength';
}
var Companion_instance_53;
function Companion_getInstance_56() {
  if (Companion_instance_53 == null)
    new Companion_53();
  return Companion_instance_53;
}
function UltimateOscillator() {
  Companion_getInstance_56();
  StudyBuilder.call(this);
}
protoOf(UltimateOscillator).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_56().bm_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_56().cm_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_56().dm_1);
};
protoOf(UltimateOscillator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_56().bm_1);
  var fastLength = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_56().cm_1);
  var mediumLength = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_56().dm_1);
  var slowLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var trRngFast = new SumFunction(CommonFunctions_getInstance().qg(data), fastLength);
  var trRngMed = new SumFunction(CommonFunctions_getInstance().qg(data), mediumLength);
  var trRngSlow = new SumFunction(CommonFunctions_getInstance().qg(data), slowLength);
  var diffFast = new SumFunction(constructBuyingPressure(Companion_getInstance_56(), data), fastLength);
  var diffMed = new SumFunction(constructBuyingPressure(Companion_getInstance_56(), data), mediumLength);
  var diffSlow = new SumFunction(constructBuyingPressure(Companion_getInstance_56(), data), slowLength);
  var factorFast = slowLength / fastLength;
  var factorMed = slowLength / mediumLength;
  var valFast = constructValueFunction(Companion_getInstance_56(), diffFast, trRngFast, factorFast);
  var valMed = constructValueFunction(Companion_getInstance_56(), diffMed, trRngMed, factorMed);
  var valFastMed = new ArithmeticFunction(valFast, valMed, ArithmeticOperation_PLUS_getInstance());
  var valSlow = new ArithmeticFunction(diffSlow, trRngSlow, ArithmeticOperation_DIV_ZERO_getInstance());
  var val = new ArithmeticFunction(valFastMed, valSlow, ArithmeticOperation_PLUS_getInstance());
  var ultOsc = constructValueFunction(Companion_getInstance_56(), val, new ConstantFunction(factorFast + factorMed + 1.0), 100.0);
  return listOf_0(ultOsc);
};
function VWAP() {
  StudyBuilder.call(this);
}
protoOf(VWAP).rf = function (data, params) {
  var volume = new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance());
  var typicalPrice = new PriceSourceFunction(data, PriceFieldEnum_TYPICAL_getInstance());
  var vp = new ArithmeticFunction(typicalPrice, volume, ArithmeticOperation_MULT_getInstance());
  var totalVP = new CumulativeSumWithinSessionFunction(data, vp);
  var totalVolume = new CumulativeSumWithinSessionFunction(data, volume);
  var vwap = WindowFunction_init_$Create$(new ArithmeticFunction(totalVP, totalVolume, ArithmeticOperation_DIV_ZERO_getInstance()), 0, true);
  return listOf_0(vwap);
};
function VerticalHorizontalFilter() {
  StudyBuilder.call(this);
}
protoOf(VerticalHorizontalFilter).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
};
protoOf(VerticalHorizontalFilter).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var highest = new HighestFunction(highPrice, length);
  var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var lowest = new LowestFunction(lowPrice, length);
  var numerator = new AbsFunction(new ArithmeticFunction(highest, lowest, ArithmeticOperation_MINUS_getInstance()));
  var closePrice = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var closeDiff = new DiffPrevFunction(closePrice);
  var absCloseDiff = new AbsFunction(closeDiff);
  var denominator = new SumFunction(absCloseDiff, length);
  var vhf = WindowFunction_init_$Create$(new ArithmeticFunction(numerator, denominator, ArithmeticOperation_DIV_ZERO_getInstance()), 0, true);
  return listOf_0(vhf);
};
function WMA() {
  StudyBuilder.call(this);
}
protoOf(WMA).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
};
protoOf(WMA).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var priceFunc = new PriceSourceFunction(data, priceField);
  var wmaFunc = new MovingAverageWeighted(priceFunc, length);
  var displacedSmaFunc = new DisplacementFunction(wmaFunc, displace);
  return listOf_0(displacedSmaFunc);
};
protoOf(WMA).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function Companion_54() {
  Companion_instance_54 = this;
  this.em_1 = 'channelLength';
  this.fm_1 = 'averageLength';
  this.gm_1 = 'overBoughtLevel1';
  this.hm_1 = 'overBoughtLevel2';
  this.im_1 = 'overSoldLevel1';
  this.jm_1 = 'overSoldLevel2';
}
var Companion_instance_54;
function Companion_getInstance_57() {
  if (Companion_instance_54 == null)
    new Companion_54();
  return Companion_instance_54;
}
function WaveTrend() {
  Companion_getInstance_57();
  StudyBuilder.call(this);
}
protoOf(WaveTrend).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_57().em_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_57().fm_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_57().gm_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_57().hm_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_57().im_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_57().jm_1);
};
protoOf(WaveTrend).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_57().em_1);
  var channelLen = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_57().fm_1);
  var averageLen = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_57().gm_1);
  var obLevel1 = new ConstantFunction((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE());
  var tmp_2 = params.k1(Companion_getInstance_57().hm_1);
  var obLevel2 = new ConstantFunction((!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE());
  var tmp_3 = params.k1(Companion_getInstance_57().im_1);
  var osLevel1 = new ConstantFunction((!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE());
  var tmp_4 = params.k1(Companion_getInstance_57().jm_1);
  var osLevel2 = new ConstantFunction((!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE());
  var averagePrice = new PriceSourceFunction(data, PriceFieldEnum_TYPICAL_getInstance());
  var esa = new MovingAverageExponential(averagePrice, channelLen);
  var af = new ArithmeticFunction(averagePrice, esa, ArithmeticOperation_MINUS_getInstance());
  var abs = new AbsFunction(af);
  var d = new MovingAverageExponential(abs, channelLen, channelLen);
  var ci = new ArithmeticFunction(new ArithmeticFunction(averagePrice, esa, ArithmeticOperation_MINUS_getInstance()), new ArithmeticFunction(new ConstantFunction(0.015), d, ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_DIV_getInstance());
  var wt1 = new MovingAverageExponential(ci, averageLen, channelLen + averageLen | 0);
  var wt2 = new MovingAverageSimple(wt1, 4);
  var zero = new ZeroFunction();
  var wtdiff = new ArithmeticFunction(wt1, wt2, ArithmeticOperation_MINUS_getInstance());
  return listOf([zero, obLevel1, obLevel2, osLevel1, osLevel2, wt1, wt2, wtdiff]);
};
function Companion_55() {
  Companion_instance_55 = this;
  this.km_1 = 'channelLength';
  this.lm_1 = 'averageLength';
  this.mm_1 = 'overBoughtLevel1';
  this.nm_1 = 'overBoughtLevel2';
  this.om_1 = 'overSoldLevel1';
  this.pm_1 = 'overSoldLevel2';
}
var Companion_instance_55;
function Companion_getInstance_58() {
  if (Companion_instance_55 == null)
    new Companion_55();
  return Companion_instance_55;
}
function WaveTrendWithCrosses() {
  Companion_getInstance_58();
  StudyBuilder.call(this);
}
protoOf(WaveTrendWithCrosses).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_58().km_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_58().lm_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_58().mm_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_58().nm_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_58().om_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_58().pm_1);
};
protoOf(WaveTrendWithCrosses).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_58().km_1);
  var channelLen = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_58().lm_1);
  var averageLen = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_58().mm_1);
  var obLevel1 = new ConstantFunction((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE());
  var tmp_2 = params.k1(Companion_getInstance_58().nm_1);
  var obLevel2 = new ConstantFunction((!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE());
  var tmp_3 = params.k1(Companion_getInstance_58().om_1);
  var osLevel1 = new ConstantFunction((!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE());
  var tmp_4 = params.k1(Companion_getInstance_58().pm_1);
  var osLevel2 = new ConstantFunction((!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE());
  var averagePrice = new PriceSourceFunction(data, PriceFieldEnum_TYPICAL_getInstance());
  var esa = new MovingAverageExponential(averagePrice, channelLen);
  var af = new ArithmeticFunction(averagePrice, esa, ArithmeticOperation_MINUS_getInstance());
  var abs = new AbsFunction(af);
  var d = new MovingAverageExponential(abs, channelLen, channelLen);
  var ci = new ArithmeticFunction(new ArithmeticFunction(averagePrice, esa, ArithmeticOperation_MINUS_getInstance()), new ArithmeticFunction(new ConstantFunction(0.015), d, ArithmeticOperation_MULT_getInstance()), ArithmeticOperation_DIV_getInstance());
  var wt1 = new MovingAverageExponential(ci, averageLen, channelLen + averageLen | 0);
  var wt2 = new MovingAverageSimple(wt1, 4);
  var zero = new ZeroFunction();
  var wtdiff = new ArithmeticFunction(wt1, wt2, ArithmeticOperation_MINUS_getInstance());
  var crosses1 = new SeriesCrossingPoints(data, wt1, wt2, false, channelLen + averageLen | 0);
  var crosses2 = new SeriesCrossingPoints(data, wt1, wt2, true, channelLen + averageLen | 0);
  var candle1 = new MapToOneFunction(data, crosses1);
  var candle2 = new MapToOneFunction(data, crosses2);
  return listOf([zero, obLevel1, obLevel2, osLevel1, osLevel2, wt1, wt2, wtdiff, crosses1, crosses2, candle1, candle2]);
};
function WeightedClose() {
  StudyBuilder.call(this);
}
protoOf(WeightedClose).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
};
protoOf(WeightedClose).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var high = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var low = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var c2 = new ConstantFunction(2.0);
  var c4 = new ConstantFunction(4.0);
  var sumPrices = new ArithmeticFunction(new ArithmeticFunction(c2, close, ArithmeticOperation_MULT_getInstance()), new ArithmeticFunction(high, low, ArithmeticOperation_PLUS_getInstance()), ArithmeticOperation_PLUS_getInstance());
  var wtdClose = new ArithmeticFunction(sumPrices, c4, ArithmeticOperation_DIV_getInstance());
  var avg = new MovingAverageSimple(wtdClose, length);
  return listOf([wtdClose, avg]);
};
function WildersSmoothing() {
  StudyBuilder.call(this);
}
protoOf(WildersSmoothing).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).sf.call(this, params);
};
protoOf(WildersSmoothing).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp_1 instanceof PriceFieldEnum ? tmp_1 : THROW_CCE();
  var priceFunc = new PriceSourceFunction(data, priceField);
  var wildersFunc = new WildersAverage(priceFunc, length);
  var displacedFunc = new DisplacementFunction(wildersFunc, displace);
  return listOf_0(displacedFunc);
};
protoOf(WildersSmoothing).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_8().nf_1);
  var displace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  return -displace | 0;
};
function WilliamsAD() {
  StudyBuilder.call(this);
}
protoOf(WilliamsAD).rf = function (data, params) {
  var williamsAD = new WilliamsADFunction(data);
  return listOf([williamsAD, new ZeroFunction()]);
};
function Companion_56() {
  Companion_instance_56 = this;
  this.ni_1 = 'jawLength';
  this.oi_1 = 'jawDisplace';
  this.pi_1 = 'teethLength';
  this.qi_1 = 'teethDisplace';
  this.ri_1 = 'lipsLength';
  this.si_1 = 'lipsDisplace';
  this.ti_1 = 'priceHigh';
  this.ui_1 = 'priceLow';
}
protoOf(Companion_56).vi = function (data, priceHigh, priceLow) {
  var highPrice = new PriceSourceFunction(data, priceHigh);
  var lowPrice = new PriceSourceFunction(data, priceLow);
  return new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation_MIDPOINT_getInstance());
};
protoOf(Companion_56).wi = function (medianPrice, averageLength, displacementLength, averageType) {
  var averageFunction = CommonFunctions_getInstance().rg(averageType, medianPrice, averageLength);
  return new DisplacementFunction(averageFunction, displacementLength);
};
var Companion_instance_56;
function Companion_getInstance_59() {
  if (Companion_instance_56 == null)
    new Companion_56();
  return Companion_instance_56;
}
function WilliamsAlligator() {
  Companion_getInstance_59();
  StudyBuilder.call(this);
}
protoOf(WilliamsAlligator).qf = function (params) {
  protoOf(StudyBuilder).wf.call(this, params, Companion_getInstance_59().ti_1);
  protoOf(StudyBuilder).wf.call(this, params, Companion_getInstance_59().ui_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_59().ni_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_59().oi_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_59().pi_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_59().qi_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_59().ri_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_59().si_1);
  protoOf(StudyBuilder).xf.call(this, params);
};
protoOf(WilliamsAlligator).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_59().ti_1);
  var priceHigh = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_59().ui_1);
  var priceLow = tmp_0 instanceof PriceFieldEnum ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_59().ni_1);
  var jawLength = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var tmp_2 = params.k1(Companion_getInstance_59().oi_1);
  var jawDisplace = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
  var tmp_3 = params.k1(Companion_getInstance_59().pi_1);
  var teethLength = (!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE();
  var tmp_4 = params.k1(Companion_getInstance_59().qi_1);
  var teethDisplace = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
  var tmp_5 = params.k1(Companion_getInstance_59().ri_1);
  var lipsLength = (!(tmp_5 == null) ? typeof tmp_5 === 'number' : false) ? tmp_5 : THROW_CCE();
  var tmp_6 = params.k1(Companion_getInstance_59().si_1);
  var lipsDisplace = (!(tmp_6 == null) ? typeof tmp_6 === 'number' : false) ? tmp_6 : THROW_CCE();
  var tmp_7 = params.k1(Companion_getInstance_8().pf_1);
  var averageType = tmp_7 instanceof AverageTypeEnum ? tmp_7 : THROW_CCE();
  var medianPrice = Companion_getInstance_59().vi(data, priceHigh, priceLow);
  var jawFunction = Companion_getInstance_59().wi(medianPrice, jawLength, -jawDisplace | 0, averageType);
  var teethFunction = Companion_getInstance_59().wi(medianPrice, teethLength, -teethDisplace | 0, averageType);
  var lipsFunction = Companion_getInstance_59().wi(medianPrice, lipsLength, -lipsDisplace | 0, averageType);
  return listOf([jawFunction, teethFunction, lipsFunction]);
};
protoOf(WilliamsAlligator).ef = function (params) {
  var tmp = params.k1(Companion_getInstance_59().qi_1);
  var teethDisplace = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_59().oi_1);
  var jawDisplace = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_59().si_1);
  var lipsDisplace = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  return MathUtils_getInstance().xi(new Int32Array([teethDisplace, lipsDisplace, jawDisplace]));
};
function Companion_57() {
  Companion_instance_57 = this;
  this.qm_1 = 'offset';
}
var Companion_instance_57;
function Companion_getInstance_60() {
  if (Companion_instance_57 == null)
    new Companion_57();
  return Companion_instance_57;
}
function WilliamsFractal() {
  Companion_getInstance_60();
  StudyBuilder.call(this);
}
protoOf(WilliamsFractal).qf = function (params) {
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_60().qm_1);
};
protoOf(WilliamsFractal).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_60().qm_1);
  var offset = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var priceHigh = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var priceLow = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var upFractal = new WilliamsFractalFilter(priceHigh, offset, FractalOperation_UP_getInstance());
  var downFractal = new WilliamsFractalFilter(priceLow, offset, FractalOperation_DOWN_getInstance());
  return listOf([upFractal, downFractal]);
};
function Companion_58() {
  Companion_instance_58 = this;
  this.rm_1 = 'overbought';
  this.sm_1 = 'oversold';
}
var Companion_instance_58;
function Companion_getInstance_61() {
  if (Companion_instance_58 == null)
    new Companion_58();
  return Companion_instance_58;
}
function WilliamsPercentRange() {
  Companion_getInstance_61();
  StudyBuilder.call(this);
}
protoOf(WilliamsPercentRange).qf = function (params) {
  protoOf(StudyBuilder).uf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_61().rm_1);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_61().sm_1);
};
protoOf(WilliamsPercentRange).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().mf_1);
  var length = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  var tmp_0 = params.k1(Companion_getInstance_61().rm_1);
  var overbought = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var tmp_1 = params.k1(Companion_getInstance_61().sm_1);
  var oversold = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
  var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var hh = new HighestFunction(highPrice, length);
  var hh2 = new HighestFunction(highPrice, length);
  var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var ll = new LowestFunction(lowPrice, length);
  var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var c100 = new ConstantFunction(-100.0);
  var wpr = WindowFunction_init_$Create$(new ArithmeticFunction(new ArithmeticFunction(new ArithmeticFunction(hh, close, ArithmeticOperation_MINUS_getInstance()), new ArithmeticFunction(hh2, ll, ArithmeticOperation_MINUS_getInstance()), ArithmeticOperation_DIV_ZERO_getInstance()), c100, ArithmeticOperation_MULT_getInstance()), 0, true);
  var overboughtF = new ConstantFunction(overbought);
  var oversoldF = new ConstantFunction(oversold);
  return listOf([wpr, oversoldF, overboughtF]);
};
function Companion_59() {
  Companion_instance_59 = this;
  this.tm_1 = 'deviation';
}
var Companion_instance_59;
function Companion_getInstance_62() {
  if (Companion_instance_59 == null)
    new Companion_59();
  return Companion_instance_59;
}
function ZigZag() {
  Companion_getInstance_62();
  StudyBuilder.call(this);
}
protoOf(ZigZag).qf = function (params) {
  protoOf(StudyBuilder).vf.call(this, params);
  protoOf(StudyBuilder).tf.call(this, params, Companion_getInstance_62().tm_1);
};
protoOf(ZigZag).rf = function (data, params) {
  var tmp = params.k1(Companion_getInstance_8().of_1);
  var priceField = tmp instanceof PriceFieldEnum ? tmp : THROW_CCE();
  var priceSource = new PriceSourceFunction(data, priceField);
  var tmp_0 = params.k1(Companion_getInstance_62().tm_1);
  var deviation = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
  var zigzag = WindowFunction_init_$Create$(new ZigZagFunction(priceSource, deviation / 10000.0), 0, true);
  return listOf_0(zigzag);
};
function MathUtils() {
  MathUtils_instance = this;
}
protoOf(MathUtils).xi = function (values) {
  var maximum = values[0];
  var inductionVariable = 0;
  var last = values.length;
  while (inductionVariable < last) {
    var value = values[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    if (value > maximum) {
      maximum = value;
    }
  }
  return maximum;
};
var MathUtils_instance;
function MathUtils_getInstance() {
  if (MathUtils_instance == null)
    new MathUtils();
  return MathUtils_instance;
}
function AbsFunction(srcFunc) {
  AbstractCachingFunction.call(this);
  this.vm_1 = srcFunc;
}
protoOf(AbsFunction).wm = function (index) {
  // Inline function 'kotlin.math.abs' call
  var tmp0_abs = this.vm_1.calculateAt(index);
  return Math.abs(tmp0_abs);
};
protoOf(AbsFunction).pe = function () {
  return listOf_0(this.vm_1);
};
function ArithmeticFunction(leftFunc, rightFunc, operation) {
  this.zm_1 = leftFunc;
  this.an_1 = rightFunc;
  this.bn_1 = operation;
}
protoOf(ArithmeticFunction).calculateAt = function (index) {
  return this.cn(this.zm_1.calculateAt(index), this.an_1.calculateAt(index));
};
protoOf(ArithmeticFunction).qe = function () {
  return 0;
};
protoOf(ArithmeticFunction).re = function () {
  return 0;
};
protoOf(ArithmeticFunction).pe = function () {
  return listOf([this.zm_1, this.an_1]);
};
protoOf(ArithmeticFunction).cn = function (leftValue, rightValue) {
  DoubleCompanionObject_getInstance();
  var result = NaN;
  switch (this.bn_1.c2_1) {
    case 0:
      result = leftValue + rightValue;
      break;
    case 1:
      result = leftValue - rightValue;
      break;
    case 2:
      result = leftValue * rightValue;
      break;
    case 3:
      result = leftValue / rightValue;
      break;
    case 4:
      result = !(compareTo(rightValue, 0.0) === 0) ? leftValue / rightValue : 0.0;
      break;
    case 5:
      result = (leftValue + rightValue) / 2.0;
      break;
    case 6:
      // Inline function 'kotlin.comparisons.maxOf' call

      result = Math.max(leftValue, rightValue);
      break;
    case 7:
      var tmp;
      if (compareTo(rightValue + leftValue, 0.0) === 0) {
        tmp = 0.0;
      } else {
        tmp = (leftValue - rightValue) / (leftValue + rightValue);
      }

      result = tmp;
      break;
    case 8:
      // Inline function 'kotlin.math.abs' call

      var tmp0_abs = leftValue - rightValue;
      result = Math.abs(tmp0_abs) / (leftValue + rightValue);
      break;
    case 9:
      result = (leftValue - rightValue) / rightValue;
      break;
    case 10:
      result = (leftValue - rightValue) / leftValue;
      break;
    case 11:
      // Inline function 'kotlin.math.pow' call

      result = Math.pow(leftValue, rightValue);
      break;
  }
  return result;
};
protoOf(ArithmeticFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.minOf' call
  var tmp0_minOf = this.zm_1.dataChanged(changes);
  var tmp1_minOf = this.an_1.dataChanged(changes);
  return Math.min(tmp0_minOf, tmp1_minOf);
};
protoOf(ArithmeticFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
var ArithmeticOperation_PLUS_instance;
var ArithmeticOperation_MINUS_instance;
var ArithmeticOperation_MULT_instance;
var ArithmeticOperation_DIV_instance;
var ArithmeticOperation_DIV_ZERO_instance;
var ArithmeticOperation_MIDPOINT_instance;
var ArithmeticOperation_MAX_instance;
var ArithmeticOperation_DIFF_DIV_SUM_ZERO_instance;
var ArithmeticOperation_ABSDIFF_DIV_SUM_instance;
var ArithmeticOperation_DIFF_DIV_RIGHT_instance;
var ArithmeticOperation_DIFF_DIV_LEFT_instance;
var ArithmeticOperation_POW_instance;
var ArithmeticOperation_entriesInitialized;
function ArithmeticOperation_initEntries() {
  if (ArithmeticOperation_entriesInitialized)
    return Unit_getInstance();
  ArithmeticOperation_entriesInitialized = true;
  ArithmeticOperation_PLUS_instance = new ArithmeticOperation('PLUS', 0);
  ArithmeticOperation_MINUS_instance = new ArithmeticOperation('MINUS', 1);
  ArithmeticOperation_MULT_instance = new ArithmeticOperation('MULT', 2);
  ArithmeticOperation_DIV_instance = new ArithmeticOperation('DIV', 3);
  ArithmeticOperation_DIV_ZERO_instance = new ArithmeticOperation('DIV_ZERO', 4);
  ArithmeticOperation_MIDPOINT_instance = new ArithmeticOperation('MIDPOINT', 5);
  ArithmeticOperation_MAX_instance = new ArithmeticOperation('MAX', 6);
  ArithmeticOperation_DIFF_DIV_SUM_ZERO_instance = new ArithmeticOperation('DIFF_DIV_SUM_ZERO', 7);
  ArithmeticOperation_ABSDIFF_DIV_SUM_instance = new ArithmeticOperation('ABSDIFF_DIV_SUM', 8);
  ArithmeticOperation_DIFF_DIV_RIGHT_instance = new ArithmeticOperation('DIFF_DIV_RIGHT', 9);
  ArithmeticOperation_DIFF_DIV_LEFT_instance = new ArithmeticOperation('DIFF_DIV_LEFT', 10);
  ArithmeticOperation_POW_instance = new ArithmeticOperation('POW', 11);
}
function ArithmeticOperation(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function ArithmeticOperation_PLUS_getInstance() {
  ArithmeticOperation_initEntries();
  return ArithmeticOperation_PLUS_instance;
}
function ArithmeticOperation_MINUS_getInstance() {
  ArithmeticOperation_initEntries();
  return ArithmeticOperation_MINUS_instance;
}
function ArithmeticOperation_MULT_getInstance() {
  ArithmeticOperation_initEntries();
  return ArithmeticOperation_MULT_instance;
}
function ArithmeticOperation_DIV_getInstance() {
  ArithmeticOperation_initEntries();
  return ArithmeticOperation_DIV_instance;
}
function ArithmeticOperation_DIV_ZERO_getInstance() {
  ArithmeticOperation_initEntries();
  return ArithmeticOperation_DIV_ZERO_instance;
}
function ArithmeticOperation_MIDPOINT_getInstance() {
  ArithmeticOperation_initEntries();
  return ArithmeticOperation_MIDPOINT_instance;
}
function ArithmeticOperation_MAX_getInstance() {
  ArithmeticOperation_initEntries();
  return ArithmeticOperation_MAX_instance;
}
function ArithmeticOperation_DIFF_DIV_SUM_ZERO_getInstance() {
  ArithmeticOperation_initEntries();
  return ArithmeticOperation_DIFF_DIV_SUM_ZERO_instance;
}
function ArithmeticOperation_DIFF_DIV_RIGHT_getInstance() {
  ArithmeticOperation_initEntries();
  return ArithmeticOperation_DIFF_DIV_RIGHT_instance;
}
function ArithmeticOperation_POW_getInstance() {
  ArithmeticOperation_initEntries();
  return ArithmeticOperation_POW_instance;
}
function getTrueLowValue($this, low, prevClose) {
  if (isNaN_0(low) ? true : isNaN_0(prevClose)) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  // Inline function 'kotlin.comparisons.minOf' call
  return Math.min(low, prevClose);
}
function BuyingPressure(low, close) {
  AbstractCachingFunction.call(this);
  this.en_1 = low;
  this.fn_1 = close;
}
protoOf(BuyingPressure).qe = function () {
  return 1;
};
protoOf(BuyingPressure).pe = function () {
  return listOf([this.en_1, this.fn_1]);
};
protoOf(BuyingPressure).wm = function (index) {
  var trueLow = this.en_1.calculateAt(index);
  if (index > 0) {
    trueLow = getTrueLowValue(this, trueLow, this.fn_1.calculateAt(index - 1 | 0));
  }
  var thisClose = this.fn_1.calculateAt(index);
  return thisClose - trueLow;
};
function getCloseLocationValue($this, low, close, high) {
  return !(compareTo(high, low) === 0) ? (close - low - (high - close)) / (high - low) : 1.0;
}
function CloseLocationValueFunction(low, close, high) {
  AbstractCachingFunction.call(this);
  this.hn_1 = low;
  this.in_1 = close;
  this.jn_1 = high;
}
protoOf(CloseLocationValueFunction).pe = function () {
  return listOf([this.hn_1, this.in_1, this.jn_1]);
};
protoOf(CloseLocationValueFunction).wm = function (index) {
  var l = this.hn_1.calculateAt(index);
  var h = this.jn_1.calculateAt(index);
  var c = this.in_1.calculateAt(index);
  return getCloseLocationValue(this, l, c, h);
};
function CombineFunction(tradeDataHolder, xFunction, yFunction, predicate) {
  this.kn_1 = tradeDataHolder;
  this.ln_1 = xFunction;
  this.mn_1 = yFunction;
  this.nn_1 = predicate;
}
protoOf(CombineFunction).pe = function () {
  return listOf([this.ln_1, this.mn_1]);
};
protoOf(CombineFunction).qe = function () {
  return 0;
};
protoOf(CombineFunction).re = function () {
  return 0;
};
protoOf(CombineFunction).calculateAt = function (index) {
  return this.nn_1(this.ln_1.calculateAt(index), this.mn_1.calculateAt(index));
};
protoOf(CombineFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.kn_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(CombineFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function createMidpointFunction($this, data) {
  return new ArithmeticFunction(new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance()), new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance()), ArithmeticOperation_MIDPOINT_getInstance());
}
function CommonFunctions$notZeroPredicateWithPrecision$lambda($precision) {
  return function (x) {
    return CommonFunctions_getInstance().on(x, $precision);
  };
}
function CommonFunctions() {
  CommonFunctions_instance = this;
  this.cg_1 = new ConstantFunction(-1.0);
  this.dg_1 = new ConstantFunction(1.0);
  this.eg_1 = new ConstantFunction(50.0);
  this.fg_1 = new ConstantFunction(100.0);
}
protoOf(CommonFunctions).qg = function (data) {
  var low = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var close = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var high = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  return new TrueRangeFunction(low, close, high);
};
protoOf(CommonFunctions).di = function (data, dperiod, overbought, oversold, kperiod, slowing, averageTypeEnum) {
  var k = this.tj(averageTypeEnum, this.pn(data, kperiod), slowing, kperiod);
  var kd = this.tj(averageTypeEnum, this.pn(data, kperiod), slowing, kperiod);
  var d = this.tj(averageTypeEnum, kd, dperiod, slowing + kperiod | 0);
  var overboughtF = new ConstantFunction(overbought);
  var oversoldF = new ConstantFunction(oversold);
  return listOf([k, d, overboughtF, oversoldF]);
};
protoOf(CommonFunctions).pn = function (data, length) {
  var loPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var hiPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var priceSource = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var value1 = new LowestFunction(loPrice, length);
  var hiFunc = new HighestFunction(hiPrice, length);
  var value2 = new ArithmeticFunction(hiFunc, value1, ArithmeticOperation_MINUS_getInstance());
  return this.al(priceSource, value1, value2);
};
protoOf(CommonFunctions).al = function (price, value1, value2) {
  var nom = new ArithmeticFunction(price, value1, ArithmeticOperation_MINUS_getInstance());
  var div = new ArithmeticFunction(nom, value2, ArithmeticOperation_DIV_ZERO_getInstance());
  return new ArithmeticFunction(div, this.fg_1, ArithmeticOperation_MULT_getInstance());
};
protoOf(CommonFunctions).ig = function (data) {
  var avgShort = new MovingAverageSimple(createMidpointFunction(this, data), 5);
  var avgLong = new MovingAverageSimple(createMidpointFunction(this, data), 34);
  return new ArithmeticFunction(avgShort, avgLong, ArithmeticOperation_MINUS_getInstance());
};
protoOf(CommonFunctions).jg = function (data) {
  var clv = new CloseLocationValueFunction(new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance()), new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance()), new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance()));
  return new CumulativeSumFunction(new ArithmeticFunction(new PriceSourceFunction(data, PriceFieldEnum_VOLUME_getInstance()), clv, ArithmeticOperation_MULT_getInstance()));
};
protoOf(CommonFunctions).ah = function (data) {
  var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  return new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation_MINUS_getInstance());
};
protoOf(CommonFunctions).wg = function (data) {
  var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var closePrice = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var sumlLowClose = new ArithmeticFunction(lowPrice, closePrice, ArithmeticOperation_PLUS_getInstance());
  return new ArithmeticFunction(sumlLowClose, highPrice, ArithmeticOperation_PLUS_getInstance());
};
protoOf(CommonFunctions).uk = function (data) {
  var openPrice = new PriceSourceFunction(data, PriceFieldEnum_OPEN_getInstance());
  var highPrice = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var lowPrice = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var closePrice = new PriceSourceFunction(data, PriceFieldEnum_CLOSE_getInstance());
  return new ArithmeticFunction(new ArithmeticFunction(closePrice, openPrice, ArithmeticOperation_MINUS_getInstance()), new ArithmeticFunction(highPrice, lowPrice, ArithmeticOperation_MINUS_getInstance()), ArithmeticOperation_DIV_ZERO_getInstance());
};
protoOf(CommonFunctions).zk = function (data, length) {
  return new MovingAverageSimple(this.qg(data), length);
};
protoOf(CommonFunctions).hh = function (data, length, isPlus, averageType) {
  var priceLow = new PriceSourceFunction(data, PriceFieldEnum_LOW_getInstance());
  var lowDiff = new ArithmeticFunction(new DiffPrevFunction(priceLow), this.cg_1, ArithmeticOperation_MULT_getInstance());
  var priceHigh = new PriceSourceFunction(data, PriceFieldEnum_HIGH_getInstance());
  var hiDiff = new DiffPrevFunction(priceHigh);
  var dm = isPlus ? new DirectionalMovementFunction(hiDiff, lowDiff) : new DirectionalMovementFunction(lowDiff, hiDiff);
  var atr = this.tj(averageType, this.qg(data), length, length);
  return new ArithmeticFunction(new ArithmeticFunction(this.tj(averageType, dm, length, length), this.fg_1, ArithmeticOperation_MULT_getInstance()), atr, ArithmeticOperation_DIV_ZERO_getInstance());
};
protoOf(CommonFunctions).gg = function (data, length, averageType) {
  var dx = new DirectionalIndexFunction(this.hh(data, length, true, averageType), this.hh(data, length, false, averageType));
  var adx = this.tj(averageType, dx, length, imul(2, length));
  return WindowFunction_init_$Create$(adx, 0, true);
};
protoOf(CommonFunctions).tk = function (priceSourceFunction, length, averageType) {
  var net = this.tj(averageType, new DiffPrevFunction(priceSourceFunction), length, length);
  var tot = this.tj(averageType, new AbsFunction(new DiffPrevFunction(priceSourceFunction)), length, length);
  var chgRatio = new ArithmeticFunction(net, tot, ArithmeticOperation_DIV_ZERO_getInstance());
  return WindowFunction_init_$Create$(new ArithmeticFunction(this.eg_1, new ArithmeticFunction(chgRatio, this.dg_1, ArithmeticOperation_PLUS_getInstance()), ArithmeticOperation_MULT_getInstance()), 0, true);
};
protoOf(CommonFunctions).tj = function (averageType, source, length, offset) {
  var result;
  switch (averageType.c2_1) {
    case 0:
      result = new MovingAverageSimple(source, length);
      break;
    case 1:
      result = new WildersAverage(source, length);
      break;
    case 2:
      result = new MovingAverageWeighted(source, length);
      break;
    case 3:
      result = offset == null ? new MovingAverageExponential(source, length) : new MovingAverageExponential(source, length, offset);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return result;
};
protoOf(CommonFunctions).rg = function (averageType, source, length, offset, $super) {
  offset = offset === VOID ? null : offset;
  return $super === VOID ? this.tj(averageType, source, length, offset) : $super.tj.call(this, averageType, source, length, offset);
};
protoOf(CommonFunctions).on = function (value, precision) {
  // Inline function 'kotlin.math.abs' call
  return Math.abs(value) > precision;
};
protoOf(CommonFunctions).dh = function (precision) {
  return CommonFunctions$notZeroPredicateWithPrecision$lambda(precision);
};
var CommonFunctions_instance;
function CommonFunctions_getInstance() {
  if (CommonFunctions_instance == null)
    new CommonFunctions();
  return CommonFunctions_instance;
}
function ConstantFunction(value) {
  this.qn_1 = value;
}
protoOf(ConstantFunction).calculateAt = function (index) {
  return this.qn_1;
};
protoOf(ConstantFunction).qe = function () {
  return 0;
};
protoOf(ConstantFunction).re = function () {
  return 0;
};
protoOf(ConstantFunction).pe = function () {
  return emptyList();
};
protoOf(ConstantFunction).ob = function (changes) {
  return changes.ke_1;
};
protoOf(ConstantFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function CumulativeSumFunction(src) {
  AbstractCachingFunction.call(this);
  this.sn_1 = src;
}
protoOf(CumulativeSumFunction).pe = function () {
  return listOf_0(this.sn_1);
};
protoOf(CumulativeSumFunction).wm = function (index) {
  var v = this.sn_1.calculateAt(index);
  if (isNaN_0(v)) {
    v = 0.0;
  }
  if (index === 0) {
    return v;
  }
  return this.calculateAt(index - 1 | 0) + v;
};
function getPreviousItemInTradingSessionIdx($this, index) {
  var currentItem = $this.un_1.getTradeItem(index);
  if (!(currentItem == null)) {
    var session = getSessionForTimestamp($this, currentItem.getTime());
    if (!(session == null)) {
      if (index === 0) {
        return index;
      }
      var prevIdx = index - 1 | 0;
      var prevItem = $this.un_1.getTradeItem(prevIdx);
      if (!(prevItem == null) ? prevItem.getTime() >= session.getFrom() : false) {
        return prevIdx;
      }
      return index;
    }
  }
  return -1;
}
function getSessionForTimestamp($this, timestamp) {
  var tmp = $this.un_1.oc();
  var index = binarySearch_0(tmp, VOID, VOID, CumulativeSumWithinSessionFunction$getSessionForTimestamp$lambda($this, timestamp));
  if (index >= 0) {
    return $this.un_1.oc().g(index);
  }
  return null;
}
function timestampInSessionCompare($this, timestamp, session) {
  if (session.getFrom() <= timestamp ? timestamp < session.getTo() : false) {
    return 0;
  }
  if (timestamp < session.getFrom()) {
    return 1;
  }
  return -1;
}
function CumulativeSumWithinSessionFunction$getSessionForTimestamp$lambda(this$0, $timestamp) {
  return function (session) {
    return timestampInSessionCompare(this$0, $timestamp, session);
  };
}
function CumulativeSumWithinSessionFunction(data, src) {
  AbstractCachingFunction.call(this);
  this.un_1 = data;
  this.vn_1 = src;
}
protoOf(CumulativeSumWithinSessionFunction).pe = function () {
  return listOf_0(this.vn_1);
};
protoOf(CumulativeSumWithinSessionFunction).wm = function (index) {
  var v = this.vn_1.calculateAt(index);
  if (isNaN_0(v)) {
    v = 0.0;
  }
  var prevItemIdx = getPreviousItemInTradingSessionIdx(this, index);
  if (prevItemIdx === -1) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  if (prevItemIdx === index) {
    return v;
  }
  return this.calculateAt(prevItemIdx) + v;
};
function DiffDivPrevFunction(srcFunc) {
  AbstractCachingFunction.call(this);
  this.xn_1 = srcFunc;
}
protoOf(DiffDivPrevFunction).qe = function () {
  return 1;
};
protoOf(DiffDivPrevFunction).pe = function () {
  return listOf_0(this.xn_1);
};
protoOf(DiffDivPrevFunction).wm = function (index) {
  if (index === 0) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var last = this.xn_1.calculateAt(index);
  var prev = this.xn_1.calculateAt(index - 1 | 0);
  if (isNaN_0(prev)) {
    prev = 0.0;
  }
  return !(compareTo(prev, 0.0) === 0) ? (last - prev) / prev : 0.0;
};
function DiffPrevFunction(srcFunc, distance) {
  distance = distance === VOID ? 1 : distance;
  AbstractCachingFunction.call(this);
  this.zn_1 = srcFunc;
  this.ao_1 = distance;
}
protoOf(DiffPrevFunction).pe = function () {
  return listOf_0(this.zn_1);
};
protoOf(DiffPrevFunction).qe = function () {
  return 1;
};
protoOf(DiffPrevFunction).wm = function (index) {
  if ((index - this.ao_1 | 0) < 0) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var last = this.zn_1.calculateAt(index);
  var prev = this.zn_1.calculateAt(index - this.ao_1 | 0);
  return last - prev;
};
function diValue($this, dip, dim) {
  if (isNaN_0(dim) ? true : isNaN_0(dip)) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  if (dip + dim > 0.0) {
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = dip - dim;
    return 100 * Math.abs(tmp0_abs) / (dip + dim);
  } else
    return 0.0;
}
function DirectionalIndexFunction(diPlus, diMinus) {
  AbstractCachingFunction.call(this);
  this.co_1 = diPlus;
  this.do_1 = diMinus;
}
protoOf(DirectionalIndexFunction).pe = function () {
  return listOf([this.co_1, this.do_1]);
};
protoOf(DirectionalIndexFunction).wm = function (index) {
  return diValue(this, this.co_1.calculateAt(index), this.do_1.calculateAt(index));
};
function dmValue($this, md, ad) {
  var tmp;
  if (isNaN_0(md) ? true : isNaN_0(ad)) {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  } else if (md > ad ? md > 0.0 : false) {
    tmp = md;
  } else {
    tmp = 0.0;
  }
  return tmp;
}
function DirectionalMovementFunction(mainDiff, auxDiff) {
  AbstractCachingFunction.call(this);
  this.fo_1 = mainDiff;
  this.go_1 = auxDiff;
}
protoOf(DirectionalMovementFunction).pe = function () {
  return listOf([this.fo_1, this.go_1]);
};
protoOf(DirectionalMovementFunction).wm = function (index) {
  return dmValue(this, this.fo_1.calculateAt(index), this.go_1.calculateAt(index));
};
function DisplacementFunction(srcFunc, displacement) {
  this.ho_1 = srcFunc;
  this.io_1 = displacement;
  this.jo_1 = 0;
}
protoOf(DisplacementFunction).pe = function () {
  return this.ho_1.childFunctions;
};
protoOf(DisplacementFunction).calculateAt = function (index) {
  if ((index + this.io_1 | 0) < 0 ? true : (index + this.io_1 | 0) >= this.jo_1) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  return this.ho_1.calculateAt(index + this.io_1 | 0);
};
protoOf(DisplacementFunction).qe = function () {
  return this.ho_1.ownPastOffset - this.io_1 | 0;
};
protoOf(DisplacementFunction).re = function () {
  return this.ho_1.prefetchSize;
};
protoOf(DisplacementFunction).ob = function (changes) {
  this.jo_1 = changes.le_1;
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.ho_1.dataChanged(changes);
  return Math.max(0, tmp0_maxOf);
};
protoOf(DisplacementFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
var Trend_UP_instance;
var Trend_DOWN_instance;
var Trend_entriesInitialized;
function Trend_initEntries() {
  if (Trend_entriesInitialized)
    return Unit_getInstance();
  Trend_entriesInitialized = true;
  Trend_UP_instance = new Trend('UP', 0);
  Trend_DOWN_instance = new Trend('DOWN', 1);
}
function Companion_60() {
  Companion_instance_60 = this;
  this.ko_1 = 10;
}
var Companion_instance_60;
function Companion_getInstance_63() {
  if (Companion_instance_60 == null)
    new Companion_60();
  return Companion_instance_60;
}
function Trend(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Trend_UP_getInstance() {
  Trend_initEntries();
  return Trend_UP_instance;
}
function Trend_DOWN_getInstance() {
  Trend_initEntries();
  return Trend_DOWN_instance;
}
function DorseyTrendFunction(price, stdDeviation, trend) {
  Companion_getInstance_63();
  AbstractCachingFunction.call(this);
  this.mo_1 = price;
  this.no_1 = stdDeviation;
  this.oo_1 = trend;
}
protoOf(DorseyTrendFunction).pe = function () {
  return listOf([this.mo_1, this.no_1]);
};
protoOf(DorseyTrendFunction).wm = function (index) {
  if (index < 1) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var atIndex = this.mo_1.calculateAt(index);
  var atPrevious = this.mo_1.calculateAt(index - 1 | 0);
  if (isNaN_0(atIndex) ? true : isNaN_0(atPrevious)) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  if ((this.oo_1.equals(Trend_UP_getInstance()) ? atIndex > atPrevious : false) ? true : this.oo_1.equals(Trend_DOWN_getInstance()) ? atIndex < atPrevious : false) {
    return this.no_1.calculateAt(index);
  }
  return 0.0;
};
function calculate($this, index) {
  var di = $this.po_1.getTradeItem(index);
  var tmp;
  if (!(di == null)) {
    var tmp_0;
    switch ($this.ro_1.c2_1) {
      case 2:
        tmp_0 = getPrice($this, getLastETH($this));
        break;
      case 0:
        tmp_0 = getPrice($this, getSessionForTimestamp_0($this, di.getTime(), true));
        break;
      case 1:
        var lastETH = getLastETH($this);
        if (!(lastETH == null) ? timestampInSessionCompare_0($this, di.getTime(), lastETH) === 0 : false) {
          return getPrice($this, lastETH);
        }

        DoubleCompanionObject_getInstance();
        return NaN;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp = tmp_0;
  } else {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  return tmp;
}
function getLastETH($this) {
  var currentTime = System_getInstance().i8().x9();
  var lastETH;
  var tmp;
  if (!isCachedZoneValid($this, currentTime)) {
    tmp = getLastETHSession($this, currentTime);
  } else {
    tmp = $this.po_1.qc().g($this.so_1);
  }
  lastETH = tmp;
  return lastETH;
}
function getLastETHSession($this, currentTime) {
  if ($this.po_1.qc().h()) {
    return null;
  }
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.indexOfFirst' call
    var index = 0;
    var tmp0_iterator = $this.po_1.qc().c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      // Inline function 'com.devexperts.dxst.functions.ETHPriceSourceFunction.getLastETHSession.<anonymous>' call
      if (item.getFrom() >= currentTime.p7()) {
        tmp$ret$1 = index;
        break $l$block;
      }
      index = index + 1 | 0;
    }
    tmp$ret$1 = -1;
  }
  var indexOfFutureSession = tmp$ret$1;
  $this.so_1 = indexOfFutureSession - 1 | 0;
  return $this.po_1.qc().g($this.so_1);
}
function isCachedZoneValid($this, currentTime) {
  if ($this.so_1 === -1) {
    return false;
  }
  var tradingSessionData = $this.po_1.qc().g($this.so_1);
  var nextZone = $this.po_1.qc().g($this.so_1 + 1 | 0);
  return (tradingSessionData.getTo() >= currentTime.p7() ? tradingSessionData.getFrom() >= currentTime.p7() : false) ? true : nextZone.getFrom() > $this.so_1;
}
function getPrice($this, session) {
  var tmp;
  switch ($this.qo_1.c2_1) {
    case 1:
      var tmp2_elvis_lhs = session == null ? null : session.getHigh();
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        DoubleCompanionObject_getInstance();
        tmp_0 = NaN;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }

      tmp = tmp_0;
      break;
    case 2:
      var tmp4_elvis_lhs = session == null ? null : session.getLow();
      var tmp_1;
      if (tmp4_elvis_lhs == null) {
        DoubleCompanionObject_getInstance();
        tmp_1 = NaN;
      } else {
        tmp_1 = tmp4_elvis_lhs;
      }

      tmp = tmp_1;
      break;
    default:
      DoubleCompanionObject_getInstance();
      tmp = NaN;
      break;
  }
  return tmp;
}
function getSessionForTimestamp_0($this, timestamp, excludeLast) {
  var tmp = $this.po_1.qc();
  var index = binarySearch_0(tmp, VOID, VOID, ETHPriceSourceFunction$getSessionForTimestamp$lambda($this, timestamp));
  if (index >= 0) {
    var tradingSessionData = $this.po_1.qc().g(index);
    if (excludeLast) {
      var lastETHSession = getLastETH($this);
      if (!(lastETHSession == null) ? timestampInSessionCompare_0($this, timestamp, lastETHSession) === 0 : false) {
        return null;
      }
    }
    return tradingSessionData;
  }
  return null;
}
function timestampInSessionCompare_0($this, timestamp, session) {
  if (session.getFrom() <= timestamp ? timestamp < session.getTo() : false) {
    return 0;
  }
  if (timestamp < session.getFrom()) {
    return 1;
  }
  return -1;
}
function ETHPriceSourceFunction$getSessionForTimestamp$lambda(this$0, $timestamp) {
  return function (session) {
    return timestampInSessionCompare_0(this$0, $timestamp, session);
  };
}
function ETHPriceSourceFunction(dataItems, priceField, sessionSet, lastETHIndex) {
  lastETHIndex = lastETHIndex === VOID ? -1 : lastETHIndex;
  this.po_1 = dataItems;
  this.qo_1 = priceField;
  this.ro_1 = sessionSet;
  this.so_1 = lastETHIndex;
}
protoOf(ETHPriceSourceFunction).pe = function () {
  return emptyList();
};
protoOf(ETHPriceSourceFunction).calculateAt = function (index) {
  return calculate(this, index);
};
protoOf(ETHPriceSourceFunction).qe = function () {
  return 0;
};
protoOf(ETHPriceSourceFunction).re = function () {
  return 0;
};
protoOf(ETHPriceSourceFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.po_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(ETHPriceSourceFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function Equals(source, equalsTo, ifEqualsResult, ifNotEqualsResult) {
  AbstractCachingFunction.call(this);
  this.uo_1 = source;
  this.vo_1 = equalsTo;
  this.wo_1 = ifEqualsResult;
  this.xo_1 = ifNotEqualsResult;
}
protoOf(Equals).pe = function () {
  return listOf([this.uo_1, this.vo_1, this.wo_1, this.xo_1]);
};
protoOf(Equals).wm = function (index) {
  var equalsToValue = this.vo_1.calculateAt(index);
  var sourceValue = this.uo_1.calculateAt(index);
  return compareTo(equalsToValue, sourceValue) === 0 ? this.wo_1.calculateAt(index) : this.xo_1.calculateAt(index);
};
function Floor(source) {
  AbstractCachingFunction.call(this);
  this.zo_1 = source;
}
protoOf(Floor).pe = function () {
  return setOf(this.zo_1);
};
protoOf(Floor).wm = function (index) {
  // Inline function 'kotlin.math.floor' call
  var tmp0_floor = this.zo_1.calculateAt(index);
  return Math.floor(tmp0_floor);
};
function HighestFunction(srcFunc, period) {
  BackRangeDependentFunction.call(this, srcFunc, period);
}
protoOf(HighestFunction).fp = function (srcLatestValues) {
  var max = srcLatestValues[0];
  var inductionVariable = 1;
  var last = this.jp_1 - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (srcLatestValues[i] > max)
        max = srcLatestValues[i];
    }
     while (!(i === last));
  return max;
};
function HighestHighPeriod(srcFunc, length) {
  BackRangeDependentFunction.call(this, srcFunc, length);
}
protoOf(HighestHighPeriod).fp = function (srcLatestValues) {
  var priceSourceLength = srcLatestValues.length;
  var hhPosition = 0;
  var hh = srcLatestValues[0];
  var inductionVariable = 0;
  if (inductionVariable < priceSourceLength)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var currentValue = srcLatestValues[i];
      if (currentValue >= hh) {
        hh = currentValue;
        hhPosition = i;
      }
    }
     while (inductionVariable < priceSourceLength);
  return priceSourceLength - (hhPosition + 1 | 0) | 0;
};
function IfFunction(predicate, predicateFn, yesFn, noFn) {
  AbstractCachingFunction.call(this);
  this.sp_1 = predicate;
  this.tp_1 = predicateFn;
  this.up_1 = yesFn;
  this.vp_1 = noFn;
}
protoOf(IfFunction).pe = function () {
  return listOf([this.tp_1, this.up_1, this.vp_1]);
};
protoOf(IfFunction).qe = function () {
  return 1;
};
protoOf(IfFunction).wm = function (index) {
  if (this.sp_1(this.tp_1.calculateAt(index))) {
    return this.up_1.calculateAt(index);
  } else {
    return this.vp_1.calculateAt(index);
  }
};
function IntradaySumFunction(srcFunc, length) {
  BackRangeDependentFunction.call(this, srcFunc, length, true);
}
protoOf(IntradaySumFunction).fp = function (srcLatestValues) {
  var ret = 0.0;
  var inductionVariable = 0;
  var last = srcLatestValues.length;
  while (inductionVariable < last) {
    var value = srcLatestValues[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    if (!isNaN_0(value) ? value > 0.0 : false) {
      ret = ret + value;
    }
  }
  return ret;
};
function LimitFunction(tradeDataHolder, srcFunction, limit) {
  this.bq_1 = tradeDataHolder;
  this.cq_1 = srcFunction;
  this.dq_1 = limit;
}
protoOf(LimitFunction).pe = function () {
  return listOf_0(this.cq_1);
};
protoOf(LimitFunction).qe = function () {
  return 0;
};
protoOf(LimitFunction).re = function () {
  return 0;
};
protoOf(LimitFunction).calculateAt = function (index) {
  var tmp;
  if ((this.bq_1.lb() - index | 0) > this.dq_1) {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  } else {
    tmp = this.cq_1.calculateAt(index);
  }
  return tmp;
};
protoOf(LimitFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.bq_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(LimitFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function LinearDeviationFunction(srcFunc, period) {
  BackRangeDependentFunction.call(this, srcFunc, period);
}
protoOf(LinearDeviationFunction).fp = function (srcLatestValues) {
  var i;
  var length = this.jp_1;
  var sum = srcLatestValues[0];
  i = 1;
  while (i < length) {
    sum = sum + srcLatestValues[i];
    i = i + 1 | 0;
  }
  var avg = sum / length;
  // Inline function 'kotlin.math.abs' call
  var tmp0_abs = srcLatestValues[0] - avg;
  var sumDiff = Math.abs(tmp0_abs);
  i = 1;
  while (i < length) {
    var tmp = sumDiff;
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = srcLatestValues[i] - avg;
    sumDiff = tmp + Math.abs(tmp1_abs);
    i = i + 1 | 0;
  }
  return sumDiff / length;
};
function LinearRegressionCurveFunction(srcFunc, period) {
  BackRangeDependentFunction.call(this, srcFunc, period);
}
protoOf(LinearRegressionCurveFunction).fp = function (srcLatestValues) {
  var count = this.jp_1;
  if (count < 1) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  if (count === 1)
    return srcLatestValues[0];
  var sumX = 0.0;
  var sumY = 0.0;
  var sumXX = 0.0;
  var sumXY = 0.0;
  var inductionVariable = 0;
  if (inductionVariable < count)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var index = i + 1 | 0;
      sumX = sumX + index;
      sumY = sumY + srcLatestValues[i];
      sumXX = sumXX + imul(index, index);
      sumXY = sumXY + index * srcLatestValues[i];
    }
     while (inductionVariable < count);
  var b = (count * sumXY - sumX * sumY) / (count * sumXX - sumX * sumX);
  var a = (sumY - b * sumX) / count;
  return b * count + a;
};
function LnDivPrevFunction(srcFunc) {
  AbstractCachingFunction.call(this);
  this.pq_1 = srcFunc;
}
protoOf(LnDivPrevFunction).pe = function () {
  return listOf_0(this.pq_1);
};
protoOf(LnDivPrevFunction).qe = function () {
  return 1;
};
protoOf(LnDivPrevFunction).wm = function (index) {
  if (index === 0) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var last = this.pq_1.calculateAt(index);
  var prev = this.pq_1.calculateAt(index - 1 | 0);
  var tmp;
  if (!(compareTo(prev, 0.0) === 0)) {
    tmp = log(last / prev, get_E());
  } else {
    tmp = 0.0;
  }
  return tmp;
};
function LogarithmFunction(src) {
  AbstractCachingFunction.call(this);
  this.rq_1 = src;
}
protoOf(LogarithmFunction).pe = function () {
  return listOf_0(this.rq_1);
};
protoOf(LogarithmFunction).wm = function (index) {
  return log(this.rq_1.calculateAt(index), get_E());
};
function LowestFunction(srcFunc, period) {
  BackRangeDependentFunction.call(this, srcFunc, period);
}
protoOf(LowestFunction).fp = function (srcLatestValues) {
  var min = srcLatestValues[0];
  var inductionVariable = 1;
  var last = this.jp_1 - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (srcLatestValues[i] < min)
        min = srcLatestValues[i];
    }
     while (!(i === last));
  return min;
};
function LowestLowPeriod(srcFunc, length) {
  BackRangeDependentFunction.call(this, srcFunc, length);
}
protoOf(LowestLowPeriod).fp = function (srcLatestValues) {
  var priceSourceLength = srcLatestValues.length;
  var llPosition = 0;
  var ll = srcLatestValues[0];
  var inductionVariable = 0;
  var last = priceSourceLength - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var currentValue = srcLatestValues[i];
      if (currentValue <= ll) {
        ll = currentValue;
        llPosition = i;
      }
    }
     while (!(i === last));
  return priceSourceLength - (llPosition + 1 | 0) | 0;
};
function MapFunction(tradeDataHolder, src, mapFunction) {
  this.cr_1 = tradeDataHolder;
  this.dr_1 = src;
  this.er_1 = mapFunction;
}
protoOf(MapFunction).pe = function () {
  return listOf_0(this.dr_1);
};
protoOf(MapFunction).qe = function () {
  return 0;
};
protoOf(MapFunction).re = function () {
  return 0;
};
protoOf(MapFunction).calculateAt = function (index) {
  return this.er_1(this.dr_1.calculateAt(index));
};
protoOf(MapFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.cr_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(MapFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function MapToOneFunction(dataItems, series) {
  this.fr_1 = dataItems;
  this.gr_1 = series;
}
protoOf(MapToOneFunction).calculateAt = function (index) {
  var current = this.gr_1.calculateAt(index);
  var tmp;
  if (isFinite(current)) {
    tmp = 1.0;
  } else {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  }
  return tmp;
};
protoOf(MapToOneFunction).pe = function () {
  return listOf_0(this.gr_1);
};
protoOf(MapToOneFunction).qe = function () {
  return 0;
};
protoOf(MapToOneFunction).re = function () {
  return 0;
};
protoOf(MapToOneFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.fr_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(MapToOneFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function MaxValueFunction(functions) {
  AbstractCachingFunction.call(this);
  var tmp = this;
  tmp.ir_1 = isArray(functions) ? functions : THROW_CCE();
}
protoOf(MaxValueFunction).pe = function () {
  return listOf(this.ir_1.slice());
};
protoOf(MaxValueFunction).wm = function (index) {
  var largest = this.ir_1[0].calculateAt(index);
  var indexedObject = this.ir_1;
  var inductionVariable = 0;
  var last = indexedObject.length;
  $l$loop: while (inductionVariable < last) {
    var func = indexedObject[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var currentFuncValue = func.calculateAt(index);
    if (isNaN_0(currentFuncValue)) {
      DoubleCompanionObject_getInstance();
      largest = NaN;
      break $l$loop;
    }
    if (currentFuncValue > largest) {
      largest = currentFuncValue;
    }
  }
  return largest;
};
function MinValueFunction(functions) {
  AbstractCachingFunction.call(this);
  var tmp = this;
  tmp.kr_1 = isArray(functions) ? functions : THROW_CCE();
}
protoOf(MinValueFunction).pe = function () {
  return listOf(this.kr_1.slice());
};
protoOf(MinValueFunction).wm = function (index) {
  var min = this.kr_1[0].calculateAt(index);
  var indexedObject = this.kr_1;
  var inductionVariable = 0;
  var last = indexedObject.length;
  $l$loop: while (inductionVariable < last) {
    var func = indexedObject[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var value = func.calculateAt(index);
    if (isNaN_0(value)) {
      DoubleCompanionObject_getInstance();
      min = NaN;
      break $l$loop;
    }
    if (value < min) {
      min = value;
    }
  }
  return min;
};
function moneyFlowValue($this, price, prevPrice, volume) {
  if ($this.or_1) {
    if (price > prevPrice)
      return price * volume;
    else
      return 0.0;
  } else {
    return price * volume;
  }
}
function MoneyFlowFunction(priceFunc, volumeFunc, positive) {
  AbstractCachingFunction.call(this);
  this.mr_1 = priceFunc;
  this.nr_1 = volumeFunc;
  this.or_1 = positive;
}
protoOf(MoneyFlowFunction).qe = function () {
  return 1;
};
protoOf(MoneyFlowFunction).pe = function () {
  return listOf([this.mr_1, this.nr_1]);
};
protoOf(MoneyFlowFunction).wm = function (index) {
  if (index === 0) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var price = this.mr_1.calculateAt(index);
  var prevPrice = this.mr_1.calculateAt(index - 1 | 0);
  var volume = this.nr_1.calculateAt(index);
  return moneyFlowValue(this, price, prevPrice, volume);
};
function MovingAverageExponential(srcFunc, period, startOffset) {
  startOffset = startOffset === VOID ? 0 : startOffset;
  AbstractCachingFunction.call(this);
  this.qr_1 = srcFunc;
  this.rr_1 = period;
  this.sr_1 = startOffset;
  this.tr_1 = 2.0 / (this.rr_1 + 1 | 0);
}
protoOf(MovingAverageExponential).qe = function () {
  return this.rr_1 - 1 | 0;
};
protoOf(MovingAverageExponential).pe = function () {
  return listOf_0(this.qr_1);
};
protoOf(MovingAverageExponential).wm = function (index) {
  var tmp;
  if (index < ((this.rr_1 - 1 | 0) + this.sr_1 | 0)) {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  } else {
    var tmp_0;
    if (index === ((this.rr_1 - 1 | 0) + this.sr_1 | 0)) {
      var sum = this.qr_1.calculateAt(this.sr_1);
      var inductionVariable = 1;
      var last = this.rr_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          sum = sum + this.qr_1.calculateAt(i + this.sr_1 | 0);
        }
         while (inductionVariable < last);
      tmp_0 = sum / this.rr_1;
    } else {
      var srcValue = this.qr_1.calculateAt(index);
      var prevEMA = this.calculateAt(index - 1 | 0);
      tmp_0 = prevEMA + this.tr_1 * (srcValue - prevEMA);
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(MovingAverageExponential).re = function () {
  return imul(4, this.rr_1) + this.sr_1 | 0;
};
function MovingAverageSimple(srcFunc, period) {
  BackRangeDependentFunction.call(this, srcFunc, period);
}
protoOf(MovingAverageSimple).fp = function (srcLatestValues) {
  var length = this.jp_1;
  var sum = srcLatestValues[0];
  var inductionVariable = 1;
  var last = length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      sum = sum + srcLatestValues[i];
    }
     while (!(i === last));
  return sum / length;
};
function MovingAverageSmoothed(srcFunc, length, startOffset) {
  startOffset = startOffset === VOID ? 0 : startOffset;
  AbstractCachingFunction.call(this);
  this.as_1 = srcFunc;
  this.bs_1 = length;
  this.cs_1 = startOffset;
}
protoOf(MovingAverageSmoothed).pe = function () {
  return listOf_0(this.as_1);
};
protoOf(MovingAverageSmoothed).qe = function () {
  return this.bs_1 - 1 | 0;
};
protoOf(MovingAverageSmoothed).wm = function (index) {
  if (index < ((this.bs_1 - 1 | 0) + this.cs_1 | 0)) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var tmp;
  if (index === ((this.bs_1 - 1 | 0) + this.cs_1 | 0)) {
    var sum = this.as_1.calculateAt(this.cs_1);
    var inductionVariable = 1;
    var last = this.bs_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sum = sum + this.as_1.calculateAt(i + this.cs_1 | 0);
      }
       while (inductionVariable < last);
    tmp = sum / this.bs_1;
  } else {
    var src = this.as_1.calculateAt(index);
    tmp = (this.calculateAt(index - 1 | 0) * (this.bs_1 - 1 | 0) + src) / this.bs_1;
  }
  return tmp;
};
function MovingAverageWeighted(srcFunc, length) {
  BackRangeDependentFunction.call(this, srcFunc, length);
}
protoOf(MovingAverageWeighted).fp = function (srcLatestValues) {
  var length = this.jp_1;
  var denominator = imul(length, length + 1 | 0) / 2 | 0;
  var total = 0.0;
  var inductionVariable = 0;
  var last = length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var weigth = i + 1 | 0;
      total = total + weigth * srcLatestValues[i];
    }
     while (!(i === last));
  return total / denominator;
};
function isDivisionNeeded($this, volume, close, prevVolume, prevClose) {
  return ((!isNaN_0(volume) ? !isNaN_0(close) : false) ? volume < prevVolume : false) ? !(compareTo(prevClose, 0.0) === 0) : false;
}
function NegativeVolumeIndexFunction(volumeFunction, closeFunction) {
  AbstractCachingFunction.call(this);
  this.js_1 = volumeFunction;
  this.ks_1 = closeFunction;
}
protoOf(NegativeVolumeIndexFunction).pe = function () {
  return listOf([this.js_1, this.ks_1]);
};
protoOf(NegativeVolumeIndexFunction).wm = function (index) {
  if (index === 0)
    return 100.0;
  var volume = this.js_1.calculateAt(index);
  var close = this.ks_1.calculateAt(index);
  if (isNaN_0(volume) ? true : isNaN_0(close)) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var prevVolume = this.js_1.calculateAt(index - 1 | 0);
  var prevClose = this.ks_1.calculateAt(index - 1 | 0);
  var prevNVI = this.calculateAt(index - 1 | 0);
  return prevNVI + (isDivisionNeeded(this, volume, close, prevVolume, prevClose) ? 100.0 * ((close - prevClose) / prevClose) : 0.0);
};
function PredicateFunction(tradeDataHolder, guardFunction, srcFunction, predicate) {
  this.ls_1 = tradeDataHolder;
  this.ms_1 = guardFunction;
  this.ns_1 = srcFunction;
  this.os_1 = predicate;
}
protoOf(PredicateFunction).pe = function () {
  return listOf_0(this.ns_1);
};
protoOf(PredicateFunction).qe = function () {
  return 0;
};
protoOf(PredicateFunction).re = function () {
  return 0;
};
protoOf(PredicateFunction).calculateAt = function (index) {
  var tmp;
  if (this.os_1(this.ms_1.calculateAt(index))) {
    tmp = this.ns_1.calculateAt(index);
  } else {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  }
  return tmp;
};
protoOf(PredicateFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.ls_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(PredicateFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function get_EMPTY_CANDLE() {
  _init_properties_PrevAggregationFunction_kt__glgx6z();
  return EMPTY_CANDLE;
}
var EMPTY_CANDLE;
function get_dayOfWeeks() {
  _init_properties_PrevAggregationFunction_kt__glgx6z();
  return dayOfWeeks;
}
var dayOfWeeks;
function getPrice_0($this, di) {
  var tmp;
  switch ($this.qs_1.c2_1) {
    case 0:
      tmp = di.getOpen();
      break;
    case 1:
      tmp = di.getHigh();
      break;
    case 2:
      tmp = di.getLow();
      break;
    case 3:
      tmp = di.getClose();
      break;
    case 4:
      var tmp1_elvis_lhs = di.getImpVolatility();
      tmp = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      break;
    case 5:
      tmp = (di.getHigh() + di.getLow()) / 2;
      break;
    case 6:
      var tmp2_elvis_lhs = di.getVwap();
      tmp = tmp2_elvis_lhs == null ? (di.getHigh() + di.getLow() + di.getClose()) / 3 : tmp2_elvis_lhs;
      break;
    case 7:
      tmp = (di.getOpen() + di.getHigh() + di.getLow() + di.getClose()) / 4;
      break;
    case 8:
      tmp = di.getVolume();
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function PrevAggregationFunction(container, priceField) {
  this.ps_1 = container;
  this.qs_1 = priceField;
}
protoOf(PrevAggregationFunction).calculateAt = function (index) {
  var tmp;
  if (index < 0) {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  } else {
    var tmp0_safe_receiver = this.ps_1.xs(index);
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.devexperts.dxst.functions.PrevAggregationFunction.calculateAt.<anonymous>' call
      tmp_0 = getPrice_0(this, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      DoubleCompanionObject_getInstance();
      tmp_1 = NaN;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    tmp = tmp_1;
  }
  return tmp;
};
protoOf(PrevAggregationFunction).re = function () {
  return this.ps_1.ts_1;
};
protoOf(PrevAggregationFunction).pe = function () {
  return emptyList();
};
protoOf(PrevAggregationFunction).qe = function () {
  return 0;
};
protoOf(PrevAggregationFunction).ob = function (changes) {
  return this.ps_1.ob(changes);
};
protoOf(PrevAggregationFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function validateCandleAggregation($this) {
  var candleAggregation = $this.rs_1.xc();
  var isLower = candleAggregation <= $this.ss_1.dd_1;
  switch ($this.ss_1.c2_1) {
    case 2:
      return isLower ? candleAggregation > 59000.0 : false;
    case 3:
      return isLower ? candleAggregation > 240000.0 : false;
    default:
      return isLower;
  }
}
function calculatePrevItem($this, from, to) {
  if ((!(from == null) ? !(to == null) : false) ? !(from < calculatePrevItem$getFromOrInfinity($this.rs_1)) : false) {
    var aggregated = $this.rs_1.getAggregatedItemByTimestamps(from, to);
    // Inline function 'kotlin.collections.set' call
    $this.us_1.v4(from, aggregated);
    if ($this.vs_1 == null ? true : ensureNotNull($this.vs_1) > from) {
      $this.vs_1 = from;
    }
    if ($this.ws_1 == null ? true : ensureNotNull($this.ws_1) < from) {
      $this.ws_1 = from;
    }
    return aggregated;
  }
  return null;
}
function getAggregation($this, index) {
  switch ($this.ss_1.c2_1) {
    case 2:
      return getPrevWeekAggregation($this, index);
    case 3:
      return getPrevMonthAggregation($this, index);
    default:
      return getPrevDayAggregation($this, index);
  }
}
function getPrevWeekAggregation($this, index) {
  var time = ensureNotNull($this.rs_1.getTradeItem(index)).getTime();
  var tz = timeZone($this);
  var isIntraday = $this.rs_1.xc() < AggregationTypeEnum_DAY_getInstance().dd_1;
  var tmp;
  if (isIntraday) {
    var beginningOfTrading = $this.rs_1.oc().g(getLeftestSession($this, getSessionForTimestamp_1($this, time))).getFrom();
    tmp = Companion_getInstance_64().gt(beginningOfTrading, tz);
  } else {
    tmp = Companion_getInstance_64().ft(time);
  }
  var candleDateTime = tmp;
  var weekOffset = indexOf(get_dayOfWeeks(), candleDateTime.ja());
  var currentMondayDate = weekOffset === 0 ? candleDateTime.ka() : minus(candleDateTime.ka(), DatePeriod_init_$Create$(VOID, VOID, weekOffset));
  // Inline function 'kotlin.run' call
  var tmp0_run = LocalDateTime_init_$Create$(currentMondayDate, candleDateTime.la());
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'com.devexperts.dxst.functions.PrevAggregationContainer.getPrevWeekAggregation.<anonymous>' call
  var tmp_0;
  if (isIntraday) {
    var tmp0_safe_receiver = getTradingSessionForDay($this, Companion_getInstance_64().it(tmp0_run, tz));
    tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getFrom();
  } else {
    tmp_0 = Companion_getInstance_64().ht(tmp0_run);
  }
  var tmp0_safe_receiver_0 = tmp_0;
  var tmp_1;
  if (tmp0_safe_receiver_0 == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.devexperts.dxst.functions.PrevAggregationContainer.getPrevWeekAggregation.<anonymous>' call
    tmp_1 = tmp0_safe_receiver_0 - 1;
  }
  var currentMonday = tmp_1;
  // Inline function 'kotlin.run' call
  var tmp1_run = LocalDateTime_init_$Create$(minus(currentMondayDate, DatePeriod_init_$Create$(VOID, VOID, 7)), candleDateTime.la());
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'com.devexperts.dxst.functions.PrevAggregationContainer.getPrevWeekAggregation.<anonymous>' call
  var tmp_2;
  if (isIntraday) {
    var tmp0_safe_receiver_1 = getTradingSessionForDay($this, Companion_getInstance_64().it(tmp1_run, tz));
    tmp_2 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.getFrom();
  } else {
    tmp_2 = Companion_getInstance_64().ht(tmp1_run);
  }
  var prevMonday = tmp_2;
  return new Aggregation(prevMonday, currentMonday);
}
function getPrevDayAggregation($this, index) {
  var time = ensureNotNull($this.rs_1.getTradeItem(index)).getTime();
  var leftTimestamp = null;
  var rightTimestamp = null;
  if ($this.rs_1.xc() < AggregationTypeEnum_DAY_getInstance().dd_1) {
    var sessionIndex = getSessionForTimestamp_1($this, time);
    var endIndex = getLeftestSession($this, sessionIndex);
    if (endIndex > 0) {
      var fromIndex = getLeftestSession($this, endIndex - 1 | 0);
      var fromSession = $this.rs_1.oc().g(fromIndex);
      if (Companion_getInstance_64().et_1.i(fromSession.getSessionType())) {
        leftTimestamp = fromSession.getFrom();
        rightTimestamp = $this.rs_1.oc().g(endIndex).getFrom() - 1;
      }
    }
  } else if (index > 0) {
    leftTimestamp = ensureNotNull($this.rs_1.getTradeItem(index - 1 | 0)).getTime();
    rightTimestamp = time - 1;
  }
  return new Aggregation(leftTimestamp, rightTimestamp);
}
function getPrevMonthAggregation($this, index) {
  var time = ensureNotNull($this.rs_1.getTradeItem(index)).getTime();
  var isIntraday = $this.rs_1.xc() < AggregationTypeEnum_DAY_getInstance().dd_1;
  var tz = timeZone($this);
  var tmp;
  if (isIntraday) {
    var beginningOfTrading = $this.rs_1.oc().g(getLeftestSession($this, getSessionForTimestamp_1($this, time))).getFrom();
    tmp = Companion_getInstance_64().gt(beginningOfTrading, tz);
  } else {
    tmp = Companion_getInstance_64().ft(time);
  }
  var candleDate = tmp;
  var from = LocalDate_init_$Create$(candleDate.ha(), candleDate.ia(), 1);
  // Inline function 'kotlin.run' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'com.devexperts.dxst.functions.PrevAggregationContainer.getPrevMonthAggregation.<anonymous>' call
  var tmp_0;
  if (isIntraday) {
    var tmp0_safe_receiver = getTradingSessionForDay($this, Companion_getInstance_64().kt(from, tz));
    tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getFrom();
  } else {
    tmp_0 = Companion_getInstance_64().jt(from);
  }
  var tmp0_safe_receiver_0 = tmp_0;
  var tmp_1;
  if (tmp0_safe_receiver_0 == null) {
    tmp_1 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.devexperts.dxst.functions.PrevAggregationContainer.getPrevMonthAggregation.<anonymous>' call
    tmp_1 = tmp0_safe_receiver_0 - 1;
  }
  var currentMonth = tmp_1;
  // Inline function 'kotlin.run' call
  var tmp0_run = minus_0(from, 1, Companion_getInstance().o9_1);
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'com.devexperts.dxst.functions.PrevAggregationContainer.getPrevMonthAggregation.<anonymous>' call
  var tmp_2;
  if (isIntraday) {
    var tmp0_safe_receiver_1 = getTradingSessionForDay($this, Companion_getInstance_64().kt(minus_0(from, 1, Companion_getInstance().o9_1), tz));
    tmp_2 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.getFrom();
  } else {
    tmp_2 = Companion_getInstance_64().jt(tmp0_run);
  }
  var prevMonth = tmp_2;
  return new Aggregation(prevMonth, currentMonth);
}
function getTradingSessionForDay($this, millis) {
  var itemSessionIndex = getSessionForTimestamp_1($this, millis);
  if (itemSessionIndex < 0) {
    return null;
  }
  var tradingSessionData = $this.rs_1.oc().g(itemSessionIndex);
  var tmp0_subject = tradingSessionData.getSessionType();
  var tmp;
  if (tmp0_subject === Companion_getInstance_64().zs_1) {
    tmp = $this.rs_1.oc().g(itemSessionIndex + 1 | 0);
  } else if (tmp0_subject === Companion_getInstance_64().at_1) {
    tmp = tradingSessionData;
  } else if (tmp0_subject === Companion_getInstance_64().ys_1 ? true : tmp0_subject === Companion_getInstance_64().bt_1) {
    var newIndex = itemSessionIndex;
    while (newIndex > 0 ? (!Companion_getInstance_64().dt_1.i($this.rs_1.oc().g(newIndex - 1 | 0).getSessionType()) ? true : $this.rs_1.oc().g(newIndex).getSessionType() === Companion_getInstance_64().at_1 ? $this.rs_1.oc().g(newIndex - 1 | 0).getSessionType() === Companion_getInstance_64().bt_1 : false) ? true : $this.rs_1.oc().g(newIndex).getSessionType() === Companion_getInstance_64().ys_1 ? $this.rs_1.oc().g(newIndex - 1 | 0).getSessionType() === Companion_getInstance_64().ys_1 : false : false) {
      newIndex = newIndex - 1 | 0;
    }
    tmp = $this.rs_1.oc().g(newIndex);
  } else {
    tmp = tradingSessionData;
  }
  return tmp;
}
function timeZone($this) {
  return $this.rs_1.xc() < AggregationTypeEnum_DAY_getInstance().dd_1 ? Companion_getInstance_0().ra($this.rs_1.pc()) : Companion_getInstance_0().qa_1;
}
function getLeftestSession($this, index) {
  var newIndex = index;
  while (newIndex > 0 ? (!Companion_getInstance_64().dt_1.i($this.rs_1.oc().g(newIndex - 1 | 0).getSessionType()) ? true : $this.rs_1.oc().g(newIndex).getSessionType() === Companion_getInstance_64().at_1 ? $this.rs_1.oc().g(newIndex - 1 | 0).getSessionType() === Companion_getInstance_64().bt_1 : false) ? true : $this.rs_1.oc().g(newIndex).getSessionType() === Companion_getInstance_64().ys_1 ? $this.rs_1.oc().g(newIndex - 1 | 0).getSessionType() === Companion_getInstance_64().ys_1 : false : false) {
    newIndex = newIndex - 1 | 0;
  }
  return newIndex;
}
function getSessionForTimestamp_1($this, timestamp) {
  var tmp = $this.rs_1.oc();
  return binarySearch_0(tmp, VOID, VOID, PrevAggregationContainer$getSessionForTimestamp$lambda($this, timestamp));
}
function timestampInSessionCompare_1($this, timestamp, session) {
  if (session.getFrom() <= timestamp ? timestamp < session.getTo() : false) {
    return 0;
  }
  if (timestamp < session.getFrom()) {
    return 1;
  }
  return -1;
}
function Companion_61() {
  Companion_instance_61 = this;
  this.ys_1 = 'REGULAR';
  this.zs_1 = 'NO_TRADING';
  this.at_1 = 'PRE_MARKET';
  this.bt_1 = 'POST_MARKET';
  this.ct_1 = 'UNKNOWN';
  this.dt_1 = setOf_0([this.zs_1, this.ct_1]);
  this.et_1 = setOf_0([this.ys_1, this.at_1]);
}
protoOf(Companion_61).kt = function (_this__u8e3s4, tz) {
  return atStartOfDayIn(_this__u8e3s4, tz).x9().p7();
};
protoOf(Companion_61).jt = function (_this__u8e3s4, tz, $super) {
  tz = tz === VOID ? Companion_getInstance_0().qa_1 : tz;
  return $super === VOID ? this.kt(_this__u8e3s4, tz) : $super.kt.call(this, _this__u8e3s4, tz);
};
protoOf(Companion_61).gt = function (_this__u8e3s4, tz) {
  return toLocalDateTime(Companion_getInstance_1().s9(numberToLong(_this__u8e3s4)), tz);
};
protoOf(Companion_61).ft = function (_this__u8e3s4, tz, $super) {
  tz = tz === VOID ? Companion_getInstance_0().qa_1 : tz;
  return $super === VOID ? this.gt(_this__u8e3s4, tz) : $super.gt.call(this, _this__u8e3s4, tz);
};
protoOf(Companion_61).it = function (_this__u8e3s4, timeZone) {
  return toInstant(_this__u8e3s4, timeZone).x9().p7();
};
protoOf(Companion_61).ht = function (_this__u8e3s4, timeZone, $super) {
  timeZone = timeZone === VOID ? Companion_getInstance_0().qa_1 : timeZone;
  return $super === VOID ? this.it(_this__u8e3s4, timeZone) : $super.it.call(this, _this__u8e3s4, timeZone);
};
protoOf(Companion_61).lt = function (_this__u8e3s4) {
  return ensureNotNull(_this__u8e3s4.getTradeItem(0)).getTime();
};
var Companion_instance_61;
function Companion_getInstance_64() {
  if (Companion_instance_61 == null)
    new Companion_61();
  return Companion_instance_61;
}
function calculatePrevItem$getFromOrInfinity(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.getTradeItem(0);
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getTime();
  var tmp;
  if (tmp1_elvis_lhs == null) {
    DoubleCompanionObject_getInstance();
    tmp = Infinity;
  } else {
    tmp = tmp1_elvis_lhs;
  }
  return tmp;
}
function PrevAggregationContainer$getSessionForTimestamp$lambda(this$0, $timestamp) {
  return function (session) {
    return timestampInSessionCompare_1(this$0, $timestamp, session);
  };
}
function PrevAggregationContainer(data, aggregation) {
  Companion_getInstance_64();
  this.rs_1 = data;
  this.ss_1 = aggregation;
  this.ts_1 = 1;
  var tmp = this;
  // Inline function 'kotlin.collections.mutableMapOf' call
  tmp.us_1 = LinkedHashMap_init_$Create$();
  this.vs_1 = null;
  this.ws_1 = null;
}
protoOf(PrevAggregationContainer).xs = function (index) {
  if (!validateCandleAggregation(this))
    return get_EMPTY_CANDLE();
  var tmp0_container = getAggregation(this, index);
  var from = tmp0_container.ot();
  var to = tmp0_container.pt();
  var tmp;
  if (from == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.devexperts.dxst.functions.PrevAggregationContainer.getAggregatedItem.<anonymous>' call
    var tmp0_elvis_lhs = this.us_1.k1(from);
    tmp = tmp0_elvis_lhs == null ? calculatePrevItem(this, from, to) : tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(PrevAggregationContainer).ob = function (changes) {
  if (!(this.vs_1 == null) ? !(changes.je_1 === 0) : false) {
    var firstItemTime = Companion_getInstance_64().lt(this.rs_1);
    if (ensureNotNull(this.vs_1) < firstItemTime) {
      var sorted_0 = sorted(toList(this.us_1.u4())).c();
      $l$loop: while (sorted_0.d()) {
        var next = sorted_0.e();
        if (next > firstItemTime) {
          this.us_1.m4(next);
        } else {
          this.vs_1 = next;
          break $l$loop;
        }
      }
    }
  }
  var tradeItem = ensureNotNull(this.rs_1.getTradeItem(changes.ke_1));
  var changed = changes.ke_1;
  if (!(this.ws_1 == null) ? ensureNotNull(this.ws_1) > tradeItem.getTime() : false) {
    var from = getAggregation(this, changes.ke_1).ot();
    if (!(from == null)) {
      changed = this.rs_1.funClosestIndex(from);
    }
  }
  return changed;
};
function Aggregation(from, to) {
  this.mt_1 = from;
  this.nt_1 = to;
}
protoOf(Aggregation).ot = function () {
  return this.mt_1;
};
protoOf(Aggregation).pt = function () {
  return this.nt_1;
};
protoOf(Aggregation).toString = function () {
  return 'Aggregation(from=' + this.mt_1 + ', to=' + this.nt_1 + ')';
};
protoOf(Aggregation).hashCode = function () {
  var result = this.mt_1 == null ? 0 : getNumberHashCode(this.mt_1);
  result = imul(result, 31) + (this.nt_1 == null ? 0 : getNumberHashCode(this.nt_1)) | 0;
  return result;
};
protoOf(Aggregation).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Aggregation))
    return false;
  var tmp0_other_with_cast = other instanceof Aggregation ? other : THROW_CCE();
  if (!equals_0(this.mt_1, tmp0_other_with_cast.mt_1))
    return false;
  if (!equals_0(this.nt_1, tmp0_other_with_cast.nt_1))
    return false;
  return true;
};
var properties_initialized_PrevAggregationFunction_kt_5ibhbr;
function _init_properties_PrevAggregationFunction_kt__glgx6z() {
  if (!properties_initialized_PrevAggregationFunction_kt_5ibhbr) {
    properties_initialized_PrevAggregationFunction_kt_5ibhbr = true;
    EMPTY_CANDLE = new CandleImpl();
    dayOfWeeks = values();
  }
}
function calculate_0($this, di) {
  var tmp;
  switch ($this.st_1.c2_1) {
    case 0:
      tmp = di.getOpen();
      break;
    case 3:
      tmp = di.getClose();
      break;
    case 1:
      tmp = di.getHigh();
      break;
    case 2:
      tmp = di.getLow();
      break;
    case 4:
      var tmp1_elvis_lhs = di.getImpVolatility();
      tmp = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      break;
    case 5:
      tmp = (di.getHigh() + di.getLow()) / 2;
      break;
    case 6:
      var tmp2_elvis_lhs = di.getVwap();
      tmp = tmp2_elvis_lhs == null ? (di.getHigh() + di.getLow() + di.getClose()) / 3 : tmp2_elvis_lhs;
      break;
    case 7:
      tmp = (di.getOpen() + di.getHigh() + di.getLow() + di.getClose()) / 4;
      break;
    case 8:
      tmp = di.getVolume();
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  var ret = tmp;
  return ret;
}
function PriceAggregatedSourceFunction(data, type, price, displace) {
  displace = displace === VOID ? 0 : displace;
  this.qt_1 = data;
  this.rt_1 = type;
  this.st_1 = price;
  this.tt_1 = displace;
}
protoOf(PriceAggregatedSourceFunction).calculateAt = function (index) {
  var di = this.qt_1.getAggregatedTradeItem(index, this.rt_1, this.tt_1);
  if (!(di == null)) {
    return calculate_0(this, di);
  }
  DoubleCompanionObject_getInstance();
  return NaN;
};
protoOf(PriceAggregatedSourceFunction).re = function () {
  return -this.tt_1 | 0;
};
protoOf(PriceAggregatedSourceFunction).pe = function () {
  return emptyList();
};
protoOf(PriceAggregatedSourceFunction).qe = function () {
  return 0;
};
protoOf(PriceAggregatedSourceFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.qt_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(PriceAggregatedSourceFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function calculate_1($this, index) {
  var di = $this.ut_1.getTradeItem(index);
  if (!(di == null)) {
    return getPrice_1($this, di);
  } else {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
}
function getPrice_1($this, di) {
  var tmp;
  switch ($this.vt_1.c2_1) {
    case 0:
      tmp = di.getOpen();
      break;
    case 1:
      tmp = di.getHigh();
      break;
    case 2:
      tmp = di.getLow();
      break;
    case 3:
      tmp = di.getClose();
      break;
    case 4:
      var tmp1_elvis_lhs = di.getImpVolatility();
      tmp = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      break;
    case 5:
      tmp = (di.getHigh() + di.getLow()) / 2;
      break;
    case 6:
      var tmp2_elvis_lhs = di.getVwap();
      tmp = tmp2_elvis_lhs == null ? (di.getHigh() + di.getLow() + di.getClose()) / 3 : tmp2_elvis_lhs;
      break;
    case 7:
      tmp = (di.getOpen() + di.getHigh() + di.getLow() + di.getClose()) / 4;
      break;
    case 8:
      tmp = di.getVolume();
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function PriceSourceFunction(dataItems, priceField) {
  this.ut_1 = dataItems;
  this.vt_1 = priceField;
}
protoOf(PriceSourceFunction).pe = function () {
  return emptyList();
};
protoOf(PriceSourceFunction).calculateAt = function (index) {
  return calculate_1(this, index);
};
protoOf(PriceSourceFunction).lb = function () {
  return this.ut_1.lb();
};
protoOf(PriceSourceFunction).qe = function () {
  return 0;
};
protoOf(PriceSourceFunction).re = function () {
  return 0;
};
protoOf(PriceSourceFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.ut_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(PriceSourceFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function constructUpAvg($this, price, length) {
  var deviationFunction = new StandardDeviationFunction(price, Companion_getInstance_63().ko_1);
  var trendUp = new DorseyTrendFunction(price, deviationFunction, Trend_UP_getInstance());
  return new WildersAverage(trendUp, length);
}
function constructDownAvg($this, price, length) {
  var deviationFunction = new StandardDeviationFunction(price, Companion_getInstance_63().ko_1);
  var trendDown = new DorseyTrendFunction(price, deviationFunction, Trend_DOWN_getInstance());
  return new WildersAverage(trendDown, length);
}
function Companion_62() {
  Companion_instance_62 = this;
  this.wt_1 = new ConstantFunction(100.0);
  this.xt_1 = new ConstantFunction(1.0);
}
var Companion_instance_62;
function Companion_getInstance_65() {
  if (Companion_instance_62 == null)
    new Companion_62();
  return Companion_instance_62;
}
function RelativeVolatilityFunction(price, length) {
  Companion_getInstance_65();
  AbstractCachingFunction.call(this);
  var upAvg = constructUpAvg(Companion_getInstance_65(), price, length);
  var downAvg = constructDownAvg(Companion_getInstance_65(), price, length);
  var upPlusDown = new ArithmeticFunction(upAvg, downAvg, ArithmeticOperation_PLUS_getInstance());
  var ifUpPlusDownEqualsZero = new ConstantFunction(50.0);
  var ifUpPlusDownNotEqualsZero = new ArithmeticFunction(new ArithmeticFunction(Companion_getInstance_65().wt_1, upAvg, ArithmeticOperation_MULT_getInstance()), upPlusDown, ArithmeticOperation_DIV_getInstance());
  this.zt_1 = new Equals(upPlusDown, new ZeroFunction(), ifUpPlusDownEqualsZero, ifUpPlusDownNotEqualsZero);
}
protoOf(RelativeVolatilityFunction).pe = function () {
  return listOf_0(this.zt_1);
};
protoOf(RelativeVolatilityFunction).wm = function (index) {
  return this.zt_1.calculateAt(index);
};
function SeriesCrossingPoints(dataItems, firstSeries, secondSeries, revert, offset) {
  this.au_1 = dataItems;
  this.bu_1 = firstSeries;
  this.cu_1 = secondSeries;
  this.du_1 = revert;
  this.eu_1 = offset;
}
protoOf(SeriesCrossingPoints).calculateAt = function (index) {
  if (index < this.eu_1) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var currentFirstSeries = this.bu_1.calculateAt(index);
  var prevFirstSeries = this.bu_1.calculateAt(index - 1 | 0);
  var currentSecondSeries = this.cu_1.calculateAt(index);
  var prevSecondSeries = this.cu_1.calculateAt(index - 1 | 0);
  if (this.du_1) {
    if (currentSecondSeries > currentFirstSeries ? prevSecondSeries < prevFirstSeries : false) {
      return currentSecondSeries;
    } else {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
  } else {
    if (currentFirstSeries > currentSecondSeries ? prevFirstSeries < prevSecondSeries : false) {
      return currentFirstSeries;
    } else {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
  }
};
protoOf(SeriesCrossingPoints).pe = function () {
  return listOf([this.bu_1, this.cu_1]);
};
protoOf(SeriesCrossingPoints).qe = function () {
  return 0;
};
protoOf(SeriesCrossingPoints).re = function () {
  return 0;
};
protoOf(SeriesCrossingPoints).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.au_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(SeriesCrossingPoints).dataChanged = function (changes) {
  return this.ob(changes);
};
var SessionSet_WITHOUT_LAST_instance;
var SessionSet_ONLY_LAST_instance;
var SessionSet_ONLY_LAST_FOR_ALL_CANDLES_instance;
var SessionSet_entriesInitialized;
function SessionSet_initEntries() {
  if (SessionSet_entriesInitialized)
    return Unit_getInstance();
  SessionSet_entriesInitialized = true;
  SessionSet_WITHOUT_LAST_instance = new SessionSet('WITHOUT_LAST', 0);
  SessionSet_ONLY_LAST_instance = new SessionSet('ONLY_LAST', 1);
  SessionSet_ONLY_LAST_FOR_ALL_CANDLES_instance = new SessionSet('ONLY_LAST_FOR_ALL_CANDLES', 2);
}
function SessionSet(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function SessionSet_WITHOUT_LAST_getInstance() {
  SessionSet_initEntries();
  return SessionSet_WITHOUT_LAST_instance;
}
function SessionSet_ONLY_LAST_getInstance() {
  SessionSet_initEntries();
  return SessionSet_ONLY_LAST_instance;
}
function SessionSet_ONLY_LAST_FOR_ALL_CANDLES_getInstance() {
  SessionSet_initEntries();
  return SessionSet_ONLY_LAST_FOR_ALL_CANDLES_instance;
}
function signValue($this, value) {
  return value < 0.0 ? -1.0 : value > 0.0 ? 1.0 : 0.0;
}
function SignFunction(srcFunc) {
  AbstractCachingFunction.call(this);
  this.gu_1 = srcFunc;
}
protoOf(SignFunction).pe = function () {
  return listOf_0(this.gu_1);
};
protoOf(SignFunction).wm = function (index) {
  return signValue(this, this.gu_1.calculateAt(index));
};
function SimpleWeightedSumFunction(srcFunc, period) {
  BackRangeDependentFunction.call(this, srcFunc, period);
}
protoOf(SimpleWeightedSumFunction).fp = function (srcLatestValues) {
  var sum = 0.0;
  var weight = this.jp_1;
  var inductionVariable = 0;
  var last = this.jp_1 - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      sum = sum + weight * srcLatestValues[i];
      weight = weight - 1 | 0;
    }
     while (!(i === last));
  return sum;
};
function StandardDeviationFunction(srcFunc, period) {
  BackRangeDependentFunction.call(this, srcFunc, period);
}
protoOf(StandardDeviationFunction).fp = function (srcLatestValues) {
  var length = this.jp_1;
  var average = srcLatestValues[0];
  var inductionVariable = 1;
  if (inductionVariable < length)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      average = average + srcLatestValues[i];
    }
     while (inductionVariable < length);
  average = average / length;
  var stdDev = 0.0;
  var inductionVariable_0 = 0;
  if (inductionVariable_0 < length)
    do {
      var i_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var diff = srcLatestValues[i_0] - average;
      stdDev = stdDev + diff * diff;
    }
     while (inductionVariable_0 < length);
  // Inline function 'kotlin.math.sqrt' call
  var tmp0_sqrt = stdDev / length;
  return Math.sqrt(tmp0_sqrt);
};
function StandardErrorOfEstimationFunction(srcFunc, period) {
  BackRangeDependentFunction.call(this, srcFunc, period);
}
protoOf(StandardErrorOfEstimationFunction).fp = function (srcLatestValues) {
  var length = this.jp_1;
  var result = 0.0;
  if (length <= 2) {
    return result;
  }
  var avgX = length * (length - 1 | 0) * 0.5 / length;
  var avgY = srcLatestValues[0];
  var inductionVariable = 1;
  var last = length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      avgY = avgY + srcLatestValues[i];
    }
     while (!(i === last));
  avgY = avgY / length;
  var sumDxSqr = 0.0;
  var sumDySqr = 0.0;
  var sumDxDy = 0.0;
  var inductionVariable_0 = 0;
  var last_0 = length - 1 | 0;
  if (inductionVariable_0 <= last_0)
    do {
      var i_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var v = srcLatestValues[i_0];
      var dx = i_0 - avgX;
      var dy = v - avgY;
      sumDxSqr = sumDxSqr + dx * dx;
      sumDySqr = sumDySqr + dy * dy;
      sumDxDy = sumDxDy + dx * dy;
    }
     while (!(i_0 === last_0));
  result = (sumDySqr - sumDxDy * sumDxDy / sumDxSqr) / (length - 2 | 0);
  if (result > 0.0) {
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = result;
    return Math.sqrt(tmp0_sqrt);
  }
  return result;
};
function SumFunction(srcFunc, period) {
  BackRangeDependentFunction.call(this, srcFunc, period);
}
protoOf(SumFunction).fp = function (srcLatestValues) {
  var sum = srcLatestValues[0];
  var inductionVariable = 1;
  var last = this.jp_1 - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      sum = sum + srcLatestValues[i];
    }
     while (!(i === last));
  return sum;
};
function getTrueRangeValue($this, low, high, prevClose) {
  // Inline function 'kotlin.comparisons.maxOf' call
  // Inline function 'kotlin.math.abs' call
  var tmp0_abs = high - low;
  var tmp5_maxOf = Math.abs(tmp0_abs);
  // Inline function 'kotlin.comparisons.maxOf' call
  // Inline function 'kotlin.math.abs' call
  var tmp1_abs = high - prevClose;
  var tmp3_maxOf = Math.abs(tmp1_abs);
  // Inline function 'kotlin.math.abs' call
  var tmp2_abs = prevClose - low;
  var tmp4_maxOf = Math.abs(tmp2_abs);
  var tmp6_maxOf = Math.max(tmp3_maxOf, tmp4_maxOf);
  return Math.max(tmp5_maxOf, tmp6_maxOf);
}
function TrueRangeFunction(low, close, high) {
  AbstractCachingFunction.call(this);
  this.cv_1 = low;
  this.dv_1 = close;
  this.ev_1 = high;
}
protoOf(TrueRangeFunction).pe = function () {
  return listOf([this.cv_1, this.dv_1, this.ev_1]);
};
protoOf(TrueRangeFunction).wm = function (index) {
  var thisLow = this.cv_1.calculateAt(index);
  var thisHigh = this.ev_1.calculateAt(index);
  var tmp;
  if (index === 0) {
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = thisHigh - thisLow;
    tmp = Math.abs(tmp0_abs);
  } else {
    var prevClose = this.dv_1.calculateAt(index - 1 | 0);
    tmp = getTrueRangeValue(this, thisLow, thisHigh, prevClose);
  }
  return tmp;
};
function WildersAverage(srcFunc, length) {
  AbstractCachingFunction.call(this);
  this.gv_1 = srcFunc;
  this.hv_1 = length;
}
protoOf(WildersAverage).pe = function () {
  return listOf_0(this.gv_1);
};
protoOf(WildersAverage).wm = function (index) {
  var v = this.gv_1.calculateAt(index);
  if (index === 0) {
    return v;
  } else {
    var prev = this.calculateAt(index - 1 | 0);
    if (isNaN_0(prev) ? isNaN_0(v) : false) {
      DoubleCompanionObject_getInstance();
      return NaN;
    } else if (isNaN_0(prev) ? !isNaN_0(v) : false) {
      return v;
    } else if (!isNaN_0(prev) ? isNaN_0(v) : false) {
      DoubleCompanionObject_getInstance();
      return NaN;
    } else {
      return (v + (this.hv_1 - 1 | 0) * prev) / this.hv_1;
    }
  }
};
protoOf(WildersAverage).re = function () {
  return imul(7, this.hv_1);
};
function WindowFunction_init_$Init$(srcFunction, endIndex, relativeToDataEnd, $this) {
  WindowFunction.call($this);
  if (!relativeToDataEnd ? endIndex <= 0 : false) {
    throw IllegalArgumentException_init_$Create$('negative end index ' + endIndex);
  }
  $this.mv_1 = relativeToDataEnd;
  if ($this.mv_1)
    $this.lv_1 = endIndex;
  else
    $this.kv_1 = endIndex;
  $this.iv_1 = srcFunction;
  return $this;
}
function WindowFunction_init_$Create$(srcFunction, endIndex, relativeToDataEnd) {
  return WindowFunction_init_$Init$(srcFunction, endIndex, relativeToDataEnd, objectCreate(protoOf(WindowFunction)));
}
protoOf(WindowFunction).calculateAt = function (index) {
  var tmp;
  if (index >= this.jv_1 ? index < this.kv_1 : false) {
    tmp = this.iv_1.calculateAt(index);
  } else {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  }
  return tmp;
};
protoOf(WindowFunction).qe = function () {
  return this.iv_1.ownPastOffset;
};
protoOf(WindowFunction).pe = function () {
  return this.iv_1.childFunctions;
};
protoOf(WindowFunction).re = function () {
  return this.iv_1.prefetchSize;
};
protoOf(WindowFunction).ob = function (changes) {
  if (this.mv_1)
    this.kv_1 = changes.le_1 + this.lv_1 | 0;
  return this.iv_1.dataChanged(changes);
};
protoOf(WindowFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function WindowFunction() {
  this.jv_1 = 0;
  this.kv_1 = IntCompanionObject_getInstance().MAX_VALUE;
  this.lv_1 = 0;
  this.mv_1 = false;
}
function ZeroFunction() {
  ConstantFunction.call(this, 0.0);
}
function AbstractCachingFunction() {
  this.xm_1 = ArrayList_init_$Create$_0(1000);
}
protoOf(AbstractCachingFunction).calculateAt = function (index) {
  if (index < 0) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var lastCalculatedIndex = this.xm_1.f() - 1 | 0;
  while (lastCalculatedIndex < index) {
    lastCalculatedIndex = lastCalculatedIndex + 1 | 0;
    this.xm_1.a(this.wm(lastCalculatedIndex));
  }
  return this.xm_1.g(index);
};
protoOf(AbstractCachingFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.minOf' call
  var tmp0_minOf = changes.ke_1;
  var tmp1_minOf = this.ym(changes);
  var recalcStartIndex = Math.min(tmp0_minOf, tmp1_minOf);
  var tmp0_iterator = this.pe().c();
  while (tmp0_iterator.d()) {
    var f = tmp0_iterator.e();
    var childRecalcStartIndex = f.dataChanged(changes);
    if (childRecalcStartIndex < recalcStartIndex) {
      recalcStartIndex = childRecalcStartIndex;
    }
  }
  var removedFromLeft = changes.je_1;
  if (removedFromLeft > 0) {
    if (this.xm_1.f() > removedFromLeft) {
      this.xm_1.a4(0, removedFromLeft).y3();
    } else {
      this.xm_1.y3();
    }
  }
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp2_maxOf = recalcStartIndex;
  recalcStartIndex = Math.max(0, tmp2_maxOf);
  if (this.xm_1.f() > recalcStartIndex) {
    this.xm_1.a4(recalcStartIndex, this.xm_1.f()).y3();
  }
  return recalcStartIndex;
};
protoOf(AbstractCachingFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
protoOf(AbstractCachingFunction).ym = function (changes) {
  return changes.ke_1;
};
protoOf(AbstractCachingFunction).qe = function () {
  return 0;
};
protoOf(AbstractCachingFunction).re = function () {
  return 0;
};
function BackRangeDependentFunction(srcFunc, length, considerPartlyNaNArrays) {
  considerPartlyNaNArrays = considerPartlyNaNArrays === VOID ? false : considerPartlyNaNArrays;
  AbstractCachingFunction.call(this);
  this.hp_1 = srcFunc;
  this.ip_1 = considerPartlyNaNArrays;
  this.jp_1 = 0;
  this.kp_1 = null;
  this.lp(length);
}
protoOf(BackRangeDependentFunction).lp = function (length) {
  if (length <= 0) {
    throw IllegalArgumentException_init_$Create$('Illegal back range length (' + length + '). Should be non-zero positive.');
  }
  this.jp_1 = length;
};
protoOf(BackRangeDependentFunction).pe = function () {
  return listOf_0(this.hp_1);
};
protoOf(BackRangeDependentFunction).qe = function () {
  return this.jp_1 - 1 | 0;
};
protoOf(BackRangeDependentFunction).wm = function (index) {
  if (index < (this.jp_1 - 1 | 0)) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  if (this.kp_1 == null ? true : !(ensureNotNull(this.kp_1).length === this.jp_1)) {
    this.kp_1 = new Float64Array(this.jp_1);
  }
  var inductionVariable = 0;
  var last = this.jp_1 - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var v = this.hp_1.calculateAt(((index + 1 | 0) - this.jp_1 | 0) + i | 0);
      if (!this.ip_1 ? isNaN_0(v) : false) {
        DoubleCompanionObject_getInstance();
        return NaN;
      }
      ensureNotNull(this.kp_1)[i] = v;
    }
     while (!(i === last));
  return this.fp(ensureNotNull(this.kp_1));
};
function DynamicMomentumIndexFunction(priceSourceFunction, dynamicLength, lowerLimit, upperLimit, averageType) {
  AbstractCachingFunction.call(this);
  this.pv_1 = priceSourceFunction;
  this.qv_1 = dynamicLength;
  this.rv_1 = lowerLimit;
  this.sv_1 = upperLimit;
  this.tv_1 = averageType;
  this.uv_1 = HashMap_init_$Create$_0(abs(this.sv_1 - this.rv_1 | 0));
}
protoOf(DynamicMomentumIndexFunction).pe = function () {
  var children = ArrayList_init_$Create$_0(this.uv_1.f() + 2 | 0);
  children.i3(this.uv_1.w4());
  children.a(this.pv_1);
  children.a(this.qv_1);
  return children;
};
protoOf(DynamicMomentumIndexFunction).wm = function (index) {
  var length = numberToInt(this.qv_1.calculateAt(index));
  if (length < this.rv_1) {
    length = this.rv_1;
  } else if (length > this.sv_1) {
    length = this.sv_1;
  }
  var rsi = this.uv_1.k1(length);
  if (rsi == null) {
    rsi = CommonFunctions_getInstance().tk(this.pv_1, length, this.tv_1);
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.uv_1;
    var tmp1_set = length;
    var tmp2_set = rsi;
    tmp0_set.v4(tmp1_set, tmp2_set);
  }
  return rsi.calculateAt(index);
};
var FractalOperation_UP_instance;
var FractalOperation_DOWN_instance;
var FractalOperation_entriesInitialized;
function FractalOperation_initEntries() {
  if (FractalOperation_entriesInitialized)
    return Unit_getInstance();
  FractalOperation_entriesInitialized = true;
  FractalOperation_UP_instance = new FractalOperation('UP', 0);
  FractalOperation_DOWN_instance = new FractalOperation('DOWN', 1);
}
function FractalOperation(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function FractalOperation_UP_getInstance() {
  FractalOperation_initEntries();
  return FractalOperation_UP_instance;
}
function FractalOperation_DOWN_getInstance() {
  FractalOperation_initEntries();
  return FractalOperation_DOWN_instance;
}
function KaufmanNamaFunction(nsmooth, xPrice) {
  AbstractCachingFunction.call(this);
  this.wv_1 = nsmooth;
  this.xv_1 = xPrice;
}
protoOf(KaufmanNamaFunction).pe = function () {
  return listOf([this.wv_1, this.xv_1]);
};
protoOf(KaufmanNamaFunction).wm = function (index) {
  var prev = this.calculateAt(index - 1 | 0);
  if (isNaN_0(prev) ? true : !(compareTo(prev, 0.0) === 1)) {
    prev = 0.0;
  }
  return prev + this.wv_1.calculateAt(index) * (this.xv_1.calculateAt(index) - prev);
};
function calculateCoefficients($this) {
  var n = $this.zv_1.lb();
  var sumX = 0.0;
  var sumY = 0.0;
  var sumXY = 0.0;
  var sumXX = 0.0;
  var inductionVariable = 0;
  var last = $this.zv_1.lb() - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var price = $this.zv_1.calculateAt(i);
      sumX = sumX + i;
      sumY = sumY + price;
      sumXY = sumXY + i * price;
      sumXX = sumXX + imul(i, i);
    }
     while (!(i === last));
  $this.aw_1 = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  $this.bw_1 = (sumY - $this.aw_1 * sumX) / n;
}
function LinearRegressionFunction(srcFunc) {
  AbstractCachingFunction.call(this);
  this.zv_1 = srcFunc;
  this.aw_1 = 0.0;
  this.bw_1 = 0.0;
}
protoOf(LinearRegressionFunction).pe = function () {
  return listOf_0(this.zv_1);
};
protoOf(LinearRegressionFunction).ym = function (changes) {
  var tmp = this;
  DoubleCompanionObject_getInstance();
  tmp.bw_1 = NaN;
  var tmp_0 = this;
  DoubleCompanionObject_getInstance();
  tmp_0.aw_1 = NaN;
  return 0;
};
protoOf(LinearRegressionFunction).wm = function (index) {
  if (isNaN_0(this.bw_1) ? true : isNaN_0(this.aw_1)) {
    calculateCoefficients(this);
  }
  return this.bw_1 + this.aw_1 * index;
};
function Extremum(index, value, isMaximum) {
  this.cw_1 = index;
  this.dw_1 = value;
  this.ew_1 = isMaximum;
}
function ParabolicSarFunction(highFunc, lowFunc, factorInc, maxFactor) {
  AbstractCachingFunction.call(this);
  this.gw_1 = highFunc;
  this.hw_1 = lowFunc;
  this.iw_1 = factorInc;
  this.jw_1 = maxFactor;
  this.kw_1 = ArrayList_init_$Create$();
  this.lw_1 = 0.0;
  this.mw_1 = 0.0;
  this.mw_1 = this.iw_1;
}
protoOf(ParabolicSarFunction).pe = function () {
  return listOf([this.gw_1, this.hw_1]);
};
protoOf(ParabolicSarFunction).qe = function () {
  return 1;
};
protoOf(ParabolicSarFunction).ym = function (changes) {
  var removed = changes.je_1;
  var firstChangedIndex = changes.ke_1;
  if (removed > 0 ? !this.kw_1.h() : false) {
    var it = this.kw_1.c();
    while (it.d()) {
      var ex = it.e();
      if (ex.cw_1 < removed) {
        it.w1();
      } else {
        ex.cw_1 = ex.cw_1 - removed | 0;
      }
    }
  }
  var it_0 = this.kw_1.z3(this.kw_1.f());
  $l$loop: while (it_0.r3()) {
    var ex_0 = it_0.s3();
    if (ex_0.cw_1 >= firstChangedIndex) {
      it_0.w1();
    } else {
      break $l$loop;
    }
  }
  var recalculateIndex = 0;
  if (!this.kw_1.h()) {
    var ex_1 = this.kw_1.g(this.kw_1.f() - 1 | 0);
    recalculateIndex = ex_1.cw_1 + 1 | 0;
    this.lw_1 = ex_1.dw_1;
    this.mw_1 = this.iw_1;
  }
  return recalculateIndex;
};
protoOf(ParabolicSarFunction).wm = function (index) {
  if (index === 0) {
    this.lw_1 = this.gw_1.calculateAt(0);
    this.kw_1.y3();
    this.kw_1.a(new Extremum(0, this.hw_1.calculateAt(0), false));
    return this.hw_1.calculateAt(0);
  }
  var ex = this.kw_1.g(this.kw_1.f() - 1 | 0);
  var downtrend = ex.ew_1;
  var v = this.calculateAt(index - 1 | 0);
  var previousSAR = isNaN_0(v) ? ex.dw_1 : v;
  var currentHigh = this.gw_1.calculateAt(index);
  var currentLow = this.hw_1.calculateAt(index);
  if (isNaN_0(currentHigh) ? true : isNaN_0(currentLow)) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var currentSAR;
  if (downtrend) {
    if (previousSAR < currentHigh) {
      downtrend = false;
      currentSAR = this.lw_1;
      this.kw_1.a(new Extremum(index, this.lw_1, downtrend));
      this.lw_1 = currentHigh;
      this.mw_1 = this.iw_1;
    } else {
      if (currentLow < this.lw_1) {
        this.lw_1 = currentLow;
        var tmp = this;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = this.mw_1 + this.iw_1;
        var tmp1_minOf = this.jw_1;
        tmp.mw_1 = Math.min(tmp0_minOf, tmp1_minOf);
      }
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp2_maxOf = previousSAR + this.mw_1 * (this.lw_1 - previousSAR);
      currentSAR = Math.max(currentHigh, tmp2_maxOf);
    }
  } else {
    if (previousSAR > currentLow) {
      downtrend = true;
      currentSAR = this.lw_1;
      this.kw_1.a(new Extremum(index, this.lw_1, downtrend));
      this.lw_1 = currentLow;
      this.mw_1 = this.iw_1;
    } else {
      if (currentHigh > this.lw_1) {
        this.lw_1 = currentHigh;
        var tmp_0 = this;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp3_minOf = this.mw_1 + this.iw_1;
        var tmp4_minOf = this.jw_1;
        tmp_0.mw_1 = Math.min(tmp3_minOf, tmp4_minOf);
      }
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp5_minOf = previousSAR + this.mw_1 * (this.lw_1 - previousSAR);
      currentSAR = Math.min(currentLow, tmp5_minOf);
    }
  }
  return currentSAR;
};
function SchaffTrendFrac(range, fastK, offset) {
  AbstractCachingFunction.call(this);
  this.ow_1 = range;
  this.pw_1 = fastK;
  this.qw_1 = offset;
}
protoOf(SchaffTrendFrac).pe = function () {
  return listOf([this.ow_1, this.pw_1]);
};
protoOf(SchaffTrendFrac).wm = function (index) {
  if (this.ow_1.calculateAt(index) > 0.0) {
    return this.pw_1.calculateAt(index);
  } else if (index > this.qw_1) {
    return this.calculateAt(index - 1 | 0);
  } else if (index === this.qw_1 ? index >= 0 : false) {
    return 0.0;
  }
  DoubleCompanionObject_getInstance();
  return NaN;
};
function getRank($this, values, length, i) {
  var rank = 0;
  var inductionVariable = 0;
  if (inductionVariable < length)
    do {
      var j = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (getOffset($this, values, i, length - 1 | 0) > getOffset$default($this, values, (length - j | 0) - 1 | 0) ? true : compareTo(getOffset$default($this, values, i), getOffset$default($this, values, (length - j | 0) - 1 | 0)) === 0 ? i <= ((length - j | 0) - 1 | 0) : false) {
        rank = rank + 1 | 0;
      }
    }
     while (inductionVariable < length);
  return rank;
}
function getOffset($this, values, offset, max) {
  var offset_0 = offset;
  if (max > values.length) {
    throw IllegalArgumentException_init_$Create$("max can't be greater then length of values");
  }
  if (offset_0 > max) {
    offset_0 = max;
  }
  return values[(values.length - offset_0 | 0) - 1 | 0];
}
function getOffset$default($this, values, offset, max, $super) {
  max = max === VOID ? values.length : max;
  return getOffset($this, values, offset, max);
}
function SpearmansRho(srcFunc, length) {
  BackRangeDependentFunction.call(this, srcFunc, length);
}
protoOf(SpearmansRho).fp = function (srcLatestValues) {
  var length = this.jp_1;
  var sum = 0.0;
  var inductionVariable = 0;
  if (inductionVariable < length)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = sum;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = length - i - getRank(this, srcLatestValues, length, i);
      sum = tmp + Math.pow(tmp0_pow, 2.0);
    }
     while (inductionVariable < length);
  var sumMultBy6 = sum * 6;
  // Inline function 'kotlin.math.pow' call
  var denominator = length * (Math.pow(length, 2.0) - 1);
  var div = sumMultBy6 / denominator;
  return 1 - div;
};
function SwingIndexRatio(dataItems) {
  AbstractCachingFunction.call(this);
  this.xw_1 = dataItems;
}
protoOf(SwingIndexRatio).pe = function () {
  return emptyList();
};
protoOf(SwingIndexRatio).wm = function (index) {
  DoubleCompanionObject_getInstance();
  var result = NaN;
  if (index < 1) {
    return result;
  }
  var today = this.xw_1.getTradeItem(index);
  var yDay = this.xw_1.getTradeItem(index - 1 | 0);
  if (today == null ? true : yDay == null) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  // Inline function 'kotlin.math.abs' call
  var tmp0_abs = today.getHigh() - yDay.getClose();
  var highMinusYClose = Math.abs(tmp0_abs);
  // Inline function 'kotlin.math.abs' call
  var tmp1_abs = today.getLow() - yDay.getClose();
  var lowMinusYClose = Math.abs(tmp1_abs);
  // Inline function 'kotlin.math.abs' call
  var tmp2_abs = yDay.getClose() - yDay.getOpen();
  var constPart = Math.abs(tmp2_abs) / 4;
  // Inline function 'kotlin.math.abs' call
  var tmp3_abs = today.getHigh() - today.getLow();
  var highMinusLow = Math.abs(tmp3_abs);
  if (highMinusYClose > lowMinusYClose ? highMinusYClose > highMinusLow : false) {
    result = constPart + highMinusYClose - lowMinusYClose / 2;
  } else if (lowMinusYClose > highMinusYClose ? lowMinusYClose > highMinusLow : false) {
    result = constPart + lowMinusYClose - highMinusYClose / 2;
  } else {
    result = constPart + highMinusLow;
  }
  return result;
};
function getYesterday($this, index) {
  var yesterdayValue = $this.calculateAt(index - 1 | 0);
  return isNaN_0(yesterdayValue) ? 0.0 : yesterdayValue;
}
function calculateToday($this, index) {
  if (index <= 0) {
    return 0.0;
  }
  var today = $this.zw_1.getTradeItem(index);
  var yesterdayDay = $this.zw_1.getTradeItem(index - 1 | 0);
  if (today == null ? true : yesterdayDay == null) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var todayClose = today.getClose();
  var todayLow = today.getLow();
  var todayHigh = today.getHigh();
  var yesterdayClose = yesterdayDay.getClose();
  var result;
  if (todayClose > yesterdayClose) {
    // Inline function 'kotlin.comparisons.minOf' call
    result = todayClose - Math.min(yesterdayClose, todayLow);
  } else if (todayClose < yesterdayClose) {
    // Inline function 'kotlin.comparisons.maxOf' call
    result = todayClose - Math.max(yesterdayClose, todayHigh);
  } else {
    result = 0.0;
  }
  return result;
}
function WilliamsADFunction(dataItems) {
  AbstractCachingFunction.call(this);
  this.zw_1 = dataItems;
}
protoOf(WilliamsADFunction).pe = function () {
  return emptyList();
};
protoOf(WilliamsADFunction).wm = function (index) {
  if (index === 0) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  return calculateToday(this, index) + getYesterday(this, index);
};
function WilliamsFractalFilter(priceSource, sequenceCount, operation) {
  AbstractCachingFunction.call(this);
  this.bx_1 = priceSource;
  this.cx_1 = sequenceCount;
  this.dx_1 = operation;
}
protoOf(WilliamsFractalFilter).pe = function () {
  return listOf_0(this.bx_1);
};
protoOf(WilliamsFractalFilter).wm = function (index) {
  var isFractal = (index - this.cx_1 | 0) >= 0 ? (index + this.cx_1 | 0) < this.bx_1.lb() : false;
  var tmp0 = this.dx_1.c2_1;
  if (tmp0 === 0)
    isFractal = isFractal ? WilliamsFractalUtils_getInstance().gx(index, this.bx_1, WilliamsFractalUtils_getInstance().ex_1, this.cx_1) : false;
  else if (tmp0 === 1)
    isFractal = isFractal ? WilliamsFractalUtils_getInstance().gx(index, this.bx_1, WilliamsFractalUtils_getInstance().fx_1, this.cx_1) : false;
  var tmp;
  if (isFractal) {
    tmp = this.bx_1.calculateAt(index);
  } else {
    DoubleCompanionObject_getInstance();
    tmp = NaN;
  }
  return tmp;
};
protoOf(WilliamsFractalFilter).ym = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = changes.ke_1 - this.cx_1 | 0;
  return Math.max(0, tmp0_maxOf);
};
function removeUnneededExtrema($this, firstChangedIndex) {
  while (!$this.px_1.g($this.px_1.f() - 1 | 0).kx_1) {
    $this.px_1.v1($this.px_1.f() - 1 | 0);
  }
  if ($this.px_1.g($this.px_1.f() - 1 | 0).hx_1 >= firstChangedIndex) {
    while (!$this.px_1.h() ? $this.px_1.g($this.px_1.f() - 1 | 0).hx_1 >= firstChangedIndex : false) {
      $this.px_1.v1($this.px_1.f() - 1 | 0);
    }
  }
  if (compareTo($this.nx_1, 0.0) === 0 ? !$this.px_1.h() : false) {
    $this.px_1.v1($this.px_1.f() - 1 | 0);
  }
}
function removeInvisibleExtrema($this, removed) {
  var v = getValue($this, removed);
  if (!isNaN_0(v)) {
    var it = $this.px_1.c();
    while (it.d()) {
      var ex = it.e();
      if (ex.hx_1 < removed) {
        it.w1();
      } else {
        ex.hx_1 = ex.hx_1 - removed | 0;
      }
    }
    if ($this.px_1.f() > 1) {
      var ex_0 = $this.px_1.g(0);
      if (!(ex_0.hx_1 === 0)) {
        $this.px_1.x3(0, new Extremum_0(0, v, !ex_0.jx_1, false));
      }
    } else {
      $this.px_1.y3();
    }
  } else {
    $this.px_1.y3();
  }
}
function getValue($this, index) {
  var inductionVariable = 1;
  var last = $this.px_1.f();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var extremum1 = $this.px_1.g(i - 1 | 0);
      var extremum2 = $this.px_1.g(i);
      if (index >= extremum1.hx_1 ? index <= extremum2.hx_1 : false) {
        var dividend = (index - extremum1.hx_1 | 0) * (extremum2.ix_1 - extremum1.ix_1);
        var divisor = extremum2.hx_1 - extremum1.hx_1 | 0;
        return dividend / divisor + extremum1.ix_1;
      }
    }
     while (inductionVariable < last);
  DoubleCompanionObject_getInstance();
  return NaN;
}
function initiallyFill($this) {
  var initialValue;
  initialValue = $this.mx_1.calculateAt(0);
  var v = initialValue;
  var highestHigh = v;
  var lowestLow = v;
  var lowestIndex = 0;
  var highestIndex = 0;
  var currentIndex = 1;
  var found = false;
  $l$loop_0: while (currentIndex < $this.ox_1) {
    v = $this.mx_1.calculateAt(currentIndex);
    if (v > highestHigh) {
      highestHigh = v;
      highestIndex = currentIndex;
      if (highestHigh / lowestLow > 1 + $this.nx_1) {
        if (!(lowestIndex === 0)) {
          $this.px_1.a(new Extremum_0(0, initialValue, true, false));
        }
        $this.px_1.a(new Extremum_0(lowestIndex, lowestLow, false, true));
        found = true;
        break $l$loop_0;
      }
    }
    if (v < lowestLow) {
      lowestLow = v;
      lowestIndex = currentIndex;
      if (highestHigh / lowestLow > 1 + $this.nx_1) {
        if (!(highestIndex === 0)) {
          $this.px_1.a(new Extremum_0(0, initialValue, false, false));
        }
        $this.px_1.a(new Extremum_0(highestIndex, highestHigh, true, true));
        found = true;
        break $l$loop_0;
      }
    }
    currentIndex = currentIndex + 1 | 0;
  }
  if (!found) {
    $this.px_1.a(new Extremum_0(0, initialValue, v < initialValue, false));
    $this.px_1.a(new Extremum_0(currentIndex - 1 | 0, v, v >= initialValue, false));
    return true;
  } else {
    return false;
  }
}
function fillExtremaUp($this) {
  var extremum = $this.px_1.g($this.px_1.f() - 1 | 0);
  var lastExtremum = extremum.ix_1;
  var lastExtremumIndex = extremum.hx_1;
  var uptrend = !extremum.jx_1;
  var currentIndex = lastExtremumIndex + 1 | 0;
  var v = 0.0;
  while (currentIndex < $this.ox_1) {
    v = $this.mx_1.calculateAt(currentIndex);
    if (uptrend) {
      if (v > lastExtremum) {
        lastExtremum = v;
        lastExtremumIndex = currentIndex;
      } else if (v / lastExtremum < 1 - $this.nx_1) {
        $this.px_1.a(new Extremum_0(lastExtremumIndex, lastExtremum, uptrend, true));
        lastExtremum = v;
        lastExtremumIndex = currentIndex;
        uptrend = false;
      }
    } else {
      if (v < lastExtremum) {
        lastExtremum = v;
        lastExtremumIndex = currentIndex;
      } else if (v / lastExtremum > 1 + $this.nx_1) {
        $this.px_1.a(new Extremum_0(lastExtremumIndex, lastExtremum, uptrend, true));
        lastExtremum = v;
        lastExtremumIndex = currentIndex;
        uptrend = true;
      }
    }
    currentIndex = currentIndex + 1 | 0;
  }
  if (!(compareTo(v, lastExtremum) === 0)) {
    $this.px_1.a(new Extremum_0(lastExtremumIndex, lastExtremum, uptrend, false));
    uptrend = !uptrend;
  }
  $this.px_1.a(new Extremum_0(currentIndex - 1 | 0, v, uptrend, false));
}
function Extremum_0(index, value, isMaximum, realExtremum) {
  this.hx_1 = index;
  this.ix_1 = value;
  this.jx_1 = isMaximum;
  this.kx_1 = realExtremum;
}
protoOf(Extremum_0).toString = function () {
  return (this.kx_1 ? 'true ' : 'false ') + (this.jx_1 ? 'maximum ' : 'minimum ') + this.ix_1 + ' at ' + this.hx_1;
};
function ZigZagFunction(src, threshold) {
  AbstractCachingFunction.call(this);
  this.mx_1 = src;
  this.nx_1 = threshold;
  this.ox_1 = 0;
  this.px_1 = ArrayList_init_$Create$();
}
protoOf(ZigZagFunction).ym = function (changes) {
  this.ox_1 = changes.le_1;
  var removed = changes.je_1;
  var firstChangedIndex = changes.ke_1;
  if (this.px_1.f() > 2) {
    if (!(removed === 0)) {
      removeInvisibleExtrema(this, removed);
    }
    if (!this.px_1.h()) {
      removeUnneededExtrema(this, firstChangedIndex);
    }
  } else {
    this.px_1.y3();
  }
  if (this.px_1.h()) {
    return 0;
  } else {
    var lastExtrema = this.px_1.g(this.px_1.f() - 1 | 0);
    return lastExtrema.hx_1 + 1 | 0;
  }
};
protoOf(ZigZagFunction).pe = function () {
  return listOf_0(this.mx_1);
};
protoOf(ZigZagFunction).wm = function (index) {
  if (this.px_1.h() ? !initiallyFill(this) : false) {
    fillExtremaUp(this);
  }
  if (this.px_1.g(this.px_1.f() - 1 | 0).hx_1 < index ? index < this.ox_1 : false) {
    fillExtremaUp(this);
  }
  return getValue(this, index);
};
function calculateSetupSize($this, setupEndIndex) {
  DoubleCompanionObject_getInstance();
  var low = 1.7976931348623157E308;
  DoubleCompanionObject_getInstance();
  var high = 4.9E-324;
  var inductionVariable = setupEndIndex - numberToInt($this.vx_1) | 0;
  var last = setupEndIndex + 1 | 0;
  if (inductionVariable <= last)
    $l$loop: do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_elvis_lhs = $this.rx_1.getTradeItem(i);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var item = tmp;
      if (item.getHigh() > high) {
        high = item.getHigh();
      }
      if (item.getLow() < low) {
        low = item.getLow();
      }
    }
     while (!(i === last));
  return high - low;
}
function CountdownFunction(dataItems, setup, oppositeSetup, countdown, setupBarLength, countdownBarLength) {
  AbstractCachingFunction.call(this);
  this.rx_1 = dataItems;
  this.sx_1 = setup;
  this.tx_1 = oppositeSetup;
  this.ux_1 = countdown;
  this.vx_1 = setupBarLength;
  this.wx_1 = countdownBarLength;
}
protoOf(CountdownFunction).pe = function () {
  return listOf_0(this.sx_1);
};
protoOf(CountdownFunction).wm = function (index) {
  if (index < 2) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var currentCandle = this.rx_1.getTradeItem(index);
  var twoCandlesAgo = this.rx_1.getTradeItem(index - 2 | 0);
  if (currentCandle == null ? true : twoCandlesAgo == null) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var tmp;
  switch (this.ux_1.c2_1) {
    case 0:
      tmp = currentCandle.getClose() <= twoCandlesAgo.getLow();
      break;
    case 1:
      tmp = currentCandle.getClose() >= twoCandlesAgo.getHigh();
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  var isCounting = tmp;
  var setupValue = this.sx_1.calculateAt(index);
  var prevValue = this.calculateAt(index - 1 | 0);
  if ((isFinite(setupValue) ? setupValue === this.vx_1 : false) ? isFinite(prevValue) : false) {
    var i = index - numberToInt(this.vx_1) | 0;
    while (!(this.sx_1.calculateAt(i) === this.vx_1)) {
      i = i - 1 | 0;
    }
    var prevSetupSize = calculateSetupSize(this, i);
    var currentSetupSize = calculateSetupSize(this, index);
    if (prevSetupSize <= currentSetupSize ? currentSetupSize < 1.618 * prevSetupSize : false) {
      return isCounting ? 1.0 : -1.0;
    }
  } else if (isFinite(setupValue) ? setupValue === this.vx_1 : false) {
    return isCounting ? 1.0 : -1.0;
  }
  if (this.tx_1.calculateAt(index) === this.vx_1) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  if (isFinite(prevValue) ? prevValue < this.wx_1 : false) {
    var tmp_0;
    if (prevValue > 0.0) {
      var tmp_1;
      if (isCounting) {
        tmp_1 = prevValue + 1.0;
      } else {
        tmp_1 = -prevValue;
      }
      tmp_0 = tmp_1;
    } else {
      var tmp_2;
      if (isCounting) {
        tmp_2 = -prevValue + 1.0;
      } else {
        tmp_2 = prevValue;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  DoubleCompanionObject_getInstance();
  return NaN;
};
function PerfectCountdownFunction(dataItems, countdownFunction, countdownType, setupBarLength, countdownBarLength) {
  AbstractCachingFunction.call(this);
  this.yx_1 = dataItems;
  this.zx_1 = countdownFunction;
  this.ay_1 = countdownType;
  this.by_1 = setupBarLength;
  this.cy_1 = countdownBarLength;
}
protoOf(PerfectCountdownFunction).pe = function () {
  return listOf_0(this.zx_1);
};
protoOf(PerfectCountdownFunction).wm = function (index) {
  var currentCountdown = this.zx_1.calculateAt(index);
  if (isFinite(currentCountdown) ? currentCountdown === this.cy_1 : false) {
    var i = index - 1 | 0;
    var temp = this.zx_1.calculateAt(i);
    while (!(temp === this.by_1 - 1)) {
      i = i - 1 | 0;
      temp = this.zx_1.calculateAt(i);
    }
    var currentCandle = ensureNotNull(this.yx_1.getTradeItem(index));
    var countdownEightCandle = ensureNotNull(this.yx_1.getTradeItem(i));
    var tmp;
    switch (this.ay_1.c2_1) {
      case 0:
        tmp = currentCandle.getLow() >= countdownEightCandle.getClose();
        break;
      case 1:
        tmp = currentCandle.getHigh() <= countdownEightCandle.getClose();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var isPerfect = tmp;
    if (isPerfect)
      return 1.0;
  }
  DoubleCompanionObject_getInstance();
  return NaN;
};
function PerfectSetupFunction(data, setupFunction, setup, setupBarLength) {
  this.dy_1 = data;
  this.ey_1 = setupFunction;
  this.fy_1 = setup;
  this.gy_1 = setupBarLength;
}
protoOf(PerfectSetupFunction).calculateAt = function (index) {
  if (index < 2) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var currentBuySetup = this.ey_1.calculateAt(index);
  if (currentBuySetup === this.gy_1) {
    var currentCandle = this.dy_1.getTradeItem(index);
    var prevCandle = this.dy_1.getTradeItem(index - 1 | 0);
    var twoCandlesAgo = this.dy_1.getTradeItem(index - 2 | 0);
    var threeCandlesAgo = this.dy_1.getTradeItem(index - 3 | 0);
    if (((currentCandle == null ? true : twoCandlesAgo == null) ? true : prevCandle == null) ? true : threeCandlesAgo == null) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var tmp;
    switch (this.fy_1.c2_1) {
      case 0:
        var tmp_0;
        if (currentCandle.getLow() <= twoCandlesAgo.getLow() ? true : prevCandle.getLow() <= threeCandlesAgo.getLow()) {
          tmp_0 = 1.0;
        } else {
          DoubleCompanionObject_getInstance();
          tmp_0 = NaN;
        }

        tmp = tmp_0;
        break;
      case 1:
        var tmp_1;
        if (currentCandle.getHigh() >= twoCandlesAgo.getHigh() ? true : prevCandle.getHigh() >= threeCandlesAgo.getHigh()) {
          tmp_1 = 1.0;
        } else {
          DoubleCompanionObject_getInstance();
          tmp_1 = NaN;
        }

        tmp = tmp_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  DoubleCompanionObject_getInstance();
  return NaN;
};
protoOf(PerfectSetupFunction).pe = function () {
  return listOf_0(this.ey_1);
};
protoOf(PerfectSetupFunction).qe = function () {
  return 0;
};
protoOf(PerfectSetupFunction).re = function () {
  return 0;
};
protoOf(PerfectSetupFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.dy_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(PerfectSetupFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
var TDBuySell_BUY_instance;
var TDBuySell_SELL_instance;
var TDBuySell_entriesInitialized;
function TDBuySell_initEntries() {
  if (TDBuySell_entriesInitialized)
    return Unit_getInstance();
  TDBuySell_entriesInitialized = true;
  TDBuySell_BUY_instance = new TDBuySell('BUY', 0);
  TDBuySell_SELL_instance = new TDBuySell('SELL', 1);
}
function TDBuySell(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function calculate_2($this, index) {
  var di = $this.hy_1.getTradeItem(index);
  if (!(di == null) ? index > 4 : false) {
    var first = $this.hy_1.getTradeItem(index - 5 | 0);
    var second = $this.hy_1.getTradeItem(index - 4 | 0);
    var lastButOne = $this.hy_1.getTradeItem(index - 1 | 0);
    if ((first == null ? true : second == null) ? true : lastButOne === null) {
      DoubleCompanionObject_getInstance();
      return NaN;
    }
    var tmp;
    switch ($this.iy_1.c2_1) {
      case 0:
        var tmp_0;
        if (di.getClose() > second.getClose() ? lastButOne.getClose() < first.getClose() : false) {
          tmp_0 = 1.0;
        } else {
          DoubleCompanionObject_getInstance();
          tmp_0 = NaN;
        }

        tmp = tmp_0;
        break;
      case 1:
        var tmp_1;
        if (di.getClose() < second.getClose() ? lastButOne.getClose() > first.getClose() : false) {
          tmp_1 = 1.0;
        } else {
          DoubleCompanionObject_getInstance();
          tmp_1 = NaN;
        }

        tmp = tmp_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  DoubleCompanionObject_getInstance();
  return NaN;
}
function PriceFlipFunction(dataItems, flip) {
  this.hy_1 = dataItems;
  this.iy_1 = flip;
}
protoOf(PriceFlipFunction).pe = function () {
  return emptyList();
};
protoOf(PriceFlipFunction).calculateAt = function (index) {
  return calculate_2(this, index);
};
protoOf(PriceFlipFunction).qe = function () {
  return 0;
};
protoOf(PriceFlipFunction).re = function () {
  return 0;
};
protoOf(PriceFlipFunction).ob = function (changes) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var tmp0_maxOf = this.hy_1.lb() - 1 | 0;
  return Math.max(0, tmp0_maxOf);
};
protoOf(PriceFlipFunction).dataChanged = function (changes) {
  return this.ob(changes);
};
function TDBuySell_BUY_getInstance() {
  TDBuySell_initEntries();
  return TDBuySell_BUY_instance;
}
function TDBuySell_SELL_getInstance() {
  TDBuySell_initEntries();
  return TDBuySell_SELL_instance;
}
function SetupFunction(dataItems, flipFunction, setup, setupBarLength) {
  AbstractCachingFunction.call(this);
  this.ky_1 = dataItems;
  this.ly_1 = flipFunction;
  this.my_1 = setup;
  this.ny_1 = setupBarLength;
}
protoOf(SetupFunction).pe = function () {
  return listOf_0(this.ly_1);
};
protoOf(SetupFunction).wm = function (index) {
  if (index < 4) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var currentCandle = this.ky_1.getTradeItem(index);
  var fourCandlesAgo = this.ky_1.getTradeItem(index - 4 | 0);
  if (currentCandle == null ? true : fourCandlesAgo == null) {
    DoubleCompanionObject_getInstance();
    return NaN;
  }
  var prevValue = this.calculateAt(index - 1 | 0);
  if (isFinite(prevValue) ? prevValue < this.ny_1 : false) {
    var tmp;
    switch (this.my_1.c2_1) {
      case 0:
        var tmp_0;
        if (currentCandle.getClose() < fourCandlesAgo.getClose()) {
          tmp_0 = prevValue + 1.0;
        } else {
          DoubleCompanionObject_getInstance();
          tmp_0 = NaN;
        }

        tmp = tmp_0;
        break;
      case 1:
        var tmp_1;
        if (currentCandle.getClose() > fourCandlesAgo.getClose()) {
          tmp_1 = prevValue + 1.0;
        } else {
          DoubleCompanionObject_getInstance();
          tmp_1 = NaN;
        }

        tmp = tmp_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var currentValue = tmp;
    if (isFinite(currentValue)) {
      return currentValue;
    }
  }
  if (isFinite(this.ly_1.calculateAt(index))) {
    return 1.0;
  }
  DoubleCompanionObject_getInstance();
  return NaN;
};
var TDSupportResistance_Support_instance;
var TDSupportResistance_Resistance_instance;
var TDSupportResistance_entriesInitialized;
function TDSupportResistance_initEntries() {
  if (TDSupportResistance_entriesInitialized)
    return Unit_getInstance();
  TDSupportResistance_entriesInitialized = true;
  TDSupportResistance_Support_instance = new TDSupportResistance('Support', 0);
  TDSupportResistance_Resistance_instance = new TDSupportResistance('Resistance', 1);
}
function TDSupportResistance(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function SupportResistanceFunction(dataItems, setup, tdst, setupBarLength) {
  AbstractCachingFunction.call(this);
  this.py_1 = dataItems;
  this.qy_1 = setup;
  this.ry_1 = tdst;
  this.sy_1 = setupBarLength;
}
protoOf(SupportResistanceFunction).pe = function () {
  return listOf_0(this.qy_1);
};
protoOf(SupportResistanceFunction).wm = function (index) {
  var tmp0_elvis_lhs = this.py_1.getTradeItem(index);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    DoubleCompanionObject_getInstance();
    return NaN;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var currentCandle = tmp;
  if (this.qy_1.calculateAt(index) === this.sy_1) {
    var tmp_0;
    switch (this.ry_1.c2_1) {
      case 0:
        tmp_0 = currentCandle.getHigh();
        break;
      case 1:
        tmp_0 = currentCandle.getLow();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_0;
  }
  var prevValue = this.calculateAt(index - 1 | 0);
  if (isFinite(prevValue)) {
    return prevValue;
  }
  DoubleCompanionObject_getInstance();
  return NaN;
};
function TDSupportResistance_Support_getInstance() {
  TDSupportResistance_initEntries();
  return TDSupportResistance_Support_instance;
}
function TDSupportResistance_Resistance_getInstance() {
  TDSupportResistance_initEntries();
  return TDSupportResistance_Resistance_instance;
}
function sam$kotlin_Comparator$0_1(function_0) {
  this.ty_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_1).ub = function (a, b) {
  return this.ty_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
  return this.ub(a, b);
};
function sam$kotlin_Comparator$0_2(function_0) {
  this.uy_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_2).ub = function (a, b) {
  return this.uy_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
  return this.ub(a, b);
};
function WilliamsFractalUtils$FRACTAL_UP_COMPARATOR$lambda(o1, o2) {
  return compareTo(o1, o2);
}
function WilliamsFractalUtils$FRACTAL_DOWN_COMPARATOR$lambda(o1, o2) {
  return -compareTo(o1, o2) | 0;
}
function WilliamsFractalUtils() {
  WilliamsFractalUtils_instance = this;
  var tmp = this;
  var tmp_0 = WilliamsFractalUtils$FRACTAL_UP_COMPARATOR$lambda;
  tmp.ex_1 = new sam$kotlin_Comparator$0_1(tmp_0);
  var tmp_1 = this;
  var tmp_2 = WilliamsFractalUtils$FRACTAL_DOWN_COMPARATOR$lambda;
  tmp_1.fx_1 = new sam$kotlin_Comparator$0_2(tmp_2);
}
protoOf(WilliamsFractalUtils).vy = function (index, source, comparator) {
  var indexValue = source.calculateAt(index);
  if (isNaN_0(indexValue))
    return -1;
  if (index > 0) {
    var inductionVariable = index;
    if (1 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var previousValue = source.calculateAt(i - 1 | 0);
        if (isNaN_0(previousValue)) {
          return -1;
        }
        var comparison = comparator.compare(previousValue, indexValue);
        if (comparison < 0) {
          return i;
        } else if (comparison > 0) {
          return -1;
        }
      }
       while (1 <= inductionVariable);
  }
  return 0;
};
protoOf(WilliamsFractalUtils).wy = function (index, source, comparator) {
  var indexValue = source.calculateAt(index);
  if (isNaN_0(indexValue))
    return -1;
  var i = index;
  while (true) {
    if ((i + 1 | 0) >= source.lb()) {
      return -1;
    }
    var nextValue = source.calculateAt(i + 1 | 0);
    if (isNaN_0(nextValue)) {
      return -1;
    }
    var comparison = comparator.compare(nextValue, indexValue);
    if (comparison < 0) {
      return i;
    } else if (comparison > 0) {
      return -1;
    }
    i = i + 1 | 0;
  }
};
protoOf(WilliamsFractalUtils).xy = function (index, source, comparator, sequenceCount) {
  var indexValue = source.calculateAt(index);
  if (isNaN_0(indexValue)) {
    return -1;
  }
  var currentTipSegmentEnd = this.wy(index, source, comparator);
  if (currentTipSegmentEnd < 0) {
    return -1;
  }
  var inductionVariable = currentTipSegmentEnd;
  var last = (currentTipSegmentEnd + sequenceCount | 0) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if ((i + 1 | 0) >= source.lb()) {
        return -1;
      }
      var nextValue = source.calculateAt(i + 1 | 0);
      if (isNaN_0(nextValue)) {
        return -1;
      }
      var comparison = comparator.compare(nextValue, indexValue);
      if (comparison === 0) {
        return i + 1 | 0;
      } else if (comparison > 0) {
        return -1;
      }
    }
     while (!(i === last));
  return -1;
};
protoOf(WilliamsFractalUtils).yy = function (index, source, comparator, sequenceCount) {
  var indexValue = source.calculateAt(index);
  if (isNaN_0(indexValue)) {
    return -1;
  }
  var currentTipSegmentStart = this.vy(index, source, comparator);
  if (currentTipSegmentStart < 0) {
    return -1;
  }
  var inductionVariable = currentTipSegmentStart;
  var last = (currentTipSegmentStart - sequenceCount | 0) + 1 | 0;
  if (last <= inductionVariable)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + -1 | 0;
      if (i < 1)
        return -1;
      var previousValue = source.calculateAt(i - 1 | 0);
      if (isNaN_0(previousValue)) {
        return -1;
      }
      var comparison = comparator.compare(previousValue, indexValue);
      if (comparison === 0) {
        return i - 1 | 0;
      } else if (comparison > 0) {
        return -1;
      }
    }
     while (!(i === last));
  return -1;
};
protoOf(WilliamsFractalUtils).zy = function (index, source, comparator, sequenceCount) {
  if (index < sequenceCount) {
    return false;
  }
  var indexValue = source.calculateAt(index);
  if (isNaN_0(indexValue)) {
    return false;
  }
  var inductionVariable = index;
  var last = (index - sequenceCount | 0) + 1 | 0;
  if (last <= inductionVariable)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + -1 | 0;
      var previousValue = source.calculateAt(i - 1 | 0);
      if (isNaN_0(previousValue)) {
        return false;
      }
      var comparison = comparator.compare(previousValue, indexValue);
      if (comparison >= 0) {
        return false;
      }
    }
     while (!(i === last));
  return true;
};
protoOf(WilliamsFractalUtils).az = function (index, source, comparator, sequenceCount) {
  var indexValue = source.calculateAt(index);
  if (isNaN_0(indexValue)) {
    return false;
  }
  var inductionVariable = index;
  var last = (index + sequenceCount | 0) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if ((i + 1 | 0) >= source.lb()) {
        return false;
      }
      var nextValue = source.calculateAt(i + 1 | 0);
      if (isNaN_0(nextValue)) {
        return false;
      }
      var comparison = comparator.compare(nextValue, indexValue);
      if (comparison >= 0) {
        return false;
      }
    }
     while (!(i === last));
  return true;
};
protoOf(WilliamsFractalUtils).gx = function (index, source, comparator, sequenceCount) {
  if (index < 0)
    return false;
  var segmentEndIndex = this.wy(index, source, comparator);
  if (!(segmentEndIndex === index))
    return false;
  var segmentStart = this.vy(index, source, comparator);
  if (segmentStart < 0)
    return false;
  var firstSegmentEndIndex = index;
  var previousSegmentEndIndex = this.yy(firstSegmentEndIndex, source, comparator, sequenceCount);
  while (previousSegmentEndIndex >= 0) {
    firstSegmentEndIndex = previousSegmentEndIndex;
    previousSegmentEndIndex = this.yy(firstSegmentEndIndex, source, comparator, sequenceCount);
  }
  if (!(firstSegmentEndIndex === segmentEndIndex))
    return false;
  var firstSegmentStartIndex = this.vy(firstSegmentEndIndex, source, comparator);
  if (firstSegmentStartIndex < 0 ? true : !this.zy(firstSegmentStartIndex, source, comparator, sequenceCount))
    return false;
  var lastSegmentStartIndex = index;
  var nextSegmentStartIndex = this.xy(lastSegmentStartIndex, source, comparator, sequenceCount);
  while (nextSegmentStartIndex >= 0) {
    lastSegmentStartIndex = nextSegmentStartIndex;
    nextSegmentStartIndex = this.xy(lastSegmentStartIndex, source, comparator, sequenceCount);
  }
  var lastSegmentEndIndex = this.wy(lastSegmentStartIndex, source, comparator);
  return lastSegmentEndIndex >= 0 ? this.az(lastSegmentEndIndex, source, comparator, sequenceCount) : false;
};
var WilliamsFractalUtils_instance;
function WilliamsFractalUtils_getInstance() {
  if (WilliamsFractalUtils_instance == null)
    new WilliamsFractalUtils();
  return WilliamsFractalUtils_instance;
}
function findCeilIndex(arr, time) {
  return findClosestOrEqualIndex(arr, time, SearchType_CEIL_getInstance());
}
function findFloorIndex(arr, time) {
  return findClosestOrEqualIndex(arr, time, SearchType_FLOOR_getInstance());
}
var SearchType_CEIL_instance;
var SearchType_FLOOR_instance;
var SearchType_entriesInitialized;
function SearchType_initEntries() {
  if (SearchType_entriesInitialized)
    return Unit_getInstance();
  SearchType_entriesInitialized = true;
  SearchType_CEIL_instance = new SearchType('CEIL', 0);
  SearchType_FLOOR_instance = new SearchType('FLOOR', 1);
}
function SearchType(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function findClosestOrEqualIndex(arr, time, searchType) {
  var n = arr.f();
  if (time <= arr.g(0).getTime()) {
    return 0;
  }
  if (time >= arr.g(n - 1 | 0).getTime()) {
    return n - 1 | 0;
  }
  var i = 0;
  var j = n;
  var mid = 0;
  while (i < j) {
    mid = i + ((j - i | 0) / 2 | 0) | 0;
    if (arr.g(mid).getTime() === time) {
      return mid;
    }
    if (time < arr.g(mid).getTime()) {
      if (mid > 0 ? time > arr.g(mid - 1 | 0).getTime() : false) {
        var tmp;
        switch (searchType.c2_1) {
          case 0:
            tmp = mid;
            break;
          case 1:
            tmp = mid - 1 | 0;
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        return tmp;
      }
      j = mid;
    } else {
      if (mid < (n - 1 | 0) ? time < arr.g(mid + 1 | 0).getTime() : false) {
        var tmp_0;
        switch (searchType.c2_1) {
          case 0:
            tmp_0 = mid + 1 | 0;
            break;
          case 1:
            tmp_0 = mid;
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        return tmp_0;
      }
      i = mid + 1 | 0;
    }
  }
  return mid;
}
function SearchType_CEIL_getInstance() {
  SearchType_initEntries();
  return SearchType_CEIL_instance;
}
function SearchType_FLOOR_getInstance() {
  SearchType_initEntries();
  return SearchType_FLOOR_instance;
}
//region block: post-declaration
defineProp(protoOf(CandleImpl), 'open', function () {
  return this.ec();
}, VOID);
defineProp(protoOf(CandleImpl), 'high', function () {
  return this.fc();
}, VOID);
defineProp(protoOf(CandleImpl), 'low', function () {
  return this.gc();
}, VOID);
defineProp(protoOf(CandleImpl), 'close', function () {
  return this.hc();
}, VOID);
defineProp(protoOf(CandleImpl), 'impVolatility', function () {
  return this.ic();
}, VOID);
defineProp(protoOf(CandleImpl), 'volume', function () {
  return this.jc();
}, VOID);
defineProp(protoOf(CandleImpl), 'vwap', function () {
  return this.kc();
}, VOID);
defineProp(protoOf(CandleImpl), 'time', function () {
  return this.la();
}, function (value) {
  this.lc(value);
});
defineProp(protoOf(CandleImpl), 'isVisible', function () {
  return this.mc();
}, VOID);
defineProp(protoOf(Study), 'linesNumber', protoOf(Study).lf, VOID);
defineProp(protoOf(AbstractCachingFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(AbstractCachingFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(AbstractCachingFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(AbsFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(AbsFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(AbsFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(ArithmeticFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(ArithmeticFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(ArithmeticFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(BuyingPressure), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(BuyingPressure), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(BuyingPressure), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(CloseLocationValueFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(CloseLocationValueFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(CloseLocationValueFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(CombineFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(CombineFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(CombineFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(ConstantFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(ConstantFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(ConstantFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(CumulativeSumFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(CumulativeSumFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(CumulativeSumFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(CumulativeSumWithinSessionFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(CumulativeSumWithinSessionFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(CumulativeSumWithinSessionFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(DiffDivPrevFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(DiffDivPrevFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(DiffDivPrevFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(DiffPrevFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(DiffPrevFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(DiffPrevFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(DirectionalIndexFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(DirectionalIndexFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(DirectionalIndexFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(DirectionalMovementFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(DirectionalMovementFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(DirectionalMovementFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(DisplacementFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(DisplacementFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(DisplacementFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(DorseyTrendFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(DorseyTrendFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(DorseyTrendFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(ETHPriceSourceFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(ETHPriceSourceFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(ETHPriceSourceFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(Equals), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(Equals), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(Equals), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(Floor), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(Floor), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(Floor), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(BackRangeDependentFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(BackRangeDependentFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(BackRangeDependentFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(HighestFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(HighestFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(HighestFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(HighestHighPeriod), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(HighestHighPeriod), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(HighestHighPeriod), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(IfFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(IfFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(IfFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(IntradaySumFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(IntradaySumFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(IntradaySumFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(LimitFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(LimitFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(LimitFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(LinearDeviationFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(LinearDeviationFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(LinearDeviationFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(LinearRegressionCurveFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(LinearRegressionCurveFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(LinearRegressionCurveFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(LnDivPrevFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(LnDivPrevFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(LnDivPrevFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(LogarithmFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(LogarithmFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(LogarithmFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(LowestFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(LowestFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(LowestFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(LowestLowPeriod), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(LowestLowPeriod), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(LowestLowPeriod), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(MapFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(MapFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(MapFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(MapToOneFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(MapToOneFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(MapToOneFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(MaxValueFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(MaxValueFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(MaxValueFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(MinValueFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(MinValueFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(MinValueFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(MoneyFlowFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(MoneyFlowFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(MoneyFlowFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(MovingAverageExponential), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(MovingAverageExponential), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(MovingAverageExponential), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(MovingAverageSimple), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(MovingAverageSimple), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(MovingAverageSimple), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(MovingAverageSmoothed), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(MovingAverageSmoothed), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(MovingAverageSmoothed), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(MovingAverageWeighted), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(MovingAverageWeighted), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(MovingAverageWeighted), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(NegativeVolumeIndexFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(NegativeVolumeIndexFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(NegativeVolumeIndexFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(PredicateFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(PredicateFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(PredicateFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(PrevAggregationFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(PrevAggregationFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(PrevAggregationFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(PriceAggregatedSourceFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(PriceAggregatedSourceFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(PriceAggregatedSourceFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(PriceSourceFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(PriceSourceFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(PriceSourceFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(RelativeVolatilityFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(RelativeVolatilityFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(RelativeVolatilityFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(SeriesCrossingPoints), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(SeriesCrossingPoints), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(SeriesCrossingPoints), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(SignFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(SignFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(SignFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(SimpleWeightedSumFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(SimpleWeightedSumFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(SimpleWeightedSumFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(StandardDeviationFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(StandardDeviationFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(StandardDeviationFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(StandardErrorOfEstimationFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(StandardErrorOfEstimationFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(StandardErrorOfEstimationFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(SumFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(SumFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(SumFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(TrueRangeFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(TrueRangeFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(TrueRangeFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(WildersAverage), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(WildersAverage), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(WildersAverage), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(WindowFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(WindowFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(WindowFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(ZeroFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(ZeroFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(ZeroFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(DynamicMomentumIndexFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(DynamicMomentumIndexFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(DynamicMomentumIndexFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(KaufmanNamaFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(KaufmanNamaFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(KaufmanNamaFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(LinearRegressionFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(LinearRegressionFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(LinearRegressionFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(ParabolicSarFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(ParabolicSarFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(ParabolicSarFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(SchaffTrendFrac), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(SchaffTrendFrac), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(SchaffTrendFrac), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(SpearmansRho), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(SpearmansRho), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(SpearmansRho), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(SwingIndexRatio), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(SwingIndexRatio), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(SwingIndexRatio), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(WilliamsADFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(WilliamsADFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(WilliamsADFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(WilliamsFractalFilter), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(WilliamsFractalFilter), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(WilliamsFractalFilter), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(ZigZagFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(ZigZagFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(ZigZagFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(CountdownFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(CountdownFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(CountdownFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(PerfectCountdownFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(PerfectCountdownFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(PerfectCountdownFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(PerfectSetupFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(PerfectSetupFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(PerfectSetupFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(PriceFlipFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(PriceFlipFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(PriceFlipFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(SetupFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(SetupFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(SetupFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
defineProp(protoOf(SupportResistanceFunction), 'childFunctions', function () {
  return this.pe();
}, VOID);
defineProp(protoOf(SupportResistanceFunction), 'ownPastOffset', function () {
  return this.qe();
}, VOID);
defineProp(protoOf(SupportResistanceFunction), 'prefetchSize', function () {
  return this.re();
}, VOID);
//endregion
//region block: init
nfastend = 0.666;
nslowend = 0.0645;
//endregion
//region block: exports
defineProp(Study, 'Companion', Companion_getInstance_7, VOID);
defineProp(StudyParam, 'Companion', Companion_getInstance_9, VOID);
export {
  DxStudies,
  Study,
  StudyParam,
};
//endregion
