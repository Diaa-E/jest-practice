import {calculator} from "./calculator.js";

const invalidInputError = new Error("Invalid input");

test("Adds two numbers", () => {

    expect(calculator.add(2, 3)).toBe(5);
});

test("Add handles invalid input", () => {

    expect( () => calculator.add("X", 5)).toThrow(invalidInputError);
});

test("Add converts number strings", () => {

    expect(calculator.add("3", 2)).toBe(5);
});

test("Subtracts two numbers", () => {

    expect(calculator.subtract(20, 13)).toBe(7);
});

test("Subtract handles invalid input", () => {

    expect( () => calculator.subtract("Y", 5)).toThrow(invalidInputError);
});

test("subtract converts number strings", () => {

    expect(calculator.subtract("5", 3)).toBe(2);
});

test("Multiplies two numbers", () => {

    expect(calculator.multiply(2, 150)).toBe(300);
});

test("Multiply handles invalid input", () => {

    expect( () =>calculator.multiply("T", 5)).toThrow(invalidInputError);
});

test("Multiply converts number strings", () => {

    expect(calculator.multiply("3", 7)).toBe(21);
});

test("Divides two numbers", () => {

    expect(calculator.divide(20, 5)).toBe(4);
});

test("Divide handles invalid input", () => {

    expect( () => calculator.divide("V", 5)).toThrow(invalidInputError);
});

test("Divide converts number strings", () => {

    expect(calculator.divide("12", 3)).toBe(4);
});