import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { SAMPLE_PRODUCTS } from "@/data/sampleProducts";
import type { Product } from "@/types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingSampleData, setUsingSampleData] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (supabase) {
        const { data, error } = await supabase.from("products").select("*").order("id");
        if (!cancelled && !error && data && data.length > 0) {
          setProducts(data as Product[]);
          setUsingSampleData(false);
          setLoading(false);
          return;
        }
      }
      if (!cancelled) {
        setProducts(SAMPLE_PRODUCTS);
        setUsingSampleData(true);
        setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(() => ["All", ...new Set(products.map((p) => p.category))], [products]);

  const filtered = useMemo(() => {
    let list = products;
    if (category !== "All") list = list.filter((p) => p.category === category);
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [products, category, query]);

  return {
    products: filtered,
    allCount: products.length,
    categories,
    category,
    setCategory,
    query,
    setQuery,
    loading,
    usingSampleData,
  };
}
