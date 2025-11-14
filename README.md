# Coffee Shop Website

A modern coffee shop website built with Next.js and Storyblok CMS. This project demonstrates how to integrate Storyblok as a headless CMS with Next.js for easy content management.

## What This App Does

This is a coffee shop website where all content is managed through Storyblok CMS. You can:

- Display a hero section with background images
- Organize menu items
- Show featured information in grid layouts
- Update all content without touching code

## Tech Stack

- Next.js 16.0.2
- React 19.2.0
- Storyblok React SDK 5.4.18
- Tailwind CSS 4

## Getting Started

### Prerequisites

- Node.js 18+
- Storyblok account

### Installation

1. Clone the repository

2. Create a `.env.local` file:

```env
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_storyblok_preview_token
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

## How It Works with Storyblok

### Content Structure

The app fetches content from Storyblok using the API. Content is organized in a "home" story that contains nested components.

### Storyblok Components

All components are registered in `lib/storyblok.js` and map to React components:

- Page
- Hero
- MenuSection
- MenuItem
- Grid
- Feature
- Teaser

### Setting Up in Storyblok

1. Create each component schema in the Storyblok Block Library with the fields listed above
2. Create a new story called "home" with content type "page"
3. Add components to build your page structure

Example:

```
Home (page)
├── Hero (banner with coffee shop photo)
├── MenuSection (Coffee category)
│   ├── MenuItem (Espresso)
│   └── MenuItem (Latte)
└── Grid (features like hours, location)
```

### How Content is Fetched

Content is fetched server-side in `app/page.js`:

```javascript
const { data } = await storyblokApi.get('cdn/stories/home', { 
  version: 'draft' 
});
```

The `StoryblokStory` component then renders all nested components automatically.

## Development

Enable live preview:

1. In Storyblok, go to Settings → Visual Editor
2. Set preview URL to `http://localhost:3000` or your vercel url
3. Changes in Storyblok will update in real-time because the `storyblokEditable` function is used in each component

## Deployment

Deploy to Vercel:

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variable: `NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN`
4. Deploy