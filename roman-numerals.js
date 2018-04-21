#!/usr/bin/env node
const assert = require('assert');

const conversion = [
  { symbol: 'I', value: 1 },
  { symbol: 'V', value: 5 },
  { symbol: 'X', value: 10 },
  { symbol: 'L', value: 50 },
  { symbol: 'C', value: 100 },
  { symbol: 'D', value: 500 },
  { symbol: 'M', value: 1000 },
];

const digitPatterns = {
  0: [],
  1: [1],
  2: [1, 1],
  3: [1, 1, 1],
  4: [1, 5],
  5: [5],
  6: [5, 1],
  7: [5, 1, 1],
  8: [5, 1, 1, 1],
  9: [1, 10],
};

const intToRoman = (int) => {
  const digitsInAscendingWeight = int.toString().split('').reverse();

  return digitsInAscendingWeight.reduce( (accumulator, value, index) => {
    const values = digitPatterns[value].map( (v) => v * 10 ** index );
    const symbols = values.map( (v) => getSymbolForValue(v) );

    return symbols.join('') + accumulator;
  }, '');
};

const romanToInt = (roman) => {
  const symbolsInAscendingWeight = roman.split('').reverse();

  let lastValue = 0;
  let int = 0;

  symbolsInAscendingWeight.forEach( (s) => {
    const value = getValueForSymbol(s);

    if (value < lastValue) {
      int -= value;
    }
    else {
      int  += value;
    }

    lastValue = value;
  });

  return int;
};

const getSymbolForValue = (value) => {
  return conversion.find( (c) => c.value === value ).symbol;
};

const getValueForSymbol = (symbol) => {
  return conversion.find( (c) => c.symbol === symbol ).value;
};

assert.strictEqual(intToRoman(1000), 'M');
assert.strictEqual(intToRoman(1100), 'MC');
assert.strictEqual(intToRoman(1200), 'MCC');
assert.strictEqual(intToRoman(1300), 'MCCC');
assert.strictEqual(intToRoman(1400), 'MCD');
assert.strictEqual(intToRoman(1500), 'MD');
assert.strictEqual(intToRoman(1600), 'MDC');
assert.strictEqual(intToRoman(1700), 'MDCC');
assert.strictEqual(intToRoman(1800), 'MDCCC');
assert.strictEqual(intToRoman(1900), 'MCM');
assert.strictEqual(intToRoman(1990), 'MCMXC');
assert.strictEqual(intToRoman(1991), 'MCMXCI');
assert.strictEqual(intToRoman(1992), 'MCMXCII');
assert.strictEqual(intToRoman(1993), 'MCMXCIII');
assert.strictEqual(intToRoman(1994), 'MCMXCIV');
assert.strictEqual(intToRoman(1995), 'MCMXCV');
assert.strictEqual(intToRoman(1996), 'MCMXCVI');
assert.strictEqual(intToRoman(1997), 'MCMXCVII');
assert.strictEqual(intToRoman(1998), 'MCMXCVIII');
assert.strictEqual(intToRoman(1999), 'MCMXCIX');
assert.strictEqual(intToRoman(2000), 'MM');
assert.strictEqual(intToRoman(2001), 'MMI');
assert.strictEqual(intToRoman(2002), 'MMII');
assert.strictEqual(intToRoman(2003), 'MMIII');
assert.strictEqual(intToRoman(2004), 'MMIV');
assert.strictEqual(intToRoman(2005), 'MMV');
assert.strictEqual(intToRoman(2006), 'MMVI');
assert.strictEqual(intToRoman(2007), 'MMVII');
assert.strictEqual(intToRoman(2008), 'MMVIII');
assert.strictEqual(intToRoman(2009), 'MMIX');
assert.strictEqual(intToRoman(2010), 'MMX');
assert.strictEqual(intToRoman(2011), 'MMXI');
assert.strictEqual(intToRoman(2012), 'MMXII');
assert.strictEqual(intToRoman(2013), 'MMXIII');
assert.strictEqual(intToRoman(2014), 'MMXIV');
assert.strictEqual(intToRoman(2015), 'MMXV');
assert.strictEqual(intToRoman(2016), 'MMXVI');
assert.strictEqual(intToRoman(2017), 'MMXVII');
assert.strictEqual(intToRoman(2018), 'MMXVIII');
assert.strictEqual(intToRoman(2019), 'MMXIX');
assert.strictEqual(intToRoman(2020), 'MMXX');

