import { useState } from "react";

const Experience = () => {
  const [selectedEx, setSelectedEx] = useState<string>('')
  return (
    <>
      <div className="flex h-full items-center justify-center -translate-y-10 text-sm sm:text-lg" onPointerEnter={()=> setSelectedEx('')}>
        {"This page is intentionally left blank."}
      </div>
    </>
  );
};

export default Experience;
