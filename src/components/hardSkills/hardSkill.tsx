import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import Skill from "./skill";
import useSkillStore from "@/store/skills";
import { useEffect } from "react";

const HardSkills = () => {
  const { data, loading, error, fetchData }: any = useSkillStore();
  // use this part if you want use dynamic data from database
  //////////////////////////////////////////////////
  // useEffect(()=>{
  //   fetchData("http://localhost:3000/api/hard");
  // },[fetchData])

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!data || !data.data) {
  //   return <div>No data available</div>;
  // }
  //////////////////////////////////////////////////

  const hardSkills: { skill: string; caption: string }[] = data.data;

  return (
    <div className="ml-5 mt-4">
      <ol>
        {hardSkills.map((element, index) => (
          <Skill
            key={index}
            index={index}
            skill={element.skill}
            caption={element.caption}
          />
        ))}
      </ol>
    </div>
  );
};

export default HardSkills;
