import React from "react";

function AboutScreen() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem', // Adds padding around the container
    minHeight: '100vh', // Full viewport height for vertical centering
    textAlign: 'center',
  };
  const contentStyle = {
    width: '50rem',
    maxWidth: '90vw', // Adjusts for smaller screens
    textAlign: 'left', // Left-align the text within the content box
    lineHeight: '1.6', // Improves readability
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2>
          <span className="highlight">ABOUT</span> ME :
        </h2>
      </div>
      <div style={contentStyle}>
        <p>
          My name is Shukri, born on July 8, 2000. I love using technology from
          Apple, Android, Mac, Windows, and Linux. I find Apple's features like
          AirDrop and Apple Watch very helpful for managing my work.
        </p>
        <p>
          As a developer and designer, I always make sure things are easy to use
          before making them look nice. My goal is to build solutions that not
          only work well but also have a big impact.
        </p>
        <p>
          In my free time, I enjoy programming and playing sports like badminton
          and soccer. These activities help me stay clear-headed. I also like
          solving puzzles, such as the Rubik's cube, which improves my
          problem-solving skills.
        </p>
        <p>
          This mix of technical skills and creativity makes me a strong
          candidate for jobs in software engineering, UI/UX design, and web and
          mobile development.
        </p>
      </div>
    </div>
  );
}

export default AboutScreen;
