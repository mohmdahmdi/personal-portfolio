import React from "react";

const Soft : React.FC<{skill: string}> = (props) => {
  return ( <li className="col-span-1 list-disc">{props.skill}</li> );
}
 
export default Soft;