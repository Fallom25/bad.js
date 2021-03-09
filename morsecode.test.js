const { letterCheck, translate } = require('./morsecode');

const toMorse = {
    'a': '.--',
    'b': '--.',
    'c': '-.-.'
}

const toEnglish = Object.entries(toMorse).reduce((acc, entry) => {
    acc[entry[1]] = entry[0];
    return acc;
}, {});

const emptyObject = {};

describe('letterCheck tests', () => {
    let letterOutput = false;

    test('character Does Not Exist in Object', () => {
        expect(letterCheck(['a', 'b', 'c', 'd'], toMorse)).toEqual(letterOutput);
    });

    test('empty input', () => {
        expect(letterCheck([], toMorse)).toEqual(letterOutput);
        expect(letterCheck(['.--', '--.', '-.-.'], emptyObject)).toEqual(letterOutput);
    });

    test('character input that does exist', () => {
        let letterOutput = true;

        expect(letterCheck(['a', 'b', 'c'], toMorse)).toEqual(letterOutput);
        expect(letterCheck(['.--', '--.', '-.-.'], toEnglish)).toEqual(letterOutput);
    });
});

describe('translate tests', () => {
    const translateOutput = [];
    
    test('undefined string or object', () => {
        expect(translate(undefined, toMorse, "", "   ")).toEqual(translateOutput);
        expect(translate('.--   --.   -.-.', undefined, "   ", "")).toEqual(translateOutput);
    });

    test('character Does Not Exist in Object', () => {
        expect(translate('abcd', toMorse, "", "   ")).toEqual(translateOutput);
    });

    test('works with Captital letters', () => {
        expect(translate('ABC', toMorse, "", "   ")).toEqual('.--   --.   -.-.');
    })

    test('translate works', () => {
        expect(translate('abc', toMorse, "", "   ")).toEqual('.--   --.   -.-.');
        expect(translate('.--   --.   -.-.', toEnglish, "   ", "")).toEqual('abc');
    });

    test('invalid input', () => {
        expect(translate(['a','b','c'], toMorse, "", "   ")).toEqual(translateOutput);
        expect(translate('abc','cba', "", "   ")).toEqual(translateOutput);
    });

    test('empty input', () => {
        expect(translate([], toMorse, "", "   ")).toEqual(translateOutput);
        expect(translate(['.--', '--.', '-.-.',], emptyObject, "", "   ", emptyObject)).toEqual(translateOutput)
    });
});