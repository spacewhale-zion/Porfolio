"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectsFilter from "@/components/ProjectsFilter";

export default function ProjectsPage() {
  const projectsWithoutId = [

    {
    title: 'SkillConnect',
    description:
      'A hyperlocal platform connecting users for task posting/bidding and instant service booking within a community. Features geospatial search, real-time chat, Stripe payments & payouts, and Firebase notifications.',
    image: "/api/placeholder/600/400",
    technologies: [
        'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB',
        'Socket.IO', 'Stripe', 'Firebase', 'Tailwind CSS', 'Docker'
        ],
    liveUrl: '#', // Update if you have a live deployment link
    githubUrl: 'https://github.com/spacewhale-zion/Skill-Connect',
    featured: true,
      category: "fullstack",
      year: "2025",
      status: "Live",
      teamSize: "Solo",
      highlights: [
        "Instant Service Booking",
        "Find Help in your Neighbourhood",
      ],
  },

    {
      
      title: "AlgoProject",
      description:
        "Peer Learning Coding Platform built during Algo University Internship with online compiler and student dashboard.",
      image: "/api/placeholder/600/400",
      technologies: [
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/spacewhale-zion/AlgoProject",
      featured: true,
      category: "fullstack",
      year: "2025",
      status: "Live",
      teamSize: "Solo",
      highlights: [
        "Online Code Compiler",
        "Student Dashboard",
        "Peer Learning",
      ],
    },
    {
      
      title: "E-Commerce with Recommendation System and ChatBot",
      description:
        "A scalable eCommerce platform with product recommendations, FAQ chatbot, and Stripe-based secure payments.",
      image: "/api/placeholder/600/400",
      technologies: [
        "TypeScript",
        "MERN",
        "Firebase",
        "Redis",
        "Stripe",
      ],
      liveUrl: "#",
      githubUrl:
        "https://github.com/spacewhale-zion/E-Commerce-with-Recommendation-System-and-ChatBot",
      featured: true,
      category: "fullstack",
      year: "2025",
      status: "Live",
      teamSize: "Solo",
      highlights: [
        "Product Recommendations",
        "FAQ Chatbot",
        "Stripe Payments",
      ],
    },
    {
      title: "Chat Website React",
      description:
        "Real-time chat application using MERN stack with WebSockets, JWT authentication, and Tailwind CSS.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT",
      ],
      liveUrl: "#",
      githubUrl:
        "https://github.com/spacewhale-zion/Chat-Website-React",
      featured: false,
      category: "fullstack",
      year: "2024",
      status: "Live",
      teamSize: "Solo",
      highlights: [
        "WebSocket Messaging",
        "JWT Authentication",
        "Responsive UI",
      ],
    },
    {
      title: "Railway Train Booking C++ Project",
      description: "C++ project simulating a railway ticket booking system.",
      image: "/api/placeholder/600/400",
      technologies: ["C++"],
      liveUrl: "#",
      githubUrl:
        "https://github.com/spacewhale-zion/RailWay-Train-booking-CPP-Project",
      featured: false,
      category: "cpp",
      year: "2024",
      status: "Live",
      teamSize: "Solo",
      highlights: ["C++ OOP", "Data Handling", "Ticket Booking Simulation"],
    },
    {
      title: "NoteBook React Project",
      description:
        "A React-based notebook app with authentication and persistent storage.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/spacewhale-zion/NoteBook-React-Project",
      featured: false,
      category: "fullstack",
      year: "2024",
      status: "Live",
      teamSize: "Solo",
      highlights: ["JWT Auth", "MongoDB Storage", "Responsive UI"],
    },
    {
      title: "News Website React",
      description:
        "News website built with React, fetching data via API and showing categorized news.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Bootstrap", "News API"],
      liveUrl: "#",
      githubUrl: "https://github.com/spacewhale-zion/News-Website-React",
      featured: false,
      category: "frontend",
      year: "2024",
      status: "Live",
      teamSize: "Solo",
      highlights: ["API Integration", "Category Filter", "Responsive Design"],
    },
    {
      title: "Text Utility React Project",
      description: "Utility tool built with React for text transformations.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/spacewhale-zion/Text-Utility-React-Project",
      featured: false,
      category: "frontend",
      year: "2024",
      status: "Live",
      teamSize: "Solo",
      highlights: ["Text Formatting", "Case Conversions", "React UI"],
    },
    {
      title: "Blogging Platform",
      description:
        "A blogging system built with JavaScript, supporting content creation and publishing.",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/spacewhale-zion/Blogging",
      featured: false,
      category: "fullstack",
      year: "2024",
      status: "Live",
      teamSize: "Solo",
      highlights: ["Blog Management", "SEO Friendly", "User Auth"],
    },
    {
      title: "Tic Tac Toe",
      description: "Classic Tic Tac Toe game built in JavaScript.",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/spacewhale-zion/Tic-Tac-Toe",
      featured: false,
      category: "frontend",
      year: "2023",
      status: "Live",
      teamSize: "Solo",
      highlights: ["Game Logic", "JavaScript DOM", "Interactive UI"],
    },
    {
      title: "Snake Game",
      description: "Classic Snake Game built in JavaScript.",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/spacewhale-zion/Snake-Game",
      featured: false,
      category: "frontend",
      year: "2023",
      status: "Live",
      teamSize: "Solo",
      highlights: ["Snake Game Logic", "Canvas Rendering", "Score Tracking"],
    },
    {
      title: "Spotify Clone",
      description: "Frontend Spotify clone built with HTML and CSS.",
      image: "/api/placeholder/600/400",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/spacewhale-zion/Spotify",
      featured: false,
      category: "frontend",
      year: "2023",
      status: "Live",
      teamSize: "Solo",
      highlights: ["Music Player UI", "Responsive Design"],
    },
  ];

  const projects=projectsWithoutId.map((p,index)=>({
    id:index+1,
    ...p
  }));

  const featuredProjects = projects.filter((p) => p.featured);
  const recentProjects = projects.filter((p) => !p.featured);
  const categories = ["all", "frontend", "backend", "fullstack", "cpp", "design"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my work showcasing various technologies, design approaches, and problem-solving skills
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-400 dark:text-gray-600">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filter + Recent Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              All Projects
            </h3>
            <ProjectsFilter projects={recentProjects} categories={categories} />
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Back to Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
