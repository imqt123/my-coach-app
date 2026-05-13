{
  "project_name": "THE_UNSEEN_V01",
  "framework": "Next.js 14 (App Router)",
  "styling": "Tailwind CSS + Framer Motion",
  "deployment_target": "Vercel",
  "design_specs": {
    "hero": {
      "inspiration": "Apple / Nike",
      "elements": ["Sticky Video Background", "Large Sans-Serif Typography", "Parallax Product Reveal"],
      "logic": "As seen in Screenshot 2026-05-13 at 14.26.23.jpg, use a centered mobile-first hero."
    },
    "buy_logic": {
      "inspiration": "Gumroad / Aesop",
      "components": ["Single-click Checkout", "Dynamic Cart Preview", "Trust Badges"],
      "layout": "Referencing Screenshot 2026-05-13 at 14.31.07.jpg, keep the order summary on a 1/3 right-hand sidebar."
    }
  },
  "backend_configuration": {
    "database": "Supabase (PostgreSQL)",
    "payments": "Stripe Checkout (Embedded)",
    "functions": [
      "api/create-intent: Initialize payment session",
      "api/webhook: Verify purchase and trigger 'Unseen' digital delivery",
      "api/inventory: Real-time stock status as seen in Apple's 'Pick your favorite' logic (Screenshot 2026-05-13 at 14.27.27.jpg)"
    ]
  },
  "deployment_steps": [
    "Clone 'The Unseen' starter template",
    "Set VERCEL_ENV variables for Stripe_Secret and Supabase_Key",
    "Push to Main: Vercel will auto-assign Edge Functions for global low-latency"
  ]
}
