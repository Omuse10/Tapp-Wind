# Windsong Digital Card

Build a Premium Windsong Travel Digital Business Card

Create a beautiful, premium, mobile-first digital business card/contact site for Windsong Travel, designed specifically to work with a physical TAPP NFC card.

The experience should feel like a luxury travel brand, not a technology demo.

Use the existing Windsong Travel website as the primary brand reference:

Windsong Travel official website

Study the existing website carefully for its visual identity, typography, photography style, logo treatment, spacing, tone, colours, and overall feeling. The new page should feel like it belongs to the Windsong ecosystem.

CORE PURPOSE

This page will be opened when someone taps a Windsong Travel employee's physical NFC business card.

The flow must be extremely simple:

TAP CARD → PROFILE OPENS → SAVE CONTACT

The visitor should not need:

an account

a password

an app

registration

a QR code

any unnecessary steps

The entire experience should take only a few seconds.

1. MOBILE-FIRST EXPERIENCE

Design primarily for a phone screen because the majority of visitors will arrive by tapping an NFC card.

When the page loads, immediately show a polished personal profile.

Example:

WINDSong Travel logo

[Professional profile photo]

Isaac [Surname]
Travel Consultant

Windsong Travel

A short elegant introduction such as:

“Creating personalised journeys and unforgettable travel experiences.”

Then a very prominent primary button:

SAVE CONTACT

This is the most important action on the page.

Underneath:

Call
Email
Website

And optional social/contact links.

Keep everything extremely clean.

2. SAVE CONTACT FUNCTION

The “SAVE CONTACT” button must generate/download a standard VCARD (.vcf) contact file containing the person's:

Full name

Job title

Company

Phone number

Email

Website

Address if provided

Profile image if technically practical

The vCard must work properly on:

iPhone

Android

modern mobile browsers

Do not simply create a fake button.

Actually implement the contact download/open functionality.

On iPhone, make the experience as close as possible to:

Tap → Save Contact → Add to Contacts

On Android, similarly make the downloaded contact immediately usable.

If a device/browser behaves differently, provide a simple fallback message explaining what to do.

3. PREMIUM VISUAL DESIGN

The design should feel like:

Luxury Travel × Personal Service × Modern Digital Identity

Avoid the appearance of:

a generic SaaS dashboard

a normal business-card template

a technology landing page

a cheap NFC product

a social-media profile

The site should feel expensive, calm, elegant and trustworthy.

Use generous whitespace.

Use sophisticated typography.

Use subtle animations.

Use beautiful photography where appropriate.

Do NOT overcrowd the page.

4. WINSONG BRANDING

Use Windsong Travel's existing branding as the visual foundation.

Do not invent a completely different brand identity.

The Windsong logo should appear prominently but elegantly.

Use the site's existing visual language and colour palette wherever possible.

The overall feeling should communicate:

premium travel

trust

experience

sophistication

personal service

adventure

discovery

warmth

The page should feel like the digital equivalent of being handed a beautiful premium Windsong Travel business card.

5. PROFILE CARD

Create a beautiful central profile section.

Example layout:

[ Windsong Travel Logo ]

[ Circular or softly rounded professional portrait ]

ISAAC [SURNAME]

Travel Consultant

Windsong Travel

“Creating journeys worth remembering.”

SAVE CONTACT

Then small elegant action buttons:

CALL
EMAIL
WEBSITE

Use icons very subtly.

Do not use huge colourful social-media icons.

6. ABOUT THE CONSULTANT

Below the contact actions, add a small section:

ABOUT ME

A short editable biography.

Example:

“I'm passionate about helping travellers discover meaningful experiences around the world. From carefully planned adventures to unforgettable journeys, I work with each traveller to create an itinerary that's uniquely theirs.”

Keep this section optional.

7. WINSONG TRAVEL

Add a subtle Windsong section further down.

Heading:

WINSONG TRAVEL

Short copy:

“Travel should be more than simply reaching a destination. At Windsong Travel, we create personalised journeys built around the people, places and experiences that make travel unforgettable.”

Include a button:

VISIT WINSONG TRAVEL

which links to:

https://www.windsongtravel.com.au/

8. TRAVEL IMAGERY

Use one or two carefully selected high-quality travel images.

Possible imagery:

dramatic landscape

elegant hotel

remote destination

wildlife

mountains

ocean

cultural experience

