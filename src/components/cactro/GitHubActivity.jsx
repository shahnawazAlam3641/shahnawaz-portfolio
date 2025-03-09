import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const GitHubActivity = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://github-data-7qaa.onrender.com/github")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="text-white">
      <div className="flex gap-5">
        <span>GitHub Activity:</span>
        <Link className="hover:text-yellow-200" to={"/github/github-data"}>
          Github-Data
        </Link>
        <Link
          className="hover:text-yellow-200"
          to={"/github/github-data/issues"}
        >
          Create Issue
        </Link>
      </div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default GitHubActivity;
