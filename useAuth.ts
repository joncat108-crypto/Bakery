import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import type { AppUser } from "@/types";

export function useAuth() {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ? { id: data.user.id, email: data.user.email ?? null } : null);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ? { id: session.user.id, email: session.user.email ?? null } : null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function signIn(email: string, password: string) {
    if (!supabase) return { error: "Accounts aren't connected yet — set up Supabase first." };
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message };
  }

  async function signUp(email: string, password: string) {
    if (!supabase) return { error: "Accounts aren't connected yet — set up Supabase first." };
    const { error } = await supabase.auth.signUp({ email, password });
    return { error: error?.message };
  }

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
  }

  return { user, loading, signIn, signUp, signOut, isSupabaseConfigured };
}
