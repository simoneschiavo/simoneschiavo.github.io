---
name: product-brief-creator
description: "Create Product Briefs for early-stage product ideas. Use when validating a problem, exploring a new feature concept, or preparing for a Definition phase decision. Triggers on: create product brief, write brief for, problem brief, validate this idea, brief this feature."
---

# Product Brief Creator

Co-create structured Product Briefs through guided conversation. Ask one question at a time, learn from each answer, and progressively build understanding.

---

## The Job

1. Receive a product idea or problem statement
2. Ask **ONE question at a time** — propose → confirm → next
3. Use previous answers to inform subsequent questions
4. Generate a Product Brief based on the conversation
5. Save to `work/[feature-name]/brief-[feature-name].md`

**Important:** Product Briefs focus on the PROBLEM, not the solution. This is pre-PRD discovery work.

---

## Core Principle: One Question at a Time

**Never ask multiple questions in a single message.**

### The Pattern

1. **Propose** — Based on context or initial input, suggest an answer
2. **Confirm** — Ask user to confirm, adjust, or provide their own answer
3. **Wait** — Do not proceed until user responds
4. **Learn** — Use the answer to inform subsequent questions
5. **Next** — Move to the next question

### Example Flow

```
Based on what you've described, it sounds like the core problem is:
"Users can't find specific records quickly in large datasets"

Is that accurate, or would you frame it differently?
```

User: "Yes, but specifically during live calls when time pressure is high"

```
Got it — the time pressure during calls is key context.

So the audience is likely sales reps who need instant access during customer conversations.

Is that right? Or is there a different primary audience?
```

---

## Step 1: Start with What You Know

When the user provides an initial idea or problem:

1. **Summarize what you understood** from their input
2. **Propose a problem statement** based on that understanding
3. **Ask them to confirm or refine**

```
From what you've shared, here's what I'm hearing:

**Problem:** [Your interpretation]
**Who it affects:** [Your guess based on context]
**Why it matters:** [Implied impact]

Let's start with the problem statement — is my interpretation correct?
```

---

## Step 2: Question Flow (One at a Time)

Work through these areas in order. Skip questions where user has already provided clear answers.

### 1. Problem Statement

```
Q1: What problem are we trying to solve?

Based on [context], it sounds like:
"[Proposed problem statement]"

Is that accurate, or how would you refine it?
```

### 2. Urgency

```
Q2: How urgent is this problem?

A. Critical — blocking revenue or users right now
B. Important — significant pain point causing friction
C. Nice to have — improvement opportunity
D. Exploratory — we're validating if it's a real problem

Which best describes where this sits?
```

### 3. Audience

```
Q3: Who experiences this problem most?

[If you can infer from context:]
Based on the problem, I'd guess this affects [persona/segment] most.

Is that right? Or is there a more specific audience?
```

### 4. Frequency

```
Q4: How often does [audience from Q3] encounter this?

A. Daily — part of their regular workflow
B. Weekly — recurring friction point
C. Occasionally — happens but not constantly
D. At specific moments — [ask them to specify]

[If you can infer:] Given [context from previous answers], I'd guess [frequency]. Sound right?
```

### 5. Evidence

```
Q5: What evidence do we have that this is a real problem?

For example:
- Customer feedback or support tickets
- Usage data or analytics
- User research or interviews
- Competitive analysis
- Internal observation

What signals led to this being on your radar?
```

**Follow-up if vague:**
```
Can you be more specific? For instance:
- How many support tickets?
- What did users say in interviews?
- What does the data show?

Specifics will make the brief more compelling.
```

### 6. Impact

```
Q6: What business impact could solving this have?

Based on [audience] experiencing [problem] [frequency], this could affect:

A. Revenue — ARR growth, expansion, deal size
B. Activation — conversion, onboarding success
C. Retention — churn reduction, engagement
D. Efficiency — time/cost savings
E. Risk — compliance, security, reputation

Which areas? (Can be multiple)
```

**Follow-up to quantify:**
```
Can we put rough numbers on this?

For example:
- "Could reduce churn by X%"
- "Saves Y hours per user per week"
- "Affects Z% of onboarding users"

Even estimates help prioritize.
```

### 7. Constraints

```
Q7: Are there any known constraints we should capture?

For example:
- Technical limitations
- Legal/compliance requirements
- Platform dependencies
- Resource or timeline constraints
- GTM considerations

Or none that you know of yet — that's fine too.
```

### 8. Hypothesis

```
Q8: What's your hypothesis for solving this?

Not a detailed solution — just the direction. For example:
"We believe that [approach] will [outcome] for [audience]"

What's your initial thinking?
```

**If user jumps to solution:**
```
That sounds like a specific solution. Let's step back —

What's the underlying belief about what would make this better?

For example: "If users could filter results, they'd find things faster"
```

