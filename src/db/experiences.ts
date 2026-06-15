import { Experiences } from "@/interfaces/experience";

export const experiences: Experiences = [
  {
    role: "front-end developer",
    in: "rahtab",
    from: new Date("2025/2/10"),
    to: "present",
    description: "",
    stack: [
      { name: "React.js", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Typescript", level: 5 },
      { name: "TailwindCSS", level: 4 },
      { name: "GraphQL", level: 5 },
      { name: "ApolloClient", level: 5 },
      { name: "ReactQuery", level: 4 },
      { name: "Cypress", level: 4 },
    ],
    challenges: [
      {
        title: "a GraphQL misstake",
        description: "",
        created_at: new Date(),
        tags: ["front-end", "GraphQl", "react"],
      },
    ],
  },
];
