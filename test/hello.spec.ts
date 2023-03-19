import { it, expect } from "vitest";

function sum(...nums: number[]): number {
	return nums.reduce((a, b) => a + b, 0);
}

it("1 + 1", () => {
	expect(1 + 1).toEqual(2);
});

it("5 numbers", () => {
	expect(sum(1 + 2 + 3 + 8 + 10)).toEqual(24);
});
