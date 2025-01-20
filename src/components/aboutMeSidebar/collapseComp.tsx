const CollapseComp: React.FC<{ data: { skill: string; caption: string }[] }> = (
  props
) => {
  return (
    <ul>
      {props.data.map((element, index) => {
        return (
          <div key={index} className="ml-6 p-1 mr-3 text-neutral-500 text-sm cursor-pointer hover:text-neutral-300 transition-all duration-400 ease-in-out">{element.skill}</div>
        );
      })}
    </ul>
  );
};

export default CollapseComp;
