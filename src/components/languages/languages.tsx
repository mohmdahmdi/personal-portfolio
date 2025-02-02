import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import Language from "./language";

const Languages = () => {
  /////////////////////////////////////////////////////////
  // const { data, loading } = useAxios(api, "/language");

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!data || !data.data) {
  //   return <div>No data available</div>;
  // }
  /////////////////////////////////////////////////////////
  // the response from the server
  const data = {
    data: [
      {
        language: "English",
        level: "Upper intermediate",
      },
      {
        language: "Persian",
        level: "Mother tongue",
      },
    ],
  };

  const languages: { language: string; level: string }[] = data.data;

  return (
    <ul className="ml-5 mt-4 grid grid-cols-2">
      {languages.map((element, index) => {
        return (
          <Language
            key={index}
            language={element.language}
            level={element.level}
          />
        );
      })}
    </ul>
  );
};

export default Languages;
