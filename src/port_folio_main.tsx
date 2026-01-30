import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown, Menu, X, Award, Briefcase, User, Home, Code2, Server, Cloud, Database as DatabaseIcon } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skills = {
        languages: ['Java 8+', 'JavaScript', 'TypeScript', 'Python'],
        frontend: ['React.js', 'Next.js', 'Redux Toolkit', 'React Hooks', 'HTML5', 'CSS3', 'jQuery'],
        ui: ['Material-UI', 'Tailwind CSS', 'Ant Design', 'Bootstrap', 'Axios', 'Mapbox', 'Apache ECharts'],
        backend: ['Spring Boot', 'Spring MVC', 'Spring Security', 'REST APIs', 'Microservices', 'Apache Kafka', 'Node.js'],
        database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Hibernate', 'JPA', 'JDBC'],
        cloud: ['AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes'],
        tools: ['Git', 'GitLab', 'Jira', 'Postman', 'WebSocket', 'JWT', 'CI/CD']
    };

    const experiences = [
        {
            company: 'Maritime Info Lab Pvt Ltd',
            role: 'React Developer',
            period: 'Apr 2024 - Present',
            location: 'Noida',
            description: 'Enterprise-grade web application development for maritime industry solutions.',
            achievements: [
                'Developed OceannMail platform using React, Next.js, TypeScript, and Material-UI',
                'Implemented email workflows including compose, search, folder management, and auto-save drafts',
                'Integrated Mapbox for real-time vessel tracking and maritime data visualization',
                'Built real-time chat using WebSocket for instant communication',
                'Collaborated with backend teams (Java Spring Boot, Kafka, AWS) for API integration',
                'Improved operational efficiency by 85% through enhanced data workflows'
            ]
        },
        {
            company: 'Varaisys Pvt Ltd',
            role: 'Associate Software Engineer',
            period: 'Jan 2023 - Mar 2024',
            location: 'Noida',
            description: 'Full-stack development with focus on enterprise applications and business intelligence.',
            achievements: [
                'Built full-stack applications using React, Java, Spring Boot, and MySQL',
                'Designed and consumed REST APIs with validation and exception handling',
                'Implemented Spring Security with JWT for authentication and role-based access control',
                'Developed dashboards and analytics modules for business intelligence tools',
                'Improved UI performance by 40% through React optimization and lazy loading',
                'Optimized database queries using Hibernate and JPA for faster data retrieval'
            ]
        }
    ];

    const projects = [
        {
            title: 'OceannMail - Enterprise Maritime Communication Platform',
            period: 'Apr 2024 - Present',
            description: 'Comprehensive email management system with calendar integration, contact management, and vessel tracking for maritime operations.',
            features: [
                'Email management supporting 10,000+ daily transactions',
                'JWT authentication with refresh token mechanism and Spring Security',
                'Real-time vessel tracking with intelligent matching algorithms',
                'Port-to-port distance calculations and maritime data visualization',
                'Calendar integration and contact management',
                'WebSocket-based real-time chat system'
            ],
            technologies: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'Python', 'Django', 'MongoDB', 'PostgreSQL', 'JWT', 'WebSocket'],
            achievements: '85% improvement in cargo handling efficiency through enhanced data visualization'
        },
        {
            title: 'Matrix Business Intelligence Tool (MATBI)',
            period: 'Jul 2023 - Mar 2024',
            description: 'Business intelligence platform for data analytics and reporting with role-based dashboards.',
            features: [
                'Java Spring Boot backend with React frontend',
                'RESTful APIs for data aggregation and filtering',
                'Role-based dashboards with Spring Security and JWT',
                'Interactive charts and real-time business metrics',
                'Complex business logic processing with validation',
                'Multi-user hierarchy support'
            ],
            technologies: ['React', 'Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT', 'Apache ECharts'],
            achievements: 'Streamlined business intelligence workflows with real-time data visualization'
        },
        {
            title: 'Intranet - Human Resource Management System',
            period: 'Jan 2023 - Jul 2023',
            description: 'Comprehensive HR platform managing employee records, attendance, and performance evaluation.',
            features: [
                'Spring Security and JWT authentication system',
                'Employee profile and leave management modules',
                'Attendance tracking and performance evaluation',
                'Automated email notifications and workflows',
                'Managing 200+ employee records',
                'Password management and session handling'
            ],
            technologies: ['React', 'Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT', 'Hibernate'],
            achievements: '80% reduction in HR operational workload through automation'
        }
    ];

    const scrollToSection = (sectionId: any) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: User },
        { id: 'skills', label: 'Skills', icon: Code2 },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'education', label: 'Education', icon: Award },
        { id: 'projects', label: 'Projects', icon: Code2 },
        { id: 'contact', label: 'Contact', icon: Mail }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Smooth Navigation Bar - Always Visible */}

            <nav className={`fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-xl' : 'bg-slate-900/80 backdrop-blur-md'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">

                        {/* Brand */}
                        <button onClick={() => scrollToSection('home')}
                            className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400">
                                <img
                                    src="/profile_photo.jpg"
                                    alt="Madhu Kumari"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const t = e.target as HTMLImageElement;
                                        t.style.display = 'none';
                                        t.parentElement!.innerHTML =
                                            '<div class="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold text-white">MK</div>';
                                    }}
                                />
                            </div>
                            <div className="sm:block text-left">
                                <p className="text-white font-semibold leading-none">Madhu Kumari</p>
                                {/* <p className="text-xs text-purple-400">Software Developer</p> */}
                            </div>
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden min-[768px]:flex items-center space-x-1">
                            {navItems.map(item => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition
                      ${activeSection === item.id
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                                                : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                                    >
                                        <Icon size={16} />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Mobile Toggle */}
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-white p-2 rounded hover:bg-white/10">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-4 bg-slate-800/95 rounded-xl p-4 space-y-2">
                            {navItems.map(item => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
                      ${activeSection === item.id
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                                : 'text-gray-300 hover:bg-white/10'}`}
                                    >
                                        <Icon size={18} />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Profile and Title Row - Image Left, Name Right */}
                    <div className="flex flex-col min-[768px]:flex-row items-center md:items-start justify-center gap-8 md:gap-12 mb-8">
                        {/* Profile Photo - Left Side */}
                        <div className="lg:w-2/5 flex-shrink-0 animate-fade-in-left">
                            <div className="relative">
                                {/* Decorative border */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-xl"></div>

                                <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden 
    border-4 border-purple-400/50 shadow-2xl 
    flex items-center justify-center
    transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50">
                                    <img
                                        src="/profile_photo.jpg"
                                        alt="Madhu Kumari - Java Full Stack Developer"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            if (target.parentElement) {
                                                target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 flex items-center justify-center text-8xl font-bold text-white">MK</div>';
                                            }
                                        }}
                                    />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-4 right-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl shadow-xl transform rotate-3 animate-float">
                                    <p className="font-bold text-sm">3+ Years</p>
                                    <p className="text-xs opacity-90">Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Title and Designation - Right Side */}
                        <div className="text-center md:text-left flex-1">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                                Madhu Kumari
                            </h1>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3">
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Software Developer
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
                                Java Full Stack Developer
                            </p>
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
                                Passionate Java & React Developer delivering scalable, secure, and high-performance applications with modern frontend frameworks and Spring Boot microservices.
                            </p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 font-medium"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="w-full sm:w-auto px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full transition-all duration-300 hover:shadow-xl font-medium"
                        >
                            Get In Touch
                        </button>
                    </div> */}

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6">
                        <a
                            href="mailto:madhuec1506@gmail.com"
                            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-white/10"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                        <a
                            href="tel:8877234660"
                            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-white/10"
                            aria-label="Phone"
                        >
                            <Phone size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/madhukumari1506"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-white/10"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown size={32} className="text-white opacity-70" />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 lg:py-28 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
                        About Me
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <h3 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 text-center">
                                Java Full Stack Developer
                            </h3>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                Results-driven Software Developer with 3+ years of experience building scalable and high-performance
                                React and Java enterprise applications. Strong expertise in React.js, Next.js, TypeScript, Java 8+,
                                and Spring Boot.
                            </p>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                Experienced in designing and integrating RESTful APIs, Microservices, and implementing authentication
                                using Spring Security and JWT. Hands-on exposure to Kafka-based messaging systems, AWS cloud services,
                                and containerized deployments using Docker and Kubernetes.
                            </p>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                Proficient in MySQL, PostgreSQL, and MongoDB with Hibernate and JPA. Strong foundation in OOPs,
                                System Design, and DSA, focused on clean and maintainable production-ready code.
                            </p>

                            <div className="flex items-center justify-center space-x-3 text-purple-400 pt-6">
                                <MapPin size={22} className="flex-shrink-0" />
                                <span className="text-base">Noida Sector 22, UP 201301</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
                        Skills & Technologies
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 border border-slate-700/50 backdrop-blur-sm">
                            <div className="flex items-center mb-4">
                                <Code2 className="text-purple-400 mr-3" size={28} />
                                <h3 className="text-xl font-semibold text-white">Languages</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.languages.map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-purple-600/20 text-purple-300 rounded-lg text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-colors duration-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 border border-slate-700/50 backdrop-blur-sm">
                            <div className="flex items-center mb-4">
                                <Code2 className="text-blue-400 mr-3" size={28} />
                                <h3 className="text-xl font-semibold text-white">Frontend</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.frontend.map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-blue-600/20 text-blue-300 rounded-lg text-sm border border-blue-500/30 hover:bg-blue-600/30 transition-colors duration-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 border border-slate-700/50 backdrop-blur-sm">
                            <div className="flex items-center mb-4">
                                <Server className="text-green-400 mr-3" size={28} />
                                <h3 className="text-xl font-semibold text-white">Backend</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.backend.map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-green-600/20 text-green-300 rounded-lg text-sm border border-green-500/30 hover:bg-green-600/30 transition-colors duration-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 border border-slate-700/50 backdrop-blur-sm">
                            <div className="flex items-center mb-4">
                                <DatabaseIcon className="text-orange-400 mr-3" size={28} />
                                <h3 className="text-xl font-semibold text-white">Database</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.database.map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-orange-600/20 text-orange-300 rounded-lg text-sm border border-orange-500/30 hover:bg-orange-600/30 transition-colors duration-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 border border-slate-700/50 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center mb-4">
                                <Code2 className="text-cyan-400 mr-3" size={28} />
                                <h3 className="text-xl font-semibold text-white">UI Libraries</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.ui.map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-cyan-600/20 text-cyan-300 rounded-lg text-sm border border-cyan-500/30 hover:bg-cyan-600/30 transition-colors duration-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 border border-slate-700/50 backdrop-blur-sm">
                            <div className="flex items-center mb-4">
                                <Cloud className="text-pink-400 mr-3" size={28} />
                                <h3 className="text-xl font-semibold text-white">Cloud & DevOps</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.cloud.map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-pink-600/20 text-pink-300 rounded-lg text-sm border border-pink-500/30 hover:bg-pink-600/30 transition-colors duration-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 border border-slate-700/50 backdrop-blur-sm sm:col-span-2 lg:col-span-2">
                            <div className="flex items-center mb-4">
                                <Server className="text-yellow-400 mr-3" size={28} />
                                <h3 className="text-xl font-semibold text-white">Tools & Practices</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.tools.map((skill) => (
                                    <span key={skill} className="px-3 py-1.5 bg-yellow-600/20 text-yellow-300 rounded-lg text-sm border border-yellow-500/30 hover:bg-yellow-600/30 transition-colors duration-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 lg:py-28 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
                        Work Experience
                    </h2>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-slate-700/50 p-8 rounded-2xl hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/30 backdrop-blur-sm">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div className="flex-1 mb-4 lg:mb-0">
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                        <h4 className="text-xl text-purple-400 mb-2">{exp.company}</h4>
                                        <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                                    </div>
                                    <div className="lg:text-right lg:ml-8 flex-shrink-0">
                                        <p className="text-purple-300 font-semibold mb-1">{exp.period}</p>
                                        <p className="text-gray-400 text-sm">{exp.location}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {exp.achievements.map((achievement, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-gray-300 leading-relaxed">{achievement}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
                        Education & Certifications
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Education */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                <Award className="mr-3 text-purple-400" size={28} />
                                Education
                            </h3>

                            <div className="space-y-6">
                                <div className="border-l-4 border-purple-400 pl-6 hover:border-purple-300 transition-colors duration-300">
                                    <h4 className="font-semibold text-purple-400 text-lg mb-2">
                                        B. Tech in Electronics and Communication Engineering
                                    </h4>
                                    <p className="text-gray-300 mb-1">Aryabhata Knowledge University, Patna</p>
                                    <p className="text-gray-400 text-sm">Sep 2018 - Nov 2021</p>
                                </div>

                                <div className="border-l-4 border-blue-400 pl-6 hover:border-blue-300 transition-colors duration-300">
                                    <h4 className="font-semibold text-blue-400 text-lg mb-2">
                                        Diploma in Electronics
                                    </h4>
                                    <p className="text-gray-300 mb-1">State Board of Technical Education Patna</p>
                                    <p className="text-gray-400 text-sm">Aug 2014 - Sep 2017</p>
                                </div>

                                <div className="border-l-4 border-cyan-400 pl-6 hover:border-cyan-300 transition-colors duration-300">
                                    <h4 className="font-semibold text-cyan-400 text-lg mb-2">
                                        Secondary School Certificate (10th)
                                    </h4>
                                    <p className="text-gray-300 mb-1">Bihar School Examination Board (BSEB)</p>
                                    <p className="text-gray-400 text-sm">Apr 2013 - Aug 2014</p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                <Award className="mr-3 text-green-400" size={28} />
                                Certifications
                            </h3>

                            <div className="border-l-4 border-green-400 pl-6 hover:border-green-300 transition-colors duration-300">
                                <h4 className="font-semibold text-green-400 text-lg mb-2">
                                    Java Full Stack Development
                                </h4>
                                <p className="text-gray-300 mb-3">JSpiders Training Institute</p>
                                <p className="text-gray-400 text-sm mb-4">2022</p>
                                <div className="space-y-2">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-300 text-sm">Comprehensive training in Java, Spring Boot, React.js</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-300 text-sm">Hands-on experience with full-stack development</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-300 text-sm">RESTful APIs, Database management, and deployment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 lg:py-28 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
                        Featured Projects
                    </h2>

                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 backdrop-blur-sm">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div className="flex-1 mb-4 lg:mb-0">
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{project.description}</p>
                                    </div>
                                    <div className="lg:text-right lg:ml-8 flex-shrink-0">
                                        <p className="text-purple-300 font-semibold">{project.period}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-purple-400 mb-4">Key Features:</h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {project.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-blue-400 mb-4">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1.5 bg-blue-600/20 text-blue-300 rounded-lg text-sm border border-blue-500/30 hover:bg-blue-600/30 transition-colors duration-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-5 bg-green-600/10 rounded-xl border-l-4 border-green-400 backdrop-blur-sm">
                                    <h4 className="text-green-400 font-semibold mb-2">Achievements:</h4>
                                    <p className="text-gray-300 leading-relaxed">{project.achievements}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 lg:py-28 bg-slate-800/50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        I'm always interested in new opportunities and exciting projects.
                        Let's discuss how we can bring your ideas to life!
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-slate-700/50 p-8 rounded-2xl hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105 border border-slate-600/30 backdrop-blur-sm">
                            <Mail className="text-purple-400 mx-auto mb-4" size={36} />
                            <h3 className="text-white font-semibold mb-3 text-lg">Email</h3>
                            <a href="mailto:madhuec1506@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 break-words">
                                madhuec1506@gmail.com
                            </a>
                        </div>

                        <div className="bg-slate-700/50 p-8 rounded-2xl hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105 border border-slate-600/30 backdrop-blur-sm">
                            <Phone className="text-purple-400 mx-auto mb-4" size={36} />
                            <h3 className="text-white font-semibold mb-3 text-lg">Phone</h3>
                            <a href="tel:8877234660" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                                +91 8877234660
                            </a>
                        </div>

                        <div className="bg-slate-700/50 p-8 rounded-2xl hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105 border border-slate-600/30 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                            <MapPin className="text-purple-400 mx-auto mb-4" size={36} />
                            <h3 className="text-white font-semibold mb-3 text-lg">Location</h3>
                            <p className="text-gray-300">Noida Sector 22, UP 201301</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center text-gray-400 border-t border-slate-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 mb-6">
                        <p>&copy; 2024 Madhu Kumari. All rights reserved.</p>
                        <p>Built with React & Tailwind CSS</p>
                    </div>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="mailto:madhuec1506@gmail.com"
                            className="text-gray-500 hover:text-purple-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                            aria-label="Email"
                        >
                            <Mail size={22} />
                        </a>
                        <a
                            href="tel:8877234660"
                            className="text-gray-500 hover:text-purple-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                            aria-label="Phone"
                        >
                            <Phone size={22} />
                        </a>
                        <a
                            href="https://linkedin.com/in/madhukumari1506"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-purple-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </a>
                    </div>
                </div>
            </footer>
            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-left {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fade-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(3deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(3deg);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }

                .animate-fade-in-left {
                    animation: fade-in-left 1s ease-out forwards;
                }

                .animate-fade-in-right {
                    animation: fade-in-right 1s ease-out forwards;
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out forwards;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .hover\\:scale-102:hover {
                    transform: scale(1.02);
                }
            `}</style>

        </div>
    );
};

export default Portfolio;