import React from 'react';

const CareerCard = ({ experience }) => {
  const {
    title,
    company,
    companyUrl,
    startDate,
    endDate,
    description,
    skills,
  } = experience;

  return (
    <div className="career-card hover-lift">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-zinc-300 transition-colors duration-200 font-medium"
          >
            {company}
          </a>
          <span className="text-zinc-400 hidden sm:inline">•</span>
          <span className="text-zinc-400 text-sm">
            {startDate} - {endDate}
          </span>
        </div>
      </div>

      <p className="text-zinc-300 leading-relaxed mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="project-tech text-xs hover:bg-zinc-700 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CareerCard;
