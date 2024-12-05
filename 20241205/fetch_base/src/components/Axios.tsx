import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

export default function Axios() {
  const { data, error, loading } = useAxios("http://localhost:3001/posts");
  const {
    data: profileData,
    error: profileError,
    loading: profileLoading,
  } = useAxios("http://localhost:3001/profile");

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error {error}</h1>;
  if (profileLoading) return <h1>profile Loading...</h1>;
  if (profileError) return <h1>profileError {error}</h1>;

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <pre>{JSON.stringify(profileData)}</pre>
    </div>
  );
}
