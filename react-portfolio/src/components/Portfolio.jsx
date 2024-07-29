import PropTypes from "prop-types";
import Project from "./Project";

function Portfolio() {
  const projects = [
    {
      title: "International Travel Planner",
      image: "/public/images/International Travel Planner.png",
      deployedLink:
        "https://travisjblack.github.io/International-Travel-Planner",
      repoLink:
        "https://github.com/Rualexandra/International-Travel-Planner.git",
    },
    {
      title: "GigHub",
      image: "/images/Screenshot 2024-07-27 at 9.46.47 PM.png",
      deployedLink: "https://gighub-2.onrender.com/",
      repoLink: "https://github.com/Rualexandra/Gighub.git",
    },
    {
      title: "SQL Employee Tracker",
      image: "/images/SQL EMPLOEE TRACKER IMAGE.png",
      deployedLink: "https://watch.screencastify.com/v/zQIsfRgMIAmAdRObFMqM",
      repoLink: "https://github.com/Rualexandra/SQL-Employee-Tracker.git",
    },
    {
      title: "Logo Generator",
      image: "/public/images/Logo generator.png",
      deployedLink: "https://watch.screencastify.com/v/sjDFoNfUxnkKlsRM3TVm",
      repoLink: "https://github.com/Rualexandra/Logo-Generator.git",
    },
    {
      title: "ReadMe Generator",
      image: "react-portfolio/public/images/ReadMe Generator.png",
      deployedLink: "https://watch.screencastify.com/v/jNBKIKpmpTxVO03yKOsU",
      repoLink: "https://github.com/Rualexandra/README-Generator.git",
    },
    {
      title: "Weather Dashboard",
      image: "react-portfolio/public/images/Dashboard.png",
      deployedLink: "https://rualexandra.github.io/Weather-Dashboard/",
      repoLink: "https://github.com/Rualexandra/Weather-Dashboard.git",
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  );
}

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      deployedLink: PropTypes.string.isRequired,
      repoLink: PropTypes.string.isRequired,
    })
  ),
};

export default Portfolio;
