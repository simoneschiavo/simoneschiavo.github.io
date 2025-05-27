import React from 'react';
import { education } from '../data/career.js';

const EducationSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">
        Education & Certifications
      </h2>

      <div className="timeline-container">
        {education.map(item => (
          <div key={item.id} className="timeline-item">
            <div className="career-card hover-lift">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.degree}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-white font-medium">
                    {item.institution}
                  </span>
                  <span className="text-zinc-400 hidden sm:inline">•</span>
                  <span className="text-zinc-400 text-sm">{item.year}</span>
                </div>
              </div>

              {item.details && (
                <p className="text-zinc-300 text-sm mt-2">{item.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
