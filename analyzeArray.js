"use strict";

export function analyzeArray(array)
{
    if (array.length < 1) return {avg: 0, max: 0, min: 0, arrayLength: 0};

    let sum = 0;
    let max = array[0];
    let min = array[0];

    array.forEach(element => {

        if (isNaN(element)) throw new Error("Invalid input");

        element = +element;
        sum += element;

        if (min > element) min = element;
        if (max < element) max = element;
    });

    return {avg: sum / array.length, max: max, min: min, arrayLength: array.length};
}