"use client";

import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import HardSkills from '../../../components/hardSkills/hardSkill';
import Educations from '../../../components/educations/educations';
import SoftSkills from '../../../components/softSkills/softSkill';
import Languages from "@/components/languages/languages";

const About = () => {
  const  { data, loading } = useAxios(api, "/information");
  // Handle loading state
  if (loading ) {
    return <div>Loading...</div>;
  }

  // Handle case where data is not yet available or empty
  if (!data || !data.data || data.data.length === 0) {
    return <div>No data available</div>;
  }

  // Access the first item in the data array
  const aboutMeData = data.data[0].about_me;
  return (
    <div className="col-span-10 p-8">
      <h1 id="about" className="text-2xl font-bold">
        About me
      </h1>
      <div className="ml-5 mt-4">{aboutMeData}</div>
      <h1 id="hard" className="text-2xl font-bold mt-8">
        Hard skills
      </h1>
      <HardSkills />
      <h1 id="eductaion" className="text-2xl font-bold mt-8">
        Educations
      </h1>
      <Educations />
      <h1 id="soft" className="text-2xl font-bold mt-8">
        Soft skills
      </h1>
      <SoftSkills />
      <h1 id="languages" className="text-2xl font-bold mt-8">
        Languages
      </h1>
      <Languages />
    </div>
  );
};

export default About;
