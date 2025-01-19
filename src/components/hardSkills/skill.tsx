import React from "react";

const Skill: React.FC<{ index: number; skill: string; caption: string }> = (
  props
) => {
  return (
    <li className="mb-5 list-disc">
      <h2 className="text-lg font-bold">{props.skill}</h2>
      <div className="ml-3 mt-1">{props.caption}</div>
    </li>
  );
};

export default Skill;
