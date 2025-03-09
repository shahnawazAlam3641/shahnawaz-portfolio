import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    fetch(`https://github-data-7qaa.onrender.com/github/${repoName}`)
      .then((res) => res.json())
      .then(setRepoData);
  }, [repoName]);

  return (
    <div className="text-white">
      <h1>Repository: {repoName}</h1>
      {repoData ? (
        <pre>{JSON.stringify(repoData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RepoDetails;
