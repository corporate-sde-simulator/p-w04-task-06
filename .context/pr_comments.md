# PR Review - Circuit breaker with exponential backoff (by Kiran)

## Reviewer: Kavitha Rajan
---

**Overall:** Good foundation but critical bugs need fixing before merge.

### `circuitBreaker.ts`

> **Bug #1:** Failure threshold comparison uses greater-than instead of greater-or-equal so circuit never opens at exact threshold
> This is the higher priority fix. Check the logic carefully and compare against the design doc.

### `backoffStrategy.ts`

> **Bug #2:** Half-open state allows unlimited requests instead of just one probe request
> This is more subtle but will cause issues in production. Make sure to add a test case for this.

---

**Kiran**
> Acknowledged. I have documented the issues for whoever picks this up.
