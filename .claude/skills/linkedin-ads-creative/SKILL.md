---
name: linkedin-ads-creative
description: "Create LinkedIn ad copy and creative briefs for B2B SaaS campaigns. Use when writing LinkedIn ads, creating ad copy, or generating creative briefs. Triggers on: linkedin ad, write ad copy, ad creative, ad copywriting, creative brief."
---

# LinkedIn Ads Creative

Create high-converting LinkedIn ad copy and creative briefs for B2B SaaS, following proven patterns for each funnel stage.

> **Note:** For campaign structure, audience targeting, budgets, and tracking setup, use `/linkedin-ads-campaign-planner`.

---

## The Job

1. Check existing context in `context/business/` for ICP, brand voice, differentiators
2. Ask routing questions (one at a time)
3. Gather missing inputs through targeted questions
4. Generate copy variations and/or creative brief
5. Save to `/work/linkedin-ads/[topic]-[funnel]/`

**Output files:**
- `copy.md` — 3 variations (question hook, contrarian hook, metric/proof hook)
- `creative-brief.md` — visual direction (only if creative help requested)

---

## Step 1: Check Existing Context

Before asking questions, scan these locations:
- `context/business/` — ICP, brand voice, product info
- `context/learning/linkedin-ads/` — research and learnings

Use found context to pre-fill inputs. Only ask about what's missing.

---

## Step 2: Routing Questions (Ask One at a Time)

### Question 1: Funnel Stage

```
What funnel stage is this ad for?

A. TOFU (Awareness) — Make them care. Cold audience, teaching/reframing.
B. MOFU (Consideration) — Prove it. Warm audience, case studies/demos.
C. BOFU (Conversion) — Close the loop. Hot audience, demos/trials.
```

### Question 2: Deliverable

```
What do you need help with?

A. Copywriting only
B. Creative direction only
C. Both copy and creative
```

### Question 3: Offer Type

Based on funnel stage, offer relevant options:

**TOFU:**
- Report/guide, Checklist/framework, POV content, Short video script

**MOFU:**
- Case study, Webinar, Product demo, ROI calculator, Comparison page

**BOFU:**
- Demo request, Free trial, Assessment/audit, Pilot program

---

## Step 3: Gather Missing Inputs

Ask only for inputs not found in existing context. One question at a time.

**Required inputs:**
- **ICP**: Industry, company size, region
- **Persona**: Demand Gen / Marketing Ops / CMO / RevOps / Founder
- **Main pain point**: The business problem being solved
- **Outcome/promise**: The result they'll achieve
- **Proof**: Metrics, logos, testimonials (at least one)

**Optional inputs:**
- **Differentiators**: What you do that others don't (max 3)
- **Tone**: Straight / Bold / Conversational (default: straight)
- **Constraints**: Character limits, banned phrases, compliance

---

## Step 4: Generate Output

### For Copywriting

Generate 3 variations using templates from [references/copy-templates.md](references/copy-templates.md).

Each variation includes:
- Primary text (2-4 lines)
- Headline (≤70 chars)
- CTA suggestion
- Creative direction hint (1 line)

**Hook types:**
1. **Question hook** — Opens with a pain-point question
2. **Contrarian hook** — Challenges conventional thinking
3. **Metric/proof hook** — Leads with specific data or result

### For Creative Brief

Generate brief using guidelines from [references/creative-guidelines.md](references/creative-guidelines.md).

Include:
- Core message (matches copy)
- Visual concept
- Text overlay suggestion
- Format recommendation (see [references/format-selection.md](references/format-selection.md))
- Mobile-first notes

---

## Step 5: Save Output

Create folder and save files:

```
/work/linkedin-ads/[topic]-[funnel]/
├── copy.md
└── creative-brief.md  (if creative requested)
```

**Naming:**
- `[topic]` = kebab-case description (e.g., `geo-visibility`, `ai-search-playbook`)
- `[funnel]` = `tofu`, `mofu`, or `bofu`

Example: `/work/linkedin-ads/regional-intent-signals-mofu/copy.md`

---

## Copy Output Format

```markdown
# LinkedIn Ad Copy: [Topic]

**Funnel Stage:** [TOFU/MOFU/BOFU]
**Persona:** [Target persona]
**Offer:** [Offer type]

---

## Variation 1: Question Hook

**Primary Text:**
[2-4 lines]

**Headline:** [≤70 chars]
**CTA:** [Button text]
**Creative hint:** [1 line visual direction]

---

## Variation 2: Contrarian Hook

[Same structure]

---

## Variation 3: Metric/Proof Hook

[Same structure]

---

## Recommended Format

[Single image / Carousel / Video / Document ad]
[Why this format fits the campaign]
```

---

## Creative Brief Output Format

```markdown
# Creative Brief: [Topic]

**Funnel Stage:** [TOFU/MOFU/BOFU]
**Format:** [Recommended format]

---

## Core Message

[The single promise — must match copy]

---

## Visual Concept

[Description of the visual approach]

---

## Text Overlay

**Headline:** [5-7 words max]
**Supporting text:** [Optional, if needed]

---

## Design Guidelines

- [Specific guidance for this ad]
- [Color/contrast notes]
- [What to show/avoid]

---

## Mobile-First Checklist

- [ ] Headline readable at small size
- [ ] No small text or busy UI screenshots
- [ ] High contrast maintained
- [ ] Brand mark visible but subtle
```

---

## Reference Files

- [Copy Templates by Funnel Stage](references/copy-templates.md)
- [Creative Guidelines](references/creative-guidelines.md)
- [Format Selection Guide](references/format-selection.md)
