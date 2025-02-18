"use client";

import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import HardSkills from '../../../components/hardSkills/hardSkill';
import Educations from '../../../components/educations/educations';
import SoftSkills from '../../../components/softSkills/softSkill';
import Languages from "@/components/languages/languages";

const About = () => {
  // use this if ypu want to use data from database
  ////////////////////////////////////////////////////////////
  // const  { data, loading } = useAxios(api, "/information");
  // if (loading ) {
  //   return <div>Loading...</div>;
  // }

  // if (!data || !data.data || data.data.length === 0) {
  //   return <div>No data available</div>;
  // }
  ////////////////////////////////////////////////////////////
  // this is the response of /information api
  const data = {
    data: [
      {
        about_me:
          "I’m a highly motivated and fast-learning Front-End Developer and eager to contribute to a company that shares the same vision of growth and progress. My expertise in React.js, Next.js, and modern web technologies enables me to deliver clean, efficient, and scalable code. I have a deep understanding of my craft and thrive on problem-solving, applying design patterns and SOLID principles to create robust solutions.\nCollaboration is at the core of my work style, and I’m adept at working alongside backend teams thanks to my knowledge of RESTful APIs and expertise in SQL. I am also proficient in using Jira for effective project management and task tracking.\nI am seeking a position in an environment where both my personal growth and contributions to the team align, ensuring a mutually beneficial path toward success.",
      },
    ],
  };
  const aboutMeData = data.data[0].about_me;
  return (
    <div className=" pb-8 pt-5 px-1 md:px-4 text-sm">
      <h1 id="about" className="text-2xl font-bold">
        About me
      </h1>
      <div className="ml-5 mt-4 text-pretty">{aboutMeData}</div>
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
