import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return <div>hello bullshit {params.id}</div>;
};

export default Page;
