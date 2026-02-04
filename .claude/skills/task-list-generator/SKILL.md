---
name: task-list-generator
description: Creates detailed, step-by-step task lists from user requirements, feature requests, or documentation. Guides developers through implementation with structured parent tasks and actionable sub-tasks.
---

# Task List Generator

## Instructions

### Phase 1: Receive and Analyze Requirements

When a user requests a task list:

1. **Identify the source** of requirements:
   - Direct feature request from user
   - Existing PRD or documentation
   - User story or specification

2. **Analyze the requirements** to understand:
   - Core functionality needed
   - Implementation scope
   - Technical dependencies
   - Testing requirements

3. **Determine feature name** for file naming (use kebab-case, e.g., "user-profile-editing")

### Phase 2: Generate Parent Tasks

Create the high-level structure:

1. **Always include Task 0.0** as the first task:
   ```markdown
   - [ ] 0.0 Create feature branch
     - [ ] 0.1 Create and checkout a new branch for this feature (e.g., `git checkout -b feature/[feature-name]`)
   ```
   **Exception:** Only skip this if the user explicitly requests not to create a branch.

2. **Generate 4-6 additional parent tasks** that represent major implementation phases:
   - Setup and configuration
   - Core functionality implementation
   - UI/UX components
   - Integration and testing
   - Documentation and cleanup

3. **Present parent tasks only** (no sub-tasks yet) to the user

4. **Add this exact message**:
   ```
   I have generated the high-level tasks based on your requirements. Ready to generate the sub-tasks? Respond with 'Go' to proceed.
   ```

5. **Wait for user confirmation** - do not proceed to Phase 3 until user responds with "Go"

### Phase 3: Generate Sub-Tasks (After User Confirms)

Once the user responds with "Go":

1. **Break down each parent task** into 2-8 actionable sub-tasks

2. **Make sub-tasks specific and testable**:
   - Good: "Create UserProfile component in `components/UserProfile.tsx`"
   - Poor: "Work on user profile stuff"

3. **Include testing sub-tasks** where appropriate:
   - "Write unit tests for [component/function]"
   - "Test [specific functionality]"

4. **Order sub-tasks logically**:
   - Dependencies come first
   - Implementation before testing
   - Integration after individual components

5. **Keep sub-tasks atomic**: Each should be completable in one focused work session

### Phase 4: Identify Relevant Files

Based on the tasks, list files that will likely be:
- Created
- Modified
- Tested

**Format for each file entry:**
```markdown
- `path/to/file.ts` - Brief description of purpose (e.g., "Main component for feature")
- `path/to/file.test.ts` - Unit tests for `file.ts`
```

**Include:**
- Source files
- Corresponding test files
- Configuration files
- Documentation files

### Phase 5: Generate Complete Output

Combine all sections into the final structure:

```markdown
## Relevant Files

[List of files with descriptions]

### Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use `npx jest [optional/path/to/test/file]` to run tests. Running without a path executes all tests found by the Jest configuration.

## Instructions for Completing Tasks

**IMPORTANT:** As you complete each task, you must check it off in this markdown file by changing `- [ ]` to `- [x]`. This helps track progress and ensures you don't skip any steps.

Example:
- `- [ ] 1.1 Read file` → `- [x] 1.1 Read file` (after completing)

Update the file after completing each sub-task, not just after completing an entire parent task.

## Tasks

- [ ] 0.0 Create feature branch
  - [ ] 0.1 Create and checkout a new branch for this feature (e.g., `git checkout -b feature/[feature-name]`)
- [ ] 1.0 [Parent Task Title]
  - [ ] 1.1 [Sub-task description]
  - [ ] 1.2 [Sub-task description]
- [ ] 2.0 [Parent Task Title]
  - [ ] 2.1 [Sub-task description]
  - [ ] 2.2 [Sub-task description]
[... additional tasks ...]
```

### Phase 6: Save and Present

1. **Save the file** to `/mnt/user-data/outputs/tasks-[feature-name].md`
2. **Use kebab-case** for feature name (e.g., `tasks-user-authentication.md`)
3. **Present the file** using present_files tool

## Task Writing Guidelines

**Target Audience:** Junior developers

### Good Task Characteristics

✅ **Specific**: "Create `LoginForm.tsx` component with email and password fields"
✅ **Actionable**: "Install and configure Jest for unit testing"
✅ **Testable**: "Verify form submission triggers API call"
✅ **Self-contained**: Task can be completed independently

### Poor Task Characteristics

