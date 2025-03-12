import React, { useEffect, useState } from "react";
import "./Secondsection.scss";
import axios from "axios";

export default function Secondsection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.backendless.com/5E7E29D7-8DD5-472B-B811-FC5FE51AD29A/13518365-9BC7-4851-96C7-1766089F4C8B/data/Portfolio"
      )
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Secondsection-main">
      {projects.map((project) => (
        <div key={project.objectId}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <img src={project.imageUrl} alt={project.imageUrl} />
        </div>
      ))}
    </div>
  );
}
