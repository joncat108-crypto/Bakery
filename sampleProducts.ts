import type { Product } from "@/types";

// Fallback data — shown automatically whenever Supabase isn't configured
// yet, or the `products` table is empty. Safe to leave in place forever
// as a demo/dev dataset.
export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Chocolate Truffle",
    category: "Chocolate",
    price: 899,
    emoji: "🍫",
    stock: 12,
    description: "Rich Belgian chocolate sponge, ganache-layered, chocolate shavings on top.",
  },
  {
    id: 2,
    name: "Red Velvet Delight",
    category: "Signature",
    price: 999,
    emoji: "❤️",
    stock: 8,
    description: "Classic red velvet with smooth cream cheese frosting.",
  },
  {
    id: 3,
    name: "Fresh Fruit Gateau",
    category: "Fruit",
    price: 1099,
    emoji: "🍓",
    stock: 6,
    description: "Vanilla sponge layered with fresh seasonal fruit and light cream.",
  },
  {
    id: 4,
    name: "Birthday Sprinkle Cake",
    category: "Birthday",
    price: 799,
    emoji: "🎉",
    stock: 15,
    description: "Vanilla funfetti sponge, buttercream, loaded with sprinkles.",
  },
  {
    id: 5,
    name: "Black Forest Special",
    category: "Chocolate",
    price: 949,
    emoji: "🍒",
    stock: 10,
    description: "Chocolate sponge, whipped cream, cherries, dark chocolate flakes.",
  },
  {
    id: 6,
    name: "Salted Caramel Tower",
    category: "Signature",
    price: 1199,
    emoji: "🧈",
    stock: 5,
    description: "Caramel sponge, salted caramel drip, toffee crunch.",
  },
  {
    id: 7,
    name: "Two-Tier Wedding Cake",
    category: "Wedding",
    price: 3499,
    emoji: "💍",
    stock: 3,
    description: "Elegant two-tier vanilla and chocolate cake, custom decoration on request.",
  },
  {
    id: 8,
    name: "Custom Photo Cake",
    category: "Custom",
    price: 1299,
    emoji: "🖼️",
    stock: 9,
    description: "Edible print of your photo on a vanilla or chocolate base.",
  },
];
