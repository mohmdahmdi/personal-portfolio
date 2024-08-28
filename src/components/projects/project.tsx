import { IProps } from "@/interfaces/interfaces";
import { useState } from "react";

const Project: React.FC<IProps> = (props) => {
  const [visiblity, setVisiblity] = useState(true);
  return (
    <a
      href={props.repo.html_url}
      onMouseEnter={() => setVisiblity(!visiblity)}
      onMouseLeave={() => setVisiblity(!visiblity)}
      className="block relative p-5 border-b border-collapse border-neutral-800 bg-neutral-950 transition-all"
    >
      <div className="flex align-middle">
        <div className="basis-1/4">{props.repo.name}</div>
        <div className="basis-2/4 break-keep text-xs text-neutral-500 pt-1">{(props.repo.description) || "(empty)"}</div>
        <div className="basis-1/4 text-end">
          {props.repo.created_at?.match(/\d{4}-\d{2}-\d{2}/)}
        </div>
      </div>
      <div
        className={`${
          visiblity ? "hidden" : ""
        } absolute top-0 left-0 pt-5 backdrop-blur-lg w-full h-full text-center`}
      >
        view project on github!
      </div>
    </a>
  );
};

export default Project;
