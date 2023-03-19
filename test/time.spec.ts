import { it, expect, vi } from "vitest";

function getCurrentTime() {
	return new Date().toTimeString().slice(0, 5);
}

it("time", () => {
	vi.setSystemTime(new Date("2000-1-1 12:46"));
	expect(getCurrentTime()).toBe("12:46");
	vi.useRealTimers();
});
