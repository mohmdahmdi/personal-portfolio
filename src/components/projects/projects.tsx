"use client";

import useSort from "@/hooks/useSort";
import { gitApi } from "../../api/api";
import useAxios from "../../hooks/useAxios";
import Project from "./project";
import { useState } from "react";
import { IRepos } from "@/interfaces/interfaces";
import ProjectsSceleton from "./projectsSceleton";

const ProjectsComp = () => {
  const {
    data,
    loading,
    error,
  }: { data: IRepos[]; loading: boolean; error: boolean } = useAxios(
    gitApi,
    "/users/mohmdahmdi/repos",
  );
  const [sort, setSort] = useState("date");
  const sortedData = useSort(data, sort);

  return (
    <>
      <div className="absolute w-[90vw] h-[80vh] center rounded-md p-4 border border-dashed border-white ">
        <div className="relative h-full">
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
          {!error ? (
            loading ? (
              <ProjectsSceleton />
            ) : (
              <div className="absolute overflow-y-scroll rounded-md w-full h-[69vh]">
                {sortedData.map((element, index) => {
                  return <Project key={index} repo={element} />;
                })}
              </div>
            )
          ) : (
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              Error in fetching data
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsComp;
