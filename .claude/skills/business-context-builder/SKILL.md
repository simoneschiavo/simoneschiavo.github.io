---
name: business-context-builder
description: "Build business context for high-precision agent execution. Use when setting up a new business in the system, when context is missing for other skills, or when asked to gather business information. Triggers on: business context, set up business, company profile, icp definition, business setup."
---

# Business Context Builder

Co-create business context with the user through guided questions. Uses the company website to pre-fill answers intelligently. Other skills read from these files to execute with precision.

---

## The Job

1. **Ask for website first**
2. Analyze website to understand the business
3. Check existing context in `/context/business/`
4. Ask what depth is needed
5. For each missing section, **propose values based on website** → user accepts or edits
6. Save to separate files in `/context/business/`

**Key principle:** Always ONE question at a time. Propose, then wait for confirmation.

---

## Output Files

```
/context/business/
├── identity.md         # Who you are
├── icp.md              # Who you sell to
├── product.md          # What you sell + value prop
├── positioning.md      # Why you win (differentiation + proof)
├── gtm.md              # How you grow (strategy + budget)
├── stack.md            # Technical setup
├── performance.md      # Historical data + content assets
├── constraints.md      # Decision rules + compliance
└── brand-guidelines.md # Visual identity + messaging + tone
```

---

## Step 1: Get Website First

Start with:
```
What's your company website?
```

Once provided, use WebFetch to analyze:
- Homepage (main value prop, positioning)
- Pricing page (if exists) → pricing model, sales motion
- About page (if exists) → company info, stage
- Product/features page → use cases, differentiators

Store insights for use in subsequent questions.

---

## Step 2: Check Existing Context

Read `/context/business/` and list which files exist vs missing.

---

## Step 3: Determine Depth

```
What level of business context do you need?

A. Minimum viable — Core files only (identity, icp, product, gtm)
B. High-precision — All files for full context
C. Fill gaps only — Complete only what's missing
```

---

## Step 4: Gather Context (Propose → Confirm)

For each file, work through fields ONE at a time:

### The Pattern

1. **Propose a value** based on website analysis
2. **Ask user to confirm or edit**
3. **Wait for response** before next question
4. **Save file** when complete, then move to next

### Example Flow

```
Based on your website, it looks like you're in the **B2B SaaS / Sales Intelligence** space.

Is that correct, or would you describe it differently?
```

User: "Yes, that's right" → Save and move on

User: "Actually, we're more MarTech focused" → Update and move on

### When you can't infer from website

If the website doesn't provide enough info:
```
I couldn't determine your target company sizes from the website.

What company sizes do you typically target?
- Examples: 11-50, 51-200, 201-1000, 1000+
```

### When users want to skip

- Mark as `[TBD]` in the file
- Move to next question
- Note it can be filled later

---

## Step 5: File Order

**Minimum Viable:**
1. identity.md
2. icp.md
3. product.md
4. gtm.md (budget portion only)

**High-Precision (additional):**
5. positioning.md
6. gtm.md (full)
7. stack.md
8. performance.md
9. constraints.md
10. brand-guidelines.md

---

## Step 6: Save Each File

Save each file as you complete it. Don't wait until the end.

**Update behavior:**
- If file exists, update only changed fields
- Preserve existing data
- Add "Last Updated" timestamp

---

## Propose → Confirm Examples

### For identity.md

```
Based on your website:
- **Industry:** B2B SaaS / Sales Intelligence
- **Business Model:** SaaS (subscription)
- **Stage:** Scale (based on customer logos and team size)

Does this look right? Edit anything that's off.
```

### For icp.md

```
From your website, it looks like you target:
- **Industries:** B2B SaaS, Tech, Professional Services
- **Company Size:** 50-1000 employees (mid-market focus)
- **Personas:** Sales leaders, Revenue Operations, VP Sales

Correct? Or would you adjust any of these?
```

### For product.md

```
Based on your product pages, your core use cases seem to be:
1. Finding new prospects that match your ICP
2. Enriching existing CRM data
3. Identifying buying signals

Is that accurate? What would you add or change?
```

### For brand-guidelines.md

```
Based on your website, I've identified these brand elements:

**Visual Identity:**
- Primary color: Deep blue (#1E3A8A) - used in headers and CTAs
- Secondary color: Light gray (#F3F4F6) - backgrounds
- Accent: Teal (#0D9488) - highlights and links
- Typography: Sans-serif (appears to be Inter or similar) for both headings and body

**Tone of Voice:**
- Professional but approachable
- Direct and confident
- Technical but accessible

**Visual Style:**
- Clean, minimalist aesthetic
- Mix of custom illustrations and product screenshots
- Light mode dominant

Does this capture your brand accurately? What would you adjust or add?
```

