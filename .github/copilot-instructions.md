# Project Guidelines

## Project Context

Full-stack TODO application with React frontend and Express backend. Development follows an iterative, feedback-driven approach with emphasis on test-driven development.

**Current Phase**: Backend stabilization and frontend feature completion

## Documentation References

Reference these documents to understand project architecture and standards:

- [docs/project-overview.md](../docs/project-overview.md) - Architecture, tech stack, and structure
- [docs/testing-guidelines.md](../docs/testing-guidelines.md) - Test patterns and standards
- [docs/workflow-patterns.md](../docs/workflow-patterns.md) - Development workflow guidance

## Development Principles

**Test-Driven Development**: Follow the Red-Green-Refactor cycle
- Write test first (RED)
- Implement code to pass test (GREEN)
- Refactor for quality (REFACTOR)

**Incremental Changes**: Make small, testable modifications that can be validated independently

**Systematic Debugging**: Use test failures as guides to identify and fix issues

**Validation Before Commit**: Ensure all tests pass and no lint errors exist before committing

## Testing Scope

This project uses **unit tests and integration tests ONLY**:

**Backend Testing**:
- Jest + Supertest for API testing
- Write tests FIRST, then implement (RED-GREEN-REFACTOR)

**Frontend Testing**:
- React Testing Library for component unit/integration tests
- Write tests FIRST for component behavior, then implement (RED-GREEN-REFACTOR)
- Follow with manual browser testing for full UI flows

**Important Constraints**:
- ❌ DO NOT suggest or implement e2e test frameworks (Playwright, Cypress, Selenium)
- ❌ DO NOT suggest browser automation tools
- ✅ Keep lab focused on unit/integration tests without e2e complexity

**Testing Approach by Context**:
- Backend API changes: Write Jest tests FIRST → Run → Fail → Implement → Pass → Refactor
- Frontend component features: Write React Testing Library tests FIRST → Run → Fail → Implement → Pass → Refactor → Manual browser testing for UI flows

## Workflow Patterns

### 1. TDD Workflow
Write/fix tests → Run → Fail (RED) → Implement → Pass (GREEN) → Refactor

### 2. Code Quality Workflow
Run lint → Categorize issues → Fix systematically → Re-validate

### 3. Integration Workflow
Identify issue → Debug → Test → Fix → Verify end-to-end

## Agent Usage

Use specialized agents for specific workflows:

**tdd-developer**: For test-related work and Red-Green-Refactor cycles
- Writing new tests
- Fixing failing tests
- Implementing TDD workflows

**code-reviewer**: For addressing lint errors and code quality improvements
- Fixing linting issues
- Code quality reviews
- Refactoring for best practices

## Memory System

Track development discoveries and patterns in `.github/memory/`:

**Persistent Memory**: This file (`.github/copilot-instructions.md`) contains foundational principles and workflows

**Working Memory**: `.github/memory/` directory contains discoveries and patterns
- During active development, take notes in `.github/memory/scratch/working-notes.md` (not committed)
- At end of session, summarize key findings into `.github/memory/session-notes.md` (committed)
- Document recurring code patterns in `.github/memory/patterns-discovered.md` (committed)
- Reference these files when providing context-aware suggestions

**See**: [.github/memory/README.md](memory/README.md) for detailed usage guidance

## Workflow Utilities

GitHub CLI commands are available for workflow automation:

```bash
# List open issues
gh issue list --state open

# Get issue details
gh issue view <issue-number>

# Get issue with comments
gh issue view <issue-number> --comments
```

**Exercise Workflow**:
- The main exercise issue will have "Exercise:" in the title
- Steps are posted as comments on the main issue
- Use these commands when `/execute-step` or `/validate-step` prompts are invoked

## Git Workflow

**Conventional Commits**: Use structured commit messages
- `feat:` - New feature
- `fix:` - Bug fix
- `chore:` - Maintenance tasks
- `docs:` - Documentation changes
- `test:` - Test additions or fixes
- `refactor:` - Code restructuring

**Branch Strategy**:
- Feature branches: `feature/<descriptive-name>`
- Always stage all changes before committing: `git add .`
- Push to the correct branch: `git push origin <branch-name>`
