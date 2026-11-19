> **Due to strict confidentiality agreements,** I can’t showcase the user interfaces for these projects. Instead, this case study pulls back the curtain on my practical process and a breakdown of what I did.

---

# Project overview

A developer platform doesn't fall apart all at once. It accumulates. Ocado Technology's internal platform had grown to 50+ tools, used by 100+ engineering teams. Documentation hadn't kept pace. What started as a nice-to-have became the difference between developers using the platform well or working around it.

### My responsibilities
* [User Research](#user-research)
* [Information Architecture](#information-architecture)
* [Interface Design](#ui-design)
* [Usability Tests](#usability-tests)
* [Data Analysis](#data-analysis)

### Problems
Before we ran any research, the signals were already there:

* **Documentation was scattered across dozens of locations.**
  Different file formats, different structures, no consistent ownership.
* **Valuable tribal knowledge existed but was invisible.**
  Written by developers themselves, but buried and hard for anyone else to find.
* **Quality was inconsistent.**
  Some pages were outdated, others were never good to begin with.
* **Developers defaulted to the wrong tools.**
  Not out of habit, but because nobody had told them better ones existed.
* **And we had no way of knowing any of this was happening.**
  No usage data existed. No way to tell what was being read, ignored, or missing entirely.

### Project goal
Success meant developers spending less time searching and more time building.

* **One place to look, not a dozen**
  For developers, finding the right documentation should take seconds — not a searching session.
* **Know what's actually happening**
  For the platform team, we needed to finally see whether that was true, instead of assuming it.

---

# User research

To understand what good documentation looks like from a developer's perspective and what was concretely broken, we ran around 10 in-depth interviews with developers across different departments.

### Research Questions
* **What makes developer documentation genuinely useful?**
  What works, what doesn't, and what good looks like outside Ocado.
* **What's broken, missing, or confusing right now?**
  Identifying concrete gaps in the current documentation.
* **How do developers actually think about platform tools?**
  Understanding whether the existing structure matched their mental models.

### Research Findings
* **How-to guides were missing**
  Practical, task-oriented content that helps you get something done.
* **Examples were too scarce**
  Examples were the primary way developers learned, and there weren't enough of them.
* **Ctrl+F was the real navigation**
  Developers used Ctrl+F to jump straight to what they needed on a page, rather than scrolling through it. This was the clue that long-form pages with in-page (right-hand) navigation would serve developers better than splitting content across many short pages.
* **Content types were mixed together**
  Reference material, tutorials, and explanations weren't distinguished, making it hard to find what you actually needed.
* **No single taxonomy could fit everyone**
  Developers, data scientists, and devops engineers had different mental models; one structure was never going to work for all of them.

---

# Information architecture

The research findings pointed to four separate problems that needed four separate solutions.

* **Category structure**
  Rather than imposing a user-facing taxonomy, we ran a card sorting session with three internal platform experts. The people with the deepest knowledge of how the platform was actually built. We gave them cards with tool names and asked them to group the tools and explain their reasoning. The categories came from the inside out, not from assumptions about how users might think.
* **Search**
  Because we couldn't find one taxonomy that worked well for all our products and tools, we invested in strong search instead. Developers were already using Ctrl+F. They searched for phrases, not categories. A strong search experience meets every mental model where it is, without requiring users to learn a taxonomy first.
* **Documentation structure**
  We adopted the Diátaxis framework, separating all documentation into four distinct types: tutorials, how-to guides, reference, and explanation. Each serves a different need; keeping them separate solved the mixed-content problem the research had surfaced.
* **How to guides / Use cases**
  Structured around jobs to be done, not tools. We named guides after developer intent, not implementation — "use the API Gateway wrapper" became "expose resources outside the account." Jobs don't change even when the tools underneath do.

---

# UI Design

The platform was built on MkDocs with the Material for MkDocs theme as the foundation chosen because it gave us a solid, developer-familiar base to build on rather than starting from scratch.

* **Visual customisation**
  I adapted the Material theme to the internal brand end-to-end: defining colour tokens, adjusting typography, and preparing detailed mockups for engineering to build from. I reviewed and corrected the implementation against those mockups as it was built. Mermaid diagram support was added for technical documentation, and the Figma prototype built for validation was based on this adapted theme.
* **Search design**
  Search wasn't left to defaults. We customised Lunr.js to control how content was indexed, what appeared in search results, and what ranked at the top. The goal was a search experience that surfaced the right content without requiring developers to already understand the platform's structure.

---

# Usability Tests

Before rolling out platform-wide, we tested on a single piece of documentation first — the API Gateway wrapper — chosen because it was well understood and had real potential users we could recruit.

* **Documentation structure**
  Built a scenario around a job to be done: expose a resource outside the account. Developers used the documentation to complete the task, thinking aloud as they went. The Diátaxis structure held up keeping content types separate was noticeable to users. A few content gaps surfaced and were fixed before rollout.
* **Search**
  Tested separately on a working product with a small group of users before launch. The initial Lunr.js ranking didn't surface the right results for how developers actually searched — we adjusted the ranking weights and reworked the search loop based on what testers actually typed, not what we assumed they'd type.
* **Categories**
  The platform launched initially without categorisation, focused on tools, products, services, and search. Categorisation was introduced afterward, as an ongoing process informed by real usage data rather than guessed upfront.

---

# Data Analysis

We used FullStory to track developer behaviour before and after the redesign establishing a baseline of how developers entered and moved through documentation, then monitoring for changes after launch.

* **Search behaviour**
  We tracked what developers were typing — tool names, job names, or something else entirely — and which searches returned no results, pointing to content gaps or indexing problems.
* **Content performance**
  We tracked which documentation was most viewed, meaning it was actually being used, and which had zero views, meaning it was invisible or irrelevant feeding directly into the next research cycle. Scroll depth told us whether developers were reading content or landing and leaving.
* **Engagement**
  Returning users told us whether documentation was becoming a habit, not just a one-off lookup. Time spent across sessions, not just on a single page, showed whether developers were settling in to actually work through material or bouncing off entirely.

---

# What I learned?

* **Documentation is a product**
  It needs ownership, structure, and measurement like any other product.
* **The best decisions weren't mine**
  They came from domain experts who understood the platform deeply. My job was to create the conditions for that knowledge to surface.

---

### OCADO Technology documentation platform
**Get in touch**
* [LinkedIn](https://www.linkedin.com/in/kowalczykdawid/)