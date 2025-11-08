# Design Guidelines: Friendly Dental Clinic Website

## Design Approach
**Mobile-First Dental Practice** - Warm, approachable, human-centered design. Less clinical, more "text your friendly dentist." Focus on trust-building through authentic imagery and conversational tone.

## Color Palette
**Subtle & Warm** - Colors should feel gentle and inviting, not bright or overwhelming
- **Primary**: Soft Teal `hsl(182, 45%, 42%)` - Calming, professional blue-green
- **Accent**: Warm Sand `hsl(27, 52%, 88%)` - Gentle peachy-beige warmth
- **Background**: Warm Cream `hsl(32, 40%, 97%)` - Soft, welcoming base
- **Card**: Light Warm `hsl(30, 30%, 95%)` - Subtle elevation
- **Text**: Warm Charcoal `hsl(30, 10%, 25%)` - Easy on eyes
- High contrast for accessibility on all interactive elements
- Avoid bright, saturated colors that "poke in the eye"

## Typography
- **Headings**: Poppins (warm, friendly)
- **Body**: Inter (clean, readable)
- **Base Size**: 16-18px on mobile
- Clear hierarchy with generous line-height for readability

## Spacing & Layout System
- **Rounded Corners**: `rounded-lg` to `rounded-2xl` throughout
- **Shadows**: Subtle, soft shadows on cards and CTAs
- **Touch Targets**: Large (min 48px) for mobile-first interaction
- **Spacing**: Generous padding, breathing room between sections

## Component Library

### Navigation
- **Sticky Header**: Logo + "Services" + "About" links, always accessible
- Mobile-optimized with clear tap areas

### Hero Section (Home)
- **Doctor Portrait**: Smaller, contained size (w-64 sm:w-80) - friendly, approachable photo (professional but warm)
- **Specialty Text**: Hollywood Smile, No Shaving Teeth, Super Thin, No Injection, Super Natural
- **Call Button**: Shows phone number `+91 98765 43210` on desktop, opens phone app on mobile via `tel:` link
- **Sticky Booking Bar**: Appears after scrolling past hero section, stays at top with Quick Booking form

### Before/After Comparison
- **Section Title**: "Smile Transformation" or creative alternative
- **4-6 Image Sliders**: Interactive comparison sliders showing patient transformations
- **Trust Note**: "We'll reply on WhatsApp soon" - small, reassuring text

### Testimonials
- **3-5 Reviews**: Short, casual quotes
- **Circle Avatars**: Friendly profile images
- **First Names Only**: Maintains approachable tone

### FAQ Section
- **5-6 Questions**: Common patient concerns
- **One-Liner Answers**: Brief, friendly responses
- **Casual Photo**: Happy patient photo on left side (visible on larger screens) for personal touch
- Expandable/collapsible for mobile efficiency

### Map Integration
- **Google Maps Embed**: Scroll-protected container
- **Quick Info Panel**: Hours table, directions link
- **Footer Placement**: Also embedded in footer

### Service Cards
- **Large Icons**: Visual hierarchy, instant recognition
- **Benefit Copy**: "Cleaning & Polishing — fresher breath, brighter smile"
- **Card Hover**: Subtle lift animation
- Links to individual service detail pages

### Service Detail Pages
- **Banner/Icon**: Visual identifier
- **Key Info**: What it is, who it's for, duration, aftercare
- **Prefilled WhatsApp CTA**: "Book this service on WhatsApp" with service name pre-populated
- **Back Navigation**: Return to all services

### Booking Form
- **Inline Strip Design**: Integrated booking strip with input fields (not just buttons)
- **3 Fields**: Name, WhatsApp number, Message with clear placeholders
- **Multiple Placements**: 
  - Sticky bar at top (after hero scroll)
  - Full booking strip sections throughout pages
  - Dedicated booking page
- **WhatsApp Integration**: Form submission opens WhatsApp with pre-filled message
- **Reassurance**: "We'll reach you on WhatsApp within minutes ✨"

### Footer
- **Contact Block**: Clinic address, hours, phone
- **Social Icons**: Instagram, WhatsApp links (large, accessible)
- **Map Embed**: Google Maps integration
- **Organized Grid**: Mobile-stacked, tablet/desktop multi-column

## Images
- **Hero**: Professional yet warm doctor portrait (primary focal point)
- **Before/After**: 4-6 authentic patient transformation photos with comparison sliders
- **Service Cards**: Icon-based (not photo-based for cleaner look)
- **About Page**: Friendly intro photo of doctor
- Use `next/image` with lazy loading for performance

## Interactions & Animations
- **Micro-animations**: Card hover lift, button press feedback
- **Smooth Scroll**: To booking section from any CTA
- **Fade/Slide**: Subtle transitions on page load
- **Respect Motion Preferences**: Honor `prefers-reduced-motion`
- **No Autoplay**: Accessible, user-controlled media

## WhatsApp Integration
- **Pre-filled Messages**: Include Name + Service + Preferred Time
- **Multiple Entry Points**: Form submission, service CTAs, footer icon
- **Friendly Formatting**: Conversational message template

## Mobile-First Priorities
- **375-430px Viewports**: Primary design target
- **Sticky CTAs**: Always accessible booking options
- **Minimal Form Fields**: Reduce friction
- **Large Touch Targets**: Easy thumb interaction
- **Performance**: Fast load times, lazy-loaded heavy elements

## Accessibility
- High-contrast buttons with clear focus states
- Proper ARIA labels on icon-only links
- Keyboard navigation support
- No autoplay media
- Sufficient color contrast ratios

## Tone & Microcopy
- Short, conversational, emoji-light
- "Book a quick slot" not "Schedule an appointment"
- Warm reassurance: "We reply fast on WhatsApp"
- Human, approachable throughout

## Personal Touches for Female Audience
- **Floating Emojis**: Subtle decorative emojis (✨💖🌸💫🦷😊🌟) floating on page (desktop only, low opacity)
- **Warm Imagery**: Casual, friendly photos alongside clinical content
- **Friendly Tone**: Personal, conversational language throughout
- **Soft Color Palette**: Gentle teals and warm sands instead of harsh clinical whites