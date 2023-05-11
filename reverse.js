"use strict";

export function reverseString(text)
{
    const chars = text.split("");
    return chars.reverse().join("");
}