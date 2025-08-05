import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const projects = [
    {
      id: 1,
      title: 'Product-Led Growth Framework',
      description:
        'Developed a comprehensive PLG framework that helps B2B SaaS companies transition from sales-led to product-led growth. The framework includes user onboarding optimization, feature adoption strategies, and self-serve conversion funnels.',
      technologies: [
        'Product Analytics',
        'A/B Testing',
        'Growth Modeling',
        'User Research',
      ],
      link: '#',
      status: 'Live',
      year: '2024',
    },
    {
      id: 2,
      title: 'Growth Analytics Dashboard',
      description:
        'Built a comprehensive growth analytics dashboard that tracks key product metrics, user behavior, and growth experiments. Includes cohort analysis, retention modeling, and automated reporting.',
      technologies: ['SQL', 'Python', 'Mixpanel', 'Tableau', 'dbt'],
      link: '#',
      status: 'Live',
      year: '2024',
    },
    {
      id: 3,
      title: 'User Activation Optimization',
      description:
        'Designed and implemented a systematic approach to optimize user activation across the entire onboarding journey. Resulted in 40% improvement in time-to-value and 25% increase in activation rates.',
      technologies: [
        'Experimentation',
        'User Analytics',
        'Behavioral Psychology',
        'UX Research',
      ],
      link: '#',
      status: 'Completed',
      year: '2023',
    },
    {
      id: 4,
      title: 'Growth Metrics Framework',
      description:
        'Created a comprehensive metrics framework for B2B SaaS companies to track and optimize their growth funnel. Includes leading indicators, lagging metrics, and actionable insights.',
      technologies: [
        'Data Modeling',
        'KPI Design',
        'Business Intelligence',
        'Growth Strategy',
      ],
      link: '#',
      status: 'Open Source',
      year: '2023',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      <div
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="section-spacing">
          <div className="container-responsive">
            <div className="max-w-6xl mx-auto">
              {/* Page Header */}
              <header className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-green">
                  Projects
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                  A collection of growth projects, frameworks, and tools I've
                  built to help B2B SaaS companies scale their product-led
                  growth.
                </p>
              </header>

              {/* Projects Grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {projects.map(project => (
                  <div key={project.id} className="project-card hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-zinc-500">
                          {project.year}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            project.status === 'Live'
                              ? 'bg-green-900/30 text-green-400 border border-green-800'
                              : project.status === 'Open Source'
                                ? 'bg-blue-900/30 text-blue-400 border border-blue-800'
                                : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="project-title mb-3">{project.title}</h3>

                    <p className="project-description mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map(tech => (
                        <span key={tech} className="project-tech text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a href={project.link} className="project-link">
                      View Project →
                    </a>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Interested in collaborating?
                </h2>
                <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, growth challenges,
                  and opportunities to help B2B SaaS companies scale.
                </p>
                <a
                  href="mailto:simone.schiavo@example.com"
                  className="btn btn-primary inline-flex items-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
