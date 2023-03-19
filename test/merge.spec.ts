import { it, expect } from "vitest";
import { deepMerge } from "../src";

it("shallow merge", () => {
	const merged = deepMerge({ name: "Juanjo" }, { surname: "jjas" });
	expect(merged).toEqual({ name: "Juanjo", surname: "jjas" });
});
it("shallow merge with overlaps", () => {
	const merged = deepMerge(
		{ name: "Juanjo", surname: "juanjo" },
		{ surname: "jjas", twitter: "jdev" }
	);
	expect(merged).toEqual({ name: "Juanjo", surname: "jjas", twitter: "jdev" });
});
it("shallow merge with arrays", () => {
	const merged = deepMerge(["vue", "react"], ["svelte", "solid"]);
	expect(merged).toEqual(["vue", "react", "svelte", "solid"]);
});
it("deep merge with overlaps", () => {
	const merged = deepMerge(
		{
			name: "Juanjo",
			accounts: { github: "juanjo" },
			languages: ["javascript"],
		},
		{ accounts: { twitter: "jdev" }, languages: ["typescript", "vue"] }
	);
	// expect(merged).toEqual({
	// 	name: "Juanjo",
	// 	accounts: { github: "juanjo", twitter: "jdev" },
	// });
	expect(merged).toMatchInlineSnapshot(`
		{
		  "accounts": {
		    "github": "juanjo",
		    "twitter": "jdev",
		  },
		  "languages": [
		    "javascript",
		    "typescript",
		    "vue",
		  ],
		  "name": "Juanjo",
		}
	`);
});

it.skip.fails("throws erros on merging two different types", () => {
	const merged = deepMerge(["foo", "bar"], { foo: "bar" });
});
it("throws error on merging two different types", () => {
	expect(() => deepMerge(["foo", "bar"], { foo: "bar" })).toThrowError(
		"Can not merge two different types"
	);
});
