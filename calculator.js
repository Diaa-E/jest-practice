"use strict";

export const calculator ={

    add: (x, y) => {

        if (isNaN(x) || isNaN(y)) throw new Error("Invalid input");

        //number strings can be converted to a number successfully
        x = Number(x);
        y = Number(y);

        return x + y;
    },

    subtract: (x, y) => {

        if (isNaN(x) || isNaN(y)) throw new Error("Invalid input");

        x = Number(x);
        y = Number(y);

        return x - y;
    },

    multiply: (x, y) => {

        if (isNaN(x) || isNaN(y)) throw new Error("Invalid input");

        x = Number(x);
        y = Number(y);

        return x * y;
    },

    divide: (x, y) => {

        if (isNaN(x) || isNaN(y)) throw new Error("Invalid input");

        x = Number(x);
        y = Number(y);

        return x / y;
    }
}