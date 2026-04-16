import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  CateringInquiry,
  ContactInquiry,
  Sweet,
  SweetCategory,
} from "../types";
import { SAMPLE_SWEETS } from "../types";

// Since backend has no methods yet, we use local sample data
// When backend methods are available, replace with actor calls

export function useSweets() {
  return useQuery<Sweet[]>({
    queryKey: ["sweets"],
    queryFn: async () => SAMPLE_SWEETS,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useSweetsByCategory(category: SweetCategory | "All") {
  return useQuery<Sweet[]>({
    queryKey: ["sweets", "category", category],
    queryFn: async () => {
      if (category === "All") return SAMPLE_SWEETS;
      return SAMPLE_SWEETS.filter((s) => s.category === category);
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useSweetById(id: string) {
  return useQuery<Sweet | undefined>({
    queryKey: ["sweets", id],
    queryFn: async () => SAMPLE_SWEETS.find((s) => s.id === id),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useSubmitContact() {
  return useMutation<void, Error, ContactInquiry>({
    mutationFn: async (_inquiry: ContactInquiry) => {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 800));
    },
  });
}

export function useSubmitCatering() {
  return useMutation<void, Error, CateringInquiry>({
    mutationFn: async (_inquiry: CateringInquiry) => {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 800));
    },
  });
}
