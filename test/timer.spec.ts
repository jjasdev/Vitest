import { it, expect, vi, beforeEach } from "vitest";

function warnLater(message) {
	setTimeout(() => {
		console.log(message);
	}, 2000);
}

beforeEach(() => {
	vi.useFakeTimers();
});

it("warnLater", async () => {
	const logSpy = vi.spyOn(console, "log");
	warnLater("2 seconds passed");
	expect(logSpy).to.not.toBeCalled();

	// await new Promise((resolve) => setTimeout(resolve, 2000));
	vi.advanceTimersByTime(2000);
	expect(logSpy).toBeCalledWith("2 seconds passed");
});
