import { IProps } from "@/interfaces/interfaces";
import { useState } from "react";
import { motion } from "framer-motion";

const Project: React.FC<IProps> = (props) => {
  const [visiblity, setVisiblity] = useState(true);
  return (
    <a
      href={props.repo.html_url}
      onMouseEnter={() => setVisiblity(!visiblity)}
      onMouseLeave={() => setVisiblity(!visiblity)}
      className="block relative p-5 border-b border-collapse border-neutral-800 bg-neutral-950 transition-all"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 align-middle">
        <div className="col-span-1 sm:col-span-1 text-center sm:text-left">
          {props.repo.name}
        </div>
        <div className="col-span-1 text-center sm:text-left sm:col-span-1 text-xs text-neutral-500 pt-1 truncate ">
          {props.repo.description || "(empty)"}
        </div>
        <div className="col-span-1 text-center sm:text-end sm:col-span-1">
          {props.repo.created_at?.match(/\d{4}-\d{2}-\d{2}/)}
        </div>
      </div>
      <motion.div
        className={`${
          visiblity ? "hidden" : ""
        } absolute top-0 left-0 pt-5 backdrop-blur-lg w-full h-full text-center`}
      >
        view project on github!
      </motion.div>
    </a>
  );
};

export default Project;
