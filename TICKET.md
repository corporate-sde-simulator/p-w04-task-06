# PLATFORM-2904: Investigate circuit breaker not opening under failure

**Status:** In Progress · **Priority:** Critical
**Sprint:** Sprint 26 · **Story Points:** 8
**Reporter:** Nisha Gupta (Reliability Lead) · **Assignee:** You (Intern)
**Labels:** `backend`, `typescript`, `resilience`, `investigation`
**Task Type:** Code Debugging

---

## Description

The circuit breaker is supposed to open (stop requests) when a downstream service fails repeatedly. Instead, it keeps sending requests to the failing service, causing cascading failures.

**DEBUGGING task — no hint comments in the code.**

## Symptoms

- Downstream `payment-service` returns 500 for 30 consecutive requests
- Circuit breaker stays CLOSED (should open after 5 failures)
- When manually set to OPEN, half-open state allows unlimited probe requests (should allow 1)
- Backoff strategy logs show `retry delay: 0ms` regardless of attempt number

## Acceptance Criteria

- [ ] Root cause found and fixed
- [ ] All unit tests pass
