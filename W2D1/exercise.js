function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
    max = arguments[i];
    }
    }
    return max;
    }
    const max1 = findMax(1, 123, 500, 115, 66, 88);
    const max2 = findMax(3, 6, 8);
    