export default function FetchMethod() {
  const postHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "3", title: "thrid title", views: 300 }),
      });
      if (!res.ok) throw new Error("Failed to Post!");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/3", {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to Post!");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  const putHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/3", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "3", title: "thrid titleㅋㅋ", views: 301 }),
      });
      if (!res.ok) throw new Error("Failed to Post!");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  const patchHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/3", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "3", title: "thrid titleㅋㅋ", views: 301 }),
      });
      if (!res.ok) throw new Error("Failed to Post!");
      const data = await res.json();
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
