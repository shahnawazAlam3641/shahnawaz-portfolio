import { useState } from "react";
import { useParams } from "react-router-dom";

const CreateIssue = () => {
  const { repoName } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [issueURL, setIssueURL] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3000/github/${repoName}/issues`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setIssueURL(data.issue_url);
      setError(null);
    } else {
      setError(data.error || "Failed to create issue");
    }
  };

  return (
    <div className="text-white">
      <h1>Create an Issue for {repoName}</h1>
      <form className="flex flex-col w-fit gap-5" onSubmit={handleSubmit}>
        <input
          className="rounded-md bg-slate-600"
          type="text"
          placeholder="Issue Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="rounded-md bg-slate-600"
          placeholder="Issue Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="bg-gray-600 rounded-md">
          Create Issue
        </button>
      </form>

      {issueURL && (
        <p>
          ✅ Issue Created:{" "}
          <a href={issueURL} target="_blank">
            {issueURL}
          </a>
        </p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CreateIssue;
