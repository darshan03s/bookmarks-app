# Smart Bookmark App

Live URL: [https://bookmarksapp.darshans.site](https://bookmarksapp.darshans.site)

A full-stack bookmark management application built with **Next.js (App Router)** and **Supabase**.
Users can sign in with Google, create private bookmarks, delete them, and see updates in real time.

---

## Features

- Google OAuth authentication (Supabase Auth)
- Add bookmarks (URL + Title)
- Delete bookmarks
- Private bookmarks per user
- Real-time updates (no manual refresh required)
- Secure Row Level Security (RLS)
- Modern UI built with TailwindCSS and Radix UI

---

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Supabase**
  - Authentication (Google OAuth)
  - PostgreSQL Database
  - Realtime subscriptions

- **TailwindCSS v4**
- **Radix UI**
- **Lucide Icons**

---

## Authentication

Authentication is handled via **Supabase Auth** using Google OAuth.

---

## Realtime Updates

Supabase Realtime is enabled on the `bookmarks` table.

Changes are reflected instantly in the UI without page refresh.

---

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## Local Development

Install dependencies:

```
pnpm install
```

Run development server:

```
pnpm dev
```

Open:

```
http://localhost:3000
```

---

## Deployment

Deployed on Vercel.