❌ **Vague**: "Work on login stuff"
❌ **Too broad**: "Build entire authentication system"
❌ **Ambiguous**: "Make it work better"
❌ **Dependent on unclear context**: "Fix the issue"

### Task Complexity Guidelines

- **Parent tasks**: High-level goals (e.g., "Implement user authentication")
- **Sub-tasks**: Specific actions (e.g., "Create login API endpoint at `/api/auth/login`")
- **Granularity**: Each sub-task should take 15 minutes to 2 hours

## Examples

### Example 1: Good Parent Task with Sub-tasks

```markdown
- [ ] 2.0 Implement user authentication
  - [ ] 2.1 Create `lib/auth/jwt.ts` with token generation and validation functions
  - [ ] 2.2 Create `pages/api/auth/login.ts` API route for user login
  - [ ] 2.3 Create `pages/api/auth/register.ts` API route for user registration
  - [ ] 2.4 Add authentication middleware to `middleware.ts`
  - [ ] 2.5 Write unit tests for JWT utility functions in `lib/auth/jwt.test.ts`
  - [ ] 2.6 Write integration tests for login and register endpoints
```

### Example 2: Good Relevant Files Section

```markdown
## Relevant Files

- `components/LoginForm.tsx` - React component for user login interface
- `components/LoginForm.test.tsx` - Unit tests for LoginForm component
- `lib/auth/jwt.ts` - JWT token generation and validation utilities
- `lib/auth/jwt.test.ts` - Unit tests for JWT utilities
- `pages/api/auth/login.ts` - API endpoint for user login
- `pages/api/auth/login.test.ts` - Integration tests for login endpoint
- `middleware.ts` - Authentication middleware for protected routes
- `types/auth.ts` - TypeScript types for authentication
```

### Example 3: Good vs Poor Sub-tasks

**Good:**
```markdown
- [ ] 3.1 Create `UserProfile.tsx` component with props interface for name, email, and avatar
- [ ] 3.2 Add form validation using Zod schema for email format and required fields
- [ ] 3.3 Implement handleSubmit function to call PUT `/api/user/profile` endpoint
```

**Poor:**
```markdown
- [ ] 3.1 Make user profile page
- [ ] 3.2 Add validation
- [ ] 3.3 Make it save
```

## Common Task Categories

Most features will include tasks in these categories:

1. **Setup & Configuration**
   - Create feature branch
   - Install dependencies
   - Configure tools/libraries

2. **Data Layer**
   - Define types/interfaces
   - Create database schemas
   - Set up API endpoints

3. **Business Logic**
   - Implement core functions
   - Add validation
   - Handle error cases

4. **UI Components**
   - Create React components
   - Add styling
   - Implement user interactions

5. **Integration**
   - Connect components to APIs
   - Add state management
   - Handle loading/error states

6. **Testing**
   - Write unit tests
   - Write integration tests
   - Test edge cases

7. **Documentation & Cleanup**
   - Add code comments
   - Update README
   - Remove debug code

## Quality Checklist

Before finalizing the task list, verify:
- [ ] Task 0.0 "Create feature branch" is included (unless explicitly skipped)
- [ ] Parent tasks are high-level and logical
- [ ] Sub-tasks are specific and actionable
- [ ] Each sub-task is independently completable
- [ ] Testing tasks are included where appropriate
- [ ] File paths in sub-tasks are specific
- [ ] Relevant files section includes both source and test files
- [ ] Language is clear for junior developers
- [ ] Task order follows logical dependencies

## Two-Phase Interaction Model

**Critical:** This skill requires explicit user confirmation between phases:

**Phase 1 Output:**
```markdown
## Tasks

- [ ] 0.0 Create feature branch
  - [ ] 0.1 Create and checkout a new branch...
- [ ] 1.0 Setup project structure
- [ ] 2.0 Implement core functionality
- [ ] 3.0 Create UI components
- [ ] 4.0 Add testing
- [ ] 5.0 Documentation and cleanup

I have generated the high-level tasks based on your requirements. Ready to generate the sub-tasks? Respond with 'Go' to proceed.
```

**Wait for "Go"**

**Phase 2 Output:**
```markdown
[Complete task list with all sub-tasks expanded]
```

## Final Reminders

- **Do NOT implement the tasks** - the task list is the deliverable
- **Wait for "Go"** before generating sub-tasks
- **Always include branch creation** as Task 0.0 unless explicitly told not to
- **Make tasks specific** with file paths and function names where possible
- **Target junior developers** - assume limited context and experience