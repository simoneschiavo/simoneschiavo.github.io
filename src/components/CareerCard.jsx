import React from 'react';

const CareerCard = ({ experience }) => {
  const {
    title,
    company,
    companyUrl,
    startDate,
    endDate,
    location,
    description,
    previousRole,
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
            {location && `, ${location}`}
          </span>
        </div>
      </div>

      {Array.isArray(description) ? (
        <ul className="text-zinc-300 leading-relaxed mb-4 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-zinc-500 mr-2 mt-1.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-zinc-300 leading-relaxed mb-4">{description}</p>
      )}

      {previousRole && (
        <div className="mb-4 p-3 bg-zinc-900/50 rounded-lg border border-zinc-800">
          <h4 className="text-sm font-medium text-white mb-2">
            {previousRole.title}
          </h4>
          <ul className="space-y-1">
            {previousRole.achievements.map((achievement, index) => (
              <li
                key={index}
                className="text-zinc-300 text-sm leading-relaxed flex items-start"
              >
                <span className="text-zinc-500 mr-2 mt-1.5 flex-shrink-0">
                  •
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

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
