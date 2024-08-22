import { IRepos } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";

const useSort = (data: IRepos[], sortBy: string) => {
  const [sorted, setSorted] = useState<IRepos[]>([]);

  useEffect(() => {
    const sortedArray = [
      ...data.sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "date") {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        }
        return 0;
      }),
    ];
    setSorted(sortedArray);
  }, [data, sortBy]);

  return sorted;
};

export default useSort;
