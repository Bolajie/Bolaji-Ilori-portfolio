# Product

## Register

brand

## Users

Two distinct audiences, weighted equally, each needing a clearly separate path through the site.

**Freelance buyers.** Founders, ops leads, and small teams at agencies or ops-heavy businesses. They arrive with a manual process that is costing them hours and they want to know whether this person can remove it. Context: skimming on a laptop between meetings, comparing two or three candidates. Job to be done: decide within about ninety seconds whether to start a conversation.

**Hiring managers and recruiters.** Screening for Automation Engineer, AI Workflow Engineer, or Operations Specialist roles. Context: a queue of candidates, scanning for evidence of real production systems rather than tutorial projects. Job to be done: decide whether to schedule an interview.

Because both audiences are primary, the site must offer two clearly marked doors rather than one blended message. Blended copy that tries to address both at once reads as unfocused to both.

## Product Purpose

A portfolio that converts attention into either a qualified freelance conversation or an interview, by making a body of real production automation work legible fast.

Success looks like: a visitor who can name, unprompted, one system this person built and one operational problem it solved.

## Brand Personality

**Rigorous. Operational. Unembellished.**

Derived from the master resume, whose defining characteristic is evidentiary discipline. That document carries an explicit rule against fabricated metrics ("add real numbers as they're confirmed, don't estimate"), scope notes that state what was *not* done in a role, and a precise declaration of technical limits ("Python, only programming language known"). Someone who polices their own claims that carefully has a brand, and it is not enthusiasm.

Voice: confident, direct, no fluff. Never "passionate about" or "I love helping." State the work, state the result, stop. Precision reads as competence; adjectives read as padding.

Emotional goal: the visitor should feel they are reading an operator's record, not a pitch.

## Anti-references

- **Generic AI-SaaS template.** Purple and blue gradient hero, floating glass cards, "supercharge your workflow" copy. The most saturated lane in this category.
- **Terminal and hacker cosplay.** Matrix-green monospace, ASCII art, fake shell prompts. The reflex move for an automation engineer, and therefore the one to avoid.
- **Linear and Vercel clone.** Grayscale, ultra-minimal, tiny type, no point of view. Safe and forgettable.
- **Hero-metric stat blocks.** Big number, small label, gradient accent, supporting stat row. A SaaS cliche and an absolute ban.
- **Anything that reads as AI-generated.** If a visitor could say "AI made that" without hesitation, it has failed. The bar is that they ask how it was made.
- **Naming constraint carried from the resume:** Inside Success TV must not be named in outreach, proposal, or cold-contact contexts. A public portfolio counts as outreach. Describe it as a US-based media company.

## Design Principles

1. **Claims carry receipts.** No number ships without a real source. The resume forbids estimated metrics; the site inherits that rule. Any figure that cannot be sourced gets cut, not softened.
2. **Outcome first, stack second.** Lead with the operational result. Tools are evidence for the claim, never the headline. A visitor should learn what changed before they learn which platform did it.
3. **Show the failure path.** The genuine sophistication in this work is in fallbacks, retries, duplicate checks, and dead-letter queues. Anyone can demo a happy path. Naming what breaks and how it gets caught is the differentiator.
4. **State limits plainly.** Declaring what is not known (one programming language, not four) is what makes the rest of the record credible. Overclaiming is the fastest way to lose a technical evaluator.
5. **Two doors, clearly marked.** Freelance buyers and hiring managers get distinct, labelled paths. Do not average the two into one vague message.

## Accessibility & Inclusion

- **Standard: WCAG 2.1 AA.** Body copy at or above 4.5:1, large text and non-text UI at or above 3:1. Met and measured against the deep background: bone body text 16.37:1, muted secondary 5.34:1 (4.67:1 on the raised surface), green availability signal 9.95:1. No text token falls below AA.
- One accent (orange), one functional color (green, availability only). The earlier rose accent, which failed body-text contrast, has been retired.
- Body text no smaller than 14px; no interface text below 11px, the floor the mono section labels sit on.
- Where a border is the only marker of an interactive edge (form inputs), it clears 3:1 (1.4.11); lighter hairlines stay decorative only.
- Motion is heavy here (staggered reveals, marquee, pulse); `prefers-reduced-motion` is honoured.
- Touch targets at least 44x44px. Self-imposed: 2.1 AA sets no target-size minimum and WCAG 2.2 AA (2.5.8) asks 24px, so 44px clears it with margin; where controls sit tighter, the 2.5.8 spacing exception covers them.
- Complete keyboard navigation, with visible focus indicators that themselves meet 3:1 (a 2px orange outline at 2px offset).
