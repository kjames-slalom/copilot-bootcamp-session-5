# Discovered Patterns

Accumulated code patterns, design decisions, and lessons learned across development sessions. Reference this file when implementing similar features or making architectural decisions.

## Pattern Template

Use this template when documenting a new pattern:

```markdown
### Pattern Name

**Context**: When/where this pattern applies

**Problem**: What problem does this solve?

**Solution**: How to implement this pattern

**Example**:
\`\`\`javascript
// Code example showing the pattern
\`\`\`

**Related Files**: 
- path/to/file.js (usage example)
- path/to/test.js (test example)

**Notes**: Additional considerations or gotchas
```

---

## Example Pattern: Service Initialization - Empty Array vs Null

**Context**: When initializing service layer data structures or in-memory stores for collections

**Problem**: Should we initialize collection storage with an empty array `[]` or `null`?

**Solution**: Use empty arrays `[]` for collection initialization, not `null`. This:
- Eliminates null checking in iteration logic
- Provides clear semantic meaning (collection exists, but is empty)
- Follows JavaScript best practices for array handling
- Reduces cognitive load (`.length` always works)

**Example**:
```javascript
// ✅ Do this
class TodoService {
  constructor() {
    this.todos = []; // Empty array, ready for operations
  }
  
  getAll() {
    return this.todos; // No null check needed
  }
}

// ❌ Don't do this
class TodoService {
  constructor() {
    this.todos = null; // Forces null checks everywhere
  }
  
  getAll() {
    return this.todos || []; // Unnecessary defensive code
  }
}
```

**Related Files**: 
- packages/backend/src/services/todoService.js (if it exists)
- Any service layer implementation

**Notes**: 
- This applies to services, repositories, and state management
- For optional data that may truly be "not yet loaded", consider a loading state enum instead of null

---

## Your Patterns

Document patterns you discover below:

### [Pattern Name]

**Context**: 

**Problem**: 

**Solution**: 

**Example**:
```javascript
// Your code example
```

**Related Files**: 
- 

**Notes**: 
