import { create } from "zustand";
import type { CartLine, Product } from "@/types";

const STORAGE_KEY = "bakers_cart";

function loadInitialCart(): CartLine[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persist(cart: CartLine[]) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

interface CartState {
  cart: CartLine[];
  addToCart: (product: Product) => void;
  changeQty: (id: number, delta: number) => void;
  clearCart: () => void;
  total: () => number;
  count: () => number;
}

export const useCart = create<CartState>((set, get) => ({
  cart: loadInitialCart(),

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((l) => l.id === product.id);
      const next = existing
        ? state.cart.map((l) => (l.id === product.id ? { ...l, qty: l.qty + 1 } : l))
        : [...state.cart, { id: product.id, name: product.name, price: product.price, qty: 1 }];
      persist(next);
      return { cart: next };
    }),

  changeQty: (id, delta) =>
    set((state) => {
      const next = state.cart
        .map((l) => (l.id === id ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0);
      persist(next);
      return { cart: next };
    }),

  clearCart: () =>
    set(() => {
      persist([]);
      return { cart: [] };
    }),

  total: () => get().cart.reduce((sum, l) => sum + l.price * l.qty, 0),
  count: () => get().cart.reduce((sum, l) => sum + l.qty, 0),
}));
