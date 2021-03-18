import React from "react";
import Navbar from "../navbar/Navbar";
import logoblack from '../../assets/images/logoblack.png';
import '../../assets/css/styles.css';

const Home = () => {
 

  return (
    <div>
      <Navbar /> 
      <img className="hero-banner"  src={logoblack} alt="logo"/>
    </div>
  );
};

export default Home;
