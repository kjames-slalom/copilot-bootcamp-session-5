---
description: "Execute instructions from the current GitHub Issue step"
agent: "tdd-developer"
tools: [search, read, edit, execute, web, todo]
---

# Execute Step from GitHub Issue

You are executing instructions from a GitHub Issue step using the **tdd-developer** agent workflow.

## Input

Issue Number: ${input:issue-number:Enter issue number (or leave blank to auto-find exercise issue)}

## Instructions

### 1. Find the Exercise Issue

If no issue number was provided:
- Run: `gh issue list --state open`
- Find the issue with "Exercise:" in the title
- Use that issue number

If issue number was provided:
- Use the provided issue number

### 2. Get Issue Content with Comments

Run: `gh issue view <issue-number> --comments`

This will show:
- The main issue description
- All step instructions posted as comments
- Activity sections marked with `:keyboard: Activity:`

### 3. Parse Latest Step Instructions

- Review the issue comments to find the current/latest step
- Identify all `:keyboard: Activity:` sections in that step
- These are the tasks you need to execute

### 4. Execute Activities Systematically

For each activity:
- Read and understand the requirement
- **Follow TDD principles**: Write tests FIRST, then implement (RED-GREEN-REFACTOR)
- Use `#tool:manage_todo_list` to track multi-step activities
- Execute commands, edit files, run tests as instructed
- Verify each activity is completed before moving to the next

### 5. Testing Scope Constraints

**CRITICAL**: Follow project testing guidelines from `.github/copilot-instructions.md`:

✅ **DO USE**:
- Jest for backend unit/integration tests
- Supertest for API endpoint testing
- React Testing Library for frontend component testing
- Write tests FIRST before implementing features

❌ **NEVER SUGGEST**:
- Playwright, Cypress, Selenium, or other e2e frameworks
- Browser automation tools
- Any testing frameworks outside Jest/React Testing Library

**Testing Approach**:
- Backend changes: Write Jest + Supertest tests FIRST → Run → Fail → Implement → Pass → Refactor
- Frontend changes: Write React Testing Library tests FIRST → Run → Fail → Implement → Pass → Refactor
- Follow with manual browser testing for full UI flows

### 6. Completion

**DO NOT** commit or push changes. That's handled by `/commit-and-push`.

After completing all activities:
1. Summarize what was accomplished
2. Show any test results or output
3. Inform the user to run `/validate-step` to check success criteria

## Reference

This prompt inherits knowledge from:
- `.github/copilot-instructions.md` - Workflow Utilities section (gh CLI commands)
- `.github/copilot-instructions.md` - Testing Scope section (what testing tools to use)
- `.github/copilot-instructions.md` - Development Principles (TDD workflow)

## Success

You've completed this prompt successfully when:
- ✅ All `:keyboard: Activity:` tasks from the step are executed
- ✅ Tests are written before implementation (TDD)
- ✅ All tests pass
- ✅ No e2e frameworks were suggested or installed
- ✅ User is informed to run `/validate-step` next
