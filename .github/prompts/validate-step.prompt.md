---
description: "Validate that all success criteria for the current step are met"
agent: "code-reviewer"
tools: [search, read, execute, web, todo]
---

# Validate Step Success Criteria

You are validating step completion using the **code-reviewer** agent for systematic verification.

## Input

Step Number: ${input:step-number:Enter the step number (e.g., 5-0, 5-1, 5-2)}

## Instructions

### 1. Find the Main Exercise Issue

Run: `gh issue list --state open`

Find the issue with "Exercise:" in the title and note its number.

### 2. Get Issue with Comments

Run: `gh issue view <issue-number> --comments`

This shows the main issue description and all step comments.

### 3. Locate the Specified Step

Search through the issue for: `# Step ${step-number}:`

For example:
- `# Step 5-0:` for step 5-0
- `# Step 5-1:` for step 5-1
- `# Step 5-2:` for step 5-2

### 4. Extract Success Criteria

Find the section labeled **Success Criteria** or similar within that step.

This section lists what must be accomplished, such as:
- Files that should exist
- Tests that should pass
- Code that should be implemented
- Lint errors that should be fixed

### 5. Verify Each Criterion

For each success criterion, check the workspace:

**File existence**:
- Use `#tool:file_search` or check file system
- Confirm files listed in criteria exist

**Test execution**:
- Run `npm test` in the appropriate package directory
- Verify all tests pass
- Report any failures

**Code implementation**:
- Use `#tool:read_file` to check if required code is present
- Verify functionality matches requirements

**Lint errors**:
- Run `npm run lint` in the appropriate package directory
- Confirm no lint errors remain

**Other criteria**:
- Check any other specific requirements listed
- Use appropriate tools to verify each item

### 6. Report Completion Status

Use `#tool:manage_todo_list` to create a checklist:

```markdown
## Step ${step-number} Validation

### Success Criteria Status

- [ ] Criterion 1: Description (✅ Complete / ⚠️ Incomplete / ❌ Failed)
- [ ] Criterion 2: Description (✅ Complete / ⚠️ Incomplete / ❌ Failed)
- [ ] Criterion 3: Description (✅ Complete / ⚠️ Incomplete / ❌ Failed)

### Summary

**Complete**: X/Y criteria
**Status**: [Ready to proceed / Needs attention]

### Recommendations

[Specific guidance for any incomplete or failed items]
```

### 7. Provide Next Steps

If all criteria are met:
- ✅ Congratulate the user
- Suggest running `/commit-and-push` with an appropriate branch name
- Indicate which step to execute next (if applicable)

If criteria are incomplete:
- ⚠️ List what needs attention
- Provide specific guidance to complete remaining items
- Suggest re-running `/validate-step` after fixes

## Reference

This prompt inherits knowledge from:
- `.github/copilot-instructions.md` - Workflow Utilities section (gh CLI commands)
- `.github/copilot-instructions.md` - Validation Before Commit principle

## Success

You've completed this prompt successfully when:
- ✅ Located the specified step in the GitHub issue
- ✅ Extracted all success criteria from that step
- ✅ Verified each criterion against the workspace
- ✅ Provided clear status report with specific guidance
- ✅ Recommended appropriate next steps
