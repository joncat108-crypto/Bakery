# Setup & Maintenance Guide

The site runs on sample data out of the box — good for showing the client
right away. Do the steps below when you're ready to go live.

## 1. Install and run

```bash
npm install
cp .env.example .env.local
npm run dev
```

## 2. Create a Supabase project
1. Go to supabase.com → New Project (free tier is fine to start).
2. **Project Settings → API** → copy the **Project URL** and **anon public key**.
3. Paste them into `.env.local`:
   ```
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Restart `npm run dev` after editing `.env.local`.

## 3. Set up the database
Go to Supabase → **SQL Editor**, paste the contents of `supabase/schema.sql`,
and run it. This creates the `products` and `orders` tables, sets up
row-level security, and inserts a few starter cakes.

To add more products afterward: **Table Editor → products → Insert row** —
no code needed. Or send me the details and I'll add them for you.

## 4. Turn on email login
**Authentication → Providers → Email** is on by default. For a faster demo,
go to **Authentication → Settings** and turn off "Confirm email" so accounts
work instantly without a confirmation link.

## 5. Connect Razorpay
1. Create a Razorpay account → **Settings → API Keys** → generate a Key ID.
2. Add it to `.env.local`:
   ```
   VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
   ```
3. Start in **Test Mode** to try orders safely before going live.

**Note on security:** this uses Razorpay's client-side checkout, which is
fine to launch with. For extra protection against tampered payment amounts,
the next step up is a small server-side function (a Supabase Edge Function)
that creates the Razorpay order and verifies the payment signature. Ask me
when you're ready and I'll add it — it's a clean addition, not a rebuild.

## 6. Set the bakery's contact details
In `.env.local`:
```
VITE_BAKERY_PHONE=+91 98765 43210
VITE_BAKERY_WHATSAPP=919876543210
```

## 7. Product photos (optional upgrade)
Right now each cake shows an emoji as a placeholder — deliberately, so the
site looks finished without needing real photos yet. To switch to real
photos: upload images in Supabase **Storage**, and I'll wire the
`image_url` field into the product cards — just send the word.

## 8. Deploy
```bash
npm run build
```
Upload the `dist/` folder to Netlify, Vercel, or any static host. Add the
same environment variables in your host's dashboard (not just locally).

---

## Ongoing maintenance — how this works month to month

**Adding or editing products:** directly in Supabase's Table Editor (no
code), or tell me the details and I'll add them.

**Changing site details** (prices, text, hours, phone, colors, sections):
message me what to change — I'll edit the relevant component and send back
the updated project.

**Bugs or errors:** send a screenshot or description, plus which
page/device it happened on — I'll fix it in the same codebase.

**Bigger features later** (server-verified payments, real product photos,
order status emails, delivery zones): all straightforward additions to this
structure — just ask when you're ready.
