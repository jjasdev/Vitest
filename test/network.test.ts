import { it, expect, vi } from "vitest";
import { getPostBody } from "../src/network";

vi.stubGlobal("fetch", async () => {
	return {
		json() {
			return {
				body: "foo",
			};
		},
	};
});

it("should fetch", async () => {
	const result = await getPostBody(1);
	expect(result).toMatchInlineSnapshot('"foo"');
});
