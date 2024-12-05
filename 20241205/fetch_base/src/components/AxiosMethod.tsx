import axios from "axios";

export default function AxiosMethod() {
  const postHandler = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/posts", {
        id: "3",
        title: "thrid title",
        views: 300,
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteHandler = async () => {
    try {
      const { data } = await axios.delete("http://localhost:3001/posts/3");
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  const putHandler = async () => {
    try {
      const { data } = await axios.put("http://localhost:3001/posts/3", {
        title: "thrid titleㅋㅋ",
        views: 301,
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  const patchHandler = async () => {
    try {
      const { data } = await axios.patch("http://localhost:3001/posts/1", {
        views: 12000,
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex gap-2 underline">
      <button onClick={postHandler}>POST</button>
      <button onClick={deleteHandler}>DELETE</button>
      <button onClick={putHandler}>PUT</button>
      <button onClick={patchHandler}>PATCH</button>
    </div>
  );
}
