import { supabase } from "@/lib/supabaseClient";
import type { OrderPayload } from "@/types";

export async function saveOrder(order: OrderPayload) {
  if (!supabase) return { error: null }; // demo mode — nothing to persist to yet
  const { error } = await supabase.from("orders").insert(order);
  return { error: error?.message ?? null };
}
