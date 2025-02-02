import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import Soft from "./soft";

const SoftSkills = () => {
  // use this part if you want to use dynamic data from database
  /////////////////////////////////////////////////////
  // const { data, loading } = useAxios(api, "/soft");

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!data || !data.data) {
  //   return <div>No data available</div>;
  // }
  /////////////////////////////////////////////////////
  // this is the response from the server
  const data = {
    data: [
      {
        skill: "Collaborative",
      },
      {
        skill: "Adaptable",
      },
      {
        skill: "Team-oriented",
      },
      {
        skill: "Effective",
      },
      {
        skill: "Emotionally intelligent",
      },
      {
        skill: "Analytical",
      },
      {
        skill: "Effective Communication",
      },
      {
        skill: "Critical Thinking",
      },
      {
        skill: "Flexible",
      },
    ],
  };
  const softSkills: { skill: string }[] = data.data;

  return (
    <ul className="grid grid-cols-4 ml-5 mt-4">
      {softSkills.map((element, index) => {
        return <Soft key={index} skill={element.skill} />;
      })}
    </ul>
  );
};

export default SoftSkills;
