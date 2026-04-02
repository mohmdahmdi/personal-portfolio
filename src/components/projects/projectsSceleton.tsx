import React from "react";

const ProjectsSceleton = () => {
  return (
    <div>
      {[...Array(8)].map((_, idx) => (
        <div
          key={"prj-skl-" + idx}
          className="block  border-collapse border-neutral-800 bg-neutral-950 animate-pulse h-16 w-full"
        ></div>
      ))}
    </div>
  );
};

export default ProjectsSceleton;
