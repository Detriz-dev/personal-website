> **Note on confidentiality:** Due to strict NDA agreements, I can only share a single screen from this project. Instead, this case study pulls back the curtain on my practical process, research insights, and architectural decisions.

# Project overview

Ocado Technology's internal platform had grown organically to **50+ tools** used by **100+ engineering teams**, and documentation simply hadn't kept pace. What started as a nice-to-have had become the dividing line between engineers using the platform effectively or working around it.

### My responsibilities

I led the UX design of this initiative end-to-end—taking the documentation platform from early organizational discovery all the way through post-launch analytics. Working closely with platform leadership, technical writers, and engineering teams, I owned every stage of the product lifecycle: uncovering systemic bottlenecks through discovery and developer interviews, defining the information architecture, customizing the interface and search experience, validating decisions through usability testing, and tracking real-world adoption with behavioral data.

### Problems we saw upfront

Before we even began formal research, the warning signs were already clear:

* **Documentation was scattered across dozens of locations.**
  Different file formats, inconsistent structures, and no clear ownership made finding answers a chore.

* **Valuable tribal knowledge existed, but remained invisible.**
  Great guides had been written by developers themselves, yet they were buried so deep that nobody else could find them.

* **Content quality was wildly inconsistent.**
  Some pages were severely outdated, while others had never been clear to begin with.

* **Developers defaulted to the wrong tools.**
  Not out of stubborn habit, but because nobody had surfaced the better alternatives available to them.

* **We had zero visibility into what was actually happening.**
  Without usage analytics, there was no way to know which pages were helping, which were ignored, or what was missing altogether.

### Project goal

Success meant developers spending less time searching and more time building.

* **One place to look, not a dozen**
  Finding the right documentation should take seconds—not an investigative session across multiple repositories.

* **Visibility over guesswork**
  The platform team needed real behavioral data to see what worked, rather than relying on assumptions.

---

# Discovery

Before jumping into user interviews or sketching solutions, we needed to do some organizational archaeology—mapping the existing legacy and understanding how the platform got to this state.

* **Tracing the platform's history**
  Examining how the platform scaled organically across 100+ engineering teams while documentation remained an afterthought.

* **Mapping the fragmentation (and past attempts)**
  Uncovering why documentation fractured across dozens of tools, and reviewing previous consolidation efforts that had stalled so we wouldn't repeat the same mistakes.

* **Auditing legacy content and ownership**
  Cataloging what already existed, identifying who actually maintained it (if anyone), and understanding the workflows engineers already used to write and deploy code.

* **Aligning stakeholders and constraints**
  Defining what success looked like for platform leadership while mapping real-world boundaries—including engineering bandwidth, security permissions, and long-term maintenance capacity.

> *Discovery gave us a map of the system and its history—but only from the inside out. To understand what great documentation looked like inside an engineer's day-to-day workflow, we needed to talk directly to the people using it.*

---

# User research

We conducted roughly **10 in-depth interviews** with engineers across different departments to test our assumptions and uncover what was concretely broken.

### Research Questions

* **What makes developer documentation genuinely useful?**
  Exploring what works, what fails, and what best-in-class documentation looks like outside Ocado.

* **What is broken, missing, or confusing right now?**
  Pinpointing concrete friction points and gaps in the current ecosystem.

* **How do developers actually conceptualize platform tools?**
  Testing whether the existing folder and category structures matched engineers' mental models.

### Research Findings

* **Practical how-to guides were missing**
  Engineers lacked task-oriented, step-by-step guides focused on helping them get a specific job done.

* **Code examples were too scarce**
  Concrete examples were the primary way developers learned new tools, yet the existing docs rarely provided enough of them.

* **Ctrl+F was the real navigation**
  Rather than clicking through nested menus, developers used `Ctrl+F` to jump straight to keywords on a page. This signaled that comprehensive, long-form pages with sticky in-page navigation would outperform fragmented micro-pages.

* **Content types were tangled together**
  Reference specs, step-by-step tutorials, and high-level explanations were mixed on the same pages, making it difficult to scan for the exact depth of information needed.

* **No single taxonomy could fit everyone**
  Backend developers, data scientists, and DevOps engineers each held different mental models—meaning a single top-down category tree would never work for everyone.

---

# Information architecture

Our research findings pointed to foundational structural issues that required deliberate architectural and governance solutions.

* **Search-first over upfront taxonomy**
  Because no single taxonomy worked across every engineering discipline, we leaned heavily into search instead. Developers were already relying on `Ctrl+F` and searching by specific phrases rather than browsing categories. A strong search engine meets every mental model where it is, without forcing users to learn an internal hierarchy first.

