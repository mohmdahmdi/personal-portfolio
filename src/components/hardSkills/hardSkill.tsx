import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import Skill from "./skill";

const HardSkills = () => {
  const { data, loading } = useAxios(api, "/hard");

  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle case where data is not yet available or empty
  if (!data || !data.data) {
    return <div>No data available</div>;
  }

  // Access the first item in the data array
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
