"use client";

import api from "../../api/api";
import useAxios from "../../hooks/useAxios";
import Project from "./project";
import { useState } from "react";
import RadioSort from "./../radioSort/radioSort";

const ProjectsComp = () => {
  const { data, loading } = useAxios(api, "/users/mohmdahmdi/repos");
  const [sort, setSort] = useState("name");

  return (
    <>
      <div className="absolute w-[90vw] h-[80vh] center rounded-md p-4 border border-dashed border-white">
        {loading ? (
          <div className="absolute center">loading...</div> // make a loading for this
        ) : (
          <div>
            <div className="flex justify-between mb-3 pl-2 pr-3 items-center">
              <div className="text-2xl text-neutral-300">Projects</div>
              <div className="text-xs text-neutral-500 w-28 flex justify-between">
                <div>Sort by:</div>
                <div
                  className={`cursor-pointer transition-all ease-in-out duration-500 ${
                    sort === "name" ? "active-sort" : ""
                  }`}
                  onClick={() => setSort("name")}
                >
                  Name
                </div>
                <div
                  className={`cursor-pointer transition-all ease-in-out duration-500 ${
                    sort === "date" ? "active-sort" : ""
                  }`}
                  onClick={() => setSort("date")}
                >
                  Date
                </div>
              </div>
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
