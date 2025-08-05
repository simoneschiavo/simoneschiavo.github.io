import React from 'react';
import CareerCard from './CareerCard.jsx';
import { careerExperiences } from '../data/career.js';

const CareerSection = () => {
  return (
    <section role="region" aria-labelledby="career-heading">
      <h2 id="career-heading" className="text-2xl font-bold mb-8 text-white">
        Experience
      </h2>

      <div className="space-y-8">
        {careerExperiences.map((experience, index) => (
          <div
            key={experience.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CareerCard experience={experience} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
