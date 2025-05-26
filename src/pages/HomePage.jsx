import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Articles from '../components/sections/Articles';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Articles />
    </>
  );
};

export default HomePage;
