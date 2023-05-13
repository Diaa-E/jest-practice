"use strict";

export function caesarEncrypt(text = "Caesar Cipher", shift = 3)
{
    let textEnc = "";

    for (let i = 0; i < text.length; i++)
    {
        if (text.charCodeAt(i) <= 90 && text.charCodeAt(i) >= 65) //A-Z
        {
            textEnc += String.fromCharCode(((text.charCodeAt(i) - 65 + shift) % 26) + 65);
        }
        else if (text.charCodeAt(i) <= 122 && text.charCodeAt(i) >= 97) //a-z
        {
            textEnc += String.fromCharCode(((text.charCodeAt(i) - 97 + shift) % 26) + 97);
        }
        else //character and numbers
        {
            textEnc += text.charAt(i);
        }
    }

    return textEnc;
}