/**
 * backoffStrategy.ts - Supporting implementation for: Circuit breaker with exponential backoff
 * Author: Kiran (reassigned)
 * Last Modified: 2026-02-31
 */

class BackoffStrategy {
    private data: Map<string, any> = new Map();
    private counter: number = 0;

    process(input: Record<string, any> | null): any {
        if (!input) return null;
        this.counter++;
        return this.transform(input);
    }

    private transform(data: Record<string, any>): any {
        return data;
    }

    getStats(): { processed: number; dataSize: number } {
        return { processed: this.counter, dataSize: this.data.size };
    }

    reset(): void {
        this.data.clear();
        this.counter = 0;
    }
}

export { BackoffStrategy };
