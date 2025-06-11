import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Calendar, Code, Database, Globe, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Redux', 'jQuery'],
    ui: ['Material-UI', 'Ant Design', 'Tailwind CSS', 'Bootstrap', 'Axios', 'Mapbox', 'RichTextEditor', 'Apache ECharts'],
    backend: ['Node.js', 'Java', 'Spring Boot', 'Python'],
    tools: ['MySQL', 'MongoDB', 'Git', 'GitLab', 'REST APIs', 'WebSocket', 'Jira']
  };

  const experiences = [
    {
      company: 'Maritime Info Lab Pvt Ltd',
      role: 'React Developer',
      period: 'Apr 2024 - Present',
      location: 'Noida',
      description: 'A company focusing on providing innovative solutions for the shipping industry.',
      achievements: [
        'Developing OceannMail mailing system using React, Next.js, TypeScript, and MUI',
        'Added features like calendar, folders, labels, mail filtering, and rich text editor',
        'Implemented vessel tracking with live position display on maps using Mapbox',
        'Built real-time chat system using WebSocket connections',
        'Developed Oceann AI chatbot for smooth conversation handling'
      ]
    },
    {
      company: 'Varaisys Pvt Ltd',
      role: 'Associate Software Engineer',
      period: 'Jan 2023 - Mar 2024',
      location: 'Noida',
      description: 'A technology solutions provider focused on web application development.',
      achievements: [
        'Led full-stack development managing workflows with Jira',
        'Spearheaded end-to-end development in React, Java, and MySQL',
        'Implemented client-side logic for high-performance interfaces',
        'Demonstrated proficiency in RESTful API integration',
        'Collaborated effectively with cross-functional teams'
      ]
    }
  ];

  const projects = [
    {
      title: 'Oceann Mail',
      period: 'Apr 2024 - Present',
      description: 'Comprehensive mailing system designed specifically for the shipping industry.',
      features: [
        'Complete mailing system similar to Outlook and Gmail for shipping industry',
        'Core email features: sending, receiving, calendar integration, contact management',
        'Vessel management with live position tracking on maps',
        'Responsive contact and vessel management pages',
        'Dashboard with graphs for mail statistics'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'MUI', 'Python', 'Django', 'Flask', 'MongoDB', 'PostgreSQL'],
      achievements: 'Improved cargo handling by 85%, added live vessel tracking, built AI chatbot'
    },
    {
      title: 'Matrix Business Intelligence Tool (MATBI)',
      period: 'Jul 2023 – Mar 2024',
      description: 'Data analytics platform for revolutionizing data management and visualization.',
      features: [
        'Data extraction, analysis, and visualization platform',
        'Dynamic chart creation and report generation',
        'Real-time data updates and interactive dashboards',
        'Seamless RESTful API integration'
      ],
      technologies: ['React', 'Java', 'MySQL', 'Python', 'Vega-Lite', 'Cube.js', 'Kallin'],
      achievements: 'Improved data visualization with dynamic, interactive graphs for better decision-making'
    },
    {
      title: 'Intranet - Human Resource Management',
      period: 'Jan 2023 – Jul 2023',
      description: 'Employee Management System for streamlining HR processes.',
      features: [
        'Comprehensive Employee Management System',
        'Intuitive interface for profile management',
        'Leave request and performance evaluation system',
        'Leave Management Module for effective handling'
      ],
      technologies: ['React', 'Java', 'MySQL'],
      achievements: 'Reduced HR team workload by 80% with complete automation'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-purple-400">M</span>adhu
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === item ? 'text-purple-400' : 'text-white hover:text-purple-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-left py-2 text-white hover:text-purple-300 transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
              MK
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-purple-400">Frontend</span> Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building responsive, user-friendly web applications with React, Next.js, and modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="mailto:madhuec1506@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
            <a href="tel:8877234660" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Phone size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Frontend Developer</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a passionate Frontend Developer with over 2+ years of experience in HTML, CSS, React.js, Next.js, JavaScript, and TypeScript. 
                I specialize in building responsive UIs, integrating APIs, and optimizing performance.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Known for writing clean, maintainable code, I have hands-on experience in multiple live projects and a good understanding 
                of backend and database technologies. I enjoy creating innovative solutions for complex problems.
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <MapPin size={20} />
                <span>Noida Sector 22, UP 201301</span>
              </div>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-white mb-6">Education</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-purple-400">B. Tech in Electronics and Communication Engineering</h5>
                  <p className="text-gray-300">Aryabhata Knowledge University, Patna</p>
                  <p className="text-gray-400 text-sm">Sep 2018 - Nov 2021</p>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-400">Diploma in Electronics</h5>
                  <p className="text-gray-300">State Board of Technical Education Patna</p>
                  <p className="text-gray-400 text-sm">Aug 2014 – Sep 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">UI/Libraries</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.ui.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Database className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Database className="text-orange-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Tools & DB</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-2xl hover:bg-slate-700/70 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-purple-400 mb-2">{exp.company}</h4>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-purple-300 font-semibold">{exp.period}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-300 font-semibold">{project.period}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-green-600/10 rounded-lg border-l-4 border-green-400">
                  <h4 className="text-green-400 font-semibold mb-2">Achievements:</h4>
                  <p className="text-gray-300">{project.achievements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-700/50 p-6 rounded-2xl">
              <Mail className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:madhuec1506@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                madhuec1506@gmail.com
              </a>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-2xl">
              <Phone className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a href="tel:8877234660" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                +91 8877234660
              </a>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-2xl">
              <MapPin className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Noida Sector 22, UP 201301</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:madhuec1506@gmail.com" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Send Email
            </a>
            <a 
              href="tel:8877234660" 
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; 2024 Madhu Kumari. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
