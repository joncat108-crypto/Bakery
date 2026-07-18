/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_RAZORPAY_KEY_ID: string;
  readonly VITE_BAKERY_PHONE: string;
  readonly VITE_BAKERY_WHATSAPP: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Razorpay is loaded globally via a <script> tag in index.html
declare class Razorpay {
  constructor(options: Record<string, unknown>);
  open(): void;
  on(event: string, handler: (...args: any[]) => void): void;
}
interface Window {
  Razorpay: typeof Razorpay;
}
