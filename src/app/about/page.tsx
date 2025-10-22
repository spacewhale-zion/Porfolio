import { Calendar, MapPin, GraduationCap, Briefcase, Award, Users, Globe, Heart } from 'lucide-react';
import Image from 'next/image';
import profilepic from '../../../public/profile.png'

export default function AboutPage() {
  const experience = [
    {
      year: 'Jun 2025 – Aug 2025',
      title: 'Web Development Intern',
      company: 'Algo University',
      description:
        'Designed and developed a peer-learning platform where students could code, solve problems, and learn collaboratively. Implemented an online code compiler supporting multiple programming languages, built a student dashboard, and optimized scalability and UI/UX.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Firebase']
    },
    {
      year: 'Sep 2024 – Dec 2024',
      title: 'Web Development Intern',
      company: 'Ransh Innovation',
      description:
        'Developed and optimized the front-end of a company website. Integrated APIs, enhanced performance, resolved UI/UX issues, and worked on responsiveness and cross-browser compatibility.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'REST APIs']
    }
  ];

  const education = [
    {
      year: '2023 – Present',
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      school: 'National Institute of Technology, Meghalaya',
      description: 'Pursuing BTech with a strong foundation in programming, DSA, and full-stack development.',
      gpa: 'CGPA: 8.92/10'
    }
  ];

  const certifications = [
    {
      name: 'Machine Learning (by Andrew Ng)',
      issuer: 'Coursera / Stanford University',
      year: '2024',
      icon: <Globe className="h-6 w-6" />
    },
    {
      name: 'Google AI ML Virtual Internship',
      issuer: 'Google / AICTE',
      year: '2024',
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const interests = [
    'Open Source Contribution',
    'Machine Learning & AI',
    'Blockchain Technology',
    'Mobile App Development',
    'UI/UX Design',
    'DevOps & Cloud Architecture'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-80 h-80">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-300 dark:border-purple-600">
                  <Image
                    src={profilepic}
                    alt="Aryan Raj"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hi, I&apos;m Aryan Raj
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m a 3rd year B.Tech Student. I am in my 3rd year in NIT Meghlaya. I am passionate Full Stack Developer with over 2 years of experience in creating
                innovative digital solutions. I love turning complex problems into simple, beautiful,
                and intuitive designs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">Meghalaya, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">10+ Projects Completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">4 Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey in software development
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp) => (
              <div
                key={`${exp.title}-${exp.year}`}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                      <Briefcase className="h-5 w-5" />
                      <span>{exp.company}</span>
                      <Calendar className="h-5 w-5" />
                      <span>{exp.year}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic background and continuous learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600 dark:text-gray-400">{edu.year}</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    {edu.gpa}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Interests & Hobbies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Areas that keep me motivated and continuously learning
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{interest}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
