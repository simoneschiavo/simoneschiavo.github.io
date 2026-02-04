# Tracking and Attribution Guide

## Foundation Setup Checklist

Before spending €1, verify:

- [ ] LinkedIn Campaign Manager account created
- [ ] LinkedIn Company Page connected
- [ ] LinkedIn Insight Tag installed site-wide
- [ ] Conversion events configured
- [ ] GA4 (or similar) connected
- [ ] CRM integration ready
- [ ] UTM convention documented

---

## LinkedIn Insight Tag

### Installation Options

1. **GTM (Recommended):** Add via Google Tag Manager
2. **Direct code:** Add to site header

### What "Good" Looks Like

- Tag status: **Active** in Campaign Manager
- Conversions firing on thank-you URLs/events
- Retargeting audiences populating

### Troubleshooting

| Status | Issue | Fix |
|--------|-------|-----|
| Inactive | Tag not firing | Check installation, clear cache |
| Active but no conversions | Events misconfigured | Verify thank-you URLs |
| Low audience size | Traffic issues | Check page URLs match |

---

## UTM Standard

### Required Parameters

| Parameter | Value | Example |
|-----------|-------|---------|
| utm_source | linkedin | linkedin |
| utm_medium | paid_social | paid_social |
| utm_campaign | [group]_[campaign_name] | mofu_casestudy_mktops |
| utm_content | [ad_name_or_variant] | carousel_v1 |

### Optional Parameters

| Parameter | Use For | Example |
|-----------|---------|---------|
| utm_term | Audience/persona | demand_gen_director |

### UTM Template

```
?utm_source=linkedin&utm_medium=paid_social&utm_campaign=[stage]_[offer]_[persona]&utm_content=[ad_variant]
```

### Naming Convention Alignment

Match UTMs to campaign naming:
- Campaign: `MOFU_LeadGen_MktOps_EU_Guide_Carousel_0126`
- UTM campaign: `mofu_guide_mktops`
- UTM content: `carousel_v1`

---

## Conversion Events

### Setup in LinkedIn Campaign Manager

#### Primary Conversions (Track These)

| Event | Type | Trigger |
|-------|------|---------|
| Demo Request | URL-based | /demo-thank-you |
| Trial Signup | URL-based | /trial-thank-you |
| Assessment Request | URL-based | /assessment-thank-you |
| Content Download | Event-based | Form submission event |

#### Micro Conversions (Optional)

| Event | Type | Trigger |
|-------|------|---------|
| Pricing Page View | URL-based | /pricing |
| Product Page View | URL-based | /product |

**Note:** Only track micro conversions if you'll actually use the data. Don't clutter.

### Attribution Windows

**Typical B2B starting point:**
- Click-through: 30 days
- View-through: 7 days

**Adjust based on:**
- Sales cycle length (longer cycle = longer window)
- Deal size (bigger deals = longer consideration)

---

## Reporting Truth

### Understanding Discrepancies

| Platform | Attribution Model | View-Through |
|----------|-------------------|--------------|
| LinkedIn | Last-touch (within window) | Yes |
| GA4 | Last non-direct click | No |
| CRM | First/multi-touch (varies) | No |

**These will NOT match 1:1. This is normal.**

### What to Trust

- **LinkedIn:** Good for platform optimization
- **GA4:** Good for cross-channel comparison
- **CRM:** Ultimate judge of lead quality and pipeline

### Reporting Approach

Present all three without expecting exact match:
1. LinkedIn conversions (platform view)
2. GA4 conversions (channel comparison)
3. CRM pipeline influenced (business outcome)

---

## QA Checklist

### Pre-Launch

- [ ] Insight Tag active
- [ ] Test conversion fires on thank-you page
- [ ] UTMs present on all destination URLs
- [ ] UTMs pass through forms to CRM
- [ ] GA4 receiving LinkedIn traffic
- [ ] Thank-you pages unique per conversion type
- [ ] Exclusion audiences created and applied

### Post-Launch (First 48 Hours)

- [ ] Impressions serving
- [ ] Clicks registering in LinkedIn
- [ ] Sessions appearing in GA4 with correct UTMs
- [ ] Conversions firing (if any)

### Weekly

- [ ] Spend pacing on track
- [ ] Conversion events still firing
- [ ] No UTM breaks (check GA4)
- [ ] CRM receiving source data

---

## Common Tracking Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| No Insight Tag | No conversions, no retargeting | Install immediately |
| Same thank-you page for all forms | Can't differentiate conversions | Create unique thank-you URLs |
| Inconsistent UTMs | Messy reporting, lost data | Document and enforce convention |
| Not excluding converters | Wasted budget on converted leads | Add thank-you page audience to exclusions |
| UTMs not passing to CRM | Can't attribute pipeline | Check form/CRM integration |

---

## Integration Checklist by CRM

### HubSpot

- [ ] UTM fields mapped to contact properties
- [ ] LinkedIn Ads integration enabled (optional)
- [ ] Hidden form fields capturing UTMs
- [ ] Source reports configured

### Salesforce

- [ ] Campaign/Lead Source fields configured
- [ ] UTM values captured on lead creation
- [ ] Campaign influence model set up
- [ ] LinkedIn integration enabled (optional)

### Other CRMs

- [ ] UTM capture method identified
- [ ] Lead source field available
- [ ] Reporting on source available
