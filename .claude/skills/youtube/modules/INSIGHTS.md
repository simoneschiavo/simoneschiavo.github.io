# Insights Module

Extract structured insights from YouTube video transcripts.

---

## When to Use

- After fetching a transcript
- User wants analysis, not just raw text
- Building the knowledge base

---

## Step 1: Identify Video Type

Categorize the content:

| Type | Characteristics |
|------|-----------------|
| **Tutorial** | Step-by-step how-to |
| **Interview** | Conversation, Q&A format |
| **Course** | Educational, structured curriculum |
| **Analysis** | Opinion, breakdown, review |
| **Case Study** | Specific example deep-dive |

---

## Step 2: Extract Based on Type

**For Tutorials:**
- Step-by-step process
- Tools/resources mentioned
- Common mistakes to avoid
- Prerequisites

**For Interviews:**
- Key quotes (with attribution)
- Frameworks/mental models
- Actionable insights
- Disagreements/debates

**For Courses:**
- Core concepts
- Frameworks introduced
- Implementation steps
- Exercises/assignments

**For Analysis:**
- Main argument/thesis
- Supporting evidence
- Counterpoints considered
- Conclusions

**For Case Studies:**
- Context/background
- Problem faced
- Solution implemented
- Results/outcomes
- Lessons learned

---

## Step 3: Create Output

Generate structured summary:

```markdown
# {Video Title}

**Source:** {URL}
**Type:** {video type}
**Date Processed:** {YYYY-MM-DD}

## Key Takeaways
- [Insight 1]
- [Insight 2]
- [Insight 3]
- [Insight 4]
- [Insight 5]

## Frameworks/Concepts
- **{Framework Name}**: {brief description}
- **{Concept Name}**: {brief description}

## Actionable Items
- [ ] {Action 1}
- [ ] {Action 2}
- [ ] {Action 3}

## Quotes Worth Saving
> "{Quote 1}" - {Speaker}

> "{Quote 2}" - {Speaker}

## Questions Raised
- {Question 1}
- {Question 2}

## Connection to Existing Knowledge
- Relates to: {existing topic in context/}
- Builds on: {previous learning}
- Contradicts: {if applicable}
```

---

## Step 4: Determine Topic Folder

Choose or create folder in `context/learning/`:

| Topic | Examples |
|-------|----------|
| `ai-tools/` | Claude, AI tools, prompting |
| `marketing/` | Content, growth, sales |
| `business/` | Strategy, operations |
| `productivity/` | Systems, workflows |
| `automation/` | Workflows, integrations |
| `{new-topic}/` | Create if needed |

---

## Step 5: Save Output

Save to: `context/learning/{topic}/{video-title-slug}.md`

Example: `context/learning/ai-tools/advanced-prompt-engineering.md`

---

## Quality Checks

Before saving, verify:
- [ ] Key takeaways are actionable, not vague
- [ ] Frameworks are clearly explained
- [ ] Quotes are accurate (if available)
- [ ] Connections to existing knowledge are meaningful
- [ ] Topic folder is appropriate
