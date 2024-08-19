"use client";

import api from "../../api/api";
import useAxios from "../../hooks/useAxios";
import Project from "./project";
import { useState } from "react";
import RadioSort from "./../radioSort/radioSort";

const ProjectsComp = () => {
  const { data, loading } = useAxios(api, "/users/mohmdahmdi/repos");
  const [sort, setSort] = useState("");

  return (
    <>
      <div className="absolute w-[90vw] h-[80vh] center rounded-md p-4 border border-dashed border-white">
        {loading ? (
          <div>loading</div> // make a loading for this
        ) : (
          <div>
            <div className="flex justify-between mb-3 pl-2 pr-3 items-center">
              <div className="text-2xl text-neutral-300">Projects</div>
              <div className="text-xs text-neutral-500">Sort By</div>
            </div>
            <div className="overflow-y-scroll h-[32rem] rounded-md">
              {data.map((element) => {
                return (
                  <>
                    <Project repo={element} />
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsComp;
