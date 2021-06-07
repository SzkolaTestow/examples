const func = (number) => {
    if(isNaN(number)){
        throw new Error('Provided parameter should be a number.')
    }

    return number/2;
}

module.exports = {func}