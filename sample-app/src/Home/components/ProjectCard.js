import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  project,
  topic,
  description,
  imageUrl,
  link,
  isHidden
}) => (
  <Link className={`box ${isHidden ? "is-hidden" : ""}`} to={link}>
    <div className="media">
      <div className="media-left">
        <img src={imageUrl} alt={topic} width="50px" />
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{project}</strong> <br />
            {description}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default ProjectCard;
