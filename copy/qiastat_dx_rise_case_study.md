# QIAsta DX Rise

## Project overview

During the COVID-19 pandemic, hospitals needed to run far more diagnostic tests than the original QIAstat-Dx instrument could handle. QIAGEN's response was QIAstat-Dx Rise — a higher-throughput version capable of processing up to 160 samples per day. A bigger instrument meant a bigger screen, a more complex workflow, and a fully redesigned touchscreen interface. The brief wasn't to start from zero. It was to take what worked in the original UI, fix what didn't, and build something that could scale — not just to this instrument, but across QIAGEN's entire device portfolio.

## My responisbiities

* 01. Research
* 02. Information Architecture
* 03. UI Design
* 04. Design System
* 05. Usability tests

## 01. Research

To design a better instrument interface, we first needed to understand the one that already existed — what worked, what didn't, and the environment it was being used in. We started by testing the original instrument ourselves — gloves on, standing at the device, working through real use cases. That hands-on session made the physical constraints concrete before the interviews began.

The formal research followed — interviews with laboratory operators focused on two goals:

* Understand what worked and what didn't in the current QIAstat-Dx interface — from the perspective of people using it every day.
* Learn how the lab environment and operator workflow actually looked — the physical conditions, the routines, the interruptions.

### Research findings

**Working with gloves**
Lab technicians interact with diagnostic instruments wearing protective gloves. That single constraint rules out a lot of standard touchscreen patterns. Scrolling is unreliable. Small targets get missed. Dropdowns — which require a precise tap, a scroll, and another precise tap — create friction on every interaction. Users weren't complaining about individual moments of frustration; the friction was structural and cumulative across every shift.

**Elevated screen position**
The RISE instrument introduced a new physical constraint that didn't exist in the original: a significantly higher screen position. Operators now interacted without arm support, standing. Keeping an arm raised for extended periods increases fatigue and reduces tap precision — particularly for repetitive actions performed dozens of times a day. This wasn't a legacy problem carried over from the old UI; it was a new design challenge created by the new hardware.

**System status visibility**
Critical system information — maintenance status, software updates, device alerts — was buried in secondary sections of the interface. Operators could easily miss something important. The problem was worst when approaching the device while logged out: no system health information was visible at all, at exactly the moment when a quick status check matters most.

## 02. Information architecture

Research findings pointed to a structural problem, not just a visual one: the screen needed fixed zones that held steady regardless of what task an operator was performing.

- **Persistent status zone (top).** System health and alerts stay visible at all times, independent of login state or whatever task is currently active.
- **Primary action zone (bottom).** The most frequent actions sit at the screen’s lower edge, closest to the operator’s natural hand position.
- **In-context detail zone.** Ongoing sample and run information is reachable without navigating away from the current screen — quick access without a view change.
- **Content area (middle).** The task-specific workspace that changes per screen, framed by the two fixed zones above and below it.

Three structural zones, fixed; one dynamic. That layout principle held across every screen in the interface — and became the backbone the visual design decisions were built on.
## 03. UI Design

The research findings translated into a clear set of design principles for the new interface.

**Bottom navigation for frequent actions.**
Controls that operators use constantly were moved to the bottom of the screen — closer to the natural resting position of the hand. Less time with the arm raised, less fatigue across a long shift.

**Maximised button sizes.**
All interactive elements were scaled up to accommodate glove-impaired touch precision. Fewer missed taps, less repeated interaction, less frustration.

**Modals instead of dropdowns.**
Dropdown menus were replaced with modal dialogs — larger, more forgiving touch targets that required less precision and fewer steps. A pattern that looks slightly unconventional on a desktop screen works significantly better when your users are wearing gloves.

**Generic status bar.**
A dedicated status view gave operators an immediate overview of all ongoing and completed tests on a single screen. No navigating into individual run details to find out where things stood.

**Buttons instead of scroll.**
Scrolling was replaced with dedicated navigation buttons. Predictable, controlled, and much more reliable when the input method is a gloved finger rather than a bare hand.

**Context menu without view change.**
A context menu let users access key actions without leaving the current screen. Staying in context — without losing your place in a workflow — matters when the workflow is time-sensitive

**Persistent status bar.**
System information was moved into a permanent top bar, visible at all times — including when the user was logged out. The status alerts that were previously easy to miss became impossible to overlook.

## 03. Design system contribution

**Designing for the portfolio, not just the product.**
The RISE project didn't exist in isolation. QIAGEN was building a shared design system to span its entire instrument portfolio, and the patterns developed for RISE fed directly into that system.

**Ongoing collaboration, not a handoff.**
Regular cross-team sessions brought together UX designers working across different instruments to discuss their work, surface patterns worth generalising, and define components that could work across devices rather than just within one product.

* Most view
* Most view
* Most view

## 03. Usbility tests

**Real hardware, real environment.**
Testing happened in QIAGEN's on-site instrument lab — on real hardware, not a simulator or a clickable prototype on a laptop. A usability test on a screen doesn't surface the same issues as one conducted standing at an elevated instrument, gloves on, under the physical conditions operators actually work in.

**Internal participants.**
PInternal participants. Participants were internal staff playing the role of laboratory operators. The project was confidential during development, which ruled out external recruitment — a practical constraint that's common in competitive medical device work.

**Representative scenario.**
The core test scenario was built around a representative task: loading a run and monitoring its progress. The design decisions held up under testing. A few content and interaction gaps surfaced and were addressed before wider rollout.

* Most view
* Most view
* Most view

## What I learned?

**Physical context doesn't just influence the interface — it shapes it entirely.** Gloves, screen height, shift length, the absence of arm support — these aren't edge cases to accommodate at the end. They're the conditions the interface has to be built around from the start. Ignore them and you're designing for a user who doesn't exist.

**Consistency and usability in a design system are both virtues — and they can pull in opposite directions.** When you're designing components that need to work across multiple instruments, the pressure to keep everything visually consistent is real and legitimate. But it's also a trap. Optimise too hard for a unified look and you risk shipping patterns that are coherent across devices but friction-heavy on any individual one. The balance isn't automatic — it has to be argued for, instrument by instrument.

**The best validation comes from conditions that match reality.** A lab test on real hardware found things a screen-based prototype test would have missed entirely. The environment is part of the test.

* Most view
* Most view
* Most view

## Get in touch