* **Bottom-up category mapping**
  Rather than guessing at a user-facing taxonomy upfront, we ran a card-sorting session with three internal platform experts who knew the architecture inside out. Using cards representing individual tools, they grouped the ecosystem and explained their logic. This gave us an authentic, inside-out structure slated for iterative rollout after our search-first launch.

* **Separating content with the Diátaxis framework**
  We adopted the Diátaxis framework to divide all documentation into four distinct modes: **tutorials**, **how-to guides**, **reference**, and **explanation**. Giving each mode a clear boundary immediately solved the mixed-content problem surfaced during interviews.

* **Job-oriented how-to guides**
  We structured how-to guides around *jobs to be done* rather than tool names. Titles were rewritten to reflect developer intent rather than underlying implementation—for example, *"Use the API Gateway wrapper"* became *"Expose resources outside the account."* Developer goals remain stable even when underlying tools evolve.

* **Governance & publishing workflow**
  To solve the lack of ownership and uneven quality, we introduced an editorial review gate: all new or updated documentation had to pass through the technical writing team before going live. This protected structure, tone, and Diátaxis standards as teams contributed across the organization.

---

# Interface design

We built the platform on **MkDocs** using the **Material for MkDocs** theme as our foundation—giving us a reliable, developer-familiar environment out of the box rather than reinventing the wheel.

* **Visual customization & prototyping**
  I adapted the Material theme end-to-end to match Ocado's internal brand—defining color tokens, refining typography, and preparing detailed specs for engineering. I reviewed and QA'd the live build against those mockups throughout implementation. We also integrated **Mermaid** diagram support for technical architectures and built our validation prototype in Figma directly on top of this adapted theme.

* **Custom search engineering**
  We didn't leave search on default settings. We customized **Lunr.js** to control how pages were indexed, what metadata surfaced in previews, and how results were weighted—ensuring developers could find exact answers without needing prior knowledge of the platform's structure.

---

# Usability tests

Before rolling out platform-wide, we piloted our approach on a single, well-understood piece of documentation—the **API Gateway wrapper**—where we could easily recruit active users.

* **Testing the documentation structure**
  We built a realistic task scenario around a core job to be done: *exposing a resource outside the account*. Developers completed the task using the redesigned docs while thinking aloud. The Diátaxis separation held up well—participants immediately noticed how much easier it was to separate conceptual context from actionable steps—and the sessions surfaced a few minor content gaps we fixed before launch.

* **Tuning search with real queries**
  We tested search separately on a live build with a small group of engineers prior to release. Default Lunr.js weights didn't always surface the best match for how developers naturally phrased queries, so we adjusted ranking weights and refined the search loop based on real tester logs rather than assumptions.

* **Iterative category rollout**
  We intentionally launched the initial platform without top-level categorization—focusing purely on tools, products, services, and search—and introduced categories iteratively afterward using real behavioral data.

---

# Data analysis

We instrumented **FullStory** to track developer behavior before and after launch—establishing a clear baseline of how engineers entered and navigated documentation, then measuring how those patterns shifted over time.

* **Search behavior & blind spots**
  We monitored exact search queries—tracking whether engineers searched by tool name, job description, or error phrase—alongside zero-result searches that flagged missing content or indexing gaps.

* **Content performance tiers**
  Usage patterns quickly segmented the library into three tiers: high-traffic daily staples, "quick-lookup" reference pages where engineers jumped in for a single parameter and left, and zero-view "ghost" pages nobody knew existed.

* **Session depth & retention**
  Tracking returning users showed whether the hub was becoming a daily habit rather than a one-off stop, while cross-page session duration revealed whether engineers were genuinely working through tutorials or bouncing early.

* **Turning analytics into targeted interviews**
  Quantitative data showed us *what* developers were doing, but not *why*. Identifying zero-view docs and abrupt bounce patterns gave us the exact signal we needed to run a second round of targeted interviews—uncovering the reasoning behind those behaviors.

---

# What I learned

* **Documentation is a product**
  Without clear ownership, editorial governance, and ongoing measurement, even great documentation eventually decays.

* **The best decisions weren't mine**
  They came from domain experts and real developer workflows. My role was creating the structure and conditions for that knowledge to surface.

---

### OCADO Technology documentation platform

**Get in touch**

* [LinkedIn](https://www.linkedin.com/in/kowalczykdawid/)