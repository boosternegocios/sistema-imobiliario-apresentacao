# Design System Specification: Premium Real Estate SaaS

## 1. Overview & Creative North Star: "The Digital Architect"
This design system is built on the philosophy of **The Digital Architect**. In the high-end real estate market, luxury is defined by space, light, and structural integrity. We move away from the "cluttered dashboard" trope of traditional SaaS and instead embrace an editorial layout that feels like a premium architectural magazine.

The system breaks the "template" look through:
*   **Intentional Asymmetry:** Using generous white space (Scale 16-24) to create focal points.
*   **Structural Depth:** Replacing 1px lines with tonal layering to define zones.
*   **Authority through Typography:** A high-contrast scale that makes data feel like a curated headline rather than just a number.

---

## 2. Colors & Surface Logic

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of `1px solid` borders for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface-container-lowest` card should sit on a `surface-container-low` section to create definition. 

### Palette Definition
*   **Primary (Deep Blue Gradient):** `#05325E` to `#0A3E67`. Used exclusively for the global sidebar to ground the interface in "Trust and Authority."
*   **Action Primary (Vibrant CTA):** `#4A90E2` to `#2161C3`. A dual-tone gradient that provides a "glow" effect, signaling interactivity.
*   **Background (Canvas):** `#F8F9FB` (Token: `surface`). A cool, crisp base that allows overlays to pop.

### Surface Hierarchy & Nesting
Instead of a flat grid, treat the UI as stacked sheets of fine paper:
1.  **Level 0 (Base):** `surface` (#f8f9fb) - The main application background.
2.  **Level 1 (Sections):** `surface-container-low` (#f2f4f6) - Used for grouping content areas.
3.  **Level 2 (Cards):** `surface-container-lowest` (#ffffff) - The highest point of elevation for interactive content.

### The "Glass & Signature Texture" Rule
For floating elements (modals, dropdowns), use **Glassmorphism**:
*   **Fill:** `surface_container_lowest` at 80% opacity.
*   **Effect:** `backdrop-blur: 20px`.
*   **Signature Texture:** Use a subtle linear gradient from `primary` to `primary_container` for hero headers to provide a "soulful" depth that flat hex codes cannot achieve.

---

## 3. Typography: Editorial Authority
We utilize **Plus Jakarta Sans** for headlines to inject a modern, geometric personality, and **Inter** for body text to ensure maximum legibility in data-heavy real estate tables.

| Role | Font Family | Size (rem) | Usage |
| :--- | :--- | :--- | :--- |
| **Display-LG** | Plus Jakarta Sans | 3.5rem | Hero metrics (e.g., Total Portfolio Value) |
| **Headline-MD** | Plus Jakarta Sans | 1.75rem | Section titles, Property names |
| **Title-SM** | Inter | 1.0rem | Card headers, Sub-navigation |
| **Body-MD** | Inter | 0.875rem | Standard data, descriptions |
| **Label-SM** | Inter | 0.6875rem | Micro-copy, metadata, captions |

---

## 4. Elevation & Depth: Tonal Layering

### The Layering Principle
Depth is achieved by "stacking" tiers. Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift without the "dirty" look of heavy shadows.

### Ambient Shadows
When a "floating" effect is required (e.g., an active Property Card):
*   **Color:** `on-surface` (#191c1e) at 4% to 6% opacity.
*   **Blur:** 40px to 60px.
*   **Spread:** -5px (to keep the shadow "tucked" under the element).

### The "Ghost Border" Fallback
If a border is required for accessibility:
*   **Token:** `outline-variant` (#c3c6d0) at **15% opacity**. 
*   **Constraint:** Never use 100% opaque borders for containers.

---

## 5. Components

### Cards (The Core Unit)
*   **Border Radius:** `md` (1.5rem / 24px) for main content cards; `sm` (0.5rem / 8px) for inner elements.
*   **Styling:** No borders. Use `surface-container-lowest` fill. 
*   **Interaction:** On hover, shift background to `surface-bright` and increase shadow blur.

### Buttons (The Action Center)
*   **Primary:** Gradient from `#4A90E2` to `#2161C3`. White text (`on-primary`). `9999px` (full) radius for a modern "pill" look.
*   **Secondary:** Ghost style. No background, `outline-variant` ghost border (20% opacity).
*   **Padding:** `1.2rem` (horizontal) x `0.7rem` (vertical).

### Input Fields
*   **Visual Style:** Subtle `surface-container-high` fill. 
*   **State:** On focus, the background turns `white` with a `2px` vibrant blue `surface_tint` glow.
*   **Forbid:** Labels inside the box. Labels must sit above in `label-md` bold for clarity.

### Property Lists
*   **Rule:** Forbid divider lines. 
*   **Separation:** Use `spacing-6` (2rem) of vertical white space or alternating subtle background shifts between items.

### Contextual Real Estate Components
*   **Status Badges:** Use `secondary_container` with `on_secondary_container` text. High contrast, low saturation.
*   **Map Overlays:** Pure glassmorphism (80% white, 30px blur) to let the map texture bleed through.

---

## 6. Do's and Don'ts

### Do
*   **Do** use the spacing scale strictly (e.g., `8.5rem` for page margins) to ensure the "Editorial" breathability.
*   **Do** use `Plus Jakarta Sans` for any number over 24px to emphasize the "Luxury Tech" feel.
*   **Do** layer surfaces (Light Gray on White) to create hierarchy.

### Don't
*   **Don't** use black (#000000) for text. Use `on_surface` (#191c1e) for a softer, premium contrast.
*   **Don't** use 1px solid lines to separate list items. Use white space.
*   **Don't** use sharp corners. Everything in this system must feel approachable, using the `16px-24px` radius scale.