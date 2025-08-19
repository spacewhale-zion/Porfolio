import { ExternalLink, Github, ArrowRight, Search, Filter, Star, Calendar, Users } from 'lucide-react';
import ProjectsFilter from '@/components/ProjectsFilter';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'AlgoProject',
      description: 'Peer Learning Coding Platform built during Algo University Internship with online compiler and student dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/AlgoProject',
      featured: true,
      category: 'fullstack',
      year: '2025',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['Online Code Compiler', 'Student Dashboard', 'Peer Learning']
    },
    {
      id: 2,
      title: 'E-Commerce with Recommendation System and ChatBot',
      description: 'A scalable eCommerce platform with product recommendations, FAQ chatbot, and Stripe-based secure payments.',
      image: '/api/placeholder/600/400',
      technologies: ['TypeScript', 'MERN', 'Firebase', 'Redis', 'Stripe'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/E-Commerce-with-Recommendation-System-and-ChatBot',
      featured: true,
      category: 'fullstack',
      year: '2025',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['Product Recommendations', 'FAQ Chatbot', 'Stripe Payments']
    },
    {
      id: 3,
      title: 'Chat Website React',
      description: 'Real-time chat application using MERN stack with WebSockets, JWT authentication, and Tailwind CSS.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/Chat-Website-React',
      featured: false,
      category: 'fullstack',
      year: '2024',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['WebSocket Messaging', 'JWT Authentication', 'Responsive UI']
    },
    {
      id: 4,
      title: 'Railway Train Booking C++ Project',
      description: 'C++ project simulating a railway ticket booking system.',
      image: '/api/placeholder/600/400',
      technologies: ['C++'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/RailWay-Train-booking-CPP-Project',
      featured: false,
      category: 'cpp',
      year: '2024',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['C++ OOP', 'Data Handling', 'Ticket Booking Simulation']
    },
    {
      id: 5,
      title: 'NoteBook React Project',
      description: 'A React-based notebook app with authentication and persistent storage.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/NoteBook-React-Project',
      featured: false,
      category: 'fullstack',
      year: '2024',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['JWT Auth', 'MongoDB Storage', 'Responsive UI']
    },
    {
      id: 6,
      title: 'News Website React',
      description: 'News website built with React, fetching data via API and showing categorized news.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Bootstrap', 'News API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/News-Website-React',
      featured: false,
      category: 'frontend',
      year: '2024',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['API Integration', 'Category Filter', 'Responsive Design']
    },

    {
      id: 8,
      title: 'Text Utility React Project',
      description: 'Utility tool built with React for text transformations.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/Text-Utility-React-Project',
      featured: false,
      category: 'frontend',
      year: '2024',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['Text Formatting', 'Case Conversions', 'React UI']
    },
    {
      id: 9,
      title: 'Blogging Platform',
      description: 'A blogging system built with JavaScript, supporting content creation and publishing.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/Blogging',
      featured: false,
      category: 'fullstack',
      year: '2024',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['Blog Management', 'SEO Friendly', 'User Auth']
    },

    {
      id: 11,
      title: 'Tic Tac Toe',
      description: 'Classic Tic Tac Toe game built in JavaScript.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/Tic-Tac-Toe',
      featured: false,
      category: 'frontend',
      year: '2023',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['Game Logic', 'JavaScript DOM', 'Interactive UI']
    },
    {
      id: 12,
      title: 'Snake Game',
      description: 'Classic Snake Game built in JavaScript.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/Snake-Game',
      featured: false,
      category: 'frontend',
      year: '2023',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['Snake Game Logic', 'Canvas Rendering', 'Score Tracking']
    },
    {
      id: 13,
      title: 'Spotify Clone',
      description: 'Frontend Spotify clone built with HTML and CSS.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/spacewhale-zion/Spotify',
      featured: false,
      category: 'frontend',
      year: '2023',
      status: 'Live',
      teamSize: 'Solo',
      highlights: ['Music Player UI', 'Responsive Design']
    }
  ];


  const categories = ['all', 'frontend', 'backend', 'fullstack', 'mobile', 'design'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of my work showcasing various technologies, design approaches, and problem-solving skills
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Component - Client Component */}
          <ProjectsFilter projects={projects} categories={categories} />
        </div>
      </section>
    </div>
  );
}
