# Airtable-Inspired Design Overhaul

## Overview

This update transforms the oneXengine website into a "Best-in-Class" agency experience, drawing heavy inspiration from Airtable's clean, modular, and highly functional aesthetic.

## Key Transformation Areas

### 1. Visual System (The "Airtable" Look)

- **Strict Grid & Spacing**: Implemented a 4px-base spacing system. All padding and margins now follow a consistent rhythm.
- **Color Palette**: Shifted to a "Clean White" foundation with high-contrast black text and vibrant, controlled accents (Kinetic Red, Blue, Purple, Green) for categorization.
- **Depth**: Replaced flat borders with "Soft, Layered Shadows" and glassmorphism (blur-xl) to create a premium, floating feel.

### 2. Homepage / Hero

- **Dynamic & Minimal**: The hero now features a time-aware tagline (e.g., "Designing fresh starts" in the morning) and reduced, punchy typography.
- **Motion**: Added floating "Activity Cards" (Design System, Status: Deployed) that drift slowly, mimicking the "organized chaos" of a productivity tool.
- **Clarity**: Clearly positioned as a "Web & Product Design Agency".

### 3. Component Architecture

- **Services as Modules**: Converted simple service lists into "Modular Blocks" — white tiles with strong, colorful icon containers and hover-lift effects.
- **Portfolio Gallery**: Refactored the work section into a clean gallery layout. Projects are presented as high-fidelity cards with distinct color identities.
- **Sticky Glass Navbar**: The navigation is now a persistent, high-blur glass bar that sits perfectly on top of the content, ensuring easy access without visual weight.

### 4. Interaction Design

- **Micro-Interactions**: Hover states now include scale, shadow expansion, and border color shifts (`transition-all`).
- **Scroll Animations**: Elements staggered fade-in (`staggerChildren`) for a smooth, high-end flowing experience.
- **Feedback**: Buttons and links have immediate, tactile feedback (transform scale, color swap).

## Technical Polish

- **Responsiveness**: All grids (Services, Portfolio) adapt fluidly from 1 column (Mobile) to 2 (Tablet) to 3 (Desktop).
- **Performance**: Used `transform` and `opacity` for animations to ensure 60fps rendering.
- **Clean Code**: Refactored CSS keyframes and component logic for maintainability.

The result is a website that feels engineered, not just designed — ready to impress high-value clients.
