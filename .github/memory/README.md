# Development Memory System

## Purpose

This directory tracks patterns, decisions, and lessons learned during development. It serves as a knowledge base that helps AI assistants provide more context-aware suggestions by understanding what you've already discovered and decided.

## Two Types of Memory

### Persistent Memory (.github/copilot-instructions.md)
- **What**: Foundational principles, workflows, and team standards
- **When to update**: When establishing new team conventions or changing core practices
- **Committed**: Yes, shared with entire team
- **Scope**: Universal across all sessions and features

### Working Memory (.github/memory/)
- **What**: Session-specific discoveries, patterns, and active development notes
- **When to update**: During and after development sessions
- **Committed**: Partially (see below)
- **Scope**: Context for specific features, bugs, or learning phases

## Directory Structure

```
.github/memory/
├── README.md                    # This file - explains the system
├── session-notes.md             # Historical summaries (COMMITTED)
├── patterns-discovered.md       # Accumulated patterns (COMMITTED)
└── scratch/
    ├── .gitignore              # Ignores all scratch files (COMMITTED)
    └── working-notes.md        # Active session notes (NOT COMMITTED)
```

### File Purposes

#### session-notes.md (Committed)
**Purpose**: Document completed sessions for future reference

**Use when**: 
- End of a development session
- Completed a feature or major bug fix
- Discovered something worth remembering

**Contains**: Summaries of what was accomplished, key findings, decisions made, and outcomes. This is the historical record.

#### patterns-discovered.md (Committed)
**Purpose**: Document recurring code patterns, anti-patterns, and design decisions

**Use when**:
- You discover a pattern that should be followed consistently
- You identify an anti-pattern to avoid
- You make an architectural decision that affects multiple files
- You learn something about the codebase structure

**Contains**: Structured pattern documentation with context, problem, solution, examples, and related files.

#### scratch/working-notes.md (NOT Committed)
**Purpose**: Active session work-in-progress notes

**Use when**:
- Starting a new task
- Debugging an issue
- During active development
- Tracking current thoughts and next steps

**Contains**: Current task details, approach, findings, decisions, blockers, and ephemeral notes. This is your scratch space.

**Important**: At the end of your session, extract key findings into `session-notes.md` before closing. The scratch notes are ephemeral and help you maintain focus during active work.

## Workflow Integration

### During TDD (Test-Driven Development)

1. **Before starting** (scratch/working-notes.md):
   - Document the feature/bug you're working on
   - Note your planned approach
   - Reference relevant patterns from patterns-discovered.md

2. **During development** (scratch/working-notes.md):
   - Track which tests you're writing
   - Note unexpected behaviors or test failures
   - Document decisions about implementation approach

3. **After completing** (session-notes.md + patterns-discovered.md):
   - Summarize what was accomplished in session-notes.md
   - If you discovered a reusable pattern, document it in patterns-discovered.md
   - Clear your scratch/working-notes.md or leave it for review

### During Linting and Code Quality

1. **When running lint** (scratch/working-notes.md):
   - Note categories of lint errors
   - Track systematic fixes being applied
   - Document any controversial linting rules to discuss

2. **After fixes** (patterns-discovered.md):
   - If you found a pattern that caused many lint errors, document the correct pattern
   - Update patterns-discovered.md with code quality insights

### During Debugging

1. **While investigating** (scratch/working-notes.md):
   - Document symptoms and hypotheses
   - Track what you've tried and results
   - Note any dead ends to avoid repeating

2. **After resolution** (session-notes.md + patterns-discovered.md):
   - Document the root cause in session-notes.md
   - If it reveals a pattern or gotcha, add to patterns-discovered.md

## How AI Uses These Files

When you work with AI assistants:

1. **AI reads copilot-instructions.md**: Understands the project's core principles and workflows
2. **AI scans patterns-discovered.md**: Applies learned patterns to suggestions
3. **AI reviews session-notes.md**: Understands recent context and decisions
4. **You reference scratch/working-notes.md**: Share current task context with AI manually

The AI uses this context to:
- Avoid suggesting patterns you've already rejected
- Follow conventions you've established
- Remember architectural decisions
- Provide more relevant code examples
- Understand project-specific gotchas

## Best Practices

### ✅ Do:
- Update scratch/working-notes.md frequently during active work
- Summarize completed work into session-notes.md before ending your session
- Document patterns as soon as you recognize them
- Keep entries concise and actionable
- Reference specific files and line numbers when relevant
- Use dates for session notes

### ❌ Don't:
- Commit scratch/working-notes.md (it's gitignored)
- Copy entire code blocks into patterns (reference file locations instead)
- Document one-time fixes in patterns-discovered.md (use session-notes.md instead)
- Let patterns-discovered.md become too verbose (keep it scannable)
- Forget to update session-notes.md when finishing a session

## Migration Path

If this system becomes too large:
- Archive old session-notes.md entries to a dated file (e.g., session-notes-2026-q1.md)
- Consolidate redundant patterns in patterns-discovered.md
- Promote stable patterns into .github/copilot-instructions.md

## Examples

See the template files in this directory for examples of each format.