Photography should feel authentic and editorial.

Avoid generic cheesy stock photography.

Use large edge-to-edge photography with subtle rounded corners.

The imagery should support the feeling of Windsong rather than dominate the contact information.

9. OPTIONAL TRAVEL SERVICES

Add a small section that can be enabled or disabled:

I CAN HELP YOU WITH

• Tailor-made journeys
• Luxury travel
• Cruises
• Adventure travel
• Tours
• Accommodation
• Flights
• Special experiences

Keep this section minimal.

Do not make it look like a service catalogue.

10. CONTACT ACTIONS

Include elegant buttons for:

Call

Email

Visit Website

LinkedIn

Instagram

Only show links that are actually provided.

Do not display empty buttons.

11. TAPP BRANDING

TAPP should be almost invisible.

At the very bottom of the page, include:

Powered by TAPP

Use extremely small, understated typography.

TAPP should not compete with Windsong Travel's branding.

The customer should primarily feel that this is a Windsong Travel experience.

12. NFC CARD PHILOSOPHY

The physical card will contain an NFC URL that points to this profile.

The URL structure should support individual profiles.

For example:

/p/isaac

or

/p/firstname-lastname

Build the application so that later we can create:

/p/john

/p/sarah

/p/ella

etc.

Each profile should contain its own:

Name

Photo

Position

Phone

Email

Biography

Social links

vCard information

Profile image

Optional travel services

Do not hard-code the profile architecture so that only one person can use it.

13. ADMIN / DATA STRUCTURE

For this first version, create the architecture so profile information can easily be changed later.

Create a profile data structure containing:

id

first_name

last_name

job_title

company

profile_photo

phone

email

website

linkedin

instagram

biography

address

vcard_enabled

profile_slug

Use the profile slug to determine which profile is displayed.

Example:

/p/isaac

14. RESPONSIVE DESIGN

The primary experience is mobile.

Make it beautiful on:

iPhone

Android

tablets

desktop

On desktop, do not simply stretch the mobile layout.

Instead, make the profile feel like a premium digital business card centered on the page.

15. ANIMATIONS

Use subtle premium animations:

profile image gently fades in

content softly appears

buttons have subtle hover/tap feedback

sections reveal smoothly while scrolling

Avoid:

excessive motion

bouncing buttons

flashy gradients

loading animations that delay access

The page should feel fast.

16. PERFORMANCE

This page is opened immediately after an NFC tap.

Therefore:

SPEED IS CRITICAL.

Optimize the site so the profile loads extremely quickly on mobile networks.

Do not add unnecessary libraries or heavy animations.

Images should be compressed and lazy-loaded where appropriate.

The visitor should be able to see the main profile almost immediately.

17. IMPORTANT UX PRINCIPLE

The page should communicate its purpose without instructions.

Someone should instantly understand:

This is Isaac from Windsong Travel.

and immediately see:

SAVE CONTACT

Do not make users search for the contact button.

The SAVE CONTACT button should be the strongest call-to-action on the entire page.

18. DESIGN DIRECTION

Imagine the visual quality of a premium luxury travel magazine combined with a beautifully designed modern digital business card.

Think:

Editorial
Elegant
Minimal
Warm
Premium
Timeless

Use restrained typography and spacing.

Avoid the typical startup aesthetic of:

purple gradients
glassmorphism
giant text
floating cards everywhere
neon colours
excessive shadows

This should look quietly expensive.

19. FINAL PAGE STRUCTURE

The final mobile page should approximately follow:

WINSONG LOGO

PROFILE PHOTO

ISAAC [SURNAME]
Travel Consultant

Windsong Travel

“Creating journeys worth remembering.”

[ SAVE CONTACT ]

CALL · EMAIL · WEBSITE

ABOUT ME

Short biography

[ Beautiful travel photograph ]

WINSONG TRAVEL

Short brand introduction

[ VISIT WINSONG TRAVEL ]

Optional:

I CAN HELP YOU WITH

Travel services

Social links

Powered by TAPP

MOST IMPORTANT REQUIREMENT

Do not make this look like a generic NFC contact page.

It should look like Windsong Travel commissioned a premium digital business-card experience for their consultants.

The first impression should be:

“This is beautiful.”

The second impression should be:

“Oh, I can save their contact with one tap.”

Build the entire experience around those two reactions.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/60261005-3d39-4d0f-a816-120f5ba03af5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
