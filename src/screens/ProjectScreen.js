import project1 from "../assets/project/1.gif";
import project2 from "../assets/project/2.gif";
import project3 from "../assets/project/3.gif";
import project4 from "../assets/project/4.gif";
import project5 from "../assets/project/5.gif";
import project6 from "../assets/project/6.gif";

const ProjectScreen = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 1rem", // Adds space around the content
    minHeight: "100vh",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const scrollContainerStyle = {
    display: "flex",
    overflowX: "auto",
    gap: "10px",
    padding: "10px",
    width: "100%",
    maxWidth: "90vw", // Constrains width on larger screens
    justifyContent: "center",
  };

  const imageStyle = {
    height: "10rem",
    width: "auto",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    flexShrink: 0,
  };

  const linkStyle = {
    marginTop: "20px",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <h1>
        PROJECT <span className="highlight">:</span>
      </h1>
      <h4>React.js / Java / C#</h4>
      <div style={scrollContainerStyle}>
        <img style={imageStyle} src={project1} alt="project 1" />
        <img style={imageStyle} src={project2} alt="project 2" />
        <img style={imageStyle} src={project3} alt="project 3" />
        <img style={imageStyle} src={project4} alt="project 4" />
        <img style={imageStyle} src={project5} alt="project 5" />
        <img style={imageStyle} src={project6} alt="project 6" />
      </div>
      <a
        href="https://github.com/ShukriPro"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <img
          src="https://img.shields.io/badge/View_on-GitHub-blue?style=flat-square&logo=github"
          alt="View on GitHub"
        />
      </a>
    </div>
  );
};

export default ProjectScreen;
