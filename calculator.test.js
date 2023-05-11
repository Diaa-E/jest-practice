import {calculator} from "./calculator.js";

test("Adds two numbers", () => {

    expect(calculator.add(2, 3)).toBe(5);
});

test("Add handles invalid input", () => {

    expect(calculator.add("4", 5)).toThrow("Invalid input");
});

test("Subtracts two numbers", () => {

    expect(calculator.subtract(20, 13)).toBe(7);
});

test("Subtract handles invalid input", () => {

    expect(calculator.subtract("4", 5)).toThrow("Invalid input");
});

test("Multiplies two numbers", () => {

    expect(calculator.multiply(2, 150)).toBe(300);
});

test("Multiply handles invalid input", () => {

    expect(calculator.multiply("4", 5)).toThrow("Invalid input");
});

test("Divides two numbers", () => {

    expect(calculator.divide(20, 5)).toBe(4);
});

test("Divide handles invalid input", () => {

    expect(calculator.divide("4", 5)).toThrow("Invalid input");
});