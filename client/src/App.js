import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/posts?pages=${page}`);
        const { data, pages: totalPages } = await res.json();
        setPage(totalPages);
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Some error occured");
      }
    };
    fetchPosts();
  }, [page]);
  return <div className='App'></div>;
};

export default App;
