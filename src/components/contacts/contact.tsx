import React from "react";

const Contact: React.FC<{ social?: string; icon: any; link?: string }> = (
  props
) => {
  return (
    <div className="col-span-1 flex items-center p-3 mx-10">
      <div className="mr-3">{props.icon}</div>
      <div className="tracking-wider text-sm">{props.social}</div>
    </div>
  );
};

export default Contact;
