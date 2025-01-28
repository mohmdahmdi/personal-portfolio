import useSkillStore from "@/store/skills";
import { useEffect } from "react";

const CollapseComp = () => {
  const { data } = useSkillStore();

  if(data == null){return}
  return (
    <ul>
      {data.data.map((element, index) => {
        return (
          <div
            key={index}
            className="ml-6 p-1 mr-3 text-neutral-500 text-sm cursor-pointer hover:text-neutral-300 transition-all duration-400 ease-in-out"
          >
            {element.skill}
          </div>
        );
      })}
    </ul>
  );
};

export default CollapseComp;
