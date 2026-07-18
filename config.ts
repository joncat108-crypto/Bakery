export const CONFIG = {
  razorpayKeyId: (import.meta.env.VITE_RAZORPAY_KEY_ID as string) || "",
  bakeryPhone: (import.meta.env.VITE_BAKERY_PHONE as string) || "+91 98765 43210",
  bakeryWhatsapp: (import.meta.env.VITE_BAKERY_WHATSAPP as string) || "919876543210",
};

export const telHref = () => `tel:${CONFIG.bakeryPhone.replace(/\s/g, "")}`;
export const waHref = (message: string) =>
  `https://wa.me/${CONFIG.bakeryWhatsapp}?text=${encodeURIComponent(message)}`;
