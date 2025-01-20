import React from "react";

const Education: React.FC<{
  title: string;
  ed_from: string;
  ed_to: string;
  caption: string;
}> = (props) => {
  return (
    <li className="ml-5 mt-4">
      <div className="text-xl font-bold">{props.title}</div>
      <div className="text-xs text-neutral-500">{props.ed_from}{" - "}{props.ed_to}</div>
      <div className="mt-1">{props.caption}</div>
    </li>
  );
};

export default Education;
