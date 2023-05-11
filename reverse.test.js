import {reverse} from "./reverse.js";

test("Reverses strings", () => {

    expect(reverse("this is text")).toBe("txet si siht");
});

test("Ignores space at the start", () => {

    expect(reverse(" text")).toBe("txet ");
});