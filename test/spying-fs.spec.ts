import { it, expect, vi } from "vitest";
import { loadConfig } from "../src/fs";

vi.mock("fs", async (importOriginal) => {
	const actual = (await importOriginal()) as typeof import("fs");
	return {
		...actual,
		readFileSync() {
			return '{ "name": "mocked" }';
		},
	};
});

it.skip("with fs", async () => {
	const result = await loadConfig();
	expect(result).toEqual({ name: "mocked" });
});
