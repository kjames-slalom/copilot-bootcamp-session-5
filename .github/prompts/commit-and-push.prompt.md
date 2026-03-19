---
description: "Analyze changes, generate commit message, and push to feature branch"
tools: [read, execute, todo]
---

# Commit and Push Changes

Analyze the current changes, generate a descriptive commit message using conventional commit format, and push to a feature branch.

## Input

Branch Name: ${input:branch-name:Enter the feature branch name (e.g., feature/add-todo-service)}

## Instructions

### 1. Validate Branch Name

Ensure the branch name was provided. If not provided, stop and ask the user for the branch name.

### 2. Analyze Changes

Run: `git status` and `git diff`

Review:
- Which files were modified, added, or deleted
- The nature of the changes (feature, fix, chore, etc.)
- Scope of the changes (backend, frontend, both)

### 3. Generate Conventional Commit Message

Use the format from `.github/copilot-instructions.md`:

**Format**: `<type>: <description>`

**Types**:
- `feat:` - New feature
- `fix:` - Bug fix
- `chore:` - Maintenance tasks
- `docs:` - Documentation changes
- `test:` - Test additions or fixes
- `refactor:` - Code restructuring

**Examples**:
- `feat: add todo creation endpoint`
- `test: add tests for todo service`
- `fix: resolve todo deletion error`
- `chore: fix lint errors in backend`

Generate a clear, descriptive commit message based on the changes analyzed.

### 4. Create or Switch to Branch

Check if the branch exists:
- Run: `git branch --list ${branch-name}`

If branch doesn't exist:
- Run: `git checkout -b ${branch-name}`

If branch exists:
- Run: `git checkout ${branch-name}`

### 5. Stage All Changes

Run: `git add .`

This stages all modified, new, and deleted files.

### 6. Commit Changes

Run: `git commit -m "<your-generated-commit-message>"`

Show the commit message to the user before committing.

### 7. Push to Feature Branch

Run: `git push origin ${branch-name}`

**CRITICAL**: ONLY push to the user-provided branch name. DO NOT push to `main` or any other branch.

### 8. Confirm Success

Report:
- ✅ Branch created/switched: `${branch-name}`
- ✅ Changes staged and committed with message: `<commit-message>`
- ✅ Pushed to remote: `origin/${branch-name}`

## Reference

This prompt inherits knowledge from:
- `.github/copilot-instructions.md` - Git Workflow section (conventional commits, branch strategy)

## Success Criteria

You've completed this prompt successfully when:
- ✅ Valid conventional commit message generated
- ✅ Correct branch created or switched to
- ✅ All changes staged with `git add .`
- ✅ Changes committed with descriptive message
- ✅ Changes pushed to the specified feature branch only
- ✅ User is informed of the commit and push status
