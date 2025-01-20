import React from "react";

const Language: React.FC<{ language: string; level: string }> = (props) => {
  return (
    <li className="col-span-1">
      <span>{props.language}</span>
      <span className="text-neutral-500 text-sm">
        {" - "}
        {props.level}
      </span>
    </li>
  );
};

export default Language;
