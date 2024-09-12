"use client"

import { useState, useEffect } from "react";
import { AxiosInstance } from "axios";
import { options } from "../interfaces/interfaces";

const useAxios = (
  Instance: AxiosInstance,
  url: string,
  options: options = {}
) => {
  const [data, setData] = <any>useState([{}]);
  const [loading, setLoading]: [boolean, any] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await Instance.get(url, options);
      setData(response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading };
};

export default useAxios;
