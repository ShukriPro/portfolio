import React from 'react';

function HomeScreen() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    textAlign: 'center',
    padding: '0 20px', // Padding for side spacing on smaller screens
    boxSizing: 'border-box',
    margin: '0', // Ensure no extra vertical margins
  };

  return (
    <>
      <style>{`
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(1em);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animated-text {
          opacity: 0;
          animation: slide-up 0.5s forwards;
        }

        .animated-text:nth-child(1) {
          animation-delay: 0.5s;
        }
        .animated-text:nth-child(2) {
          animation-delay: 1s;
        }
        .animated-text:nth-child(3) {
          animation-delay: 1.5s;
        }
        .animated-text:nth-child(4) {
          animation-delay: 2s;
        }
        .animated-text h1,
        .animated-text h2,
        .animated-text h3,
        .animated-text h4 {
          margin: 0;
          padding: 0;
          line-height: 1.2;
        }

        .animated-text h1 {
          font-size: 4.5rem;
        }

        .highlight {
          color: #fdc500;
        }

        .animated-text h4 {
          line-height: 2;
          font-weight: lighter;
        }

        .animated-text {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div style={containerStyle}>
        <div className="animated-text"><h2><span className="highlight">Hello</span>, I'm</h2></div>
        <div className="animated-text"><h1>Shukri <span className="highlight">Ali</span></h1></div>
        <div className="animated-text"><h3>🌐 <span className="highlight">Web</span> / 📱 Developer</h3></div>
        <div className="animated-text"><h4>React.js , C#, Python, Swift, Kotlin </h4></div>
      </div>
    </>
  );
}

export default HomeScreen;