### For fields you can't infer

```
I couldn't find pricing details on your website.

What's your sales motion?
A. Self-serve (customers buy without sales)
B. Sales-assisted (sales helps but not required)
C. Enterprise (always involves sales)
```

---

## What to Look for on Website

### Homepage
- Main headline → value proposition
- Subheadline → target audience hints
- Hero CTA → sales motion (demo vs trial vs signup)
- Customer logos → company size/industry signals

### Pricing Page
- Pricing model (subscription, usage, etc.)
- Plan tiers → target segments
- "Contact sales" vs "Buy now" → sales motion
- Enterprise tier → upmarket motion

### About/Company Page
- Company description
- Team size → stage indicator
- Funding mentions → stage indicator
- Office locations → regions

### Product/Features Page
- Feature categories → use cases
- Integrations → tech stack hints
- Comparison tables → competitors

### Customers/Case Studies Page
- Customer logos → ICP industries
- Case study metrics → proof points
- Testimonial quotes → value prop validation

### Brand Elements (Across All Pages)
- **Colors:** Primary and secondary colors used in headers, buttons, links
- **Typography:** Font families for headings vs body text, font weights
- **Visual style:** Illustrations vs photos, minimalist vs detailed, light vs dark
- **Imagery:** People-focused vs product-focused, stock vs custom
- **Logo:** Shape, colors, variations (light/dark backgrounds)
- **Tone:** Formal vs casual, technical vs accessible, playful vs serious
- **CTAs:** Button styles, action words used ("Get Started" vs "Request Demo")
- **Messaging patterns:** How headlines are structured, value prop phrasing

---

## File Formats

### identity.md
```markdown
# Business Identity

**Last Updated:** [Date]

- **Company:** [Name]
- **Website:** [URL]
- **Industry:** [Category]
- **Business Model:** [SaaS / Marketplace / Services / Hybrid]
- **Stage:** [Pre-PMF / Post-PMF / Scale / Enterprise]
- **Regions:** [Countries/regions of operation]
- **Languages:** [Primary languages]
```

### icp.md
```markdown
# ICP & Personas

**Last Updated:** [Date]

## Ideal Customer Profile

- **Industries:** [Target industries]
- **Company Size:** [Employee ranges]
- **Geography:** [Target regions]

## Buyer Personas

| Persona | Title/Function | Seniority | Role |
|---------|---------------|-----------|------|
| [Name] | [Title] | [Level] | Decision-maker / Influencer / User |

## Exclusions (Bad Fit)

- [Types of customers to avoid]
```

### product.md
```markdown
# Product & Value Proposition

**Last Updated:** [Date]

## Product/Offering

- **Core Product:** [What you sell]
- **Top Use Cases:**
  1. [Use case 1]
  2. [Use case 2]
  3. [Use case 3]
- **Pricing Model:** [Subscription / Usage / One-time / Hybrid]
- **Sales Motion:** [Self-serve / Sales-assisted / Enterprise]
- **Free Trial:** [Yes/No, duration]
- **Demo Required:** [Yes/No]
- **Sales Cycle:** [Typical length]

## Value Proposition

### Problems Solved
1. [Problem 1]
2. [Problem 2]
3. [Problem 3]

### Value Levers
- **Revenue:** [How you help grow revenue]
- **Cost:** [How you reduce costs]
- **Risk:** [How you reduce risk]
- **Time:** [How you save time]

### Quantified Outcomes
- [Metric, e.g., "Reduce CAC by 25%"]
```

### positioning.md
```markdown
# Positioning & Proof

**Last Updated:** [Date]

## Differentiation

### Competitors
- **Direct:** [Same problem solvers]
- **Indirect:** [Alternative approaches]

### Key Differentiators
1. [What you do that others don't]
2. [Unique capability]
3. [Unfair advantage]

### Why Customers Choose You
- [Primary reason]

### What You Don't Compete On
- [Intentional gaps]

## Proof & Social Proof

### Customer Logos (Approved)
- [Logo 1]
- [Logo 2]

### Testimonials
> "[Quote]" — [Name], [Title], [Company]

### Case Study Metrics
- [Company]: [Result]

### Awards/Certifications
- [If any]
```

