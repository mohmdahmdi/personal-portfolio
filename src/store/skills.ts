// stores/useApiStore.js
import { skillStore } from "@/interfaces/interfaces";
import { create } from "zustand";

// static response data
const resStaticData = {
  data: [
    {
      skill: "React.js",
      caption:
        "expertise in state management, component lifecycle, and optimization techniques.",
    },
    {
      skill: "Next.js",
      caption:
        "proficient in optimizing page load times, caching, and SEO best practices for fast and efficient front-end development",
    },
    {
      skill: "Typescript",
      caption:
        "experienced leveraging its type safety and IntelliSense features to streamline development.",
    },
    {
      skill: "Redux tk, zustand , React-query ",
      caption:
        "proficient in leveraging Redux tk and zustand to manage global state and React Query to handle data fetching and caching.",
    },
    {
      skill: "Tailwind css",
      caption:
        "utilizing its customizable config files to tailor styles and layouts to meet specific project requirements.",
    },
    {
      skill: "MUI, nextUI, styled, emotion ",
      caption: "",
    },
    {
      skill: "Sass",
      caption: "",
    },
    {
      skill: "Jest",
      caption:
        "Skilled in writing and maintaining comprehensive test suites using Jest, ensuring seamless integration with CI/CD pipelines and rapid issue detection.",
    },
    {
      skill: "Postman, axios",
      caption: "",
    },
    {
      skill: "Git, Github",
      caption: "",
    },
  ],
};

const useSkillStore = create<skillStore>((set) => ({
  data: resStaticData,
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
