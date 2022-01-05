import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchMovies = async (url) => {
    console.log("url:" + url);
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      console.log(response.ok);

      if (!response.ok) {
        setError({ show: true, msg: data.Error });
      } else {
        setData(data);
        setError({ show: false, msg: "" });
      }

      setIsLoading(false);
    } catch (error) {
      console.log("error:" + error);
    }
  };

  useEffect(() => {
    fetchMovies(url);
  }, [url]);
  return { isLoading, error, data };
};

export default useFetch;
