import {analyzeArray} from "./analyzeArray.js";

const testArray = [1, 4, 5, 37, 21, 23, 100, 8, 71];
const testArrayStr = [1, "4", 5, 37, "21", 23, 100, "8", 71];
const testArrayInvalid = [1, 4, 5, 37, "T", 23, 100, 8, 71];
const errorInvalidInput = new Error("Invalid input");

test("Gets array average", () => {

    expect(analyzeArray(testArray).avg).toBe(30);
});

test("Gets array max", () => {

    expect(analyzeArray(testArray).max).toBe(100);
});

test("Gets array min", () => {

    expect(analyzeArray(testArray).min).toBe(1);
});

test("Gets array length", () => {

    expect(analyzeArray(testArray).arrayLength).toBe(9);
});

test("Handles number string", () => {

    expect(analyzeArray(testArrayStr).avg).toBe(30);
});

test("Handles invalid input", () => {

    expect(() => analyzeArray(testArrayInvalid).avg).toThrow(errorInvalidInput);
});

test("Avg returns 0 for empty array", () => {

    expect(analyzeArray([]).avg).toBe(0);
});

test("Max returns 0 for empty array", () => {

    expect(analyzeArray([]).max).toBe(0);
});

test("Min returns 0 for empty array", () => {

    expect(analyzeArray([]).min).toBe(0);
});

test("Array Length returns 0 for empty array", () => {

    expect(analyzeArray([]).arrayLength).toBe(0);
});