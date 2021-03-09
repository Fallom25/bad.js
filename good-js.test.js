const { letterTranslate } = require('./good-js.js');

xdescribe('letterTranslate tests', () => {
    const toMorse = {
        'a': '.--',
        'b': '--.',
        'c': '-.-.'
    }

    const toEnglish = Object.entries(toMorse).reduce((acc, entry) => {
        acc[entry[1]] = entry[0];
        return acc;
    }, {});

    const valueNotExistsError = new Error('Key doesn\'t exist');

    test('undefined input', () => {
        expect(() => letterTranslate(undefined, toMorse)).toThrowError(valueNotExistsError);
        expect(() => letterTranslate(undefined, toEnglish)).toThrowError(valueNotExistsError);
    });

    test('character input that doesn\'t exist in object', () => {
        expect(() => letterTranslate('d', toMorse)).toThrowError(valueNotExistsError)
    });

    test('character input that does exist', () => {
        expect(letterTranslate('a', toMorse)).toBe(toMorse['a']);
        expect(letterTranslate('.--', toEnglish)).toBe(toEnglish['.--']);
    });
});

// splitting a string, word delimeter and a character delimeter

// translates a 2d array of character