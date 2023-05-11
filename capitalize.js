"use strict";

export function capitalize(textString)
{
    const chars = textString.split("");
    const charsCap = [];

    chars.forEach(char => {

        charsCap.push(char.toUpperCase());
    })

    return charsCap.join("");
}