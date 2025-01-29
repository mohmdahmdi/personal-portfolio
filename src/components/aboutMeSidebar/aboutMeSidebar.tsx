'use client'
import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import { Bolt, Hiking, PersonSearch, School, Translate } from '@mui/icons-material';
import SideBarItem from './sideBarItem';
import { useState } from "react";


const AboutMeSideBar = () => {
  const { data, loading } = useAxios(api, "/hard");
  const [ showSide, setShowSide] = useState<boolean>(true)
  const hardSkills =data.data
  return (
    <div className="h-[89vh] top-[11vh] border-r col-span-2 sticky bottom-0">
      <SideBarItem href="#about" name="About me" icon={<PersonSearch />} />
      <SideBarItem href="#hard" name="Hard skills" icon={<Bolt />} collapsible={true} data={hardSkills} />
      <SideBarItem href="#education" name="Educations" icon={<School />} />
      <SideBarItem href="#soft" name="Soft skills" icon={<Hiking />} />
      <SideBarItem href="#languages" name="Languages" icon={<Translate />} />
    </div>
  );
}
 
export default AboutMeSideBar;