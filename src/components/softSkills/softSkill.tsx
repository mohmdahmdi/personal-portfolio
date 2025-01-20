import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import Soft from "./soft";

const SoftSkills = () => {
  const { data, loading } = useAxios(api, "/soft");

  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle case where data is not yet available or empty
  if (!data || !data.data) {
    return <div>No data available</div>;
  }

  // Access the first item in the data array
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
