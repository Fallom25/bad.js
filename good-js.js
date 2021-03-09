const letterTranslate = (letter, translateObject) => {
    if (!translateObject.hasOwnProperty(letter)) {
        throw new Error('Key doesn\'t exist');
    }

    return translateObject[letter];
}

module.exports = {
    letterTranslate
}