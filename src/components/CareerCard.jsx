import React from 'react';

const CareerCard = ({ experience }) => {
  const {
    title,
    company,
    companyUrl,
    logo,
    startDate,
    endDate,
    location,
    description,
    previousRole,
    skills,
  } = experience;

  return (
    <div className="career-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors duration-300">
          {title}
        </h3>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
          <div className="flex items-center gap-3">
            {logo && (
              <img
                src={logo}
                alt={`${company} logo`}
                className="h-8 w-auto object-contain bg-white rounded-md p-1"
              />
            )}
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors duration-300 font-semibold text-lg"
            >
              {company}
            </a>
          </div>
          <span className="text-gray-600 hidden sm:inline">•</span>
          <span className="text-gray-400 text-base font-medium">
            {startDate} - {endDate}
            {location && `, ${location}`}
          </span>
        </div>
      </div>

      {Array.isArray(description) ? (
        <ul className="text-gray-300 leading-relaxed mb-6 space-y-3">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-3 mt-1 flex-shrink-0 text-lg leading-none font-bold">
                •
              </span>
              <span className="flex-1 text-base">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-300 leading-relaxed mb-6 text-base">
          {description}
        </p>
      )}

      {previousRole && (
        <div className="mb-6 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <h4 className="text-lg font-semibold text-white mb-3">
            {previousRole.title}
          </h4>
          <ul className="space-y-2">
            {previousRole.achievements.map((achievement, index) => (
              <li
                key={index}
                className="text-gray-300 text-base leading-relaxed flex items-start"
              >
                <span className="text-green-500 mr-3 mt-1.5 flex-shrink-0 font-bold">
                  •
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-gray-300 font-medium text-sm px-4 py-2 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 hover:text-white transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CareerCard;
