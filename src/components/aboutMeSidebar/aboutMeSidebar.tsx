"use client";
import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import {
  Bolt,
  Hiking,
  PersonSearch,
  School,
  Translate,
} from "@mui/icons-material";
import SideBarItem from "./sideBarItem";
import { AnimatePresence, motion } from "framer-motion";

const AboutMeSideBar: React.FC<{ side: boolean; setSide: any }> = (props) => {
  const { data, loading } = useAxios(api, "/hard");
  const hardSkills = data.data;
  return (
    <AnimatePresence>
      {props.side && (
        <motion.div
          initial={{ opacity: 0, translateX: -200 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: -200 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-[89vh] top-[11vh] border-r md:col-span-2 sticky bottom-0 overflow-hidden w-[50vw] md:w-auto bg-black"
        >
          <SideBarItem href="#about" name="About me" icon={<PersonSearch />} />
          <SideBarItem
            href="#hard"
            name="Hard skills"
            icon={<Bolt />}
            collapsible={true}
            data={hardSkills}
          />
          <SideBarItem href="#education" name="Educations" icon={<School />} />
          <SideBarItem href="#soft" name="Soft skills" icon={<Hiking />} />
          <SideBarItem
            href="#languages"
            name="Languages"
            icon={<Translate />}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutMeSideBar;
