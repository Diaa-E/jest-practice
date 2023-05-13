import {caesarEncrypt} from "./caesarCipher.js";

//Caesar cipher only applies to letters, ignoring numbers and punctuation
//Wrap from Z to A
//keep letter case

test("Encrypts a letters from the middle of the alphabet", () => {

    expect(caesarEncrypt("dcode caesar", 3)).toBe("gfrgh fdhvdu");
});

test("Maintains letter case", () => {

    expect(caesarEncrypt("dCode Caesar", 3)).toBe("gFrgh Fdhvdu");
});

test("Ignores numbers", () => {

    expect(caesarEncrypt("dcode caesar 123", 3)).toBe("gfrgh fdhvdu 123");
});

test("Ignores punctuation", () => {

    expect(caesarEncrypt("dcode! caesar.", 3)).toBe("gfrgh! fdhvdu.");
});

test("Accepts negative shift", () => {

    expect(caesarEncrypt("this is coded", -1)).toBe("sghr hr bncdc");
});

test("Wraps from Z to A", () => {

    expect(caesarEncrypt("dcode caesar", 10)).toBe("nmyno mkockb");
});