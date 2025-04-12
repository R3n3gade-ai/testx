import * as $module$_js_joda_core_gcv2k from '@js-joda/core';
import {
  k2 as protoOf,
  j2 as objectMeta,
  j3 as VOID,
  l2 as setMetadataFor,
  i2 as objectCreate,
  c3 as Long,
  u1 as classMeta,
  m2 as toLong,
  g as StringBuilder_init_$Create$,
  q as _Char___init__impl__6a9atx,
  p2 as abs,
  w2 as padStart,
  s as IntCompanionObject_getInstance,
  e2 as numberRangeToNumber,
  e3 as THROW_CCE,
  s2 as ClosedRange,
  c2 as isInterface,
  t2 as contains,
  l as IllegalArgumentException_init_$Create$,
  n2 as toString,
  w as asList,
  j as IllegalArgumentException_init_$Init$,
  t1 as captureStack,
  b3 as IllegalArgumentException,
  o as RuntimeException_init_$Init$,
  p as RuntimeException_init_$Init$_0,
  d3 as RuntimeException,
  u as Unit_getInstance,
  a3 as Enum,
  g2 as numberToInt,
  x2 as ArithmeticException,
  h2 as numberToLong,
  x1 as equals,
  y2 as Comparable,
  k as IllegalArgumentException_init_$Create$_0,
  i3 as noWhenBranchMatchedException,
  f2 as numberToDouble,
  h as ArithmeticException_init_$Create$,
  t as Companion_getInstance,
} from './kotlin-kotlin-stdlib-js-ir.mjs';
//region block: imports
var imul = Math.imul;
var Instant = $module$_js_joda_core_gcv2k.Instant;
var Clock = $module$_js_joda_core_gcv2k.Clock;
var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
//endregion
//region block: pre-declaration
setMetadataFor(System, 'System', objectMeta);
setMetadataFor(Companion, 'Companion', objectMeta);
setMetadataFor(DateTimePeriod, 'DateTimePeriod', classMeta);
setMetadataFor(DatePeriod, 'DatePeriod', classMeta, DateTimePeriod);
setMetadataFor(Companion_0, 'Companion', objectMeta);
setMetadataFor(Companion_1, 'Companion', objectMeta);
setMetadataFor(Companion_2, 'Companion', objectMeta);
setMetadataFor(Companion_3, 'Companion', objectMeta);
setMetadataFor(Companion_4, 'Companion', objectMeta);
setMetadataFor(DateTimeUnit, 'DateTimeUnit', classMeta);
setMetadataFor(TimeBased, 'TimeBased', classMeta, DateTimeUnit);
setMetadataFor(DateBased, 'DateBased', classMeta, DateTimeUnit);
setMetadataFor(DayBased, 'DayBased', classMeta, DateBased);
setMetadataFor(MonthBased, 'MonthBased', classMeta, DateBased);
setMetadataFor(Companion_5, 'Companion', objectMeta);
setMetadataFor(IllegalTimeZoneException, 'IllegalTimeZoneException', classMeta, IllegalArgumentException);
setMetadataFor(DateTimeArithmeticException, 'DateTimeArithmeticException', classMeta, RuntimeException);
setMetadataFor(DayOfWeek_0, 'DayOfWeek', classMeta, Enum);
setMetadataFor(Companion_6, 'Companion', objectMeta);
setMetadataFor(Instant_0, 'Instant', classMeta, VOID, [Comparable]);
setMetadataFor(Companion_7, 'Companion', objectMeta);
setMetadataFor(LocalDate_0, 'LocalDate', classMeta, VOID, [Comparable]);
setMetadataFor(Companion_8, 'Companion', objectMeta);
setMetadataFor(LocalDateTime_0, 'LocalDateTime', classMeta, VOID, [Comparable]);
setMetadataFor(Companion_9, 'Companion', objectMeta);
setMetadataFor(LocalTime_0, 'LocalTime', classMeta, VOID, [Comparable]);
setMetadataFor(Month_0, 'Month', classMeta, Enum);
setMetadataFor(Companion_10, 'Companion', objectMeta);
setMetadataFor(TimeZone, 'TimeZone', classMeta);
setMetadataFor(Companion_11, 'Companion', objectMeta);
setMetadataFor(FixedOffsetTimeZone, 'FixedOffsetTimeZone', classMeta, TimeZone);
setMetadataFor(Companion_12, 'Companion', objectMeta);
setMetadataFor(UtcOffset, 'UtcOffset', classMeta);
//endregion
function System() {
  System_instance = this;
}
protoOf(System).i8 = function () {
  return Companion_getInstance_7().i8();
};
var System_instance;
function System_getInstance() {
  if (System_instance == null)
    new System();
  return System_instance;
}
function DatePeriod_init_$Init$(years, months, days, $this) {
  years = years === VOID ? 0 : years;
  months = months === VOID ? 0 : months;
  days = days === VOID ? 0 : days;
  DatePeriod.call($this, totalMonths(years, months), days);
  return $this;
}
function DatePeriod_init_$Create$(years, months, days) {
  return DatePeriod_init_$Init$(years, months, days, objectCreate(protoOf(DatePeriod)));
}
function Companion() {
  Companion_instance = this;
}
var Companion_instance;
function Companion_getInstance_0() {
  if (Companion_instance == null)
    new Companion();
  return Companion_instance;
}
function DatePeriod(totalMonths, days) {
  Companion_getInstance_0();
  DateTimePeriod.call(this);
  this.n8_1 = totalMonths;
  this.o8_1 = days;
}
protoOf(DatePeriod).p8 = function () {
  return this.n8_1;
};
protoOf(DatePeriod).q8 = function () {
  return this.o8_1;
};
protoOf(DatePeriod).r8 = function () {
  return 0;
};
protoOf(DatePeriod).s8 = function () {
  return 0;
};
protoOf(DatePeriod).t8 = function () {
  return 0;
};
protoOf(DatePeriod).u8 = function () {
  return 0;
};
protoOf(DatePeriod).v8 = function () {
  return new Long(0, 0);
};
function allNonpositive($this) {
  return (($this.p8() <= 0 ? $this.q8() <= 0 : false) ? $this.v8().p(new Long(0, 0)) <= 0 : false) ? !(($this.p8() | $this.q8()) === 0) ? true : !$this.v8().equals(new Long(0, 0)) : false;
}
function Companion_0() {
  Companion_instance_0 = this;
}
var Companion_instance_0;
function Companion_getInstance_1() {
  if (Companion_instance_0 == null)
    new Companion_0();
  return Companion_instance_0;
}
function DateTimePeriod() {
  Companion_getInstance_1();
}
protoOf(DateTimePeriod).w8 = function () {
  return this.p8() / 12 | 0;
};
protoOf(DateTimePeriod).x8 = function () {
  return this.p8() % 12 | 0;
};
protoOf(DateTimePeriod).r8 = function () {
  return this.v8().x7(new Long(817405952, 838)).o();
};
protoOf(DateTimePeriod).s8 = function () {
  return this.v8().y7(new Long(817405952, 838)).x7(new Long(-129542144, 13)).o();
};
protoOf(DateTimePeriod).t8 = function () {
  // Inline function 'kotlin.Long.div' call
  var tmp0_div = this.v8().y7(new Long(-129542144, 13));
  var tmp1_div = get_NANOS_PER_ONE();
  return tmp0_div.x7(toLong(tmp1_div)).o();
};
protoOf(DateTimePeriod).u8 = function () {
  // Inline function 'kotlin.Long.rem' call
  var tmp0_rem = this.v8();
  var tmp1_rem = get_NANOS_PER_ONE();
  return tmp0_rem.y7(toLong(tmp1_rem)).o();
};
protoOf(DateTimePeriod).toString = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.apply' call
  var tmp0_apply = StringBuilder_init_$Create$();
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>' call
  var tmp;
  if (allNonpositive(this)) {
    tmp0_apply.t2(_Char___init__impl__6a9atx(45));
    tmp = -1;
  } else {
    tmp = 1;
  }
  var sign = tmp;
  tmp0_apply.t2(_Char___init__impl__6a9atx(80));
  if (!(this.w8() === 0)) {
    tmp0_apply.z6(imul(this.w8(), sign)).t2(_Char___init__impl__6a9atx(89));
  }
  if (!(this.x8() === 0)) {
    tmp0_apply.z6(imul(this.x8(), sign)).t2(_Char___init__impl__6a9atx(77));
  }
  if (!(this.q8() === 0)) {
    tmp0_apply.z6(imul(this.q8(), sign)).t2(_Char___init__impl__6a9atx(68));
  }
  var t = 'T';
  if (!(this.r8() === 0)) {
    // Inline function 'kotlin.also' call
    tmp0_apply.a7(t).z6(imul(this.r8(), sign)).t2(_Char___init__impl__6a9atx(72));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>.<anonymous>' call
    t = '';
  }
  if (!(this.s8() === 0)) {
    // Inline function 'kotlin.also' call
    tmp0_apply.a7(t).z6(imul(this.s8(), sign)).t2(_Char___init__impl__6a9atx(77));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>.<anonymous>' call
    t = '';
  }
  if (!((this.t8() | this.u8()) === 0)) {
    tmp0_apply.a7(t);
    tmp0_apply.z6(!(this.t8() === 0) ? imul(this.t8(), sign) : imul(this.u8(), sign) < 0 ? '-0' : '0');
    if (!(this.u8() === 0)) {
      var tmp_0 = tmp0_apply.t2(_Char___init__impl__6a9atx(46));
      var tmp$ret$2;
      // Inline function 'kotlin.math.absoluteValue' call
      var tmp2_get_absoluteValue_wf3xdr = this.u8();
      tmp$ret$2 = abs(tmp2_get_absoluteValue_wf3xdr);
      tmp_0.a7(padStart(tmp$ret$2.toString(), 9, _Char___init__impl__6a9atx(48)));
    }
    tmp0_apply.t2(_Char___init__impl__6a9atx(83));
  }
  if (tmp0_apply.v2() === 1) {
    tmp0_apply.a7('0D');
  }
  return tmp0_apply.toString();
};
protoOf(DateTimePeriod).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof DateTimePeriod))
    return false;
  if (!(this.p8() === other.p8()))
    return false;
  if (!(this.q8() === other.q8()))
    return false;
  if (!this.v8().equals(other.v8()))
    return false;
  return true;
};
protoOf(DateTimePeriod).hashCode = function () {
  var result = this.p8();
  result = imul(31, result) + this.q8() | 0;
  result = imul(31, result) + this.v8().hashCode() | 0;
  return result;
};
function totalMonths(years, months) {
  // Inline function 'kotlin.Long.times' call
  var totalMonths = toLong(years).w7(new Long(12, 0)).u7(toLong(months));
  var tmp;
  // Inline function 'kotlin.ranges.contains' call
  var tmp1_contains = numberRangeToNumber(IntCompanionObject_getInstance().MIN_VALUE, IntCompanionObject_getInstance().MAX_VALUE);
  if (contains(isInterface(tmp1_contains, ClosedRange) ? tmp1_contains : THROW_CCE(), totalMonths)) {
    tmp = totalMonths.o();
  } else {
    throw IllegalArgumentException_init_$Create$('The total number of months in ' + years + ' years and ' + months + ' months overflows an Int');
  }
  return tmp;
}
function Companion_1() {
  Companion_instance_1 = this;
}
var Companion_instance_1;
function Companion_getInstance_2() {
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function Companion_2() {
  Companion_instance_2 = this;
}
var Companion_instance_2;
function Companion_getInstance_3() {
  if (Companion_instance_2 == null)
    new Companion_2();
  return Companion_instance_2;
}
function Companion_3() {
  Companion_instance_3 = this;
}
var Companion_instance_3;
function Companion_getInstance_4() {
  if (Companion_instance_3 == null)
    new Companion_3();
  return Companion_instance_3;
}
function Companion_4() {
  Companion_instance_4 = this;
}
var Companion_instance_4;
function Companion_getInstance_5() {
  if (Companion_instance_4 == null)
    new Companion_4();
  return Companion_instance_4;
}
function TimeBased(nanoseconds) {
  Companion_getInstance_2();
  DateTimeUnit.call(this);
  this.y8_1 = nanoseconds;
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(this.y8_1.p(new Long(0, 0)) > 0)) {
    // Inline function 'kotlinx.datetime.TimeBased.<anonymous>' call
    var message = 'Unit duration must be positive, but was ' + toString(this.y8_1) + ' ns.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.y8_1.y7(new Long(817405952, 838)).equals(new Long(0, 0))) {
    this.z8_1 = 'HOUR';
    this.a9_1 = this.y8_1.x7(new Long(817405952, 838));
  } else {
    if (this.y8_1.y7(new Long(-129542144, 13)).equals(new Long(0, 0))) {
      this.z8_1 = 'MINUTE';
      this.a9_1 = this.y8_1.x7(new Long(-129542144, 13));
    } else {
      // Inline function 'kotlin.Long.rem' call
      if (this.y8_1.y7(new Long(1000000000, 0)).equals(new Long(0, 0))) {
        this.z8_1 = 'SECOND';
        var tmp = this;
        // Inline function 'kotlin.Long.div' call
        tmp.a9_1 = this.y8_1.x7(new Long(1000000000, 0));
      } else {
        // Inline function 'kotlin.Long.rem' call
        if (this.y8_1.y7(new Long(1000000, 0)).equals(new Long(0, 0))) {
          this.z8_1 = 'MILLISECOND';
          var tmp_0 = this;
          // Inline function 'kotlin.Long.div' call
          tmp_0.a9_1 = this.y8_1.x7(new Long(1000000, 0));
        } else {
          // Inline function 'kotlin.Long.rem' call
          if (this.y8_1.y7(new Long(1000, 0)).equals(new Long(0, 0))) {
            this.z8_1 = 'MICROSECOND';
            var tmp_1 = this;
            // Inline function 'kotlin.Long.div' call
            tmp_1.a9_1 = this.y8_1.x7(new Long(1000, 0));
          } else {
            this.z8_1 = 'NANOSECOND';
            this.a9_1 = this.y8_1;
          }
        }
      }
    }
  }
}
protoOf(TimeBased).b9 = function (scalar) {
  return new TimeBased(safeMultiply(this.y8_1, toLong(scalar)));
};
protoOf(TimeBased).equals = function (other) {
  var tmp;
  if (this === other) {
    tmp = true;
  } else {
    var tmp_0;
    if (other instanceof TimeBased) {
      tmp_0 = this.y8_1.equals(other.y8_1);
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(TimeBased).hashCode = function () {
  var tmp = this.y8_1.o();
  IntCompanionObject_getInstance();
  return tmp ^ this.y8_1.c8(32).o();
};
protoOf(TimeBased).toString = function () {
  return this.c9(this.a9_1, this.z8_1);
};
function DateBased() {
  Companion_getInstance_3();
  DateTimeUnit.call(this);
}
function DayBased(days) {
  Companion_getInstance_4();
  DateBased.call(this);
  this.d9_1 = days;
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(this.d9_1 > 0)) {
    // Inline function 'kotlinx.datetime.DayBased.<anonymous>' call
    var message = 'Unit duration must be positive, but was ' + this.d9_1 + ' days.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
}
protoOf(DayBased).b9 = function (scalar) {
  return new DayBased(safeMultiply_0(this.d9_1, scalar));
};
protoOf(DayBased).equals = function (other) {
  var tmp;
  if (this === other) {
    tmp = true;
  } else {
    var tmp_0;
    if (other instanceof DayBased) {
      tmp_0 = this.d9_1 === other.d9_1;
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(DayBased).hashCode = function () {
  return this.d9_1 ^ 65536;
};
protoOf(DayBased).toString = function () {
  return (this.d9_1 % 7 | 0) === 0 ? this.e9(this.d9_1 / 7 | 0, 'WEEK') : this.e9(this.d9_1, 'DAY');
};
function MonthBased(months) {
  Companion_getInstance_5();
  DateBased.call(this);
  this.f9_1 = months;
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(this.f9_1 > 0)) {
    // Inline function 'kotlinx.datetime.MonthBased.<anonymous>' call
    var message = 'Unit duration must be positive, but was ' + this.f9_1 + ' months.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
}
protoOf(MonthBased).b9 = function (scalar) {
  return new MonthBased(safeMultiply_0(this.f9_1, scalar));
};
protoOf(MonthBased).equals = function (other) {
  var tmp;
  if (this === other) {
    tmp = true;
  } else {
    var tmp_0;
    if (other instanceof MonthBased) {
      tmp_0 = this.f9_1 === other.f9_1;
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(MonthBased).hashCode = function () {
  return this.f9_1 ^ 131072;
};
protoOf(MonthBased).toString = function () {
  return (this.f9_1 % 1200 | 0) === 0 ? this.e9(this.f9_1 / 1200 | 0, 'CENTURY') : (this.f9_1 % 12 | 0) === 0 ? this.e9(this.f9_1 / 12 | 0, 'YEAR') : (this.f9_1 % 3 | 0) === 0 ? this.e9(this.f9_1 / 3 | 0, 'QUARTER') : this.e9(this.f9_1, 'MONTH');
};
function Companion_5() {
  Companion_instance_5 = this;
  this.g9_1 = new TimeBased(new Long(1, 0));
  this.h9_1 = this.g9_1.b9(1000);
  this.i9_1 = this.h9_1.b9(1000);
  this.j9_1 = this.i9_1.b9(1000);
  this.k9_1 = this.j9_1.b9(60);
  this.l9_1 = this.k9_1.b9(60);
  this.m9_1 = new DayBased(1);
  this.n9_1 = this.m9_1.b9(7);
  this.o9_1 = new MonthBased(1);
  this.p9_1 = this.o9_1.b9(3);
  this.q9_1 = this.o9_1.b9(12);
  this.r9_1 = this.q9_1.b9(100);
}
var Companion_instance_5;
function Companion_getInstance_6() {
  if (Companion_instance_5 == null)
    new Companion_5();
  return Companion_instance_5;
}
function DateTimeUnit() {
  Companion_getInstance_6();
}
protoOf(DateTimeUnit).e9 = function (value, unit) {
  return value === 1 ? unit : '' + value + '-' + unit;
};
protoOf(DateTimeUnit).c9 = function (value, unit) {
  return value.equals(new Long(1, 0)) ? unit : toString(value) + '-' + unit;
};
function get_allDaysOfWeek() {
  _init_properties_DayOfWeek_kt__jlq111();
  return allDaysOfWeek;
}
var allDaysOfWeek;
function DayOfWeek(isoDayNumber) {
  _init_properties_DayOfWeek_kt__jlq111();
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(1 <= isoDayNumber ? isoDayNumber <= 7 : false)) {
    // Inline function 'kotlin.require.<anonymous>' call
    var message = 'Failed requirement.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return get_allDaysOfWeek().g(isoDayNumber - 1 | 0);
}
var properties_initialized_DayOfWeek_kt_chtv49;
function _init_properties_DayOfWeek_kt__jlq111() {
  if (!properties_initialized_DayOfWeek_kt_chtv49) {
    properties_initialized_DayOfWeek_kt_chtv49 = true;
    allDaysOfWeek = asList(values());
  }
}
function IllegalTimeZoneException_init_$Init$(cause, $this) {
  IllegalArgumentException_init_$Init$(cause, $this);
  IllegalTimeZoneException.call($this);
  return $this;
}
function IllegalTimeZoneException_init_$Create$(cause) {
  var tmp = IllegalTimeZoneException_init_$Init$(cause, objectCreate(protoOf(IllegalTimeZoneException)));
  captureStack(tmp, IllegalTimeZoneException_init_$Create$);
  return tmp;
}
function IllegalTimeZoneException() {
  captureStack(this, IllegalTimeZoneException);
}
function DateTimeArithmeticException_init_$Init$(cause, $this) {
  RuntimeException_init_$Init$(cause, $this);
  DateTimeArithmeticException.call($this);
  return $this;
}
function DateTimeArithmeticException_init_$Create$(cause) {
  var tmp = DateTimeArithmeticException_init_$Init$(cause, objectCreate(protoOf(DateTimeArithmeticException)));
  captureStack(tmp, DateTimeArithmeticException_init_$Create$);
  return tmp;
}
function DateTimeArithmeticException_init_$Init$_0(message, cause, $this) {
  RuntimeException_init_$Init$_0(message, cause, $this);
  DateTimeArithmeticException.call($this);
  return $this;
}
function DateTimeArithmeticException_init_$Create$_0(message, cause) {
  var tmp = DateTimeArithmeticException_init_$Init$_0(message, cause, objectCreate(protoOf(DateTimeArithmeticException)));
  captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
  return tmp;
}
function DateTimeArithmeticException() {
  captureStack(this, DateTimeArithmeticException);
}
function get_DISTANT_PAST_SECONDS() {
  return DISTANT_PAST_SECONDS;
}
var DISTANT_PAST_SECONDS;
function get_DISTANT_FUTURE_SECONDS() {
  return DISTANT_FUTURE_SECONDS;
}
var DISTANT_FUTURE_SECONDS;
function minus(_this__u8e3s4, period) {
  var tmp;
  if (!(period.o8_1 === IntCompanionObject_getInstance().MIN_VALUE) ? !(period.x8() === IntCompanionObject_getInstance().MIN_VALUE) : false) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.minus.<anonymous>' call
    tmp$ret$1 = DatePeriod_init_$Create$(-period.w8() | 0, -period.x8() | 0, -period.o8_1 | 0);
    tmp = plus(_this__u8e3s4, tmp$ret$1);
  } else {
    tmp = minus_0(minus_0(minus_0(_this__u8e3s4, period.w8(), Companion_getInstance_6().q9_1), period.x8(), Companion_getInstance_6().o9_1), period.o8_1, Companion_getInstance_6().m9_1);
  }
  return tmp;
}
function get_allMonths() {
  _init_properties_Month_kt__aau5fy();
  return allMonths;
}
var allMonths;
function get_number(_this__u8e3s4) {
  _init_properties_Month_kt__aau5fy();
  return _this__u8e3s4.c2_1 + 1 | 0;
}
function Month(number) {
  _init_properties_Month_kt__aau5fy();
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.contracts.contract' call
  if (!(1 <= number ? number <= 12 : false)) {
    // Inline function 'kotlin.require.<anonymous>' call
    var message = 'Failed requirement.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return get_allMonths().g(number - 1 | 0);
}
var properties_initialized_Month_kt_gieo9c;
function _init_properties_Month_kt__aau5fy() {
  if (!properties_initialized_Month_kt_gieo9c) {
    properties_initialized_Month_kt_gieo9c = true;
    allMonths = asList(values_0());
  }
}
function asTimeZone(_this__u8e3s4) {
  return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
}
function get_NANOS_PER_MILLI() {
  return NANOS_PER_MILLI;
}
var NANOS_PER_MILLI;
function get_MILLIS_PER_ONE() {
  return MILLIS_PER_ONE;
}
var MILLIS_PER_ONE;
function get_NANOS_PER_ONE() {
  return NANOS_PER_ONE;
}
var NANOS_PER_ONE;
var DayOfWeek_MONDAY_instance;
var DayOfWeek_TUESDAY_instance;
var DayOfWeek_WEDNESDAY_instance;
var DayOfWeek_THURSDAY_instance;
var DayOfWeek_FRIDAY_instance;
var DayOfWeek_SATURDAY_instance;
var DayOfWeek_SUNDAY_instance;
function values() {
  return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
}
var DayOfWeek_entriesInitialized;
function DayOfWeek_initEntries() {
  if (DayOfWeek_entriesInitialized)
    return Unit_getInstance();
  DayOfWeek_entriesInitialized = true;
  DayOfWeek_MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
  DayOfWeek_TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
  DayOfWeek_WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
  DayOfWeek_THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
  DayOfWeek_FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
  DayOfWeek_SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
  DayOfWeek_SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
}
function DayOfWeek_0(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function toDayOfWeek(_this__u8e3s4) {
  return DayOfWeek(numberToInt(_this__u8e3s4.value()));
}
function DayOfWeek_MONDAY_getInstance() {
  DayOfWeek_initEntries();
  return DayOfWeek_MONDAY_instance;
}
function DayOfWeek_TUESDAY_getInstance() {
  DayOfWeek_initEntries();
  return DayOfWeek_TUESDAY_instance;
}
function DayOfWeek_WEDNESDAY_getInstance() {
  DayOfWeek_initEntries();
  return DayOfWeek_WEDNESDAY_instance;
}
function DayOfWeek_THURSDAY_getInstance() {
  DayOfWeek_initEntries();
  return DayOfWeek_THURSDAY_instance;
}
function DayOfWeek_FRIDAY_getInstance() {
  DayOfWeek_initEntries();
  return DayOfWeek_FRIDAY_instance;
}
function DayOfWeek_SATURDAY_getInstance() {
  DayOfWeek_initEntries();
  return DayOfWeek_SATURDAY_instance;
}
function DayOfWeek_SUNDAY_getInstance() {
  DayOfWeek_initEntries();
  return DayOfWeek_SUNDAY_instance;
}
function Companion_6() {
  Companion_instance_6 = this;
  this.j8_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS(), 999999999));
  this.k8_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS(), 0));
  this.l8_1 = new Instant_0(Instant.MIN);
  this.m8_1 = new Instant_0(Instant.MAX);
}
protoOf(Companion_6).i8 = function () {
  return new Instant_0(Clock.systemUTC().instant());
};
protoOf(Companion_6).s9 = function (epochMilliseconds) {
  var tmp;
  try {
    // Inline function 'kotlin.Long.div' call
    var tmp0_div = get_MILLIS_PER_ONE();
    var tmp_0 = epochMilliseconds.x7(toLong(tmp0_div));
    var tmp$ret$2;
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.rem' call
    var tmp1_rem = get_MILLIS_PER_ONE();
    var tmp2_times = epochMilliseconds.y7(toLong(tmp1_rem));
    var tmp3_times = get_NANOS_PER_MILLI();
    tmp$ret$2 = tmp2_times.w7(toLong(tmp3_times));
    tmp = this.t9(tmp_0, tmp$ret$2);
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var e = $p;
      if (!isJodaDateTimeException(e))
        throw e;
      tmp_1 = epochMilliseconds.p(new Long(0, 0)) > 0 ? this.m8_1 : this.l8_1;
    } else {
      throw $p;
    }
    tmp = tmp_1;
  }
  return tmp;
};
protoOf(Companion_6).t9 = function (epochSeconds, nanosecondAdjustment) {
  var tmp;
  try {
    var tmp$ret$0;
    // Inline function 'kotlin.floorDiv' call
    var tmp0_floorDiv = toLong(get_NANOS_PER_ONE());
    var q = nanosecondAdjustment.x7(tmp0_floorDiv);
    if (nanosecondAdjustment.f8(tmp0_floorDiv).p(new Long(0, 0)) < 0 ? !q.w7(tmp0_floorDiv).equals(nanosecondAdjustment) : false) {
      q = q.z7();
    }
    tmp$ret$0 = q;
    var secs = safeAdd(epochSeconds, tmp$ret$0);
    // Inline function 'kotlin.mod' call
    var tmp1_mod = toLong(get_NANOS_PER_ONE());
    var r = nanosecondAdjustment.y7(tmp1_mod);
    var nos = r.u7(tmp1_mod.d8(r.f8(tmp1_mod).d8(r.e8(r.a8())).c8(63))).o();
    tmp = new Instant_0(Instant.ofEpochSecond(secs, nos));
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      var tmp_1;
      if (!isJodaDateTimeException(e)) {
        tmp_1 = !(e instanceof ArithmeticException);
      } else {
        tmp_1 = false;
      }
      if (tmp_1)
        throw e;
      tmp_0 = epochSeconds.p(new Long(0, 0)) > 0 ? this.m8_1 : this.l8_1;
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
};
var Companion_instance_6;
function Companion_getInstance_7() {
  if (Companion_instance_6 == null)
    new Companion_6();
  return Companion_instance_6;
}
function Instant_0(value) {
  Companion_getInstance_7();
  this.u9_1 = value;
}
protoOf(Instant_0).v9 = function () {
  return numberToLong(this.u9_1.epochSecond());
};
protoOf(Instant_0).w9 = function () {
  return numberToInt(this.u9_1.nano());
};
protoOf(Instant_0).x9 = function () {
  // Inline function 'kotlin.Long.plus' call
  // Inline function 'kotlin.Long.times' call
  var tmp0_times = this.v9();
  var tmp1_times = get_MILLIS_PER_ONE();
  var tmp2_plus = tmp0_times.w7(toLong(tmp1_times));
  var tmp3_plus = this.w9() / get_NANOS_PER_MILLI() | 0;
  return tmp2_plus.u7(toLong(tmp3_plus));
};
protoOf(Instant_0).y9 = function (other) {
  return numberToInt(this.u9_1.compareTo(other.u9_1));
};
protoOf(Instant_0).y2 = function (other) {
  return this.y9(other instanceof Instant_0 ? other : THROW_CCE());
};
protoOf(Instant_0).equals = function (other) {
  var tmp;
  if (this === other) {
    tmp = true;
  } else {
    var tmp_0;
    if (other instanceof Instant_0) {
      tmp_0 = equals(this.u9_1, other.u9_1);
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(Instant_0).hashCode = function () {
  return numberToInt(this.u9_1.hashCode());
};
protoOf(Instant_0).toString = function () {
  return this.u9_1.toString();
};
function isJodaDateTimeException(_this__u8e3s4) {
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4.name == 'DateTimeException';
}
function isJodaArithmeticException(_this__u8e3s4) {
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4.name == 'ArithmeticException';
}
function Companion_7() {
  Companion_instance_7 = this;
  this.z9_1 = new LocalDate_0(LocalDate.MIN);
  this.aa_1 = new LocalDate_0(LocalDate.MAX);
}
var Companion_instance_7;
function Companion_getInstance_8() {
  if (Companion_instance_7 == null)
    new Companion_7();
  return Companion_instance_7;
}
function LocalDate_init_$Init$(year, monthNumber, dayOfMonth, $this) {
  var tmp;
  try {
    tmp = LocalDate.of(year, monthNumber, dayOfMonth);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      if (isJodaDateTimeException(e))
        throw IllegalArgumentException_init_$Create$_0(e);
      throw e;
    } else {
      throw $p;
    }
  }
  LocalDate_0.call($this, tmp);
  return $this;
}
function LocalDate_init_$Init$_0(year, month, dayOfMonth, $this) {
  LocalDate_init_$Init$(year, get_number(month), dayOfMonth, $this);
  return $this;
}
function LocalDate_init_$Create$(year, month, dayOfMonth) {
  return LocalDate_init_$Init$_0(year, month, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
}
function LocalDate_0(value) {
  Companion_getInstance_8();
  this.ba_1 = value;
}
protoOf(LocalDate_0).equals = function (other) {
  var tmp;
  if (this === other) {
    tmp = true;
  } else {
    var tmp_0;
    if (other instanceof LocalDate_0) {
      tmp_0 = equals(this.ba_1, other.ba_1);
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(LocalDate_0).hashCode = function () {
  return numberToInt(this.ba_1.hashCode());
};
protoOf(LocalDate_0).toString = function () {
  return this.ba_1.toString();
};
protoOf(LocalDate_0).ca = function (other) {
  return numberToInt(this.ba_1.compareTo(other.ba_1));
};
protoOf(LocalDate_0).y2 = function (other) {
  return this.ca(other instanceof LocalDate_0 ? other : THROW_CCE());
};
function minus_0(_this__u8e3s4, value, unit) {
  return plusNumber(_this__u8e3s4, -value | 0, unit);
}
function plusNumber(_this__u8e3s4, value, unit) {
  var tmp;
  try {
    // Inline function 'kotlin.let' call
    var tmp_0;
    if (unit instanceof DayBased) {
      tmp_0 = _this__u8e3s4.ba_1.plusDays(numberToDouble(value) * unit.d9_1);
    } else {
      if (unit instanceof MonthBased) {
        tmp_0 = _this__u8e3s4.ba_1.plusMonths(numberToDouble(value) * unit.f9_1);
      } else {
        noWhenBranchMatchedException();
      }
    }
    var tmp0_let = tmp_0;
    // Inline function 'kotlin.contracts.contract' call
    tmp = new LocalDate_0(tmp0_let);
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var e = $p;
      if (!isJodaDateTimeException(e) ? !isJodaArithmeticException(e) : false)
        throw e;
      throw DateTimeArithmeticException_init_$Create$_0('The result of adding ' + toString(value) + ' of ' + unit + ' to ' + _this__u8e3s4 + ' is out of LocalDate range.', e);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function plus(_this__u8e3s4, period) {
  var tmp;
  try {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.plus.<anonymous>' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.run' call
    var tmp0_run = _this__u8e3s4.ba_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
    var tmp1_run = !(period.n8_1 === 0) ? tmp0_run.plusMonths(period.n8_1) : tmp0_run;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
    var tmp0_let = !(period.o8_1 === 0) ? tmp1_run.plusDays(period.o8_1) : tmp1_run;
    // Inline function 'kotlin.contracts.contract' call
    tmp = new LocalDate_0(tmp0_let);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      if (isJodaDateTimeException(e) ? true : isJodaArithmeticException(e))
        throw DateTimeArithmeticException_init_$Create$(e);
      throw e;
    } else {
      throw $p;
    }
  }
  return tmp;
}
function LocalDateTime_init_$Init$(date, time, $this) {
  LocalDateTime_0.call($this, LocalDateTime.of(date.ba_1, time.da_1));
  return $this;
}
function LocalDateTime_init_$Create$(date, time) {
  return LocalDateTime_init_$Init$(date, time, objectCreate(protoOf(LocalDateTime_0)));
}
function Companion_8() {
  Companion_instance_8 = this;
  this.ea_1 = new LocalDateTime_0(LocalDateTime.MIN);
  this.fa_1 = new LocalDateTime_0(LocalDateTime.MAX);
}
var Companion_instance_8;
function Companion_getInstance_9() {
  if (Companion_instance_8 == null)
    new Companion_8();
  return Companion_instance_8;
}
function LocalDateTime_0(value) {
  Companion_getInstance_9();
  this.ga_1 = value;
}
protoOf(LocalDateTime_0).ha = function () {
  return numberToInt(this.ga_1.year());
};
protoOf(LocalDateTime_0).ia = function () {
  return toMonth(this.ga_1.month());
};
protoOf(LocalDateTime_0).ja = function () {
  return toDayOfWeek(this.ga_1.dayOfWeek());
};
protoOf(LocalDateTime_0).ka = function () {
  return new LocalDate_0(this.ga_1.toLocalDate());
};
protoOf(LocalDateTime_0).la = function () {
  return new LocalTime_0(this.ga_1.toLocalTime());
};
protoOf(LocalDateTime_0).equals = function (other) {
  var tmp;
  if (this === other) {
    tmp = true;
  } else {
    var tmp_0;
    if (other instanceof LocalDateTime_0) {
      tmp_0 = equals(this.ga_1, other.ga_1);
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(LocalDateTime_0).hashCode = function () {
  return numberToInt(this.ga_1.hashCode());
};
protoOf(LocalDateTime_0).toString = function () {
  return this.ga_1.toString();
};
protoOf(LocalDateTime_0).ma = function (other) {
  return numberToInt(this.ga_1.compareTo(other.ga_1));
};
protoOf(LocalDateTime_0).y2 = function (other) {
  return this.ma(other instanceof LocalDateTime_0 ? other : THROW_CCE());
};
function Companion_9() {
  Companion_instance_9 = this;
  this.na_1 = new LocalTime_0(LocalTime.MIN);
  this.oa_1 = new LocalTime_0(LocalTime.MAX);
}
var Companion_instance_9;
function Companion_getInstance_10() {
  if (Companion_instance_9 == null)
    new Companion_9();
  return Companion_instance_9;
}
function LocalTime_0(value) {
  Companion_getInstance_10();
  this.da_1 = value;
}
protoOf(LocalTime_0).equals = function (other) {
  var tmp;
  if (this === other) {
    tmp = true;
  } else {
    var tmp_0;
    if (other instanceof LocalTime_0) {
      tmp_0 = equals(this.da_1, other.da_1);
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(LocalTime_0).hashCode = function () {
  return numberToInt(this.da_1.hashCode());
};
protoOf(LocalTime_0).toString = function () {
  return this.da_1.toString();
};
protoOf(LocalTime_0).pa = function (other) {
  return numberToInt(this.da_1.compareTo(other.da_1));
};
protoOf(LocalTime_0).y2 = function (other) {
  return this.pa(other instanceof LocalTime_0 ? other : THROW_CCE());
};
var Month_JANUARY_instance;
var Month_FEBRUARY_instance;
var Month_MARCH_instance;
var Month_APRIL_instance;
var Month_MAY_instance;
var Month_JUNE_instance;
var Month_JULY_instance;
var Month_AUGUST_instance;
var Month_SEPTEMBER_instance;
var Month_OCTOBER_instance;
var Month_NOVEMBER_instance;
var Month_DECEMBER_instance;
function values_0() {
  return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
}
var Month_entriesInitialized;
function Month_initEntries() {
  if (Month_entriesInitialized)
    return Unit_getInstance();
  Month_entriesInitialized = true;
  Month_JANUARY_instance = new Month_0('JANUARY', 0);
  Month_FEBRUARY_instance = new Month_0('FEBRUARY', 1);
  Month_MARCH_instance = new Month_0('MARCH', 2);
  Month_APRIL_instance = new Month_0('APRIL', 3);
  Month_MAY_instance = new Month_0('MAY', 4);
  Month_JUNE_instance = new Month_0('JUNE', 5);
  Month_JULY_instance = new Month_0('JULY', 6);
  Month_AUGUST_instance = new Month_0('AUGUST', 7);
  Month_SEPTEMBER_instance = new Month_0('SEPTEMBER', 8);
  Month_OCTOBER_instance = new Month_0('OCTOBER', 9);
  Month_NOVEMBER_instance = new Month_0('NOVEMBER', 10);
  Month_DECEMBER_instance = new Month_0('DECEMBER', 11);
}
function Month_0(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function toMonth(_this__u8e3s4) {
  return Month(numberToInt(_this__u8e3s4.value()));
}
function Month_JANUARY_getInstance() {
  Month_initEntries();
  return Month_JANUARY_instance;
}
function Month_FEBRUARY_getInstance() {
  Month_initEntries();
  return Month_FEBRUARY_instance;
}
function Month_MARCH_getInstance() {
  Month_initEntries();
  return Month_MARCH_instance;
}
function Month_APRIL_getInstance() {
  Month_initEntries();
  return Month_APRIL_instance;
}
function Month_MAY_getInstance() {
  Month_initEntries();
  return Month_MAY_instance;
}
function Month_JUNE_getInstance() {
  Month_initEntries();
  return Month_JUNE_instance;
}
function Month_JULY_getInstance() {
  Month_initEntries();
  return Month_JULY_instance;
}
function Month_AUGUST_getInstance() {
  Month_initEntries();
  return Month_AUGUST_instance;
}
function Month_SEPTEMBER_getInstance() {
  Month_initEntries();
  return Month_SEPTEMBER_instance;
}
function Month_OCTOBER_getInstance() {
  Month_initEntries();
  return Month_OCTOBER_instance;
}
function Month_NOVEMBER_getInstance() {
  Month_initEntries();
  return Month_NOVEMBER_instance;
}
function Month_DECEMBER_getInstance() {
  Month_initEntries();
  return Month_DECEMBER_instance;
}
function ofZone($this, zoneId) {
  var tmp;
  if (zoneId instanceof ZoneOffset) {
    tmp = FixedOffsetTimeZone_init_$Create$(new UtcOffset(zoneId));
  } else {
    if (zoneId.rules().isFixedOffset()) {
      var tmp_0 = zoneId.normalized();
      tmp = new FixedOffsetTimeZone(new UtcOffset(tmp_0 instanceof ZoneOffset ? tmp_0 : THROW_CCE()), zoneId);
    } else {
      tmp = new TimeZone(zoneId);
    }
  }
  return tmp;
}
function Companion_10() {
  Companion_instance_10 = this;
  this.qa_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
}
protoOf(Companion_10).ra = function (zoneId) {
  var tmp;
  try {
    tmp = ofZone(this, ZoneId.of(zoneId));
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      if (isJodaDateTimeException(e))
        throw IllegalTimeZoneException_init_$Create$(e);
      throw e;
    } else {
      throw $p;
    }
  }
  return tmp;
};
var Companion_instance_10;
function Companion_getInstance_11() {
  if (Companion_instance_10 == null)
    new Companion_10();
  return Companion_instance_10;
}
function TimeZone(zoneId) {
  Companion_getInstance_11();
  this.sa_1 = zoneId;
}
protoOf(TimeZone).equals = function (other) {
  var tmp;
  if (this === other) {
    tmp = true;
  } else {
    var tmp_0;
    if (other instanceof TimeZone) {
      tmp_0 = equals(this.sa_1, other.sa_1);
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(TimeZone).hashCode = function () {
  return numberToInt(this.sa_1.hashCode());
};
protoOf(TimeZone).toString = function () {
  return this.sa_1.toString();
};
function FixedOffsetTimeZone_init_$Init$(offset, $this) {
  FixedOffsetTimeZone.call($this, offset, offset.ta_1);
  return $this;
}
function FixedOffsetTimeZone_init_$Create$(offset) {
  return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
}
function Companion_11() {
  Companion_instance_11 = this;
}
var Companion_instance_11;
function Companion_getInstance_12() {
  if (Companion_instance_11 == null)
    new Companion_11();
  return Companion_instance_11;
}
function FixedOffsetTimeZone(offset, zoneId) {
  Companion_getInstance_12();
  TimeZone.call(this, zoneId);
  this.va_1 = offset;
}
function atStartOfDayIn(_this__u8e3s4, timeZone) {
  // Inline function 'kotlin.let' call
  var tmp0_let = _this__u8e3s4.ba_1.atStartOfDay(timeZone.sa_1).toInstant();
  // Inline function 'kotlin.contracts.contract' call
  return new Instant_0(tmp0_let);
}
function toLocalDateTime(_this__u8e3s4, timeZone) {
  var tmp;
  try {
    // Inline function 'kotlin.let' call
    var tmp0_let = LocalDateTime.ofInstant(_this__u8e3s4.u9_1, timeZone.sa_1);
    // Inline function 'kotlin.contracts.contract' call
    tmp = new LocalDateTime_0(tmp0_let);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      if (isJodaDateTimeException(e))
        throw DateTimeArithmeticException_init_$Create$(e);
      throw e;
    } else {
      throw $p;
    }
  }
  return tmp;
}
function toInstant(_this__u8e3s4, timeZone) {
  // Inline function 'kotlin.let' call
  var tmp0_let = _this__u8e3s4.ga_1.atZone(timeZone.sa_1).toInstant();
  // Inline function 'kotlin.contracts.contract' call
  return new Instant_0(tmp0_let);
}
function Companion_12() {
  Companion_instance_12 = this;
  this.wa_1 = new UtcOffset(ZoneOffset.UTC);
}
var Companion_instance_12;
function Companion_getInstance_13() {
  if (Companion_instance_12 == null)
    new Companion_12();
  return Companion_instance_12;
}
function UtcOffset(zoneOffset) {
  Companion_getInstance_13();
  this.ta_1 = zoneOffset;
}
protoOf(UtcOffset).hashCode = function () {
  return numberToInt(this.ta_1.hashCode());
};
protoOf(UtcOffset).equals = function (other) {
  var tmp;
  if (other instanceof UtcOffset) {
    tmp = equals(this.ta_1, other.ta_1);
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(UtcOffset).toString = function () {
  return this.ta_1.toString();
};
function safeAdd(a, b) {
  var sum = a.u7(b);
  if (a.f8(sum).p(new Long(0, 0)) < 0 ? a.f8(b).p(new Long(0, 0)) >= 0 : false) {
    throw ArithmeticException_init_$Create$('Addition overflows a long: ' + toString(a) + ' + ' + toString(b));
  }
  return sum;
}
function safeMultiply(a, b) {
  if (b.equals(new Long(-1, -1))) {
    Companion_getInstance();
    if (a.equals(new Long(0, -2147483648))) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + toString(a) + ' * ' + toString(b));
    }
    return a.a8();
  } else if (b.equals(new Long(0, 0)))
    return new Long(0, 0);
  else if (b.equals(new Long(1, 0)))
    return a;
  var total = a.w7(b);
  if (!total.x7(b).equals(a)) {
    throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + toString(a) + ' * ' + toString(b));
  }
  return total;
}
function safeMultiply_0(a, b) {
  // Inline function 'kotlin.Long.times' call
  var result = toLong(a).w7(toLong(b));
  if (result.p(toLong(IntCompanionObject_getInstance().MAX_VALUE)) > 0 ? true : result.p(toLong(IntCompanionObject_getInstance().MIN_VALUE)) < 0)
    throw ArithmeticException_init_$Create$('Multiplication overflows Int range: ' + a + ' * ' + b + '.');
  return result.o();
}
//region block: init
DISTANT_PAST_SECONDS = new Long(-931914497, -750);
DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
NANOS_PER_MILLI = 1000000;
MILLIS_PER_ONE = 1000;
NANOS_PER_ONE = 1000000000;
//endregion
//region block: exports
export {
  DatePeriod_init_$Create$ as a,
  LocalDate_init_$Create$ as b,
  LocalDateTime_init_$Create$ as c,
  System_getInstance as d,
  Companion_getInstance_6 as e,
  Companion_getInstance_7 as f,
  Companion_getInstance_11 as g,
  values as h,
  atStartOfDayIn as i,
  minus_0 as j,
  minus as k,
  toInstant as l,
  toLocalDateTime as m,
};
//endregion
