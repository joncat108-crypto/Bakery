# Bakers — Full-Stack Bakery Store

React + TypeScript + Tailwind + Framer Motion frontend, Supabase backend
(auth + database), Razorpay checkout, and a phone/WhatsApp "order without
forms" flow. Runs on sample data out of the box — no setup required to preview.

## Project structure

```
bakers/
├── index.html                 entry HTML (fonts, Razorpay script)
├── src/
│   ├── main.tsx                app bootstrap
│   ├── App.tsx                 page layout & modal wiring
│   ├── index.css               design system (Tailwind + custom tokens)
│   ├── types.ts                shared TypeScript types
│   ├── data/sampleProducts.ts  fallback demo data
│   ├── lib/
│   │   ├── supabaseClient.ts   Supabase client (null-safe if unconfigured)
│   │   ├── config.ts           contact info + Razorpay key from env
│   │   └── orders.ts           order-saving helper
│   ├── hooks/
│   │   ├── useCart.ts          cart state (zustand, sessionStorage)
│   │   ├── useAuth.ts          Supabase auth wrapper
│   │   └── useProducts.ts      product fetch + search/filter logic
│   └── components/             Header, Hero, ProductGrid, modals, etc.
├── supabase/schema.sql         database schema + starter products
└── SETUP.md                    step-by-step: connect Supabase & Razorpay
```

## Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in your keys (see SETUP.md)
npm run dev
```

Opens at `http://localhost:5173`. Without any `.env.local` values, the site
runs entirely on the built-in sample cakes — good for a client demo.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/` — deployable to Vercel, Netlify, or any
static host.

## Where things live (for future edits)

- **Add/edit products** → `supabase/schema.sql` for initial data, or the
  Supabase Table Editor once live. See SETUP.md.
- **Colors, fonts, spacing** → `tailwind.config.js` and `src/index.css`.
- **Page copy/sections** → each file in `src/components/`.
- **Checkout logic** → `src/components/CheckoutModal.tsx`.
- **Contact number / WhatsApp** → `.env.local`.

See `SETUP.md` for connecting Supabase and Razorpay, and for the
maintenance workflow going forward.
