"use client";
import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import {
  Bolt,
  Hiking,
  NavigateBefore,
  NavigateNext,
  PersonSearch,
  School,
  Translate,
} from "@mui/icons-material";
import SideBarItem from "./sideBarItem";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const AboutMeSideBar: React.FC<{
  side: boolean;
  setSide: Dispatch<SetStateAction<boolean>>;
}> = (props) => {
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
          className="h-full border-r overflow-hidden w-2/12 bg-black max-lg:absolute max-lg:w-3/5 relative"
        >
          <SideBarItem href="" name="About me" icon={<PersonSearch />} />
          <SideBarItem
            href=""
            name="Hard skills"
            icon={<Bolt />}
            collapsible={true}
            data={hardSkills}
          />
          <SideBarItem href="" name="Educations" icon={<School />} />
          <SideBarItem href="" name="Soft skills" icon={<Hiking />} />
          <SideBarItem
            href=""
            name="Languages"
            icon={<Translate />}
          />
        </motion.div>
      )}
      <div
        className={`absolute top-1/2 -translate-y-1/2 cursor-pointer left-0 lg:invisible bg-neutral-900 p-1 border border-neutral-600 rounded-full ml-2`}
        onClick={() => {
          props.setSide((prev) => !prev);
        }}
      >
        {props.side ? <NavigateBefore /> : <NavigateNext />}
      </div>
    </AnimatePresence>
  );
};

export default AboutMeSideBar;
