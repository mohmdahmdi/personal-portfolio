import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import Education from "./education";

const Educations = () => {
  // use this part if you want to use dynamic data from database
  /////////////////////////////////////////////////////////
  // const { data, loading } = useAxios(api, "/education");

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!data || !data.data) {
  //   return <div>No data available</div>;
  // }
  /////////////////////////////////////////////////////////
  // the response of /education api
  const data = {
    data: [
      {
        title: "Uiversity of Isfahan",
        ed_from: "2022",
        ed_to: "present",
        caption: "Bachelor's degree in Computer Science",
      },
    ],
  };

  const educations: {
    title: string;
    ed_from: string;
    ed_to: string;
    caption: string;
  }[] = data.data;

  return (
    <ul>
      {educations.map((element, index) => {
        return (
          <Education
            key={index}
            title={element.title}
            ed_from={element.ed_from}
            ed_to={element.ed_to}
            caption={element.caption}
          />
        );
      })}
    </ul>
  );
};

export default Educations;
