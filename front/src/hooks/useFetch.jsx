import { useEffect, useState } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(`http://127.0.0.1:5000/api/${url}`);

        if (!res.ok) {
          throw Error("URL error");
        }

        const result = await res.json();

        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { loading, error, data };
}

export default useFetch;
