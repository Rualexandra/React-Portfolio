import PropTypes from "prop-types";
import "./Project.css"; // Import the CSS file

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} className="project__image" />
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed App
        </a>{" "}
        |
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;
