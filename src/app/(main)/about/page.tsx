"use client";

import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";

const About = () => {
  const { data, loading } = useAxios(api, "/information");
  const { data:hards, loading:loading1 } = useAxios(api, "/hard")
  // Handle loading state
  if (loading && loading1) {
    return <div>Loading...</div>;
  }

  // Handle case where data is not yet available or empty
  if (!data || !data.data || data.data.length === 0) {
    return <div>No data available</div>;
  }
  console.log(hards)
  if (!hards || !hards.data || hards.data.length === 0){
    return <div>bla vla vla</div>
  }

  // Access the first item in the data array
  const aboutMeData = data.data[0].about_me;
  const hardSkillData = data.hards[0].skill
  return (
    <div className="col-span-10 p-8">
      <h1 id="about" className="text-2xl font-bold">
        About me
      </h1>
      <div className="ml-5 mt-4">{aboutMeData}</div>
      <h1 id="about" className="text-2xl font-bold mt-8">
        Hard skills
      </h1>
      <div>{hardSkillData}</div>
    </div>
  );
};

export default About;
