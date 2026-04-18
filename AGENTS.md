Agent instructions for this project
High-level behavior for AI agents (e.g. Cursor) working in this repo.
Cursor setup: Rules (.cursor/rules/), skills (.cursor/skills/), and subagents (.cursor/agents/) are configured.
Rules enforce standards; skills provide workflows; subagents handle repo research, test generation, and documentation.

Priorities
Correctness and maintainability over speed or clever shortcuts.
Verify against official docs before locking in implementation patterns.
Reuse first: check for existing utilities, hooks, services, and libraries before adding code or dependencies.
Full-stack awareness: consider domain model, API contract, validation, UI state, tests, and docs for every feature.

Workflow
Summarize the requirement and make a short plan.
Check project for existing patterns and libraries.
Define contracts/validation, then implement.
Add or update tests and documentation.

Standards
Validate external input
Handle errors explicitly
No hardcoded secrets
Typed contracts and strict typing where the stack allows
Tests for business logic and meaningful UI behavior
Documentation for non-trivial work including:
what
why
how to run
how to test
tradeoffs

Frontend (React / Next.js)
Functional components
Hooks
Composition
Custom hooks for reusable stateful logic
Context only for shared cross-tree state
Follow the project's router:
App Router or Pages Router
Proper server/client component usage
Implementation and tests must cover:
loading state
success state
empty state
error state

Do Not
Add dependencies without checking package.json
Put business logic inside presentation components
Skip validation
Skip tests for core logic
Leave APIs undocumented
