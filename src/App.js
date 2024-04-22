import React, { useEffect } from "react";
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectScreen from "./screens/ProjectScreen";

function App() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return(
  <div className="container">
    <div data-aos="fade-up">
      <HomeScreen />
    </div>
    <div data-aos="fade-right">
      <AboutScreen />
    </div>
    <div data-aos="fade-left">
      <ProjectScreen/>
    </div>
  </div>
  );

}

export default App;
