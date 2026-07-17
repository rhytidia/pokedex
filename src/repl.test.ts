import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
	{
		input: "single space",
		expected: ["single", "space"],
	},

	{
		input: " leading and trailing ",
		expected: ["leading", "and", "trailing"],
	},

	{
		input: "Capital ALLCAPS",
		expected: ["capital", "allcaps"],
	},

	{
		input: "double  internal  spaces",
		expected: ["double", "internal", "spaces"],
	},

	{
		input: "  double leading trailing  ",
		expected: ["double", "leading", "trailing"],
	},

	{
		input: "   ",
		expected: [],
	},
])("cleanInput($input)", ({ input, expected }) => {
	test(`Expected: ${expected}`, () => {
		const actual = cleanInput(input);
		// The `expect` and `toHaveLength` functions are from vitest
		// they will fail the test if the condition is not met
		expect(actual).toHaveLength(expected.length);
		for (const i in expected) {
			// likewise, the `toBe` function will fail the test if the values are not equal
			expect(actual[i]).toBe(expected[i]);
		}
	});
});