import { CircuitBreaker } from "../src/circuitBreaker";
import { BackoffStrategy } from "../src/backoffStrategy";

describe("Circuit breaker with exponential backoff", () => {
    test("should process valid input", () => {
        const obj = new CircuitBreaker();
        expect(obj.process({ key: "val" })).not.toBeNull();
    });
    test("should handle null", () => {
        const obj = new CircuitBreaker();
        expect(obj.process(null)).toBeNull();
    });
    test("should track stats", () => {
        const obj = new CircuitBreaker();
        obj.process({ x: 1 });
        expect(obj.getStats().processed).toBe(1);
    });
    test("support should work", () => {
        const obj = new BackoffStrategy();
        expect(obj.process({ data: "test" })).not.toBeNull();
    });
});
