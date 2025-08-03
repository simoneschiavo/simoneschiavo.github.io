import React from 'react';
import CareerCard from './CareerCard.jsx';
import { careerExperiences } from '../data/career.js';

const CareerSection = () => {
  return (
    <section
      className="section-spacing bg-black"
      role="region"
      aria-labelledby="career-heading"
    >
      <div className="container-narrow">
        <h2 id="career-heading" className="section-heading animate-fade-in-up">
          <span className="section-number">04.</span>
          <span>Experience</span>
        </h2>

        <div className="timeline-container space-y-8">
          {careerExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className="timeline-item animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CareerCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
