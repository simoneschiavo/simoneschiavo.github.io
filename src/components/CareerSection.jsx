import React from 'react';
import CareerCard from './CareerCard.jsx';
import { careerExperiences } from '../data/career.js';

const CareerSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">Career</h2>

      <div className="timeline-container">
        {careerExperiences.map(experience => (
          <div key={experience.id} className="timeline-item">
            <CareerCard experience={experience} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
