export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  emoji: string;
  image_url?: string | null;
  description: string;
  stock: number;
}

export interface CartLine {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export type PaymentMethod = "razorpay" | "cod";

export interface OrderPayload {
  user_id?: string | null;
  customer_name: string;
  phone: string;
  address: string;
  items: CartLine[];
  total: number;
  payment_method: PaymentMethod;
  status: string;
  razorpay_payment_id?: string;
}

export interface AppUser {
  id: string;
  email: string | null;
}
