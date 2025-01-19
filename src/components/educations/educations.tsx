import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import Education from "./education";

const Educations = () => {
  const { data, loading } = useAxios(api, "/education");

  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle case where data is not yet available or empty
  if (!data || !data.data) {
    return <div>No data available</div>;
  }

  // Access the first item in the data array
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
