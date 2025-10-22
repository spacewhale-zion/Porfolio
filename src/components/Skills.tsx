import { Code, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react';

const Skills = () => {
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code className="h-8 w-8" />,
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5/CSS3']
  },
  {
    title: 'Backend Development',
    icon: <Database className="h-8 w-8" />,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis', 'REST APIs', 'WebSockets (Socket.io)']
  },
  {
    title: 'AI & Cloud Integration',
    icon: <Globe className="h-8 w-8" />,
    skills: ['Google Gemini API', 'Firebase (Auth, Firestore, Storage)', 'AWS Basics', ]
  },
  {
    title: 'DevOps & Tools',
    icon: <Zap className="h-8 w-8" />,
    skills: ['Git & GitHub', 'CI/CD Pipelines', 'Linux', 'Docker (basics)', 'Postman']
  },
  {
    title: 'Other Skills',
    icon: <Smartphone className="h-8 w-8" />,
    skills: ['Data Structures & Algorithms (C++/Python)', 'Problem Solving', 'Responsive Web Design', 'Team Collaboration']
  }
];


  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                    <div className="w-20 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/skills"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Skills
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
