---
name: linkedin-ads-campaign-planner
description: "Plan LinkedIn ad campaign structure, audiences, budgets, and tracking for B2B SaaS. Use when setting up LinkedIn campaigns, planning ad spend, configuring audiences, or setting up tracking. Triggers on: linkedin campaign structure, campaign plan, ad budget, audience targeting, linkedin tracking, utm setup."
---

# LinkedIn Ads Campaign Planner

Plan campaign structure, audiences, budgets, bidding, and tracking for LinkedIn Ads. Produces actionable campaign plans with audience definitions, budget allocation, and tracking checklists.

> **Note:** For ad copy and creative briefs, use `/linkedin-ads-creative`.

---

## The Job

1. Check existing context in `context/business/` for ICP, regions, product info
2. Ask routing questions (one at a time)
3. Gather missing inputs through targeted questions
4. Generate campaign plan and tracking setup
5. Save to `/work/linkedin-ads/`

**Output files (account-level):**
- `campaign-plan.md` — Structure, audiences, budgets, bidding
- `tracking-setup.md` — UTM templates, conversion events, QA checklist

---

## Step 1: Check Existing Context

Before asking questions, scan:
- `context/business/` — ICP, regions, product info
- `context/learning/linkedin-ads/` — research and learnings

Use found context to pre-fill inputs. Only ask about what's missing.

---

## Step 2: Routing Questions (Ask One at a Time)

### Question 1: What do you need?

```
What do you need help with?

A. Full campaign setup (structure + audiences + budget + tracking)
B. Campaign structure and audiences only
C. Budget planning and allocation only
D. Tracking and attribution setup only
```

### Question 2: Current state

```
What's your current LinkedIn Ads state?

A. Starting from scratch (no campaigns yet)
B. Have campaigns but need restructuring
C. Have campaigns, adding new funnel stage or audience
```

### Question 3: Budget range

```
What's your monthly LinkedIn Ads budget?

A. < €3,000 (focused approach needed)
B. €3,000 - €15,000 (standard full funnel)
C. > €15,000 (full funnel + ABM + testing)
```

---

## Step 3: Gather Missing Inputs

Ask only for inputs not found in existing context. One question at a time.

**Required inputs:**
- **Regions**: Target countries/regions
- **ICP**: Industries + company sizes
- **Personas**: Job functions + seniority levels (1-3 personas)
- **Primary conversion goal**: Demo, trial, assessment, content download
- **Key site pages**: Pricing URL, demo URL, content hub URL

**Technical inputs (for tracking setup):**
- **GTM installed?** Yes/No
- **GA4 set up?** Yes/No
- **CRM**: HubSpot/Salesforce/Other/None
- **Insight Tag status**: Active/Not installed/Unknown

---

## Step 4: Generate Campaign Plan

### Campaign Architecture

Use hierarchy: **Account → Campaign Group → Campaign → Ads**

**Standard campaign groups:**
1. TOFU – Awareness
2. MOFU – Consideration
3. BOFU – Conversion
4. (Optional) ABM – Target Accounts

### Campaign Structure Rules

- 1 objective per campaign
- 1 audience per campaign
- 2-5 ads per campaign
- Never mix cold + retargeting
- Never mix different personas

### Naming Convention

`[Stage]_[Objective]_[Persona]_[Region]_[Offer]_[Format]_[MMYY]`

Example: `MOFU_LeadGen_MktOps_EU_CaseStudy_Carousel_0126`

### Audience Definitions

See [references/audience-targeting.md](references/audience-targeting.md) for:
- Cold audience stacks
- ABM setup (account + contact lists)
- Retargeting segments
- Required exclusions

### Budget Allocation

See [references/budget-bidding.md](references/budget-bidding.md) for:
- Budget allocation by funnel stage
- Minimum viability thresholds
- Format recommendations by budget
- Bidding strategy selection

---

## Step 5: Generate Tracking Setup

See [references/tracking-attribution.md](references/tracking-attribution.md) for:
- UTM standard
- Conversion event setup
- QA checklist
- Attribution window recommendations

---

## Step 6: Save Output

Save files to the root linkedin-ads folder (account-level documents):

