---
status: pending
---

# Portfolio Feature Expansion Plan

## Overview
Expand the single-page developer portfolio with 12 advanced features: theme toggle, smooth scroll nav, project filters & links, blog section, downloadable resume, social links, testimonial carousel, statistics counters, newsletter signup, project search, case studies, and enhanced project showcase.

## Phase 1: Core Infrastructure (Foundation)
1. Create a data file (`src/data/portfolio.ts`) with all projects, testimonials, stats, blog posts, and case studies
2. Add theme context + localStorage persistence for dark/light mode switching
3. Create reusable component utilities (carousel, filter, search, counter animations)

## Phase 2: Visual Enhancements (Navigation & Theme)
1. Add theme toggle button to navbar
2. Implement dark/light mode CSS variables
3. Add smooth scroll behavior to nav links with active section highlighting
4. Add social media icon links to navbar/footer

## Phase 3: Project Showcase Expansion
1. Enhance projects section with live demo + GitHub repo buttons
2. Add project filtering by tech stack (React, Node, Python, etc.)
3. Add searchable project list with real-time filtering
4. Create individual case study cards with detailed breakdowns

## Phase 4: New Sections
1. Add Statistics section with animated counters (years, projects, clients)
2. Add Blog/Articles section with post previews
3. Add Newsletter signup form
4. Convert static Testimonials to interactive carousel

## Phase 5: Polish & Downloads
1. Add downloadable resume/CV button
2. Optimize animations for smooth performance
3. Test all interactions and responsive behavior
4. Final typecheck and build verification

## Success Criteria
- All 12 features implemented and visible in preview
- Theme toggle persists across page reloads
- Project filtering, search, and carousel work smoothly
- Resume downloads without errors
- All animations are performant (no jank)
- Typecheck passes, build succeeds
