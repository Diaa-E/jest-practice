import capitalize from "./capitalize";

test("Capitalizes letters", () => {

    expect(capitalize("sample text")).toBe("SAMPLE TEXT");
});

test("Ignores numbers", () => {

    expect(capitalize("sample 123")).toBe("SAMPLE 123");
});

test("Ignores Special characters", () => {

    expect(capitalize("sample !@?")).toBe("SAMPLE !@?");
});