# 🎯 **Cardi AI Train & Hire DemoDay Enhancement Plan**
*Deck-as-Website Enhancement: 3-Phase Implementation*

---

## 🎨 **NORTH STAR & DESIGN VISION**

**Theme:** Train & Hire is a workforce-development engine turning potential into placement
**Tone:** Apple-clean but vibrant (Cardi colors), confident, human
**Goal:** Every screen visually reinforces the transformation story

---

## 🌟 **GLOBAL SYSTEM CHANGES** (Applied Across All Phases)

### A. Visual Identity System
- **Animated gradient background**: 30-45s loop with Cardi colors at 8% opacity
- **Large translucent pentagon motif**: Logo silhouette, top-right, 6-8px parallax drift
- **Color rhythm per section**: Welcome=Red, Foundation=Blue, Cohort1=Green, etc.
- **Projector Mode toggle**: High contrast, thicker borders, larger fonts (H1≥48px, body≥22px)

### B. Component Standards
- **Cards**: Frosted cloud surface, 1px hairline (#E5E7EB), shadow `0 10px 30px -12px rgba(0,0,0,0.25)`
- **Chips**: Pill shape, 14-16px text, 60ms stagger pop-in animation
- **Icons**: Lucide outline, 1.5px stroke weight
- **Animations**: Respect `prefers-reduced-motion`, swap confetti for star glow

### C. Enhanced Keyboard Navigation
- `PgDn/PgUp`: Section jump
- `S`: Skip animations
- `K`: Blackout mode
- `B/W`: Open handoff modals
- `R`: Go to /results (with confirmation)
- `Shift+R`: Replay stars
- `M`: Mute chime

### D. Accessibility & Performance
- Visible focus rings, lightbox focus trap, ARIA for interactive elements
- WebP images ≤400KB, MP4/WebM for GIFs, code-split heavy components

---

# 📋 **3-PHASE IMPLEMENTATION PLAN**

## **PHASE 1: HERO + FOUNDATION + SYSTEM**
*Visual Identity & Core Infrastructure*

### 🎯 **Scope**: Hero transformation + foundation redesign + global systems

### **1.1 Welcome Section - Make it Grand**
**Target**: Cinematic hero that commands attention from back row

**Changes:**
- **Title**: "Welcome to Cardi AI — Train & Hire DemoDay Finale"
- **Subtitle**: "Where talent meets opportunity."
- **Meta**: "Cohort 2" (smaller, muted)
- **Background video**: 3-4s collaborative learning loop (muted, autoplay, <2.5MB)
- **Pentagon watermark**: Oversized behind title (8-10% opacity)
- **Animated color rule**: Thin red→yellow sweep under title

**Technical Implementation:**
- Video component with MP4/WebM sources, brightness 60-70%, white gradient overlay
- Framer Motion for rule animation and pentagon parallax
- Responsive video sizing for 16:9 projector ratio

### **1.2 Foundation Section - Feature Panels**
**Target**: Replace flat cards with compelling feature panels

**Visual Design:**
- Two side-by-side feature panels with blue accent (4px top border)
- Left: "Our Why" (target/heart icon)
- Right: "Our Mission" (flag/compass icon)
- Animated divider line between panels
- Staggered entrance animation

**Copy (Verbatim):**
- **Our Why**: *"Talent is everywhere. Opportunity isn't. Train & Hire accelerates the journey from potential to placement — with structure, mentorship, and real project context."*
- **Our Mission**: *"Enable capable individuals from non-tech backgrounds to build confident, durable careers in the corporate world — gritty, job-ready, and supported."*

### **1.3 Global System Infrastructure**
**Target**: Foundation for consistent experience across all pages

**Implementation:**
- Gradient background component with 30-45s animation loop
- Pentagon motif component with parallax scroll behavior
- Color rhythm system with section-based accent mapping
- Vertical progress rail with color transitions
- Projector mode toggle with contrast/font size adjustments
- Enhanced keyboard navigation hook with all specified keys
- Reduced motion detection and alternative animations

**Done Criteria:**
- ✅ Hero video loops smoothly, readable from back row, no jank
- ✅ Foundation panels animate in with proper stagger and icons
- ✅ Background motif visible but subtle, pentagon drifts on scroll
- ✅ Projector mode functional with high contrast
- ✅ All keyboard shortcuts working

---

## **PHASE 2: STORY CHAPTERS**
*Content Transformation & Rich Media*

### 🎯 **Scope**: Transform all story sections into designed experiences

### **2.1 Cohort 1 - Humble Beginnings (Green Accent)**
**Target**: Mini-infographic showing journey + success stories

**Visual Changes:**
- **Member visualization**: 5 circles (4 colored, 1 greyed for "exited")
- **Timeline ribbon**: Faint left→right alignment behind cards
- **Count-up animation**: Numbers animate in on scroll
- **3 Success cards** with consistent layout

**Copy (Verbatim):**
- **Chris**: *"Intern @ Cardi AI — New York project (BA track). From cohort practice to real tickets on delivery teams."*
- **Winnie**: *"Offer → Army path. Built confidence through demos & working with real teams at Cardi AI."*
- **Keegan**: *"Partner company hire. Success beyond Cardi AI; Train & Hire opened the door."*

**Footer**: *"The program matured with the trainees — and gave us the playbook to scale."*

### **2.2 Cohort 2 - Finding Our Footing (Yellow Accent)**
**Target**: Product page-style showcase with three distinct tracks

**Layout**: Summary chips + three-column cards

**Summary Chips** (staggered animation):
*"6 trainees • Younger mix (new grads) • Added WAI track • Richer curriculum • Group projects • DemoDays • Multi-track admin"*

**Three Columns:**
- **BA Track** (workflow icon): *"Functional Requirements • Business Process Diagrams • Acceptance Criteria • In-system demos"* + BPD thumbnail → lightbox
- **Workplace AI (WAI)** (sparkles icon): *"Automation for BA workflows using n8n, FAL.ai, GPT-4.1 API, and Chrome extensions"* + demo video → lightbox
- **Professional Development** (briefcase icon): *"Presentations, stakeholder comms, resume workshop, peer feedback, mock demos."*

### **2.3 Enhanced Section Redesigns**

**Cadence & Experience:**
- Left: Bulleted copy with icons (Weekly sessions, 16 hrs office hours, Practice rituals, Team channels)
- Right: 10-dot timeline (Weeks 1-10) with hover tooltips

**Group Project - "LMS Discovery":**
- Two cards labeled "Vendor" and "Client" with arrows between
- Copy: *"Teams rotated vendor↔client. Discovery → FRs → client review. Outcome: collaboration pressure, documentation muscle, presentation reps."*
- 3 FR thumbnails → lightbox

**Artifacts Carousel:**
- Header: *"Project Artifacts — craft, clarity, and courage."*
- 16:9 media pane, caption below (title • author • one-liner)
- Swipe + dots, keyboard accessible

**People & Stories:**
- ~~Clean 3xN grid layout, no orbit animation~~ **UPDATED**: **Circular Orbital Animation System**
- **NEW REQUIREMENT**: 6 profile photos in circular orbital motion
- Profile photos arranged in circle with alternating orange/pink borders
- Continuous smooth circular rotation around invisible center point
- Each photo maintains individual rotation (face always upright)
- Hover/Enter → pause animation + elevate card, click → lightbox with story
- Header: *"Diverse paths, shared ambition."*

**Pathway:**
- Stepper: Certificate → 6-month paid internship → Full-time opportunity
- Bullets: Real projects, mentorship, career launch

**Done Criteria:**
- ✅ Each section has designed background motif and accent color
- ✅ All artifacts open in lightbox with proper focus management
- ✅ Micro-animations respect reduced motion preferences
- ✅ Content legible from back row in projector mode
- ✅ Success stories and track showcases properly formatted

---

## **PHASE 3: HANDOFF MODALS + RESULTS + POLISH**
*Interactive Systems & Production Ready*

### 🎯 **Scope**: Complete interactive rating system + final polish

### **3.1 Handoff Modals**
**Target**: Professional demo introduction modals

**BA Modal Template:**
- **H2**: *"BA Team — Intake Scenario Demo"*
- **P1**: *"You'll see trainees capture a child-welfare intake based on a realistic scenario (PLACEHOLDER_SCENARIO_SUMMARY)."*
- **P2**: *"Watch for: clear FR structure, BPD coverage of edge cases, and in-system navigation during data entry."*
- **P3**: *"Engage as observers; scoring will happen separately."*

**WAI Modal Template:**
- **H2**: *"WAI Team — BA Productivity Automation"*
- **P1**: *"Trainees will demo an AI-assisted flow that accelerates user-story authoring (PLACEHOLDER_WAI_SUMMARY)."*
- **P2**: *"Watch for: robustness of prompts, clarity of outputs into BA templates, and practical fit in our delivery."*
- **P3**: *"Engage as observers; scoring will happen separately."*

### **3.2 Enhanced Rating System**
**Target**: Token-gated professional judging interface

**Implementation:**
- Token-gated `/rate?token=GUID` (one per judge)
- Form: Name (read-only if token-mapped), Track selection, 1-5 sliders
- Categories: Technical, Communication, Delivery Readiness
- Serverless DB storage (Supabase/Vercel KV)
- Unique index: `(eventId, trackId, judgeToken)` with overwrite capability
- Success toast + subtle confetti (disabled if reduced-motion)

### **3.3 Results Reveal Enhancement**
**Target**: Dramatic, professional results presentation

**Features:**
- Two big cards: BA and WAI with "Reveal" buttons
- Submission threshold guard (minimum 3 ratings)
- Star fill animation: left→right (180ms each)
- Halo glow effect, final X/5 score pop
- Confetti + soft chime (once, respects settings)
- Sample size display: *(7 ratings)* - no names
- Shift+R replay functionality

### **3.4 Production Polish**
**Target**: Day-of-presentation ready

**Performance:**
- Images: WebP ≤400KB, 1920w max
- GIFs converted to MP4/WebM (muted loop)
- Code-split carousel/lightbox/confetti components
- Audio armed by first user click

**Quality Assurance:**
- Tech check panel (dev-only): audio armed, tokens loaded, submission counts
- Cross-browser testing (Chrome, Safari, Edge)
- Mobile responsive verification
- Projector mode validation

**Done Criteria:**
- ✅ Live ratings flow works on multiple devices simultaneously
- ✅ Results page animates cleanly with proper guards
- ✅ Projector mode legible, all hotkeys functional
- ✅ Confetti/chime respect accessibility settings
- ✅ Tech check panel shows system status
- ✅ Performance targets met (Lighthouse 95+)

---

## 📁 **ASSET REQUIREMENTS**

### Video/Media Assets Needed:
- `/assets/video/hero_loop.mp4` + `hero_loop.webm` (3-4s collaborative learning)
- `/assets/video/hero_poster.jpg` (fallback image)
- `/assets/artifacts/BPD_SPOTLIGHT.png` (BA track showcase)
- `/assets/artifacts/WAI_DEMO.mp4` (WAI automation demo)

### Headshot Placeholders:
- `/assets/people/CHRIS_PH.jpg`, `WINNIE_PH.jpg`, `KEEGAN_PH.jpg`
- Cohort grid: `/assets/people/A_PH.jpg` through `/assets/people/F_PH.jpg`

### Logo Assets:
- `/assets/logo/LOGO_Cardinality.svg` + PNG fallback
- Pentagon motif SVG for watermark

---

## 📊 **CONTENT JSON STRUCTURE**

Enhanced `data/content.json` will include:
```json
{
  "meta": { "eventId": "cohort2-2025-09", "date": "2025-09-24" },
  "welcome": {
    "title": "Welcome to Cardi AI — Train & Hire DemoDay Finale",
    "subtitle": "Where talent meets opportunity.",
    "heroVideo": "/assets/video/hero_loop.mp4"
  },
  "cohort1": {
    "members": 5, "exited": 1, "persevered": 4,
    "stories": [/* Chris, Winnie, Keegan data */]
  },
  "cohort2": {
    "size": 6,
    "chips": [/* enhancement chips */],
    "tracks": {/* BA, WAI, ProDev data */}
  },
  "modals": {
    "ba": { "p1": "PLACEHOLDER_SCENARIO_SUMMARY", /*...*/ },
    "wai": { "p1": "PLACEHOLDER_WAI_SUMMARY", /*...*/ }
  }
}
```

---

## ✅ **PHASE ACCEPTANCE CRITERIA**

### **Phase 1 Complete When:**
- [ ] Animated gradient + pentagon motif in place; Projector Mode works
- [ ] Welcome video loop with overlay; title/subtitle updated
- [ ] Foundation panels with icons, colored rule, staggered entrance
- [ ] Global keyboard navigation and accessibility features functional

### **Phase 2 Complete When:**
- [ ] Cohort 1 mini-infographic + 3 success cards (Chris, Winnie, Keegan)
- [ ] Cohort 2 three-column showcase (BA/WAI/ProDev) + chips + spotlights
- [ ] All enhanced sections: Cadence timeline, Group Project, Artifacts, People, Pathway
- [ ] All media lazy-loads; lightbox works; copy matches specification

### **Phase 3 Complete When:**
- [ ] Token-gated `/rate` storing to serverless DB (unique per judge/track)
- [ ] `/results` live polling, Reveal guard, star animation, confetti/chime
- [ ] All hotkeys functioning; reduced-motion honored
- [ ] Day-of tech check panel operational

---

## 🚀 **IMPLEMENTATION APPROACH**

Each phase will be implemented with:
1. **Component-first development** - Build reusable pieces
2. **Content-driven approach** - JSON-configurable copy/media
3. **Progressive enhancement** - Core functionality first, polish second
4. **Accessibility-first** - WCAG compliance from start
5. **Performance monitoring** - Bundle size and Lighthouse tracking

**Estimated Timeline:**
- Phase 1: Focus on hero transformation and global systems
- Phase 2: Content section enhancement and rich media integration
- Phase 3: Interactive systems and production polish

---

# 🚨 **DESIGN CRISIS: COMPREHENSIVE OVERHAUL PLAN**

## **Current State Analysis:**
- ❌ Presentation is bland, white, and unprofessional
- ❌ Hydration errors breaking visual systems
- ❌ No rich backgrounds or visual depth
- ❌ Missing logo color integration
- ❌ Lacks visual hierarchy and engagement

## **TWO-PHASE DESIGN OVERHAUL**

---

## **OVERHAUL PHASE 1: VISUAL FOUNDATION & RICHNESS**
*Priority: Eliminate bland white appearance*

### 🎯 **Goal**: Transform from bland/white to visually rich and engaging

### **1.1 Technical Foundation Fixes**
**Fix First**: Resolve hydration error blocking visual systems
- Server/client rendering mismatch in background components
- Clean SSR for gradient and motif systems

### **1.2 Rich Background System**
**Replace white with engaging backgrounds:**

**Global Background Layers:**
- **Layer 1**: Deep gradient bases (logo colors + complementary)
- **Layer 2**: Subtle geometric patterns (hexagons, lines, dots)
- **Layer 3**: Animated color washes (slow, smooth transitions)
- **Layer 4**: Logo-based motifs (large, translucent, parallax)

**Section-Specific Backgrounds:**
- **Welcome**: Dark gradient with logo colors, video overlay
- **Foundation**: Rich blue-to-purple gradient with geometric patterns
- **Cohorts**: Color-coded backgrounds with textures
- **Content Sections**: Layered gradients with subtle animations

### **1.3 Logo Color Integration**
**NEEDED**: Logo file to extract brand colors
- Primary color palette from logo
- Secondary/accent colors
- Proper brand color hierarchy
- Logo motif integration throughout

### **1.4 Visual Depth & Layers**
**Create depth instead of flat white:**
- **Frosted glass cards** with backdrop blur
- **Multi-layer shadows** (subtle to dramatic)
- **Elevated sections** with proper z-indexing
- **Textured surfaces** instead of plain white
- **Gradient overlays** on all content areas

### **1.5 Typography & Visual Hierarchy**
**Make text engaging:**
- **Large, bold headlines** with gradient text effects
- **Color-coded section headers** matching theme
- **Rich text treatments** (shadows, glows, textures)
- **Proper contrast** against rich backgrounds

---

## **OVERHAUL PHASE 2: CONTENT DESIGN & POLISH**
*Priority: Professional polish and micro-interactions*

### 🎯 **Goal**: Transform content from plain to professionally designed

### **2.1 Enhanced Content Layouts**
**Rich, engaging content presentation:**

**Hero Section:**
- **Cinematic video background** with logo color overlays
- **Large, impactful typography** with animations
- **Floating UI elements** with depth and shadows
- **Interactive hover states** on all elements

**Story Sections:**
- **Visual infographics** instead of plain text
- **Timeline visualizations** with rich graphics
- **Progress indicators** with brand colors
- **Interactive data displays**

### **2.2 Component Design System**
**Professional UI components:**
- **Cards**: Rich gradients, frosted glass, premium shadows
- **Buttons**: Gradient backgrounds, hover animations, depth
- **Navigation**: Glassy, floating design with blur effects
- **Indicators**: Animated progress with brand colors

### **2.3 Micro-Interactions & Animations**
**Engaging user experience:**
- **Hover animations** on all interactive elements
- **Scroll-triggered animations** for content reveals
- **Color transitions** matching brand palette
- **Particle effects** and subtle motion graphics
- **Loading states** with brand-consistent animations

### **2.4 Final Polish & Details**
**Professional presentation quality:**
- **Consistent spacing** and alignment
- **Rich textures** on all surfaces
- **Branded icons** and illustrations
- **Professional color harmony** throughout
- **Print/presentation mode** optimization

---

## **IMMEDIATE NEEDS & QUESTIONS:**

### **Critical Missing Assets:**
1. **Logo file** - You mentioned logo colors but I need to see it
2. **Brand color specifications** - Primary/secondary colors
3. **Any existing brand guidelines** or style preferences

### **Design Direction Questions:**
1. **Logo colors**: What are the primary brand colors I should use?
2. **Visual style preference**: Modern/clean, bold/dramatic, or corporate/professional?
3. **Background intensity**: Should backgrounds be subtle or bold/dramatic?
4. **Animation preference**: Minimal motion or rich animations?

### **Technical Priorities:**
1. **Fix hydration error** (blocking all visual systems)
2. **Implement rich background system**
3. **Add logo color palette**
4. **Transform white/bland appearance**

---

## **SUCCESS CRITERIA:**

### **Phase 1 Complete When:**
- ✅ **No more white/bland appearance** - rich backgrounds throughout
- ✅ **Logo colors integrated** properly across all sections
- ✅ **Visual depth established** with layers, shadows, gradients
- ✅ **Hydration error resolved** - all visual systems working
- ✅ **Professional appearance** suitable for presentation

### **Phase 2 Complete When:**
- ✅ **All content professionally designed** with rich layouts
- ✅ **Micro-interactions working** smoothly across all components
- ✅ **Brand consistency** maintained throughout
- ✅ **Presentation-ready quality** achieved
- ✅ **User feedback addressed** - no longer bland or white

Ready for **LOGO FILE** and **DESIGN DIRECTION CLARIFICATIONS** before proceeding!

---

# 🌟 **SPECIAL FEATURE: CIRCULAR ORBITAL PEOPLE ANIMATION**

## **User Request Update - Sept 25, 2025**
Based on provided screenshot, user wants the People & Stories section transformed from static grid to dynamic circular orbital animation.

## **Design Specification:**

### **Visual Layout:**
- **6 profile photos** arranged in perfect circle formation
- **Alternating border colors**: Orange and Pink/Magenta (consistent with brand)
- **Photo positioning**: Equal spacing around 360° circle
- **Center point**: Invisible anchor around which all photos orbit

### **Animation Behavior:**
- **Continuous rotation**: Smooth circular motion around center point
- **Orbital speed**: Slow, mesmerizing pace (15-20 seconds per full rotation)
- **Individual rotation**: Each photo rotates counter to orbital motion (faces stay upright)
- **Seamless loop**: No pause or reset, infinite smooth animation

### **Interactive States:**
- **Hover**: Pause orbital animation + elevate hovered photo
- **Focus**: Same as hover for keyboard accessibility
- **Click**: Open profile story in lightbox modal
- **Reduced motion**: Static circular arrangement with gentle pulse on hover

## **Technical Implementation Plan:**

### **Component Structure:**
```
<CircularOrbitAnimation>
  <OrbitContainer> (invisible center reference)
    <OrbitingPhoto position="0deg" color="orange" />
    <OrbitingPhoto position="60deg" color="pink" />
    <OrbitingPhoto position="120deg" color="orange" />
    <OrbitingPhoto position="180deg" color="pink" />
    <OrbitingPhoto position="240deg" color="orange" />
    <OrbitingPhoto position="300deg" color="pink" />
  </OrbitContainer>
</CircularOrbitAnimation>
```

### **Animation Method:**
- **Framer Motion**: `useAnimation` + `motion.div`
- **CSS Transform**: `rotate()` for orbital motion + individual `rotate()` for photo orientation
- **Animation Loop**: Infinite duration with linear easing
- **Responsive**: Scale orbit radius based on screen size

### **Color Scheme:**
- **Orange**: `#F59E0B` or Cardi brand orange
- **Pink/Magenta**: `#EC4899` or Cardi brand pink
- **Border width**: 3-4px for visibility
- **Border style**: Solid, with subtle shadow

### **Performance Considerations:**
- **GPU acceleration**: `transform3d()` for smooth 60fps
- **Reduced motion**: Respect `prefers-reduced-motion`
- **Mobile optimization**: Smaller orbit radius on mobile

## **Implementation Steps:**
1. Create `CircularOrbitAnimation` component
2. Calculate orbital positions (0°, 60°, 120°, 180°, 240°, 300°)
3. Implement dual rotation system (orbit + counter-rotation)
4. Add hover/focus interactions
5. Integrate with existing People data structure
6. Test across devices and motion preferences

## **Success Criteria:**
- ✅ 6 photos rotate smoothly in perfect circle
- ✅ Alternating orange/pink borders match design
- ✅ Faces stay upright during rotation
- ✅ Hover pauses animation and elevates photo
- ✅ Maintains 60fps performance
- ✅ Respects accessibility preferences
- ✅ Works responsively on all screen sizes

**Status**: ~~Ready for approval to begin implementation~~ **SUPERSEDED BY COMPREHENSIVE OVERHAUL**

---

# 🚀 **COMPREHENSIVE OVERHAUL PLAN - "DECK-AS-WEBSITE" TRANSFORMATION**

## **User Request Update - Sept 25, 2025 (v2.0)**
Complete transformation based on detailed BUILD BRIEF (v0) - creating a vibrant, cinematic, single-flow website that reads like a deck and proves Train & Hire is a growing workforce-development asset.

**Target**: 5-7 minute presentation length
**New Hero**: "Cardi Demo Day Finale Cohort 2, 2025"
**Mission**: Highlighting the growing nature of Train & Hire as a workforce development asset

---

# 🎯 **PHASE-BY-PHASE IMPLEMENTATION STRATEGY**

## **PHASE 1: FOUNDATION & DESIGN SYSTEM OVERHAUL**
*Duration: Foundation for everything - must be rock-solid*

### **1.1 Global Design Language System**

**Color Token System** (Complete replacement):
```scss
// New Cardi Design Tokens
--cardi-ink: #0B0B0C;           // Primary text
--cardi-cloud: #F8FAFC;         // Background
--cardi-border: #E5E7EB;        // Hairlines

// Cardinality Pentagon Palette
--cardi-red: #E11D48;
--cardi-orange: #FB923C;
--cardi-yellow: #F59E0B;
--cardi-green: #10B981;
--cardi-blue: #3B82F6;
--cardi-indigo: #6366F1;

// Gradient Recipes
--brand-sweep: linear-gradient(45deg, var(--cardi-red), var(--cardi-yellow), var(--cardi-green), var(--cardi-blue));
--calm-fade: linear-gradient(to bottom, var(--cardi-cloud), #EEF2FF);
```

**Typography System** (Complete replacement):
- **Font**: Inter/Geist with system fallbacks
- **Weights**: 800 (Display), 700 (Headings), 500 (Body)
- **Scale**: Display 80/88px, H1 64/72px, H2 40/44px, H3 28/32px, Body 20/22px
- **Tracking**: Display -1%, others -0.2%
- **Line-height**: 1.1 (headings), 1.5 (body)
- **Projector Mode**: +2-4px bump for all sizes

**Surface Design System**:
- **Cards**: `background: #FFFFFFAA, border: var(--cardi-border), radius: 24px, shadow: 0 24px 60px -24px rgba(0,0,0,.25)`
- **Pills**: `radius: 20px` with subtle inner shadow on hover
- **Dividers**: 1px border, minimal usage

**Motion System**:
- **Easing**: `cubic-bezier(0.22,0.61,0.36,1)` standard, `easeOutCirc` for hero
- **Durations**: 180ms (small), 360ms (medium), 600-900ms (hero)
- **Stagger**: 60ms between elements
- **Accessibility**: Respect `prefers-reduced-motion`

### **1.2 Global Canvas & Background System**

**Animated Background Layer**:
- Global animated gradient using `brandSweep` at 4-8% opacity
- Smooth 30-45 second animation cycle
- Oversized Cardinality pentagon watermark (SVG) with parallax drift 6-10px

**Layout Architecture**:
- Single vertical scroll with anchor sections
- Side progress rail with dots (active dot adopts section accent color)
- Smooth scroll 700-800ms with proper header offset

### **1.3 Navigation & Interaction Systems**

**Keyboard Controls**:
- `PgDn/PgUp`: Section jump navigation
- `S`: Skip animations toggle
- `K`: Blackout mode toggle
- `?`: Keyboard help popover
- `Enter/Space`: Open modals/chips
- `Esc`: Close modals
- `Arrow keys`: Navigate within timeline

**Focus Management**:
- Visible focus rings
- Modal focus trap with `aria-modal="true"`
- Focus return to invoking element on modal close

---

## **PHASE 2: CORE NARRATIVE SECTIONS**
*Duration: Build the story backbone*

### **2.1 Hero Section (#hero) - "Headline Plate"**

**Layout & Design**:
- Full-bleed canvas with animated gradient + pentagon watermark (top-right drift)
- Centered column with ample white space
- Thin animated color rule using `brandSweep` under H1

**Content (EXACT)**:
- **H1** (Display size): "Cardi Demo Day Finale Cohort 2, 2025"
- **Subhead** (H3): "Highlighting the growing nature of Train & Hire as a workforce development asset."

**Interactions**:
- On load: H1 slides up 12px + fade in
- Color rule grows left→right (600ms)
- Subhead fades in with delay
- Top-left: Cardinality.ai logo (small, links to root)
- **Future**: Background video loop option with 70% white overlay

### **2.2 Welcome TOC Section (#welcome-toc) - "Navigation Invitation"**

**Design**:
- Section header: "Welcome to Train & Hire"
- 2-column card grid of navigation chips
- Background: `calmFade` with faint dotted pentagon pattern

**Navigation Chips** (exact titles → anchors):
1. "About + Mission" → "Why we exist & what we do" → `#about-train-and-hire`
2. "Humble Beginnings — Cohort 1" → "First cohort, first wins" → `#cohort-1`
3. "Finding Our Footing — Cohort 2" → "Two tracks, stronger curriculum" → `#cohort-2`
4. "Weekly View" → "What happened, week by week" → `#weekly-view`
5. "Beyond the Certificate — Next Steps" → "Internship and full-time path" → `#pathway-next-steps`

**Secondary Navigation**:
- "About DemoDay Finale 2025" → `/demoday-2025`
- "Blog" → `/blog`

**Interactions**:
- Hover: Chip elevation + accent rule highlight
- Click: Smooth-scroll to target + header pulse (1s glow)

### **2.3 About Section (#about-train-and-hire) - "Origin Story"**

**Design**:
- Wide story card (radius 28px) with bold header
- Right edge: Slim vertical `brandSweep` accent bar
- Small pentagon watermark decoration

**Content (EXACT - 3 paragraphs)**:
1. "It began as an action item from a conversation between visionary leader Tyag Loganathan and community champion Derek Stevens. They saw a simple truth: talent is everywhere — opportunity isn't."
2. "Train & Hire was created to accelerate the jump into tech for gritty people with the hunger to perform. A small team formed, and the search for our first cohort began. The hiring bar was straightforward: people who give their best effort, and act organized and professional wherever they are."
3. "Weeks later, five trainees launched Cohort 1. A few months after that, we're here — graduating Cohort 2."

**Highlight Callout**:
"Train & Hire gives gritty individuals the opportunity to build and succeed in tech careers."

**Interaction**:
- Scroll reveal: Each paragraph slides in with stagger
- Accent bar wipes top→bottom

### **2.4 Cohort 1 Section (#cohort-1) - "Humble Beginnings"**

**Design**:
- Header + mini-infographic: 5 dots (1 greyed "exited", 4 colored "persevered")
- Two success cards with avatar placeholders, names, roles, blurbs
- Optional thumbnail area for lightbox media

**Stats Display**:
"5 trainees • 1 exited • 4 persevered"

**Success Cards (EXACT)**:
- **Chris**: "Intern @ Cardi AI — New York project (BA track). From cohort practice to real tickets on delivery teams."
- **Winnie**: "Offer → Army path. Found confidence through demos and working with real teams at Cardi AI."

**Footer**: "Early learnings across hiring, training, and admin set the stage for scale."

**Interactions**:
- Hover: Card float + role line highlight underline
- Click thumbnail: Lightbox with arrow nav, ESC close

### **2.5 Cohort 2 Section (#cohort-2) - "Finding Our Footing"**

**Summary Line**:
"6 trainees; varied backgrounds (new grads, return-to-work, mid-career transitions, and a cybersecurity upskiller)."

**Three-Column Track Grid (EXACT)**:

**Business Analyst (BA)**:
"BA fundamentals for CCWIS: understand Functional Requirements, create Business Process Diagrams, write Acceptance Criteria, and perform in-system demos."

**Workplace AI (WAI)**:
"Automation service for Cardi BAs to accelerate comprehensive user stories using n8n, FAL.ai, GPT-4.1 API, and Chrome extensions."

**Professional Development**:
"Common track across BA and WAI: presentations, stakeholder communication, peer review, resume workshop, and mock demos."

**Improvements Chip Cluster (EXACT)**:
1. "Deeper, sequential BA curriculum"
2. "Fewer missed weeks; better use of backup/self-study"
3. "Team activities: LMS "vendor ↔ client" project & final capstone"
4. "Multiple DemoDays before the Finale"
5. "Fully servicing two tracks — assignments, feedback loops, 1:1 coaching"
6. "Added admin capacity (Sruti) to coordinate and track progress"

**Interactions**:
- Track card hover: Icon pulse + thumbnail ring highlight
- Click: Lightbox with placeholder assets

---

## **PHASE 3: INTERACTIVE TIMELINE & ADVANCED FEATURES**
*Duration: The most complex phase - Canvas/SVG + Modals*

### **3.1 Timeline Section (#weekly-view) - "Weekly Journey Visualization"**

**CRITICAL**: **REMOVE** existing "Cadence & Experience" section completely

**Canvas/SVG Rail System**:
- Full-width Canvas/SVG rail with subtle arc
- Animated multi-stop gradient stroke using `brandSweep`
- 5 nodes (white circles 22-24px) with subtle shadows
- Hover/focus: Scale to 28px with glow effect
- Connectors: 1px lines from nodes to chips with diamond nubs

**Chip Layout System**:
- **Top chips** (WAI track): 64px above rail
- **Bottom chips** (BA track): 64px below rail
- Rounded 18-20px radius
- Label + tiny track tag
- Hover: Lift + 2% scale

**Timeline Labels (EXACT)**:
- **Weeks 1–2** — WAI: "Env setup, voice→text" · BA: "CWS intro, intake BPD"
- **Weeks 3–4** — WAI: "Jira integration" · BA: "BPD refinement, FRs"
- **Weeks 5–6** — WAI: "AC generation, ADF" · BA: "Write FRs & ACs"
- **Weeks 7–8** — WAI: "E2E flow, logging" · BA: "System demos, comms"
- **Weeks 9–10** — WAI: "Polish, docs, demo" · BA: "Capstone, final prep"

### **3.2 Modal System (10 Detailed Modals)**

**Modal Design**:
- Max-width: 720px
- Radius: 24px
- Backdrop blur effect
- Close (Esc), Prev/Next arrows within same track

**Content Structure** (using provided exact copy):
- **Title**: "Weeks X–Y — [Track Name]"
- **Subtitle**: Descriptive phase summary
- **Body**: 3 paragraphs (exact copy provided)
- **Highlights**: Bullet list of key achievements

**Modal Navigation**:
- Left/Right arrows: Move between time blocks within same track
- Up/Down or track toggle: Switch between WAI/BA for same time period
- Focus management: Return to invoking chip on close

### **3.3 Alternative View Systems**

**Hover Tooltips**:
Brief 1-line tooltip on chip hover (first sentence of modal subtitle)

**Table Toggle View**:
- "View as Table" pill in section top-right
- Compact 5-row × 3-column table (Block | WAI | BA)
- State persists until user leaves section
- Same modal content accessible from table cells

**Responsive Behavior**:
- **≥1200px**: Chips above/below rail
- **768-1199px**: Stack WAI above BA with reduced offsets
- **<768px**: Accordion list (expandable blocks)

### **3.4 Pathway Section (#pathway-next-steps) - "Career Progression"**

**Design**:
Large horizontal stepper with `brandSweep` progress line

**Steps (EXACT)**:
1. "Certificate"
2. "6-month paid internship"
3. "Full-time opportunity (pending availability)"

**Benefits (EXACT)**:
- "Work with delivery teams on real projects."
- "Gain valuable experience and mentorship."
- "Launch your career with Cardi."

**Interaction**:
Steps "fill" left→right on scroll + gentle icon pop

---

## **PHASE 4: POLISH, PERFORMANCE & PRODUCTION READINESS**
*Duration: Final refinement and optimization*

### **4.1 Accessibility & Keyboard Navigation**

**Complete Keyboard Support**:
- All chips and nodes focusable (`tabindex=0`)
- Proper `aria-label` attributes
- Enter/Space opens modals
- Arrow navigation within timeline
- Focus rings visible and properly styled

**Modal Accessibility**:
- Focus trap implementation
- `aria-modal="true"`
- Proper heading hierarchy
- Screen reader announcements

### **4.2 Performance Optimization**

**Asset Optimization**:
- Convert GIFs → MP4/WebM
- Images: WebP ≤400KB, ≤1920w max
- Lazy-load heavy assets
- Preload next section on intersection

**Animation Performance**:
- GPU acceleration for smooth 60fps
- Reduced motion fallbacks
- Efficient Canvas/SVG rendering
- Intersection Observer for scroll triggers

### **4.3 Integration & Sync Systems**

**Progress Rail Sync**:
- Dots sync to scroll position
- Active dot adopts section accent color
- Smooth transitions between sections

**TOC Link Behavior**:
- Smooth scroll to anchors
- Section header pulse on arrival
- Proper offset calculations

### **4.4 Quality Assurance Checklist**

**Content Verification**:
- [ ] Hero uses EXACT headline & subline
- [ ] All 10 timeline modals use exact provided copy
- [ ] Success cards match exact names/roles/blurbs
- [ ] Track descriptions word-perfect
- [ ] Improvement chips list exactly as specified

**Interaction Verification**:
- [ ] TOC chips navigate to correct anchors
- [ ] Section headers pulse on arrival
- [ ] Timeline tooltips show on hover
- [ ] All 10 modals open with correct content
- [ ] Table toggle works and persists
- [ ] Keyboard navigation complete

**Technical Verification**:
- [ ] No hydration errors
- [ ] Smooth performance at 1080p projector
- [ ] Reduced-motion tested
- [ ] All accessibility requirements met
- [ ] Cross-browser compatibility verified

---

# 🔧 **TECHNICAL ARCHITECTURE DECISIONS**

## **Component Hierarchy**:
```
DeckLayout (progress rail, keyboard, projector)
├── GlobalBackground (gradient + pentagon)
├── HeroSection (exact copy + animated rule)
├── WelcomeTOC (navigation chips)
├── AboutSection (3-paragraph story)
├── Cohort1Section (stats + success cards)
├── Cohort2Section (tracks + improvements)
├── WeeklyTimeline (Canvas/SVG + 10 modals)
├── PathwaySection (stepper + benefits)
└── GlobalModals (keyboard help, etc.)
```

## **Data Structure** (content.json):
Complete replacement with exact structure provided in brief

## **State Management**:
- Timeline modal states
- Table toggle persistence
- Keyboard help visibility
- Progress tracking
- Animation preferences

---

# ✅ **USER DECISIONS & FINAL REFINEMENTS**:

## **Critical Questions - ANSWERED**:
1. **Current Work**: ✅ **REPLACE** circular orbital animation with new structure
2. **Data Migration**: ✅ **START FRESH** - use exact JSON structure provided
3. **Timeline Complexity**: ✅ **ALTERNATIVE APPROACH** - Central timeline with WAI above/BA below, 2-week blocks, hover/click for modals
4. **Scope Priority**: ✅ **FOCUS ON `/present` ONLY** - `/rate` and `/results` later
5. **Asset Strategy**: ✅ **PLACEHOLDERS NOW** - plan for easy asset swapping

## **Incorporated Refinements (Score 9.2/10)**:

### **Exact Copy Enforcement**:
- **Hero H1**: "Cardi Demo Day Finale Cohort 2, 2025"
- **Hero Subhead**: "Highlighting the growing nature of Train & Hire as a workforce development asset."
- **Logo**: Top-left Cardinality.ai SVG, links to root
- **All story copy**: Exact 3-paragraph About section + callout

### **Timeline Requirements LOCKED**:
- **REMOVE existing "Cadence & Experience" completely**
- **Central timeline**: WAI track above, BA track below
- **5 two-week blocks**: Weeks 1-2, 3-4, 5-6, 7-8, 9-10
- **10 modals total**: Exact copy provided for each WAI/BA block
- **Table toggle**: "View as Table" at section top-right (persists in section)
- **Navigation**: Left/Right blocks, Up/Down tracks, Enter/Space open, Esc close

### **Quality Gates**:
- **Projector Mode**: +2-4px fonts, AAA contrast, 22px min body text
- **Performance**: <400KB images, WebP format, lazy-load lightboxes
- **Accessibility**: Full keyboard nav, focus traps, reduced motion support
- **No hydration errors**: Client-side rendering for animated backgrounds

### **Content Structure**:
- **Cohort 1**: 5 dots (4 colored, 1 grey), Chris/Winnie exact copy
- **Cohort 2**: 6 trainees summary + 3 track cards + improvements chips (exact)
- **Single content.json**: All copy centralized for easy updates

---

# 🚀 **IMPLEMENTATION SEQUENCE - FINAL**

## **Phase 1**: DeckLayout + GlobalBackground + Hero + TOC
## **Phase 2**: About + Cohort 1 + Cohort 2 (with lightboxes)
## **Phase 3**: Remove old content + Build Weekly Timeline + 10 Modals
## **Phase 4**: Pathway + QA + Performance optimization

---

# ✅ **ACCEPTANCE CRITERIA - FINAL CHECKLIST**

- [ ] Hero shows exact headline/subhead; logo present; smooth motion
- [ ] Weekly View fully replaces old content; 10 modals with exact text
- [ ] Cohort 2 shows 3 tracks + improvements chips; lightboxes work
- [ ] Projector Mode contrast/size looks great at 1080p
- [ ] Reduced Motion falls back to fades; no parallax/particles
- [ ] No hydration errors; performance smooth on older devices
- [ ] All keyboard navigation working (PgDn/PgUp, arrows, Enter, Esc)

---

# 🎯 **READY TO IMPLEMENT**

**Plan Score**: 9.2/10 - Comprehensive, aligned with workforce development message
**Confidence**: High - All critical questions answered, refinements incorporated
**Risk Mitigation**: Hydration guards, performance optimization, accessibility-first

**Status**: ✅ **APPROVED & READY FOR IMPLEMENTATION**