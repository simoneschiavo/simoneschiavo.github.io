import React from 'react';
import { certifications } from '../data/career.js';

const CertificationsSection = () => {
  return (
    <section>
      <h2 className="text-lg font-bold mb-6 text-white">Certifications</h2>

      <div className="space-y-6">
        {certifications.map(item => (
          <div key={item.id}>
            <div className="career-card hover-lift">
              <div className="mb-3">
                <h3 className="!text-xl !font-semibold text-white mb-2">
                  {item.degree}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <div className="flex items-center gap-2">
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="h-6 w-auto object-contain bg-white rounded-md p-1"
                      />
                    )}
                    <span className="text-white font-medium">
                      {item.institution}
                    </span>
                  </div>
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

export default CertificationsSection;
