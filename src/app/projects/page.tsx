"use client"

import api from "@/api/api";
import { IRepos } from "@/interfaces/interfaces";
import { use, useEffect, useState } from "react";

const Projects = () => {
  const [repos, setRepos] : [IRepos, any] = useState({})

  useEffect(()=>{
    const response = api.get("/users/mohmdahmdi/repos")
  },[])

  return (
    <>
      <button></button>
    </>
  );
};

export default Projects;