```
/work/linkedin-ads/
├── campaign-plan.md      # Account structure
├── tracking-setup.md     # Tracking config
└── [topic]-[funnel]/     # Creative work (from /linkedin-ads-creative)
```

---

## Campaign Plan Output Format

```markdown
# LinkedIn Campaign Plan

**Last Updated:** [Date]
**Monthly Budget:** €[amount]
**Regions:** [regions]

---

## Campaign Groups

### 1. TOFU – Awareness
[Objective, KPIs, role]

### 2. MOFU – Consideration
[Objective, KPIs, role]

### 3. BOFU – Conversion
[Objective, KPIs, role]

---

## Campaigns

### Campaign 1: [Name]
- **Group:** [TOFU/MOFU/BOFU]
- **Objective:** [LinkedIn objective]
- **Audience:** [Definition]
- **Exclusions:** [List]
- **Budget:** €[amount]/month
- **Bidding:** [Manual CPC / Automated]
- **Formats:** [Recommended]

[Repeat for each campaign]

---

## Audience Definitions

### Cold Audiences
[Targeting stack for each persona]

### Retargeting Audiences
- All site visitors (90d)
- High-intent pages (30d): [URLs]
- Video viewers (25%+)
- Ad engagers

### Exclusions (Apply to All)
- Employees
- Existing customers
- Recent converters (thank-you page visitors)

---

## Budget Allocation

| Stage | % of Budget | €/Month |
|-------|-------------|---------|
| TOFU | X% | €X |
| MOFU | X% | €X |
| BOFU | X% | €X |
| Retargeting | X% | €X |

[Budget warnings if applicable]

---

## Bidding Strategy

- **Starting approach:** [Manual CPC / Automated]
- **When to switch:** [Conditions]
- **Optimization cadence:** Weekly

---

## Next Steps

1. [ ] Set up Insight Tag (if needed)
2. [ ] Create conversion events
3. [ ] Build audiences in Campaign Manager
4. [ ] Create campaigns
5. [ ] Use `/linkedin-ads-creative` for copy and creative
```

---

## Tracking Setup Output Format

```markdown
# LinkedIn Tracking Setup

**Last Updated:** [Date]

---

## UTM Standard

| Parameter | Value |
|-----------|-------|
| utm_source | linkedin |
| utm_medium | paid_social |
| utm_campaign | [campaign_name] |
| utm_content | [ad_name_or_variant] |
| utm_term | [audience_or_persona] (optional) |

### UTM Templates

**TOFU:**
`?utm_source=linkedin&utm_medium=paid_social&utm_campaign=tofu_[offer]&utm_content=[ad_variant]`

**MOFU:**
`?utm_source=linkedin&utm_medium=paid_social&utm_campaign=mofu_[offer]&utm_content=[ad_variant]`

**BOFU:**
`?utm_source=linkedin&utm_medium=paid_social&utm_campaign=bofu_[offer]&utm_content=[ad_variant]`

---

## Conversion Events

| Event Name | Type | Trigger |
|------------|------|---------|
| Demo Request | URL | /demo-thank-you |
| Trial Signup | URL | /trial-thank-you |
| [Other] | [URL/Event] | [Trigger] |

**Attribution Window:** 30-day click, 7-day view (adjust for sales cycle)

---

## QA Checklist

### Before Launch
- [ ] Insight Tag status: Active
- [ ] Conversion events firing correctly
- [ ] UTMs on all destination URLs
- [ ] GA4 receiving events
- [ ] CRM capturing source/campaign
- [ ] Thank-you pages unique per conversion
- [ ] Exclusion audiences created

### Weekly Check
- [ ] Spend pacing on track
- [ ] CTR within benchmarks
- [ ] Landing page view rate healthy
- [ ] Conversions firing
- [ ] CPA within target

---

## Reporting Notes

- **LinkedIn:** Reports last-touch within window (includes view-through)
- **GA4:** Reports last non-direct click (no view-through)
- **CRM:** Ultimate judge of lead quality

These won't match 1:1. Use CRM pipeline as source of truth for quality.
```

---

## Reference Files

- [Audience Targeting Guide](references/audience-targeting.md)
- [Budget and Bidding Guide](references/budget-bidding.md)
- [Tracking and Attribution Guide](references/tracking-attribution.md)
