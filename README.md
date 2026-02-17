# Bookmarks App

A full-stack bookmark management application built with **Next.js (App Router)** and **Supabase**.
Users can sign in with Google, create private bookmarks, delete them, and see updates in real time.

Vercel URL: [https://bookmarks-app-darshans.vercel.app](https://bookmarks-app-darshans.vercel.app)

[![Watch the demo](https://res.cloudinary.com/dqzusd5rw/image/upload/v1771353381/3de11974-f750-4085-bb37-6e6be8c7eaf8.png)](https://res.cloudinary.com/dqzusd5rw/video/upload/v1771353999/demo_dkk4yi.mp4)


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

---

## Challenges Faced

### Implementing Reliable Realtime Updates

One of the main challenges was implementing Supabase Realtime correctly without breaking existing functionality.

Initially, integrating realtime subscriptions caused inconsistent behavior:

- Bookmarks did not always update instantly.
- Some updates required manual refresh in certain edge cases.

The issue was primarily related to:

- Mixing server-side logic with realtime client subscriptions.
- Subscribing before properly validating session state.

### Solution

The problem was resolved by:

- Moving realtime logic fully into a **client component**.
- Using `useEffect` properly to:
  - Fetch the initial bookmarks after confirming session.
  - Create the Supabase realtime channel only once.
  - Clean up the channel on unmount.

- Managing local state updates explicitly for:
  - `INSERT`
  - `DELETE`
  - `UPDATE`
