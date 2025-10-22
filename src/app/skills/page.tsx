import { Code, Database, Palette, Smartphone, Globe, Zap, BookOpen, Target, TrendingUp, Award } from 'lucide-react';
import SkillsFilter from '@/components/SkillsFilter';

export default function SkillsPage() {
const skillCategories = [
  {
    id: 'languages',
    title: 'Languages & DSA',
    icon: <Code className="h-8 w-8" />,
    description: 'Strong foundation in programming languages and data structures & algorithms',
    skills: [
      { name: 'C++', level: 90, description: 'Efficient coding, STL, and advanced problem-solving' },
      { name: 'C', level: 80, description: 'System-level programming and memory management' },
      { name: 'Python', level: 85, description: 'Scripting, data analysis, and ML applications' },
      { name: 'JavaScript', level: 88, description: 'Frontend and backend development with ES6+' }
    ]
  },
  {
    id: 'web-backend',
    title: 'Web & Backend',
    icon: <Database className="h-8 w-8" />,
    description: 'Full-stack development with modern frameworks and tools',
    skills: [
      { name: 'HTML/CSS', level: 85, description: 'Semantic HTML, responsive and accessible CSS' },
      { name: 'Bootstrap', level: 75, description: 'Rapid UI development with responsive design' },
      { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS for fast and scalable UI development' },
      { name: 'MERN Stack', level: 88, description: 'MongoDB, Express.js, React.js, Node.js full-stack apps' },
      { name: 'Next.js', level: 85, description: 'SSR, SSG, and API routes for React applications' },
      { name: 'TypeScript', level: 80, description: 'Type-safe JavaScript development' },
      { name: 'REST APIs', level: 85, description: 'Scalable backend APIs with proper authentication' },
      { name: 'WebSockets & Socket.io', level: 80, description: 'Real-time communication and live apps' },
      { name: 'JWT & OAuth', level: 75, description: 'Authentication and secure session management' }
    ]
  },
  {
    id: 'ml-ai',
    title: 'ML & AI',
    icon: <Zap className="h-8 w-8" />,
    description: 'Machine learning and data science libraries',
    skills: [
      { name: 'TensorFlow', level: 80, description: 'Building and training ML models' },
      { name: 'NumPy', level: 85, description: 'Efficient numerical computations' },
      { name: 'Pandas', level: 85, description: 'Data analysis and manipulation' },
      { name: 'Matplotlib', level: 80, description: 'Data visualization and charts' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Deployment',
    icon: <Globe className="h-8 w-8" />,
    description: 'Tools for deployment, automation, and infrastructure management',
    skills: [
      { name: 'Git & GitHub', level: 90, description: 'Version control, collaboration, CI/CD workflows' },
      { name: 'Docker', level: 80, description: 'Containerization and microservices' },
      { name: 'AWS', level: 75, description: 'Cloud computing and deployments' },
      { name: 'Firebase', level: 80, description: 'Authentication, hosting, and real-time database' },
      { name: 'Cloudinary', level: 75, description: 'Media storage and optimization' },
      { name: 'Render & Vercel', level: 80, description: 'Fast and easy web deployments' },
      { name: 'MongoDB & Redis', level: 85, description: 'NoSQL database and caching for performance' }
    ]
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    icon: <Palette className="h-8 w-8" />,
    description: 'Personal and professional attributes',
    skills: [
      { name: 'Communication', level: 85, description: 'Clear and effective communication' },
      { name: 'Team Collaboration', level: 85, description: 'Working effectively with diverse teams' },
      { name: 'Problem-Solving', level: 90, description: 'Critical thinking and analytical skills' },
      { name: 'Critical Thinking', level: 88, description: 'Evaluating problems logically and creatively' },
      { name: 'Leadership', level: 80, description: 'Guiding and mentoring peers' },
      { name: 'Work Ethic', level: 85, description: 'Commitment and responsibility' }
    ]
  }
];



  const learningGoals = [
    {
      skill: 'Machine Learning',
      status: 'In Progress',
      progress: 40,
      description: 'Learning Python ML libraries and data science fundamentals',
      targetDate: '2026 Q2'
    },
 
  ];

const achievements = [
  {
    title: 'National Talent Search Examination Stage 1 Qualified',
    year: '2021',
    description: 'Selected among 8,500 students from a pool of 1,000,000 applicants',
    icon: <Award className="h-6 w-6" />
  },
  {
    title: 'ATF Scholar',
    year: '2023',
    description: 'Selected among top 70 students from a pool of 20,000 applicants after 2 coding rounds and an interview',
    icon: <Award className="h-6 w-6" />
  }
];


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, experience, and continuous learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Skills Filter Component - Client Component */}
          <SkillsFilter skillCategories={skillCategories} />
        </div>
      </section>

      {/* Learning Goals Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Learning Goals
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Skills I&apos;m currently developing and planning to master
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningGoals.map((goal, index) => (
              <div
                key={goal.skill}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {goal.skill}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      goal.status === 'In Progress' 
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {goal.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {goal.description}
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Target: {goal.targetDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Milestones and accomplishments in my professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{achievement.description}</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
