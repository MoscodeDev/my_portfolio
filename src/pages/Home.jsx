import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Overview from "../components/Overview";




const Home = () => {
 

  return (
    <div className="min-h-screen">
      <Nav />
      <Intro />
      <Overview />
    </div>
  );
};

export default Home;
