import React from "react";

const Soft : React.FC<{skill: string}> = (props) => {
  return (
    <li className="col-span-4 md:col-span-2 lg:col-span-1 bg-neutral-950 flex items-center gap-2 rounded-full py-2 px-3">
      <span className="w-2 h-2 bg-white rounded-full"></span>
      <div className="">{props.skill}</div>
    </li>
  );
}
 
export default Soft;