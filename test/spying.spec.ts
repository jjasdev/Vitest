import { it, expect, vi } from "vitest";
import { greeting } from "../src";

it("greeting", () => {
	const spy = vi.spyOn(console, "log");
	greeting("World");
	greeting("Juanjo");
	expect(spy).toBeCalledTimes(2);
	expect(spy.mock.calls[0][0]).toBe("Hello World");
	expect(spy.mock.calls[1][0]).toBe("Hello Juanjo");
	spy.mockReset();
	greeting("Elena");
	expect(spy).toBeCalledTimes(1);
	expect(spy).toBeCalledWith("Hello Elena");
	expect(spy).toMatchInlineSnapshot(`
		[MockFunction log] {
		  "calls": [
		    [
		      "Hello Elena",
		    ],
		  ],
		  "results": [
		    {
		      "type": "return",
		      "value": undefined,
		    },
		  ],
		}
	`);
});
