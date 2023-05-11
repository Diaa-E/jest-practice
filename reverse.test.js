import {reverseString} from "./reverse.js";

test("Reverses strings", () => {

    expect(reverseString("this is text")).toBe("txet si siht");
});

test("Ignores space at the start", () => {

    expect(reverseString(" text")).toBe("txet ");
});