### gtm.md
```markdown
# GTM Strategy & Budget

**Last Updated:** [Date]

## Go-to-Market

- **Primary Channels:** [Paid, organic, outbound, partnerships]
- **Funnel:** [Awareness → Lead → MQL → SQL → Deal]
- **Primary Conversion:** [Demo / Trial / Assessment]
- **Inbound vs Outbound:** [Mix]

## Budget & Goals

- **Monthly Budget:** [Range]
- **Target CPL:** [Amount]
- **Target CAC:** [Amount]
- **Time Horizon:** [Short-term / Long-term]
- **Risk Appetite:** [Conservative / Balanced / Aggressive]
```

### stack.md
```markdown
# Technical Stack

**Last Updated:** [Date]

- **CRM:** [Tool]
- **Analytics:** [Tool]
- **Ad Platforms:** [LinkedIn, Google, Meta, etc.]
- **Tag Management:** [GTM, etc.]
- **Attribution Model:** [First-touch / Last-touch / Multi-touch]

## Known Issues
- [Tracking gaps or data problems]
```

### performance.md
```markdown
# Historical Performance & Assets

**Last Updated:** [Date]

## What Has Worked
- [Successful approaches]

## What Has Failed
- [Failed experiments]

## Benchmarks
- **CPL:** [Current average]
- **Conversion Rate:** [Lead → MQL → SQL]
- **Average Deal Size:** [Amount]

## Seasonality
- [Patterns]

## Content Assets

- **Reports/Guides:** [List]
- **Case Studies:** [List]
- **Webinars:** [List]
- **Product Demos:** [List]
- **Blog/Content Hub:** [URL]
```

### constraints.md
```markdown
# Decision Rules & Compliance

**Last Updated:** [Date]

## Decision Rules

### Success Definition
- [What success looks like]

### Pause Conditions
- [When to stop]

### Scale Conditions
- [When to increase investment]

## Compliance

### Legal Constraints
- [Regulatory requirements]

### Industry-Specific Rules
- [If any]
```

### brand-guidelines.md
```markdown
# Brand Guidelines

**Last Updated:** [Date]

## Visual Identity

### Colors
- **Primary:** [Color name + hex code]
- **Secondary:** [Color name + hex code]
- **Accent:** [Color name + hex code]
- **Background:** [Light/dark + hex codes]
- **Text:** [Default text color + hex code]

### Typography
- **Headings:** [Font family, weights used]
- **Body:** [Font family, weights used]
- **Accent/Display:** [If different]

### Logo
- **Primary logo:** [Description, where to use]
- **Variations:** [Light/dark versions, icon-only]
- **Clear space:** [Minimum spacing rules]
- **Minimum size:** [If known]

### Visual Style
- **Imagery type:** [Photos / Illustrations / Mixed]
- **Photo style:** [People-focused / Product / Abstract]
- **Illustration style:** [Flat / 3D / Hand-drawn / etc.]
- **Overall aesthetic:** [Minimalist / Bold / Technical / Friendly]

## Messaging & Tone

### Tone of Voice
- **Overall:** [e.g., Professional but approachable]
- **Personality traits:** [e.g., Confident, Helpful, Direct]

### Writing Style
- **Sentence structure:** [Short and punchy / Detailed / Mixed]
- **Perspective:** [We/You/They]
- **Formality:** [Formal / Casual / Technical]

### Messaging Patterns
- **Headlines:** [How you structure main headlines]
- **Value props:** [How you communicate value]
- **CTAs:** [Preferred call-to-action phrases]

### Forbidden Language
- [Words/phrases to avoid]
- [Competitor names - mention policy]
- [Industry jargon to avoid]

## Application Examples

### Do's
- [Example of on-brand messaging]
- [Example of on-brand visual treatment]

### Don'ts
- [Example of what to avoid]
- [Common mistakes]

## Assets & Resources

### Logo Files
- [Location or link to logo files]

### Brand Kit
- [Link to Figma/brand kit if exists]

### Templates
- [Available templates]
```

---

## Completion Checklist

### Minimum Viable
- [ ] identity.md
- [ ] icp.md
- [ ] product.md
- [ ] gtm.md (at least budget section)

### High-Precision
- [ ] positioning.md
- [ ] gtm.md (full)
- [ ] stack.md
- [ ] performance.md
- [ ] constraints.md
- [ ] brand-guidelines.md

---

## Reference Files

- [All Questions by Section](references/context-template.md)
