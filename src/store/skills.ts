// stores/useApiStore.js
import { skillStore } from "@/interfaces/interfaces";
import { create } from "zustand";



const useSkillStore = create<skillStore>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async (url : string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      set({ data: result, loading: false });
    } catch (error) {
      set({ error: error, loading: false });
    }
  },
}));

export default useSkillStore;