### 9. Success Metrics

```
Q9: How would we know if we solved this?

What metrics or signals would prove the hypothesis?

[If you can infer from previous answers:]
Based on our conversation, success might look like:
- [Proposed metric based on impact discussion]
- [Proposed metric based on problem/frequency]

Does that capture it, or what would you measure?
```

---

## Adaptive Questioning

### Use Context from Previous Answers

As you learn more, reference earlier answers:

```
You mentioned [earlier answer]. Given that, I'm curious about [follow-up]...
```

```
Since this affects [audience] doing [task], the evidence might come from [source].
Have you looked there?
```

### Skip When You Have Enough

If the user provided rich context upfront:

```
You've already covered the problem, audience, and evidence clearly.

Let me confirm what I have:
- Problem: [X]
- Audience: [Y]
- Evidence: [Z]

Should I move to impact and constraints, or did I miss anything?
```

### Dig Deeper When Vague

```
"Users are frustrated" is a start, but can we get more specific?

- How many users?
- What specifically frustrates them?
- How do we know they're frustrated?
```

---

## Step 3: Summarize Before Generating

Before writing the brief, confirm understanding:

```
Here's what I've captured:

**Problem:** [Summary]
**Audience:** [Who]
**Evidence:** [What we know]
**Impact:** [Expected outcomes]
**Constraints:** [Limitations]
**Hypothesis:** [Direction]
**Success metrics:** [How we'll measure]

Ready for me to generate the brief? Or anything to adjust?
```

---

## Step 2: Generate the Brief

Use this structure (matching the template):

```markdown
# Product Brief: [Feature Name]

## Problem Overview

[Short, factual description of the problem]

## Audience

[Who experiences this? Persona, ICP, or workflow context]

## Evidence

- [Data point or source]
- [Research finding]
- [Customer feedback]
- [Analyst insight if applicable]

## Impact

- **[Impact type]:** [Expected outcome]
- **[Impact type]:** [Expected outcome]

## Constraints

- **Technical:** [If any]
- **Legal:** [If any]
- **GTM:** [If any]
- **Platform:** [If any]

## Hypothesis

[What we believe will solve the problem - the direction, not detailed solution]

## Initial KPIs

[What metrics or signals will prove/disprove the hypothesis]

## Decision Needed

Move to **Definition**?

- [ ] Yes
- [ ] No
```

---

## Writing Guidelines

- **Be concise** - Brief should fit on one page
- **Focus on the problem** - Not the solution details
- **Use evidence** - Avoid speculation without data
- **Be honest about unknowns** - Flag gaps in knowledge
- **Make it actionable** - Clear decision at the end

---

## Output

- **Format:** Markdown (`.md`)
- **Location:** `work/[feature-name]/`
- **Filename:** `brief-[feature-name].md` (kebab-case)

---

## Example Brief

```markdown
# Product Brief: Smart Search Filters

## Problem Overview

Users struggle to find specific records in large datasets. Current search returns too many results, requiring manual scanning through 50+ items to find matches.

## Audience

Sales reps managing 200+ accounts who need to quickly find specific company profiles during calls or meeting prep.

## Evidence

- Support tickets: 23 requests for "better search" in Q4
- Usage data: Average 4.2 searches before finding target record
- User interviews: 8/10 users mentioned search frustration
- Competitor analysis: 3 competitors have faceted search

## Impact

- **Efficiency:** Reduce time-to-find from 2min to 15sec
- **Activation:** Improve new user success rate (currently 34% abandon during first search)
- **Retention:** Address #2 churn reason in exit surveys

## Constraints

- **Technical:** Current search index doesn't support facets - requires migration
- **Platform:** Must work within existing UI component library

## Hypothesis

Adding 3-4 key filter facets (industry, company size, location, last activity) will let users narrow results to <10 items, dramatically reducing search friction.

## Initial KPIs

- Searches-to-success ratio drops from 4.2 to <2
- Search task completion time under 30 seconds
- Support tickets for search issues decrease 50%

## Decision Needed

Move to **Definition**?

- [ ] Yes
- [ ] No
```

---

## Checklist

### During Conversation

- [ ] Asked ONE question at a time
- [ ] Proposed answers based on context before asking
- [ ] Used previous answers to inform subsequent questions
- [ ] Dug deeper when answers were vague
- [ ] Skipped questions already answered
- [ ] Summarized understanding before generating brief

### Before Saving

- [ ] All sections have content (or explicitly marked as unknown)
- [ ] Evidence is specific, not vague
- [ ] Hypothesis is about direction, not detailed solution
- [ ] KPIs are measurable
- [ ] User confirmed the summary
- [ ] Saved to `work/[feature-name]/brief-[feature-name].md`