assert.strictEqual(romanToInt('I'), 1);
assert.strictEqual(romanToInt('II'), 1 + 1);
assert.strictEqual(romanToInt('III'), 1 + 1 + 1);
assert.strictEqual(romanToInt('IV'), 5 - 1);
assert.strictEqual(romanToInt('V'), 5);
assert.strictEqual(romanToInt('VI'), 5 + 1);
assert.strictEqual(romanToInt('VII'), 5 + 1 + 1);
assert.strictEqual(romanToInt('VIII'), 5 + 1 + 1 + 1);
assert.strictEqual(romanToInt('IX'), 10 - 1);
assert.strictEqual(romanToInt('X'), 10);
assert.strictEqual(romanToInt('XI'), 10 + 1);
assert.strictEqual(romanToInt('XII'), 10 + 1 + 1);
assert.strictEqual(romanToInt('XIII'), 10 + 1 + 1 + 1);
assert.strictEqual(romanToInt('XIV'), 10 - 1 + 5);
assert.strictEqual(romanToInt('XV'), 10 + 5);
assert.strictEqual(romanToInt('XVI'), 10 + 5 + 1);
assert.strictEqual(romanToInt('XVII'), 10 + 5 + 1 + 1);
assert.strictEqual(romanToInt('XVIII'), 10 + 5 + 1 + 1 + 1);
assert.strictEqual(romanToInt('XIX'), 10 - 1 + 10);
assert.strictEqual(romanToInt('XX'), 10 + 10);
assert.strictEqual(romanToInt('XXI'), 10 + 10 + 1);
assert.strictEqual(romanToInt('XXII'), 10 + 10 + 1 + 1);
assert.strictEqual(romanToInt('XXIII'), 10 + 10 + 1 + 1 + 1);
assert.strictEqual(romanToInt('XXIV'), 10 + 10 - 1 + 5);
assert.strictEqual(romanToInt('XXV'), 10 + 10 + 5);
assert.strictEqual(romanToInt('XXVI'), 10 + 10 + 5 + 1);
assert.strictEqual(romanToInt('XXVII'), 10 + 10 + 5 + 1 + 1);
assert.strictEqual(romanToInt('XXVIII'), 10 + 10 + 5 + 1 + 1 + 1);
assert.strictEqual(romanToInt('XXIX'), 10 + 10 - 1 + 10);
assert.strictEqual(romanToInt('XXX'), 10 + 10 + 10);
assert.strictEqual(romanToInt('XXXI'), 10 + 10 + 10 + 1);
assert.strictEqual(romanToInt('XXXII'), 10 + 10 + 10 + 1 + 1);
assert.strictEqual(romanToInt('XXXIII'), 10 + 10 + 10 + 1 + 1 + 1);
assert.strictEqual(romanToInt('XXXIV'), 10 + 10 + 10 - 1 + 5);
assert.strictEqual(romanToInt('XXXV'), 10 + 10 + 10 + 5);
assert.strictEqual(romanToInt('XXXVI'), 10 + 10 + 10 + 5 + 1);
assert.strictEqual(romanToInt('XXXVII'), 10 + 10 + 10 + 5 + 1 + 1);
assert.strictEqual(romanToInt('XXXVIII'), 10 + 10 + 10 + 5 + 1 + 1 + 1);
assert.strictEqual(romanToInt('XXXIX'), 10 + 10 + 10 - 1 + 10);
assert.strictEqual(romanToInt('XL'), 50 - 10);
assert.strictEqual(romanToInt('XLI'), 50 - 10 + 1);
assert.strictEqual(romanToInt('XLII'), 50 - 10 + 1 + 1);
assert.strictEqual(romanToInt('XLIII'), 50 - 10 + 1 + 1 + 1);
assert.strictEqual(romanToInt('XLIV'), 50 - 10 - 1 + 5);
assert.strictEqual(romanToInt('XLV'), 50 - 10 + 5);
assert.strictEqual(romanToInt('XLVI'), 50 - 10 + 5 + 1);
assert.strictEqual(romanToInt('XLVII'), 50 - 10 + 5 + 1 + 1);
assert.strictEqual(romanToInt('XLVIII'), 50 - 10 + 5 + 1 + 1 + 1);
assert.strictEqual(romanToInt('XLIX'), 50 - 10 - 1 + 10);
assert.strictEqual(romanToInt('L'), 50);
assert.strictEqual(romanToInt('LI'), 50 + 1);
assert.strictEqual(romanToInt('LII'), 50 + 1 + 1);
assert.strictEqual(romanToInt('LIII'), 50 + 1 + 1 + 1);
assert.strictEqual(romanToInt('LIV'), 50 - 1 + 5);
assert.strictEqual(romanToInt('LV'), 50 + 5);
assert.strictEqual(romanToInt('LVI'), 50 + 5 + 1);
assert.strictEqual(romanToInt('LVII'), 50 + 5 + 1 + 1);
assert.strictEqual(romanToInt('LVIII'), 50 + 5 + 1 + 1 + 1);
assert.strictEqual(romanToInt('LIX'), 50 - 1 + 10);
assert.strictEqual(romanToInt('LX'), 50 + 10);
assert.strictEqual(romanToInt('LXI'), 50 + 10 + 1);
assert.strictEqual(romanToInt('LXII'), 50 + 10 + 1 + 1);
assert.strictEqual(romanToInt('LXIII'), 50 + 10 + 1 + 1 + 1);
assert.strictEqual(romanToInt('LXIV'), 50 + 10 - 1 + 5);
assert.strictEqual(romanToInt('LXV'), 50 + 10 + 5);
assert.strictEqual(romanToInt('LXVI'), 50 + 10 + 5 + 1);
assert.strictEqual(romanToInt('LXVII'), 50 + 10 + 5 + 1 + 1);
assert.strictEqual(romanToInt('LXVIII'), 50 + 10 + 5 + 1 + 1 + 1);
assert.strictEqual(romanToInt('LXIX'), 50 + 10 - 1 + 10);
assert.strictEqual(romanToInt('LXX'), 50 + 10 + 10);
assert.strictEqual(romanToInt('LXXI'), 50 + 10 + 10 + 1);
assert.strictEqual(romanToInt('LXXII'), 50 + 10 + 10 + 1 + 1);
assert.strictEqual(romanToInt('LXXIII'), 50 + 10 + 10 + 1 + 1 + 1);
assert.strictEqual(romanToInt('LXXIV'), 50 + 10 + 10 - 1 + 5);
assert.strictEqual(romanToInt('LXXV'), 50 + 10 + 10 + 5);
assert.strictEqual(romanToInt('LXXVI'), 50 + 10 + 10 + 5 + 1);
assert.strictEqual(romanToInt('LXXVII'), 50 + 10 + 10 + 5 + 1 + 1);
assert.strictEqual(romanToInt('LXXVIII'), 50 + 10 + 10 + 5 + 1 + 1 + 1);
assert.strictEqual(romanToInt('LXXIX'), 50 + 10 + 10 - 1 + 10);
assert.strictEqual(romanToInt('LXXX'), 50 + 10 + 10 + 10);
assert.strictEqual(romanToInt('LXXXI'), 50 + 10 + 10 + 10 + 1);
assert.strictEqual(romanToInt('LXXXII'), 50 + 10 + 10 + 10 + 1 + 1);
assert.strictEqual(romanToInt('LXXXIII'), 50 + 10 + 10 + 10 + 1 + 1 + 1);
assert.strictEqual(romanToInt('LXXXIV'), 50 + 10 + 10 + 10 - 1 + 5);
assert.strictEqual(romanToInt('LXXXV'), 50 + 10 + 10 + 10 + 5);
assert.strictEqual(romanToInt('LXXXVI'), 50 + 10 + 10 + 10 + 5 + 1);
assert.strictEqual(romanToInt('LXXXVII'), 50 + 10 + 10 + 10 + 5 + 1 + 1);
assert.strictEqual(romanToInt('LXXXVIII'), 50 + 10 + 10 + 10 + 5 + 1 + 1 + 1);
assert.strictEqual(romanToInt('LXXXIX'), 50 + 10 + 10 + 10 - 1 + 10);
assert.strictEqual(romanToInt('XC'), 100 - 10);
assert.strictEqual(romanToInt('XCI'), 100 - 10 + 1);
assert.strictEqual(romanToInt('XCII'), 100 - 10 + 1 + 1);
assert.strictEqual(romanToInt('XCIII'), 100 - 10 + 1 + 1 + 1);
assert.strictEqual(romanToInt('XCIV'), 100 - 10 - 1 + 5);
assert.strictEqual(romanToInt('XCV'), 100 - 10 + 5);
assert.strictEqual(romanToInt('XCVI'), 100 - 10 + 5 + 1);
assert.strictEqual(romanToInt('XCVII'), 100 - 10 + 5 + 1 + 1);
assert.strictEqual(romanToInt('XCVIII'), 100 - 10 + 5 + 1 + 1 + 1);
assert.strictEqual(romanToInt('XCIX'), 100 - 10 - 1 + 10);
assert.strictEqual(romanToInt('C'), 100);
assert.strictEqual(romanToInt('CC'), 100 + 100);
assert.strictEqual(romanToInt('CCC'), 100 + 100 + 100);
assert.strictEqual(romanToInt('CD'), 500 - 100);
assert.strictEqual(romanToInt('D'), 500);
assert.strictEqual(romanToInt('DC'), 500 + 100);
assert.strictEqual(romanToInt('DCC'), 500 + 100 + 100);
assert.strictEqual(romanToInt('DCCC'), 500 + 100 + 100 + 100);
assert.strictEqual(romanToInt('CM'), 1000 - 100);
assert.strictEqual(romanToInt('M'), 1000);

module.exports = { intToRoman, romanToInt };
