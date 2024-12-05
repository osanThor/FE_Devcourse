import axios from "axios";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function FetchAxios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(data);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error.. {error}</h1>;
  return (
    <>
      <h1 className={twMerge("text-3xl font-bold underline dancing-script")}>
        Hello world!
      </h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
