import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Code2,
  Layers,
  Smartphone,
  CheckCircle2,
  Download,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Star,
  X,
  Send,
  Calendar,
  Clock,
  User,
  Globe,
  Check,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Award,
  FileText,
  ArrowUp,
  BookOpen,
  GraduationCap,
  PlayCircle,
  Users,
  Flame,
  Sparkles,
  ShieldCheck,
  Instagram,
  Youtube
} from 'lucide-react';

// Hero image paths
const HERO_IMAGE = 'https://i.pinimg.com/736x/cc/57/9a/cc579a2c37fb70f4a9f2d1eab486f443.jpg';
const HERO_HOVER_IMAGE = 'https://i.pinimg.com/736x/58/37/0b/58370b3e0233b11eb9323591862b0cf5.jpg';
// About image path
const ABOUT_IMAGE = 'https://i.pinimg.com/736x/cc/57/9a/cc579a2c37fb70f4a9f2d1eab486f443.jpg';
const ABOUT_HOVER_IMAGE = 'https://i.pinimg.com/736x/58/37/0b/58370b3e0233b11eb9323591862b0cf5.jpg';
// Project images
const DASHBOARD_IMAGE = '/assets/images/modern_saas_dashboard_1790770399121.jpg';
const PORTFOLIO_IMAGE = '/assets/images/web_portfolio_showcase_1790770419289.jpg';
const MOBILE_APP_IMAGE = '/assets/images/project_mobile_app_1790767218255.jpg';
const ACADEMY_IMAGE = '/assets/images/project_academy.jpg';
const TOWNCLEATS_IMAGE = '/assets/images/project_towncleats.jpg';
const MUSTAFA_IMAGE = '/assets/images/project_mustafa.jpg';
const LOMARO_IMAGE = '/assets/images/project_lomaro.jpg';
const ADVANCED_IMAGE = '/assets/images/project_advanced.jpg';

// Credential & Course Badge Images (Official Credentials)
const CLAUDE_BADGE = '/assets/images/claude_badge_1790775567735.jpg';
const META_BADGE = '/assets/images/meta_badge_1790775585580.jpg';
const AWS_BADGE = '/assets/images/aws_badge_1790775600766.jpg';
const NEXTJS_BADGE = '/assets/images/nextjs_badge_1790775618613.jpg';
const TAILWIND_BADGE = '/assets/images/tailwind_badge_1790775640392.jpg';

// Types and Interfaces
interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  client: string;
  duration: string;
  role: string;
  summary: string;
  technologies: string[];
  codeSnippet: string;
  liveSimulation: {
    url: string;
    description: string;
  };
}

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  process: string[];
}

interface Blog {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
}

interface CourseModule {
  title: string;
  duration: string;
  lessons: string[];
}

interface Course {
  id: string;
  title: string;
  trackCategory: string;
  category: string;
  institution: string;
  year: string;
  verifiedBadgeText: string;
  badgeImage: string;
  description: string;
  competencies: string[];
  credentialId: string;
  level: string;
  rating: number;
  duration?: string;
  lessonsCount?: number;
  modules?: CourseModule[];
}

interface SkillItem {
  id: string;
  name: string;
  desc: string;
  percentage: number;
  badge: 'EXPERT' | 'ADVANCED';
  iconBg: string;
  iconBorder: string;
  iconText: string;
  iconTextLabel: string;
}

// Modern Developer Brand Logo (< A >)
function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Dynamic Emblem / Monogram Box */}
      <div className={`relative w-10 h-10 rounded-2xl ${dark ? 'bg-white/10 border-white/20' : 'bg-brand-green border-brand-yellow/50'} border-2 flex items-center justify-center shadow-md group-hover:shadow-brand-yellow/30 group-hover:scale-105 group-hover:border-brand-yellow transition-all duration-300 overflow-hidden`}>
        {/* Ambient golden glow inside emblem */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/20 via-transparent to-transparent opacity-80" />
        
        {/* Futuristic Developer Monogram SVG (< A >) */}
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform transition-transform duration-300 group-hover:scale-110">
          {/* Left code chevron */}
          <path d="M10 22L15 17M10 22L15 27" stroke="#f3b01c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Center stylized bold 'A' */}
          <path d="M18 29L22 13L26 29" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.5 24H24.5" stroke="#f3b01c" strokeWidth="2.5" strokeLinecap="round" />
          {/* Right code chevron */}
          <path d="M34 22L29 17M34 22L29 27" stroke="#f3b01c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Typography with glowing status dot */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-display font-extrabold text-lg tracking-tight ${dark ? 'text-white' : 'text-brand-green'} group-hover:text-brand-yellow transition-colors duration-200`}>
            Abdullah
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow inline-block animate-pulse shadow-sm" />
        </div>
        <span className={`text-[8px] font-mono uppercase tracking-[0.24em] ${dark ? 'text-white/60' : 'text-brand-green-light/70'} font-bold mt-1`}>
          Web Developer
        </span>
      </div>
    </div>
  );
}

// Skill Brand SVG Icons
function SkillIcon({ id }: { id: string }) {
  switch (id) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 text-[#00d8ff] fill-none stroke-current" strokeWidth="1.2">
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" stroke="none" />
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
      );
    case 'ts':
      return (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect width="32" height="32" rx="6" fill="#3178C6" />
          <path d="M14.5 12H7.5V14.5H9.75V24H12.25V14.5H14.5V12Z" fill="white" />
          <path d="M22.5 16.2C22.5 14.8 21.6 13.9 19.8 13.9C18.2 13.9 17 14.7 16.5 15.6L18.3 16.8C18.6 16.3 19.1 15.9 19.7 15.9C20.3 15.9 20.7 16.2 20.7 16.6C20.7 17.1 20.3 17.3 19.5 17.7C17.5 18.5 16.4 19.4 16.4 21C16.4 22.8 17.8 24.1 20 24.1C21.4 24.1 22.8 23.3 23.4 22L21.5 20.9C21.2 21.5 20.7 22 20 22C19.3 22 18.8 21.6 18.8 21C18.8 20.4 19.3 20.1 20.3 19.7C21.9 19 22.5 18.1 22.5 16.2Z" fill="white" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#38bdf8]">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      );
    case 'node':
      return (
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-[#46c37b]">
          <path d="M16 2.5L3.5 9.7V24.3L16 31.5L28.5 24.3V9.7L16 2.5ZM24.8 22.2L16 27.3L7.2 22.2V12L16 6.9L24.8 12V22.2Z" />
          <path d="M14.5 12H17.5V20H14.5V12Z" />
        </svg>
      );
    case 'wp':
      return (
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-[#21759b]">
          <path d="M16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2ZM3.8 16C3.8 13.3 4.7 10.8 6.2 8.8L12.3 25.5C7.4 23.8 3.8 19.3 3.8 16ZM16 28.2C14.7 28.2 13.5 27.9 12.3 27.4L16.2 16.1L20.2 27.3C18.9 27.9 17.5 28.2 16 28.2ZM18 10.5C18.8 10.5 19.4 9.9 19.4 9.1C19.4 8.3 18.7 7.7 17.9 7.7H13.6C12.8 7.7 12.1 8.3 12.1 9.1C12.1 9.9 12.7 10.5 13.5 10.5H14.6L11.5 19.7L8.7 11.2C9.4 11 9.9 10.4 9.9 9.6C9.9 8.8 9.3 8.2 8.5 8.2H8.3C10.5 5.6 13.8 4 17.5 4C20.6 4 23.4 5.2 25.5 7.2L22.5 15.8L20.4 10.5H18ZM25.8 23.2L20.6 8.8C21.2 8.7 21.6 8.2 21.6 7.6C21.6 7 21.1 6.5 20.5 6.5H20.3C24.4 8.4 27.3 12.4 27.8 17.2L25.8 23.2Z" />
        </svg>
      );
    default:
      return <Code2 className="w-7 h-7 text-brand-yellow" />;
  }
}

export default function App() {
  // Navigation active section state
  const [activeSection, setActiveSection] = useState('home');

  // Interactive UI states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [projectFilter, setProjectFilter] = useState('All');
  
  // Custom Reviews state
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'Sarah Jenkins',
      role: 'CEO & Founder',
      company: 'Aura Retail',
      rating: 5,
      comment: 'Abdullah transformed our online store into a high-performance web experience. His meticulous attention to pixel-perfect fidelity, fast loading speed, and clean code layout helped increase our conversion rate by 34% within two months. A stellar communicator and highly recommended professional developer!',
      avatar: 'SJ'
    },
    {
      id: '2',
      name: 'Marcus Chen',
      role: 'VP of Product',
      company: 'Logix Dash',
      rating: 5,
      comment: 'Working with Abdullah on our SaaS platform dashboard was a game-changer. He translated our design vision into modular, secure React components with flawless state orchestration and responsive visual math. His performance tuning made the analytics interface ultra-snappy.',
      avatar: 'MC'
    },
    {
      id: '3',
      name: 'Elena Rostova',
      role: 'Creative Director',
      company: 'Apex Media Agency',
      rating: 5,
      comment: 'Abdullah possesses that rare combination of rigorous full-stack development expertise and strong visual design alignment. He builds applications that look precisely like the high-fidelity mockups, ensuring standard pixel ratios and accessibility compliance across viewports.',
      avatar: 'ER'
    }
  ]);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '$5,000 - $10,000'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // New testimonial form state
  const [reviewForm, setReviewForm] = useState({
    name: '',
    role: '',
    company: '',
    rating: 5,
    comment: ''
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [isAddingReview, setIsAddingReview] = useState(false);

  // Custom CV/Resume download simulation state
  const [showResumeViewer, setShowResumeViewer] = useState(false);

  // Quick hire request state
  const [showHireModal, setShowHireModal] = useState(false);

  // Courses interactive states
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [courseFilter, setCourseFilter] = useState('All');

  // Scroll to top state ("khud oper jana wala button")
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll spy implementation for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = ['home', 'services', 'about', 'projects', 'courses', 'blogs', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Scroll to top handler ("khud oper jana wala button")
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Static Metadata elements - services database
  const services: Service[] = [
    {
      id: 'ui-ux',
      title: 'UI/UX Design Alignment',
      icon: <Layers className="w-6 h-6 text-brand-yellow" />,
      shortDesc: 'Converting Figma mockups into flawless responsive React interfaces with strict typographic hierarchy and visual math.',
      longDesc: 'Bridging the critical gap between visual art and web technology. I translate complex interactive design structures, detailed layout systems, and custom dynamic components into clean, semantic React code that respects exact viewport aspect ratios, typography rules, and touch-target sizes.',
      deliverables: [
        'Responsive responsive CSS grids & flex layouts',
        'Strict font scaling & line height balancing',
        'High-fidelity interaction state feedback (<200ms delay)',
        'Comprehensive dark-mode color balance maps',
        'Perfect layout compliance testing'
      ],
      process: [
        'Aesthetic inspection of Figma/Sketch files',
        'Mapping typography values & color variables to Tailwind theme',
        'Component isolation & layout structuring',
        'State setup & interactive micro-animation triggers',
        'Fluid layout stress-testing'
      ]
    },
    {
      id: 'website-design',
      title: 'Premium Website Design',
      icon: <Globe className="w-6 h-6 text-brand-yellow" />,
      shortDesc: 'Designing and building super fast, SEO-tuned marketing landing pages and highly stylized creative portfolios.',
      longDesc: 'Creating highly optimized, visually stunning marketing platforms, corporate portfolios, and product launch pages. These landing pages are specifically engineered for maximum conversion, optimized core web vitals, absolute mobile responsive presence, and rich social share meta cards.',
      deliverables: [
        'Blazing fast loading pages with perfect lighthouse scores',
        'Fully responsive structures optimized for all desktop & mobile screen sizes',
        'Advanced CSS grids & subtle editorial typography layers',
        'SEO optimization & rich OpenGraph schema setup',
        'Interactive forms & custom newsletter collectors'
      ],
      process: [
        'Marketing goal setting & demographic research',
        'Wireframing & grid placement definition',
        'Applying brand colors, high-character fonts, & spacing formulas',
        'Building responsive assets & styling semantic HTML codes',
        'Core Web Vitals & speed performance tuning'
      ]
    },
    {
      id: 'app-design',
      title: 'Custom Application Design',
      icon: <Code2 className="w-6 h-6 text-brand-yellow" />,
      shortDesc: 'Developing full-stack web applications, rich dashboards, and modern software-as-a-service layout consoles.',
      longDesc: 'Architecting fully interactive web applications, secure user dashboard tools, and custom software portals. Focused heavily on high-performance database querying, resilient React custom hook state flows, interactive chart integrations, and tabular data layouts.',
      deliverables: [
        'Interactive analytics dashboards with clean visual widgets',
        'Secure authorization flows & access control interfaces',
        'Scalable API integration & state management solutions',
        'Complex tabular layouts with monospace numbers & sorting tools',
        'Robust contact managers & collaborative client systems'
      ],
      process: [
        'Database modeling & architecture design',
        'Building core REST / GraphQL API endpoints',
        'Constructing modular react states & state-machines',
        'Integrating charting libraries & clean data filters',
        'End-to-end security audits & input validations'
      ]
    }
  ];

  // Static Metadata elements - skills list database
  const skillsList: SkillItem[] = [
    {
      id: 'react',
      name: 'React & Next.js',
      desc: 'Single Page Applications (SPAs), Server-Side Rendering (SSR), responsive interactive state architectures.',
      percentage: 96,
      badge: 'EXPERT',
      iconBg: 'bg-[#0b1e26]',
      iconBorder: 'border-[#1b3a47]',
      iconText: 'text-[#00d8ff] font-sans text-xl font-bold',
      iconTextLabel: '⚛️'
    },
    {
      id: 'ts',
      name: 'TypeScript',
      desc: 'Static type safety, robust scalable schemas, compilation pipelines, error-free interfaces.',
      percentage: 92,
      badge: 'ADVANCED',
      iconBg: 'bg-[#0b1e26]',
      iconBorder: 'border-[#1b3a47]',
      iconText: 'text-[#3178c6] font-sans font-extrabold text-sm',
      iconTextLabel: 'TS'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      desc: 'Utility-first configurations, beautiful responsive grids, micro-interactions, custom brand design systems.',
      percentage: 95,
      badge: 'EXPERT',
      iconBg: 'bg-[#0b1e26]',
      iconBorder: 'border-[#1b3a47]',
      iconText: 'text-[#38bdf8] text-xl',
      iconTextLabel: '🌀'
    },
    {
      id: 'node',
      name: 'Node.js & Express',
      desc: 'High-performance backend routing, REST API microservices, middleware controllers, secure auth tokens.',
      percentage: 90,
      badge: 'ADVANCED',
      iconBg: 'bg-[#091f14]',
      iconBorder: 'border-[#143d22]',
      iconText: 'text-[#46c37b] font-mono text-[10px] font-extrabold',
      iconTextLabel: 'NODE'
    },
    {
      id: 'wp',
      name: 'WordPress & PHP',
      desc: 'Bespoke themes, theme editor customization, dynamic hooks, custom database integrations.',
      percentage: 94,
      badge: 'EXPERT',
      iconBg: 'bg-[#0b1c24]',
      iconBorder: 'border-[#1b3442]',
      iconText: 'text-[#21759b] font-serif text-lg font-extrabold',
      iconTextLabel: 'W'
    }
  ];

  // Static Metadata elements - projects database
  const projects: Project[] = [
    {
      id: 'lomaro-pizza',
      title: 'Handcrafted Lomaro Pizza & AI Sommelier Portal',
      category: 'Websites',
      image: LOMARO_IMAGE,
      client: 'Lomaro Pizzeria & Italian Bistro (Faisalabad)',
      duration: '2 Months (2026)',
      role: 'Lead Full-Stack Web & AI Developer',
      summary: 'A high-performance online food ordering and hot-delivery web application built specifically for Faisalabad. It features an interactive cart system, real-time status order tracker, and a custom gourmet "AI Pizza Sommelier" selection pairing assistant.',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'Gourmet AI Agent', 'Vercel Deployment'],
      codeSnippet: `// Multi-Category Shopping Cart & Order State Reducer
import React, { useReducer } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  extraToppings?: { name: string; price: number }[];
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QTY'; payload: { id: string; qty: number } };

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) {
        return state.map(item => 
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'UPDATE_QTY':
      return state.map(item => 
        item.id === action.payload.id ? { ...item, quantity: Math.max(1, action.payload.qty) } : item
      );
    default:
      return state;
  }
}`,
      liveSimulation: {
        url: 'https://pizza-az2a-i6p.vercel.app/',
        description: 'Features a live hosted version of Lomaro Pizza on Vercel. Select handcrafted pizzas, build your cart with extra toppings, consult the AI Pizza Sommelier, and experience real-time order status updates.'
      }
    },
    {
      id: 'advanced-group',
      title: 'ADVANCED Group – Healthcare & Skill Development Portal',
      category: 'Websites',
      image: ADVANCED_IMAGE,
      client: 'ADVANCED Group Institute (Bandipora, J&K)',
      duration: '3 Months (2026)',
      role: 'Lead Full-Stack & Systems Architect',
      summary: 'An integrated, high-conversion institution management and educational portal for Healthcare, Education, and Skill Development courses in Bandipora, J&K. Features comprehensive admissions management workflows, career panels, and a secure interactive operations dashboard.',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Cabinet Grotesk', 'Vite', 'Vercel Deployment'],
      codeSnippet: `// Course Registration & Student Admissions Controller Block
import React, { useState } from 'react';

interface AdmissionApplication {
  studentName: string;
  courseSelected: string;
  department: 'healthcare' | 'education' | 'skills';
  contactPhone: string;
  status: 'pending' | 'reviewed' | 'approved';
}

export function useAdmissionPortal() {
  const [applications, setApplications] = useState<AdmissionApplication[]>([]);

  const submitApplication = (app: Omit<AdmissionApplication, 'status'>) => {
    const newApp: AdmissionApplication = { ...app, status: 'pending' };
    setApplications(prev => [...prev, newApp]);
    return { success: true, message: 'Application submitted for review.' };
  };

  const updateStatus = (index: number, newStatus: AdmissionApplication['status']) => {
    setApplications(prev => prev.map((app, i) => 
      i === index ? { ...app, status: newStatus } : app
    ));
  };

  return { applications, submitApplication, updateStatus };
}`,
      liveSimulation: {
        url: 'https://king-khe2.vercel.app/',
        description: 'Features the live hosted version of the ADVANCED Group Portal on Vercel. Browse professional healthcare modules, explore course admissions, review workshops, or explore the built-in institutional administrator panels.'
      }
    },
    {
      id: 'mustafa-creative-director',
      title: 'Creative Director & Full-Stack Developer Showcase',
      category: 'Websites',
      image: MUSTAFA_IMAGE,
      client: 'Personal & Creative Agency (Abdullah Dev)',
      duration: '3 Months (2026)',
      role: 'Creative Director & Full-Stack Lead',
      summary: 'A high-end, award-winning cinematic developer portfolio and creative showcase platform. Deployed on Vercel with progressive offline capabilities, immersive dark-mode animations, curated VFX/video showcase layouts, and typographic hierarchy utilizing Playfair Display & Space Grotesk.',
      technologies: ['React 19', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'Service Workers', 'PWA Compliance'],
      codeSnippet: `// Cinematic Interactive Portfolio Slide Controller
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioWork {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
}

export function CreativeSlideController({ works }: { works: PortfolioWork[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % works.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-[#0A0B10]">
      <AnimatePresence mode="wait">
        <motion.div
          key={works[activeIndex].id}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        >
          <span className="text-xs uppercase tracking-widest text-[#f3b01c] font-sans font-semibold">
            {works[activeIndex].category}
          </span>
          <h3 className="font-serif italic text-4xl text-white mt-2">
            {works[activeIndex].title}
          </h3>
          <div className="flex gap-2 mt-4">
            {works[activeIndex].tags.map(tag => (
              <span key={tag} className="text-xs font-mono px-3 py-1 border border-white/20 rounded-full text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}`,
      liveSimulation: {
        url: 'https://mustafa-k4nx.vercel.app/',
        description: 'Features a live hosted version of the Creative Director Portfolio on Vercel. Experience standard PWA offline support, browse high-fidelity e-commerce sites (Asad Clothes), watch cinematic reels, and inspect typography structures.'
      }
    },
    {
      id: 'towncleats-football-club',
      title: 'Towncleats Football Club – 24/7 Turf & Match Portal',
      category: 'Websites',
      image: TOWNCLEATS_IMAGE,
      client: 'Towncleats FC & Sports Complex (Faisalabad)',
      duration: '2 Months (2026)',
      role: 'Lead Full-Stack Web Developer',
      summary: 'A premier 24/7 floodlit synthetic football turf booking & community sports platform for Millat Town, Faisalabad. Built for live pitch slot bookings (7v7 & 5v5), open team friendly match challenges, turf cost-split calculators, live Google Maps geo-routing, and automated WhatsApp booking pipelines.',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'Google Maps API', 'Vercel Deployment'],
      codeSnippet: `// 24/7 Match Matchmaking & Pitch Slot Booking Engine
import { useState } from 'react';
import { Calendar, Clock, Users, ShieldCheck } from 'lucide-react';

interface PitchSlot {
  id: string;
  pitchName: 'Main Floodlit Arena (7v7)' | 'Express Mini Turf (5v5)';
  timeSlot: string;
  turfShareType: '50-50 Split' | 'Host Covers All';
  status: 'Open for Challenge' | 'Reserved';
  captainName: string;
}

export function useTurfBookingEngine() {
  const [activeChallenges, setActiveChallenges] = useState<PitchSlot[]>([]);

  const acceptMatchChallenge = (slotId: string, opposingTeam: string) => {
    setActiveChallenges(prev =>
      prev.map(slot =>
        slot.id === slotId
          ? { ...slot, status: 'Reserved' as const }
          : slot
      )
    );
  };

  const calculateSplitShare = (totalPrice: number, splitType: PitchSlot['turfShareType']) => {
    return splitType === '50-50 Split' ? totalPrice / 2 : totalPrice;
  };

  return { activeChallenges, acceptMatchChallenge, calculateSplitShare };
}`,
      liveSimulation: {
        url: 'https://fahad-al98.vercel.app/',
        description: 'Features a live hosted version of the Towncleats Football Club platform on Vercel. Explore 24/7 floodlit pitch reservations, browse open 7v7 and 5v5 friendly match challenges, and test direct WhatsApp management routing.'
      }
    },
    {
      id: 'web-developer-academy',
      title: 'Web Developer Academy Platform',
      category: 'Websites',
      image: ACADEMY_IMAGE,
      client: 'Web Developer Academy & Global Tech Institute',
      duration: '3 Months (2026)',
      role: 'Lead Frontend Architect & UI Engineer',
      summary: 'A modern, full-featured academic and coding bootcamp web platform for software engineering, data science, and digital design. Features interactive curriculum track exploration, audited CIRR graduate employment metrics (94.8% placement rate), student & faculty portal, hackathon registration, and dynamic tuition calculators.',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'Vercel Deployment'],
      codeSnippet: `// Interactive Program Curriculum Explorer Component
import React, { useState } from 'react';
import { BookOpen, Award, Users, CheckCircle } from 'lucide-react';

interface ProgramTrack {
  id: string;
  name: string;
  category: 'engineering' | 'data' | 'design';
  durationWeeks: number;
  avgSalary: string;
  modules: { module: string; weeks: string; topics: string[] }[];
}

export function ProgramCurriculumModal({ track, onClose }: { track: ProgramTrack; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'modules' | 'outcomes'>('modules');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 max-w-3xl">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-cyan-600 font-bold">
            {track.category.toUpperCase()} TRACK
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900">{track.name}</h3>
        </div>
        <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
          Avg Salary: {track.avgSalary}
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {track.modules.map((m, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-500 transition-all">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span className="font-mono text-cyan-700 font-bold">{m.weeks}</span>
              <span>Module {idx + 1}</span>
            </div>
            <h4 className="font-bold text-slate-800 text-sm mt-1">{m.module}</h4>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {m.topics.map(t => (
                <span key={t} className="px-2 py-0.5 text-[11px] bg-white border border-slate-200 rounded text-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      liveSimulation: {
        url: 'https://web-develpor-lgdu.vercel.app/',
        description: 'Features the official, live-production Web Developer Academy school platform. Tour the dynamic interactive campus galleries, explore software engineering and design curricula tracks, submit registrations, or test online classrooms.'
      }
    },
    {
      id: 'dashboard',
      title: 'Aura SaaS Analytics Platform',
      category: 'SaaS Dashboards',
      image: DASHBOARD_IMAGE,
      client: 'Aura Cloud Corp',
      duration: '4 Months (2026)',
      role: 'Lead Full-Stack Developer',
      summary: 'A luxury business intelligence SaaS dashboard built specifically for e-commerce platforms to track revenue metrics, user retention cycles, and real-time inventory performance indices.',
      technologies: ['React 19', 'Tailwind CSS v4', 'TypeScript', 'Node.js', 'ChartJS', 'Express'],
      codeSnippet: `// Custom React Hook to Fetch and Compute Tabular Metrics
export function useRealtimeAnalytics(intervalMs = 5000) {
  const [data, setData] = useState<MetricPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const fetchMetrics = async () => {
      try {
        const res = await fetch('/api/v1/metrics/dashboard');
        const payload = await res.json();
        if (active) {
          setData(computeDerivedAverages(payload));
          setLoading(false);
        }
      } catch (err) {
        console.error("Metric computation failed", err);
      }
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, intervalMs);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [intervalMs]);

  return { data, loading };
}`,
      liveSimulation: {
        url: 'https://aura-analytics.abdullah-dev.example',
        description: 'Features a live responsive dark-mode analytics chart showing mock traffic patterns. Select date filters, click widgets, and watch data render instantly using tabular monospaced numerals.'
      }
    },
    {
      id: 'mobile-app',
      title: 'Zenith Fitness Companion App',
      category: 'Mobile Apps',
      image: MOBILE_APP_IMAGE,
      client: 'Zenith Labs Inc',
      duration: '3 Months (2025)',
      role: 'Senior Frontend Engineer',
      summary: 'A gorgeous fitness, yoga tracker, and mindfulness mobile application offering beautifully animated workout flows, interactive statistics, and personalized goal setup interfaces.',
      technologies: ['React Native', 'Tailwind Native', 'TypeScript', 'Reanimated', 'Node.js', 'Firebase Auth'],
      codeSnippet: `// Spring-animated Workouts Carousel Component
import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;

export function WorkoutCarousel({ items }) {
  const scrollOffset = useSharedValue(0);

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      snapToInterval={CARD_WIDTH}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      onScroll={(e) => {
        scrollOffset.value = e.nativeEvent.contentOffset.x;
      }}
    >
      {items.map((item, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          const distance = Math.abs(scrollOffset.value - (index * CARD_WIDTH));
          const scale = withSpring(distance < 50 ? 1 : 0.92);
          const opacity = withSpring(distance < 50 ? 1 : 0.6);
          return {
            transform: [{ scale }],
            opacity,
          };
        });

        return <WorkoutCard key={item.id} data={item} style={animatedStyle} />;
      })}
    </Animated.ScrollView>
  );
}`,
      liveSimulation: {
        url: 'https://zenith-app.abdullah-dev.example',
        description: 'Examine complete responsive layout panels representing dynamic workout progression, step-by-step breathing exercises, and localized activity charts.'
      }
    },
    {
      id: 'personal-portfolio',
      title: 'Abdullah Premium Web Portfolio Platform',
      category: 'Websites',
      image: PORTFOLIO_IMAGE,
      client: 'Self-Published / Personal',
      duration: '2 Months (2026)',
      role: 'Lead Full-Stack Developer',
      summary: 'A luxury, lightning-fast web developer portfolio platform engineered to showcase beautiful layout systems, modern typography alignments, and high-performance client state machines.',
      technologies: ['React 19', 'Next.js', 'Tailwind CSS v4', 'TypeScript', 'Vercel Deployment', 'Framer Motion'],
      codeSnippet: `// Optimized Production Vercel Build Configurations
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.pinimg.com', 'images.unsplash.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;`,
      liveSimulation: {
        url: 'https://abdullah-wab-developer-2cr3.vercel.app/',
        description: 'Features a live hosted version of the developer portfolio. Experience instant load times, seamless responsive touch adjustments, and fluid interactive animations.'
      }
    }
  ];

  // Static Metadata elements - blogs database
  const blogs: Blog[] = [
    {
      id: 'css-layout-precision',
      title: 'The Mathematics of Clean CSS Layout Systems',
      category: 'Engineering',
      date: 'Sept 20, 2026',
      readTime: '6 min read',
      summary: 'Why nested rounded corners, parent-to-child padding ratios, and single-elevation cards are critical to visual interface harmony.',
      content: [
        'Great frontend layouts rely on strict geometry rather than random guesswork. When you combine rounded outer corners with inner elements, standard mathematics dictates that the inner radius must match the outer radius minus the intervening padding.',
        'Formula: R_inner = R_outer - Padding. If your card border radius is 16px (rounded-2xl) and has an inner padding of 12px, the inner element radius must be exactly 4px. Violating this simple rule creates an optical discrepancy that cheapens the interface quality.',
        'Furthermore, spacing systems must follow a consistent geometric progression (such as factors of 4px or 8px). Mixing random padding heights (like a 17px top margin with a 23px side margin) disrupts the optical rhythm of the layout.',
        'By utilizing modern CSS custom properties and variables, we can lock down these mathematical ratios. This ensures that as our screen sizes expand or shrink across viewports, the proportional relationship of padding, gaps, and borders remains absolutely consistent.'
      ]
    },
    {
      id: 'tailwind-v4-performance',
      title: 'Unlocking Ultra-Fast Web Apps with Tailwind CSS v4',
      category: 'Performance',
      date: 'Aug 14, 2026',
      readTime: '5 min read',
      summary: 'An in-depth review of the new engine features, compiled theme variables, and how they decrease stylesheet sizes by 40%.',
      content: [
        'Tailwind CSS v4 introduces a revolutionary lightning-fast build pipeline that moves configuration directly into your main CSS file, replacing old Javascript configuration scripts. By utilizing native CSS variables, compiling custom utilities is quicker and stylesheet payloads are drastically reduced.',
        'Instead of utilizing heavy theme configurations that compile thousands of utility variants upfront, Tailwind v4 leverages modern CSS custom properties that browser engines can resolve natively at runtime. This results in incredibly tiny CSS payloads that parse instantly, helping web apps secure perfect First Contentful Paint scores.',
        'In this article, we outline our favorite features of v4: from the beautiful inline `@theme` keyword and native CSS custom properties support to advanced compiler directives that automatically remove unused custom layer styles during production builds.',
        'By combining Tailwind CSS v4 with React 19, we establish a lean, future-proof development stack that requires minimal client overhead, keeping responsive portfolios incredibly light and accessible.'
      ]
    },
    {
      id: 'typescript-state-orchestration',
      title: 'Type-Safe App State Orchestration',
      category: 'Best Practices',
      date: 'July 05, 2026',
      readTime: '8 min read',
      summary: 'How strict typed contracts prevent production exceptions, handle async race conditions, and streamline complex developer dashboard logic.',
      content: [
        'When building interactive web applications or enterprise dashboards, managing multi-step forms, search filters, and asynchronous fetch states can quickly lead to subtle UI bugs.',
        'Using TypeScript, we can build strict finite state-machines that declare exactly which states are permitted. By utilizing union types instead of loose object models, we completely eliminate impossible states (such as loading: true while holding a null payload).',
        'In this article, we map out concrete TypeScript patterns for building clean global states with absolute compiler verification. We examine real code models that prevent common async race conditions and enforce flawless UI synchronization.',
        'Implementing clean typing across state transitions represents the difference between a fragile prototype and a robust, production-grade enterprise application.'
      ]
    }
  ];

  // Static Metadata elements - courses & official credentials database
  const courses: Course[] = [
    {
      id: 'claude-certified-specialist',
      title: 'Claude Certified Specialist — Developer Badge',
      trackCategory: 'AI & CLAUDE API DEVELOPMENT',
      category: 'AI & LLM',
      institution: 'Claude Academy (Anthropic)',
      year: '2025',
      verifiedBadgeText: 'Verified Anthropic Claude Badge',
      badgeImage: CLAUDE_BADGE,
      description: 'Official Anthropic Claude Academy certification verifying mastery in engineering with Claude, prompt optimization, API integrations, tool-use workflows, and building high-reliability AI-powered web systems.',
      competencies: ['Claude API', 'Prompt Engineering', 'AI Architecture', 'Tool Use', 'Structured Output', 'LLM Security'],
      credentialId: 'ANT-CLAUDE-84920-VERIFIED',
      level: 'Certified Specialist',
      rating: 5.0,
      duration: '28 Hours',
      lessonsCount: 38,
      modules: [
        {
          title: 'Module 1: Advanced Prompt Engineering & Context Windows',
          duration: '6h 30m',
          lessons: ['System Prompts & Constitutional AI Guardrails', 'XML Formatting for Complex Multi-Step Tasks', 'Long Context Retrieval & Needle-In-A-Haystack Tests']
        },
        {
          title: 'Module 2: Tool Use, Function Calling & Agents',
          duration: '10h 15m',
          lessons: ['Building Tool-Use Loops with TypeScript SDK', 'Structured JSON Output with Strict Schema Validation', 'Multi-Agent Orchestration Patterns']
        },
        {
          title: 'Module 3: Enterprise AI Web App Architecture',
          duration: '11h 15m',
          lessons: ['Streaming Responses with React 19 Server Actions', 'Rate Limiting & Token Cost Management', 'Hardening Against Prompt Injections & Jailbreaks']
        }
      ]
    },
    {
      id: 'meta-frontend-professional',
      title: 'Meta Certified Frontend Developer — Professional Certificate',
      trackCategory: 'ADVANCED REACT & FRONTEND ENGINEERING',
      category: 'Frontend',
      institution: 'Meta Platforms (Coursera)',
      year: '2025',
      verifiedBadgeText: 'Verified Meta Developer Badge',
      badgeImage: META_BADGE,
      description: 'Rigorous professional certification issued by Meta verifying deep expertise in React 19 component lifecycles, advanced state management, responsive UI architecture, accessibility, and automated Jest test suites.',
      competencies: ['React 19', 'Next.js', 'TypeScript', 'Component Architecture', 'Tailwind CSS', 'Unit Testing'],
      credentialId: 'META-FE-71048-CERT',
      level: 'Professional Engineer',
      rating: 4.95,
      duration: '42 Hours',
      lessonsCount: 64,
      modules: [
        {
          title: 'Module 1: Advanced React State & Performance',
          duration: '12h 00m',
          lessons: ['React 19 Hooks, useActionState, & useOptimistic', 'Memory Leak Prevention & Memoization Patterns', 'Custom Hook Design Systems']
        },
        {
          title: 'Module 2: Responsive Interface Engineering',
          duration: '14h 30m',
          lessons: ['Mobile-First CSS Grid & Flexbox Architectures', 'WCAG 2.1 Level AA Accessibility Standards', 'Cross-Browser Layout Calibration']
        },
        {
          title: 'Module 3: Automated Testing & CI/CD Pipelines',
          duration: '15h 30m',
          lessons: ['Component Unit Testing with Vitest & React Testing Library', 'End-to-End User Journeys with Playwright', 'GitHub Actions Continuous Integration']
        }
      ]
    },
    {
      id: 'aws-solutions-architect',
      title: 'AWS Certified Solutions Architect — Associate Badge',
      trackCategory: 'CLOUD INFRASTRUCTURE & SCALABILITY',
      category: 'Cloud & Backend',
      institution: 'Amazon Web Services (AWS)',
      year: '2025',
      verifiedBadgeText: 'Verified AWS Solutions Architect Badge',
      badgeImage: AWS_BADGE,
      description: 'Official Amazon Web Services certification verifying proven technical capability to design, deploy, and operate cost-optimized, fault-tolerant, and secure distributed web applications on AWS cloud infrastructure.',
      competencies: ['AWS EC2/S3', 'Serverless Lambda', 'Docker Containers', 'CloudFront CDN', 'PostgreSQL RDS', 'IAM Security'],
      credentialId: 'AWS-ARCH-99321-CRED',
      level: 'Certified Architect',
      rating: 4.98,
      duration: '35 Hours',
      lessonsCount: 48,
      modules: [
        {
          title: 'Module 1: Cloud Foundations & Compute Architecture',
          duration: '10h 00m',
          lessons: ['VPC Subnets, NAT Gateways & Security Groups', 'Auto-Scaling EC2 Clusters & Elastic Load Balancers', 'Serverless Microservices with AWS Lambda']
        },
        {
          title: 'Module 2: High-Availability Storage & Databases',
          duration: '12h 30m',
          lessons: ['Multi-AZ Aurora PostgreSQL Database Clusters', 'S3 Bucket Encryption, Versioning & CDN Edge Caching', 'DynamoDB NoSQL Data Modeling']
        },
        {
          title: 'Module 3: Cloud Security & Infrastructure as Code',
          duration: '12h 30m',
          lessons: ['IAM Least-Privilege Role Policies & STS Tokens', 'Terraform Automated Deployment Scripts', 'Cost Optimization & CloudWatch Metric Alarms']
        }
      ]
    },
    {
      id: 'nextjs-enterprise-architect',
      title: 'Next.js 15 Enterprise Architect — Masterclass Certificate',
      trackCategory: 'FULL-STACK WEB APP DEVELOPMENT',
      category: 'Full-Stack',
      institution: 'Vercel & Modern Web Academy',
      year: '2026',
      verifiedBadgeText: 'Verified Next.js Enterprise Badge',
      badgeImage: NEXTJS_BADGE,
      description: 'Comprehensive industry masterclass credential certifying production competence in React Server Components, Next.js 15 App Router, Server Actions, Prisma ORM, and high-performance edge caching.',
      competencies: ['Next.js 15', 'Server Components', 'PostgreSQL', 'Prisma ORM', 'Stripe Payments', 'Edge Optimization'],
      credentialId: 'NEXT-ARCH-2026-PRO',
      level: 'Enterprise Master',
      rating: 4.97,
      duration: '36 Hours',
      lessonsCount: 52,
      modules: [
        {
          title: 'Module 1: Server Components & Edge Execution',
          duration: '10h 00m',
          lessons: ['Mental Models: Server vs Client Execution Boundaries', 'Streaming SSR with Suspense Fallbacks', 'Next.js 15 Cache Life Policies']
        },
        {
          title: 'Module 2: Full-Stack Data & Authentication',
          duration: '13h 00m',
          lessons: ['Prisma & Drizzle Multi-Tenant Schemas', 'NextAuth / Auth.js v5 Session Management', 'Server Actions with Optimistic UI Revalidation']
        },
        {
          title: 'Module 3: Monetization & Edge Deployments',
          duration: '13h 00m',
          lessons: ['Stripe Subscriptions & Webhook Reconciliation', 'Vercel Edge Middleware & Geolocation Routing', 'Sub-100ms Global Database Latency']
        }
      ]
    },
    {
      id: 'tailwind-design-engineer',
      title: 'Tailwind CSS v4 Design Engineer — Certified Specialist',
      trackCategory: 'DESIGN SYSTEMS & INTERFACE ENGINEERING',
      category: 'Frontend',
      institution: 'Tailwind Labs & UI Guild',
      year: '2025',
      verifiedBadgeText: 'Verified Tailwind UI Specialist Badge',
      badgeImage: TAILWIND_BADGE,
      description: 'Specialist credential validating advanced design system architecture, fluid typography math, parent-to-child border radius harmonic ratios, micro-interactions, and Tailwind CSS v4 native custom properties.',
      competencies: ['Tailwind CSS v4', 'Design Tokens', 'Fluid Typography', 'Micro-Interactions', 'Dark Mode Systems', 'WCAG Accessible'],
      credentialId: 'TW-DESIGN-44019-SPEC',
      level: 'Certified Specialist',
      rating: 4.96,
      duration: '22 Hours',
      lessonsCount: 36,
      modules: [
        {
          title: 'Module 1: Mathematical Layout Geometry',
          duration: '6h 30m',
          lessons: ['Harmonic Radius Ratios: R_inner = R_outer - Padding', 'Optical Rhythm with Geometric 4px/8px Scales', 'Fluid clamp() Typography Without Breakpoint Jumps']
        },
        {
          title: 'Module 2: Tailwind v4 Zero-Runtime Engine',
          duration: '8h 00m',
          lessons: ['Compiling with Native CSS Variables & @theme', 'Custom Utility Variants & Container Queries', 'Critical CSS Inlining for Instant FCP']
        },
        {
          title: 'Module 3: High-Fidelity UI Components',
          duration: '7h 30m',
          lessons: ['Accessible Drawers, Modals & Dropdown Systems', 'Fluid Spring Animations & Hover Glow Shaders', 'Contrast-Safe Dark Mode Tokens']
        }
      ]
    },
    {
      id: 'freelance-developer-launchpad',
      title: 'High-Income Remote Web Developer — Certified Consultant',
      trackCategory: 'CAREER ACCELERATION & CLIENT ACQUISITION',
      category: 'Career',
      institution: 'International Developer Guild',
      year: '2025',
      verifiedBadgeText: 'Verified Career Consultant Badge',
      badgeImage: CLAUDE_BADGE,
      description: 'Industry-standard freelance engineering certification covering value-based project pricing, client discovery audits, international contract agreements, retainers, and enterprise client acquisition.',
      competencies: ['Value Pricing', 'Client Acquisition', 'Contract Scoping', 'Proposal Pitching', 'Retainer Models', 'Portfolio Strategy'],
      credentialId: 'DEV-GUILD-88310-PRO',
      level: 'Certified Consultant',
      rating: 4.99,
      duration: '18 Hours',
      lessonsCount: 26,
      modules: [
        {
          title: 'Module 1: Positioning as a High-Value Specialist',
          duration: '5h 30m',
          lessons: ['Escaping the Low-Hourly Commodity Trap', 'Structuring Case Studies with Provable ROI Metrics', 'Selecting High-Budget Client Niches']
        },
        {
          title: 'Module 2: Inbound & Outbound Acquisition Systems',
          duration: '7h 00m',
          lessons: ['Upwork Proposals with 45%+ Client Reply Rates', 'Loom Video Audits that Sign Clients on Discovery Calls', 'Cold Outreach Follow-Up Sequences that Close']
        },
        {
          title: 'Module 3: Value Pricing & Retainers',
          duration: '5h 30m',
          lessons: ['Closing $5,000–$15,000 Fixed-Scope Website Builds', 'Crafting Legally Sound Scope Contracts & Milestones', 'Upselling $1,500/Month Recurring Maintenance Retainers']
        }
      ]
    }
  ];

  // Filter courses list
  const filteredCourses = courseFilter === 'All'
    ? courses
    : courses.filter(c => c.category === courseFilter);

  // Handle contact form change
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle contact form submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please fill in all required fields.");
      return;
    }
    // Simulate API request send
    setFormSubmitted(true);
  };

  // Reset contact form
  const resetContactForm = () => {
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      budget: '$5,000 - $10,000'
    });
    setFormSubmitted(false);
  };

  // Handle new review submit
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.comment) {
      alert("Please fill in your name and review comment.");
      return;
    }
    
    // Add new testimonial locally
    const newTestimonial: Testimonial = {
      id: String(testimonials.length + 1),
      name: reviewForm.name,
      role: reviewForm.role || 'Client',
      company: reviewForm.company || 'Independent',
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      avatar: reviewForm.name.slice(0, 2).toUpperCase()
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setReviewSubmitted(true);
    
    setTimeout(() => {
      setIsAddingReview(false);
      setReviewSubmitted(false);
      setReviewForm({
        name: '',
        role: '',
        company: '',
        rating: 5,
        comment: ''
      });
    }, 2000);
  };

  // Filter projects list
  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-green-dark selection:bg-brand-yellow selection:text-brand-green-dark relative overflow-x-hidden">
      
      {/* ----------------- TOP NAVIGATION BAR ----------------- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-green/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Zone 1: Developer Brand Logo (< A >) */}
          <div 
            onClick={() => scrollTo('home')} 
            className="shrink-0 cursor-pointer"
            aria-label="Abdullah Home"
          >
            <BrandLogo />
          </div>

          {/* Zone 2: Navigation Links (4-6 links, clean text with active highlight, no static capsules) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-brand-green-light">
            <button 
              onClick={() => scrollTo('home')} 
              className={`hover:text-brand-yellow transition-colors relative py-1 duration-200 ${activeSection === 'home' ? 'text-brand-yellow font-extrabold' : ''}`}
            >
              Home
              {activeSection === 'home' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />}
            </button>
            <button 
              onClick={() => scrollTo('services')} 
              className={`hover:text-brand-yellow transition-colors relative py-1 duration-200 ${activeSection === 'services' ? 'text-brand-yellow font-extrabold' : ''}`}
            >
              Services
              {activeSection === 'services' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />}
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className={`hover:text-brand-yellow transition-colors relative py-1 duration-200 ${activeSection === 'about' ? 'text-brand-yellow font-extrabold' : ''}`}
            >
              About
              {activeSection === 'about' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />}
            </button>
            <button 
              onClick={() => scrollTo('projects')} 
              className={`hover:text-brand-yellow transition-colors relative py-1 duration-200 ${activeSection === 'projects' ? 'text-brand-yellow font-extrabold' : ''}`}
            >
              Projects
              {activeSection === 'projects' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />}
            </button>
            <button 
              onClick={() => scrollTo('courses')} 
              className={`hover:text-brand-yellow transition-colors relative py-1 duration-200 ${activeSection === 'courses' ? 'text-brand-yellow font-extrabold' : ''}`}
            >
              Courses
              {activeSection === 'courses' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />}
            </button>
            <button 
              onClick={() => scrollTo('blogs')} 
              className={`hover:text-brand-yellow transition-colors relative py-1 duration-200 ${activeSection === 'blogs' ? 'text-brand-yellow font-extrabold' : ''}`}
            >
              Blogs
              {activeSection === 'blogs' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />}
            </button>
            <button 
              onClick={() => scrollTo('testimonials')} 
              className={`hover:text-brand-yellow transition-colors relative py-1 duration-200 ${activeSection === 'testimonials' ? 'text-brand-yellow font-extrabold' : ''}`}
            >
              Testimonials
              {activeSection === 'testimonials' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />}
            </button>
          </nav>

          {/* Zone 3: Primary Actions (Single professional action button) */}
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={() => scrollTo('contact')}
              className="px-6 py-2.5 text-xs font-bold text-white bg-brand-green border border-transparent rounded-full hover:bg-brand-green-light hover:border-brand-yellow transition-all duration-300 uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95"
            >
              Contact Me
            </button>
          </div>

        </div>
      </header>

      {/* ----------------- HERO SECTION ----------------- */}
      <section id="home" className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="mb-6 px-4 py-1.5 border border-dashed border-brand-green/25 rounded-lg text-xs font-semibold text-brand-green uppercase tracking-widest bg-brand-yellow/5">
              Hello There!
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-green tracking-tight leading-tight mb-6 text-wrap balance">
              {Array.from("I'm ").map((char, index) => (
                <span 
                  key={`im-${index}`} 
                  className="inline-block transition-all duration-200 hover:text-brand-yellow cursor-default hover:scale-105 transform whitespace-pre"
                >
                  {char}
                </span>
              ))}
              <span className="inline-block">
                {Array.from("Abdullah").map((char, index) => (
                  <span 
                    key={`name-${index}`} 
                    className="inline-block transition-all duration-200 hover:text-brand-yellow cursor-default hover:scale-110 transform"
                  >
                    {char}
                  </span>
                ))}
              </span>
              {Array.from(",").map((char, index) => (
                <span 
                  key={`comma-${index}`} 
                  className="inline-block transition-all duration-200 hover:text-brand-yellow cursor-default hover:scale-105 transform"
                >
                  {char}
                </span>
              ))}
              <br />
              <span className="inline-block animate-float text-brand-green">
                Web Developer.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-brand-green-light/80 leading-relaxed mb-10 max-w-xl">
              I am an experienced full-stack web developer with 5+ years in the field, collaborating with various companies and startups globally to build robust, high-performance web applications with exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => scrollTo('projects')}
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-brand-green-light text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>View My Portfolio</span>
                <span className="w-6 h-6 rounded-full bg-brand-yellow text-brand-green flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
              
              <button 
                onClick={() => setShowHireModal(true)}
                className="w-full sm:w-auto px-8 py-4 border-2 border-brand-green/20 hover:border-brand-green hover:bg-brand-green/5 text-brand-green font-bold rounded-full transition-all duration-300 text-center"
              >
                Hire Me
              </button>
            </div>

            {/* Quick trust metrics located near the claim with dynamic hover 'full' state */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-brand-green/10 pt-8 w-full">
              <div className="flex flex-col cursor-pointer transition-all duration-300 transform hover:scale-105 group">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-green group-hover:text-brand-yellow tracking-tight tabular-nums transition-colors duration-300">120+</span>
                <span className="text-xs text-brand-green-light/80 font-bold uppercase tracking-wider mt-1">Projects Done</span>
              </div>
              <div className="h-8 w-px bg-brand-green/15" />
              <div className="flex flex-col cursor-pointer transition-all duration-300 transform hover:scale-105 group">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-green group-hover:text-brand-yellow tracking-tight tabular-nums transition-colors duration-300">15+</span>
                <span className="text-xs text-brand-green-light/80 font-bold uppercase tracking-wider mt-1">Industries served</span>
              </div>
              <div className="h-8 w-px bg-brand-green/15" />
              <div className="flex flex-col cursor-pointer transition-all duration-300 transform hover:scale-105 group">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-green group-hover:text-brand-yellow tracking-tight tabular-nums transition-colors duration-300">99%</span>
                <span className="text-xs text-brand-green-light/80 font-bold uppercase tracking-wider mt-1">Success Rate</span>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Column - Custom styled exactly matching image cutout with interactive features */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[380px] sm:max-w-[400px] aspect-[3/4]">
              
              {/* Back Golden Frame Shape */}
              <div className="absolute inset-0 bg-brand-yellow rounded-[40px] transform rotate-3 translate-x-3 translate-y-3 -z-10" />
              
              {/* White card container holding headshot with hover crossfade */}
              <div className="absolute inset-0 bg-white rounded-[40px] border-4 border-brand-green p-4 overflow-hidden shadow-2xl group flex flex-col justify-end cursor-pointer">
                {/* Default Portrait Image */}
                <img 
                  src={HERO_IMAGE} 
                  alt="Abdullah Professional Portrait" 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover rounded-[32px] transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual in case of image error
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Hover Portrait Image (Throne / Executive suit) */}
                <img 
                  src={HERO_HOVER_IMAGE} 
                  alt="Abdullah Executive Portrait" 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover rounded-[32px] opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Image Error Fallback Mesh Container */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/90 to-brand-green-light/40 flex flex-col justify-between p-8 text-white -z-20">
                  <Award className="w-10 h-10 text-brand-yellow" />
                  <div>
                    <h3 className="font-display text-2xl font-bold">Abdullah</h3>
                    <p className="text-sm opacity-80">Full-Stack Web Developer</p>
                  </div>
                </div>

                {/* Floating pill indicators */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2 pointer-events-none">
                  <span className="px-4 py-1.5 bg-brand-yellow text-brand-green font-bold text-xs rounded-full shadow-lg">
                    Full-Stack Expert
                  </span>
                  <span className="px-4 py-1.5 bg-brand-green text-white font-bold text-xs rounded-full shadow-lg border border-brand-yellow/30">
                    React 19 & Node
                  </span>
                </div>
              </div>

              {/* Floating UX badge (Exactly as in picture) */}
              <div className="absolute -top-4 -right-4 bg-brand-yellow text-brand-green font-extrabold text-xs uppercase px-5 py-2 rounded-full border-2 border-brand-green shadow-xl tracking-wider transform rotate-6 animate-pulse">
                Web Developer
              </div>

              {/* Floating Product Badge on bottom left */}
              <div className="absolute -bottom-4 -left-6 bg-brand-green text-white font-semibold text-xs px-5 py-2.5 rounded-full border-2 border-brand-yellow shadow-xl tracking-wider transform -rotate-3">
                UI/UX Focused
              </div>

              {/* Circular spinning HIRE ME badge in top-right corner */}
              <button 
                onClick={() => setShowHireModal(true)}
                className="absolute top-1/4 -right-14 w-24 h-24 rounded-full bg-brand-green border-4 border-brand-yellow text-white flex items-center justify-center cursor-pointer group hover:bg-brand-green-light transition-all duration-300 shadow-2xl hover:scale-110 hidden sm:flex"
              >
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                  <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                    <defs>
                      <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    </defs>
                    <text fill="white" className="text-[10px] font-extrabold font-mono tracking-widest">
                      <textPath href="#circlePath">✦ HIRE ME ✦ AVAILABLE NOW </textPath>
                    </text>
                  </svg>
                </div>
                <ArrowUpRight className="w-6 h-6 text-brand-yellow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ----------------- SCROLLING MARQUEE TICKER ----------------- */}
      <div className="w-full bg-brand-yellow border-y-4 border-brand-green py-5 overflow-hidden relative z-20">
        <div className="flex whitespace-nowrap overflow-x-hidden">
          <div className="animate-marquee flex gap-16 text-brand-green font-display font-extrabold text-lg sm:text-2xl uppercase tracking-widest whitespace-nowrap">
            <span>Website Design</span>
            <span>✦</span>
            <span>App Development</span>
            <span>✦</span>
            <span>SaaS Analytics Dashboards</span>
            <span>✦</span>
            <span>React & Node Engineering</span>
            <span>✦</span>
            <span>UI/UX Figma Fidelity</span>
            <span>✦</span>
            <span>Database Architectures</span>
            <span>✦</span>
            <span>Website Design</span>
            <span>✦</span>
            <span>App Development</span>
            <span>✦</span>
            <span>SaaS Analytics Dashboards</span>
            <span>✦</span>
            <span>React & Node Engineering</span>
            <span>✦</span>
            <span>UI/UX Figma Fidelity</span>
            <span>✦</span>
            <span>Database Architectures</span>
            <span>✦</span>
          </div>
        </div>
      </div>

      {/* ----------------- SERVICES SECTION ----------------- */}
      <section id="services" className="py-24 px-6 bg-[#f4f4f0] border-b border-brand-green/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-bold text-brand-green-light/70 uppercase tracking-widest block mb-3 font-mono">
                — Services
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-green tracking-tight text-wrap balance">
                Services I <span className="text-brand-yellow">Provide</span>
              </h2>
            </div>
            
            <button 
              onClick={() => scrollTo('projects')}
              className="group flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-md hover:shadow-lg self-start md:self-auto shrink-0"
            >
              <span>View All Projects</span>
              <span className="w-5 h-5 rounded-full bg-brand-yellow text-brand-green flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-brand-green/10 hover:border-brand-green hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-yellow text-brand-yellow group-hover:text-brand-green transition-colors duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-brand-green mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-brand-green-light/80 leading-relaxed mb-8">
                    {service.shortDesc}
                  </p>
                </div>

                <button 
                  onClick={() => setSelectedService(service)}
                  className="flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-wider hover:text-brand-yellow transition-colors self-start duration-200"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- ABOUT ME SECTION (High-Tech Dark Green Portfolio) ----------------- */}
      <section id="about" className="py-24 px-6 bg-[#071710] text-white relative overflow-hidden border-b border-emerald-950/40">
        
        {/* Subtle dotted matrix texture overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', 
            backgroundSize: '28px 28px' 
          }} 
        />

        {/* Diagonal laser beam stripes on the right */}
        <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none overflow-hidden opacity-35">
          <div className="absolute -top-32 right-1/4 w-36 h-[160%] bg-gradient-to-r from-transparent via-[#22c55e]/20 to-transparent transform -skew-x-[24deg] blur-sm" />
          <div className="absolute -top-32 right-1/3 w-16 h-[160%] bg-gradient-to-r from-transparent via-[#10b981]/25 to-transparent transform -skew-x-[24deg] blur-md" />
        </div>

        {/* Ambient soft glow accents */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#22c55e]/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#143d2c]/40 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
            
            {/* ----------------- Col 1: Bio & Primary Actions ----------------- */}
            <div className="lg:col-span-5 text-left">
              
              {/* Badge: ABOUT ME */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d261a] border border-[#1b432e] text-[#22c55e] text-xs font-mono font-semibold uppercase tracking-wider mb-6 shadow-sm">
                <User className="w-3.5 h-3.5 text-[#22c55e]" />
                <span>ABOUT ME</span>
              </div>

              {/* Headline */}
              <h2 className="font-display text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mb-3">
                I'm <span className="text-[#f3b01c]">Abdullah!</span>
              </h2>

              {/* Accent Underline */}
              <div className="w-16 h-1.5 bg-[#22c55e] rounded-full mb-6 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-white/75 text-sm sm:text-[15px] leading-relaxed mb-8 font-sans">
                <p>
                  I am a passionate Full-Stack Web Developer specializing in modern React ecosystems, TypeScript, Node.js, Next.js, and high-converting responsive interfaces. My focus is writing clean, scalable, and maintainable code that delivers outstanding user experiences and business results.
                </p>
                <p>
                  With a background in modern web engineering and UI/UX design principles, I bridge the gap between technical architecture and intuitive digital experiences. Whether creating bespoke applications or optimizing legacy codebases, I bring precision and dedication to every line of code.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button 
                  onClick={() => scrollTo('projects')}
                  className="px-7 py-3.5 bg-[#22c55e] hover:bg-[#16a34a] text-[#052e16] font-extrabold text-xs uppercase tracking-wider rounded-full shadow-[0_0_25px_rgba(34,197,94,0.45)] hover:shadow-[0_0_35px_rgba(34,197,94,0.65)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>

                <button 
                  onClick={() => scrollTo('contact')}
                  className="px-7 py-3.5 bg-[#0d261a] hover:bg-[#143d2c] text-white border border-[#1b432e] hover:border-[#22c55e]/50 font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#22c55e]" />
                  <span>CONTACT ME</span>
                </button>
              </div>

              {/* Social links row with thin divider line */}
              <div className="flex items-center gap-5 pt-4 border-t border-white/10 text-white/60">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub"
                  className="hover:text-[#22c55e] hover:scale-110 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                  className="hover:text-[#22c55e] hover:scale-110 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Twitter"
                  className="hover:text-[#22c55e] hover:scale-110 transition-all duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Instagram"
                  className="hover:text-[#22c55e] hover:scale-110 transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="YouTube"
                  className="hover:text-[#22c55e] hover:scale-110 transition-all duration-200"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* ----------------- Col 2: Floating Info Glass Card ----------------- */}
            <div className="lg:col-span-3">
              <div className="bg-[#0b2116]/85 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-[#193d2b] shadow-2xl space-y-6 text-left hover:border-[#22c55e]/40 transition-all duration-500">
                
                {/* Experience Start */}
                <div className="flex items-start gap-3.5 group cursor-pointer hover:translate-x-1.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#071710] border border-[#193d2b] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#0d261a] group-hover:border-[#22c55e]/60 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] transition-all duration-300">
                    <Calendar className="w-5 h-5 text-[#22c55e] group-hover:rotate-6 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block font-semibold group-hover:text-[#22c55e]/70 transition-colors">
                      EXPERIENCE START
                    </span>
                    <span className="font-bold text-sm text-white group-hover:text-[#22c55e] transition-colors duration-300 mt-0.5 block">
                      06th August 2016
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 group cursor-pointer hover:translate-x-1.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#071710] border border-[#193d2b] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#0d261a] group-hover:border-[#22c55e]/60 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] transition-all duration-300">
                    <MapPin className="w-5 h-5 text-[#22c55e] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block font-semibold group-hover:text-[#22c55e]/70 transition-colors">
                      LOCATION
                    </span>
                    <span className="font-bold text-sm text-white group-hover:text-[#22c55e] transition-colors duration-300 mt-0.5 block">
                      Pakistan
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 group cursor-pointer hover:translate-x-1.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#071710] border border-[#193d2b] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#0d261a] group-hover:border-[#22c55e]/60 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] transition-all duration-300">
                    <Mail className="w-5 h-5 text-[#22c55e] group-hover:rotate-6 transition-transform" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block font-semibold group-hover:text-[#22c55e]/70 transition-colors">
                      EMAIL
                    </span>
                    <a 
                      href="mailto:abdullah.dev.pro@gmail.com" 
                      className="font-bold text-xs sm:text-sm text-white group-hover:text-[#22c55e] transition-colors duration-300 truncate block mt-0.5"
                      title="abdullah.dev.pro@gmail.com"
                    >
                      abdullah.dev.pro@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex items-start gap-3.5 group cursor-pointer hover:translate-x-1.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#071710] border border-[#193d2b] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#0d261a] group-hover:border-[#22c55e]/60 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] transition-all duration-300">
                    <Phone className="w-5 h-5 text-[#22c55e] group-hover:animate-bounce transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block font-semibold group-hover:text-[#22c55e]/70 transition-colors">
                      WHATSAPP / PHONE
                    </span>
                    <a 
                      href="https://wa.me/923290725117?text=Hi%20Abdullah%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm text-[#22c55e] group-hover:text-white transition-colors duration-300 flex items-center gap-1 mt-0.5"
                    >
                      <span>03290725117</span>
                      <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* ----------------- Col 3: Portrait Card & Golden Script Signature ----------------- */}
            <div className="lg:col-span-4 flex items-center justify-center relative">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden bg-[#0c2217] border-2 border-[#193d2b] shadow-2xl group hover:border-[#22c55e]/50 transition-all duration-500">
                
                {/* Default Portrait Image */}
                <img
                  src={ABOUT_IMAGE}
                  alt="Abdullah Web Developer"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Hover Image */}
                <img
                  src={ABOUT_HOVER_IMAGE}
                  alt="Abdullah Professional Workspace"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Bottom vignette & Golden Signature Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06140d]/95 via-[#06140d]/40 to-transparent flex flex-col justify-end p-6 pb-8 text-center pointer-events-none">
                  <span className="font-signature text-4xl sm:text-5xl text-[#d4af37] select-none tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    Abdullah
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/80 mt-1 font-semibold">
                    WEB DEVELOPER
                  </span>
                </div>

              </div>

              {/* Vertical tracking text alongside the card */}
              <div className="hidden xl:flex items-center text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase [writing-mode:vertical-rl] select-none pl-4">
                CODE • CREATE • INNOVATE
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- PROFESSIONAL SKILLS SECTION ----------------- */}
      <section className="py-24 px-6 bg-[#fbfbfa] border-b border-brand-green/5">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-brand-green-light/70 uppercase tracking-widest block mb-3 font-mono">
              — Skills
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-green tracking-tight mb-6 text-wrap balance animate-float">
              Professional Expertise & <span className="text-brand-yellow">Capabilities</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-green-light/70 max-w-xl mx-auto">
              A comprehensive technical overview of my core engineering strengths, development languages, and software methodologies.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {skillsList.map((skill) => (
              <div 
                key={skill.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-green/5 hover:border-brand-yellow/30 shadow-sm hover:shadow-[0_20px_40px_rgba(20,61,44,0.07)] hover:shadow-brand-yellow/5 transition-all duration-500 ease-out flex flex-col sm:flex-row items-start gap-6 group hover:-translate-y-1.5 animate-fadeIn relative overflow-hidden"
              >
                {/* Decorative hover gradient corner shine */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-yellow/0 via-brand-yellow/5 to-brand-yellow/20 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-700 ease-out pointer-events-none" />

                {/* Left Icon Square with brand SVG icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${skill.iconBg} border ${skill.iconBorder} flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 group-hover:rotate-6 group-hover:border-brand-yellow/40 transition-all duration-500 ease-out`}>
                  <SkillIcon id={skill.id} />
                </div>

                {/* Content Block */}
                <div className="flex-1 w-full relative z-10">
                  
                  {/* Title and Badge Line */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-brand-green group-hover:text-brand-green-light transition-colors duration-300 flex items-center gap-2">
                      <span>{skill.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </h3>
                    
                    <div className="flex items-center gap-3 self-start sm:self-auto">
                      <span className="font-mono text-xs sm:text-sm font-extrabold text-brand-green-light/50 group-hover:text-brand-green-light/80 transition-colors duration-300 tabular-nums">
                        {skill.percentage}%
                      </span>
                      <span className={`px-3 py-1 rounded text-[9px] font-extrabold uppercase tracking-wider transition-all duration-300 group-hover:scale-105 ${
                        skill.badge === 'EXPERT' 
                          ? 'text-[#21759b] bg-sky-50 border border-sky-100/70 group-hover:bg-sky-100' 
                          : 'text-[#2e7d32] bg-emerald-50 border border-emerald-100/70 group-hover:bg-emerald-100'
                      }`}>
                        {skill.badge}
                      </span>
                    </div>
                  </div>

                  {/* Description text */}
                  <p className="text-xs sm:text-sm text-brand-green-light/70 group-hover:text-brand-green-light/90 transition-colors duration-300 leading-relaxed">
                    {skill.desc}
                  </p>

                  {/* Progressive Thick Progress Line */}
                  <div className="w-full h-2 bg-brand-green/5 rounded-full overflow-hidden mt-4 border border-brand-green/5 relative">
                    <div 
                      className="h-full bg-brand-yellow rounded-full transition-all duration-1000 ease-out group-hover:bg-[#f3b01c] group-hover:shadow-[0_0_8px_rgba(243,176,28,0.7)]" 
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- PROJECTS / WORK PORTFOLIO SECTION ----------------- */}
      <section id="projects" className="py-24 px-6 bg-[#f4f4f0] border-b border-brand-green/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-brand-green-light/70 uppercase tracking-widest block mb-3 font-mono">
              — Portfolio
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-green tracking-tight mb-6 text-wrap balance">
              Featured Case Studies & <span className="text-brand-yellow">Creative Work</span>
            </h2>
            
            {/* Filter controls styled as clean segmented buttons (NOT static pills) */}
            <div className="flex flex-wrap justify-center items-center gap-2 p-1.5 bg-white border border-brand-green/10 rounded-full max-w-lg mx-auto mt-8 shadow-sm">
              {['All', 'SaaS Dashboards', 'Mobile Apps', 'Websites'].map((filterName) => (
                <button
                  key={filterName}
                  onClick={() => setProjectFilter(filterName)}
                  className={`px-5 py-2.5 text-xs font-extrabold rounded-full transition-colors whitespace-nowrap uppercase tracking-wider ${
                    projectFilter === filterName
                      ? 'bg-brand-green text-white shadow-sm'
                      : 'text-brand-green-light hover:text-brand-green'
                  }`}
                >
                  {filterName}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive projects listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-3xl border border-brand-green/10 hover:border-brand-yellow/80 overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl hover:shadow-brand-green/20 hover:-translate-y-2 transition-all duration-500"
              >
                
                {/* Project Image Frame with Dynamic Zoom */}
                <div className="aspect-[4/3] bg-brand-green/5 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    onError={(e) => {
                      if (project.id === 'web-developer-academy' && e.currentTarget.src !== 'https://web-develpor-lgdu.vercel.app/assets/modern_school_campus_1788520124392-CYfDEsEM.jpg') {
                        e.currentTarget.src = 'https://web-develpor-lgdu.vercel.app/assets/modern_school_campus_1788520124392-CYfDEsEM.jpg';
                        return;
                      }
                      if (project.id === 'towncleats-football-club' && e.currentTarget.src !== 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1000&auto=format&fit=crop&q=80') {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1000&auto=format&fit=crop&q=80';
                        return;
                      }
                      if (project.id === 'mustafa-creative-director' && e.currentTarget.src !== 'https://mustafa-k4nx.vercel.app/assets/abdullah_blue_suit_setup_1787144900808-CFtA6JO8.jpg') {
                        e.currentTarget.src = 'https://mustafa-k4nx.vercel.app/assets/abdullah_blue_suit_setup_1787144900808-CFtA6JO8.jpg';
                        return;
                      }
                      if (project.id === 'lomaro-pizza' && e.currentTarget.src !== 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80') {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80';
                        return;
                      }
                      if (project.id === 'advanced-group' && e.currentTarget.src !== 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80') {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80';
                        return;
                      }
                      // Fallback inside absolute image
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback styling block */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-brand-green-light/80 flex flex-col justify-between p-6 text-white -z-10">
                    <Award className="w-8 h-8 text-brand-yellow" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-brand-yellow font-bold block mb-1">
                        {project.category}
                      </span>
                      <h4 className="font-display font-bold text-lg">{project.title}</h4>
                    </div>
                  </div>

                  {/* Interactive gradient scrim overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/95 via-brand-green/70 to-brand-green-dark/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3.5 transition-all duration-300 p-6 backdrop-blur-[2px]">
                    <span className="px-6 py-3 bg-brand-yellow hover:bg-white text-brand-green font-extrabold text-xs uppercase tracking-wider rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center gap-2 group-hover:scale-105 active:scale-95">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-brand-green" />
                    </span>
                    <span className="text-[11px] font-mono text-white/90 uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      Interactive Live Simulator
                    </span>
                  </div>
                </div>

                {/* Project Brief Info */}
                <div className="p-6">
                  {/* Unboxed Metadata list instead of pill labels */}
                  <div className="flex items-center gap-2 text-xs text-brand-green-light/60 font-semibold mb-3">
                    <span>{project.category}</span>
                    <span>·</span>
                    <span>{project.duration}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-brand-green group-hover:text-brand-yellow transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-brand-green-light/75 line-clamp-2 mt-2 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-brand-green/5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-brand-green uppercase tracking-wider group-hover:text-brand-yellow transition-colors duration-200">
                      <span>Read Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </div>
                    
                    <a 
                      href={project.liveSimulation.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="px-4 py-2 bg-brand-yellow hover:bg-brand-green hover:text-brand-yellow text-brand-green font-extrabold text-[10px] uppercase tracking-wider rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-1"
                    >
                      <span>Live Demo</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- COURSES & MASTERCLASSES SECTION ----------------- */}
      <section id="courses" className="py-24 px-6 bg-white border-b border-brand-green/5 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-brand-green-light/70 uppercase tracking-widest block mb-3 font-mono">
              — Masterclasses & Mentorship
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-green tracking-tight mb-6 text-wrap balance">
              Accelerate Your Web Development <span className="text-brand-yellow">Career</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-green-light/70 max-w-2xl mx-auto leading-relaxed">
              Hands-on, production-grade masterclasses taught directly by Abdullah. Master modern frameworks, architectural patterns, and high-income freelancing playbooks.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {['All', 'AI & LLM', 'Full-Stack', 'Frontend', 'Cloud & Backend', 'Career'].map((category) => (
                <button
                  key={category}
                  onClick={() => setCourseFilter(category)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    courseFilter === category
                      ? 'bg-brand-green text-white shadow-md'
                      : 'bg-brand-bg text-brand-green-light hover:text-brand-green hover:bg-brand-green/5'
                  }`}
                >
                  {category === 'All' ? 'All Courses & Credentials' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Courses & Official Credentials Grid matching image format */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-[28px] p-6 sm:p-7 border border-brand-green/10 shadow-sm hover:shadow-2xl hover:border-brand-yellow/60 transition-all duration-300 flex flex-col justify-between group text-left"
              >
                <div>
                  {/* Top Media: Deep Green Box with Center Luxury Medal & Bottom Pill Badge */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#0c2318] aspect-[16/11] flex items-center justify-center border border-white/10 shadow-inner">
                    <img
                      src={course.badgeImage}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    
                    {/* Floating Pill: OFFICIAL CREDENTIAL BADGE */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#112d20]/95 backdrop-blur-md border border-white/15 text-white shadow-xl whitespace-nowrap">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#4ade80]" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                        OFFICIAL CREDENTIAL BADGE
                      </span>
                    </div>
                  </div>

                  {/* Header Meta: Dark Square Icon + Track Category / Academy + Year Capsule */}
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Dark Rounded Square with Book Icon */}
                      <div className="w-11 h-11 rounded-xl bg-[#112d20] border border-[#1f4734] flex items-center justify-center shrink-0 shadow-inner group-hover:border-brand-yellow/40 transition-colors">
                        <BookOpen className="w-5 h-5 text-brand-yellow" />
                      </div>

                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#b8860b] leading-tight">
                          {course.trackCategory}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-brand-green mt-1">
                          <span className="text-xs">🏛️</span>
                          <span className="font-bold text-brand-green-dark">{course.institution}</span>
                        </div>
                      </div>
                    </div>

                    {/* Year Capsule */}
                    <span className="px-2.5 py-1 rounded-lg border border-brand-green/15 text-[11px] font-mono font-bold text-brand-green-light/80 bg-brand-bg shrink-0">
                      {course.year}
                    </span>
                  </div>

                  {/* Title (Display / Serif font style as in user screenshot) */}
                  <h3 className="font-display text-xl sm:text-[22px] font-extrabold text-brand-green group-hover:text-brand-yellow transition-colors duration-200 mt-4 leading-snug">
                    {course.title}
                  </h3>

                  {/* Verified Pill Tag */}
                  <div className="mt-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#047857] text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>{course.verifiedBadgeText}</span>
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-[13px] text-brand-green-light/80 mt-4 leading-relaxed font-sans">
                    {course.description}
                  </p>

                  {/* Key Competencies Learned */}
                  <div className="mt-5 pt-4 border-t border-brand-green/10">
                    <span className="text-[10px] font-mono font-bold text-brand-green uppercase tracking-wider block mb-2.5">
                      KEY COMPETENCIES LEARNED:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.competencies.map((comp, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-[#f3f4f3] hover:bg-brand-yellow/15 border border-brand-green/10 rounded-md text-[11px] font-medium text-brand-green-dark transition-colors duration-150"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Action Button: Verify Official Badge */}
                <div className="mt-6 pt-4 border-t border-brand-green/10">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full py-3 px-4 bg-[#0e261d] hover:bg-[#163c2e] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-98"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#4ade80]" />
                    <span>Verify Official Badge</span>
                    <span className="text-sm transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* 1-on-1 Mentorship & Custom Coaching Callout */}
          <div className="mt-16 bg-gradient-to-br from-brand-green via-brand-green-light to-brand-green rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border-2 border-brand-yellow/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full filter blur-3xl -z-10" />
            
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/20 border border-brand-yellow/40 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>1-on-1 Private Mentorship</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Need Customized Architecture Coaching or Code Reviews?
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Work directly with Abdullah on your real-world codebase, solve complex architectural bottlenecks, master modern full-stack workflows, or prepare for high-paying international developer interviews.
              </p>
            </div>

            <a
              href="https://wa.me/923019249721?text=Hi%20Abdullah%2C%20I%20am%20interested%20in%20your%201-on-1%20private%20developer%20mentorship%20program!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-yellow hover:bg-white text-brand-green font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-brand-green" />
              <span>Book 1-on-1 Mentorship</span>
            </a>
          </div>

        </div>
      </section>

      {/* ----------------- BLOGS SECTION ----------------- */}
      <section id="blogs" className="py-24 px-6 bg-[#fbfbfa] border-b border-brand-green/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-brand-green-light/70 uppercase tracking-widest block mb-3 font-mono">
              — My Blogs
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-green tracking-tight mb-6 text-wrap balance">
              Insights, Articles & <span className="text-brand-yellow">Technical Writing</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-green-light/70 max-w-xl mx-auto">
              Exploring standard web patterns, modern CSS layout architectures, and robust typescript best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div 
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="bg-white rounded-3xl p-8 border border-brand-green/10 hover:border-brand-green cursor-pointer group flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Unboxed inline metadata list - no badges/pills */}
                  <div className="flex items-center gap-2 text-xs text-brand-green-light/50 font-semibold mb-4">
                    <span>{blog.category}</span>
                    <span>·</span>
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-brand-green mb-4 group-hover:text-brand-yellow transition-colors duration-200 leading-tight">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-brand-green-light/80 leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-wider mt-8 group-hover:text-brand-yellow transition-colors duration-200">
                  <span>Read full article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- TESTIMONIALS SECTION ----------------- */}
      <section id="testimonials" className="py-24 px-6 bg-[#f4f4f0] border-b border-brand-green/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-bold text-brand-green-light/70 uppercase tracking-widest block mb-3 font-mono">
                — Testimonials
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-green tracking-tight text-wrap balance">
                What My Clients <span className="text-brand-yellow">Say</span>
              </h2>
            </div>

            <button 
              onClick={() => setIsAddingReview(true)}
              className="px-6 py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-md hover:shadow-lg shrink-0"
            >
              Write a Review
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-white rounded-3xl p-8 border border-brand-green/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-brand-yellow mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>

                  <p className="text-sm text-brand-green-light/85 italic leading-relaxed mb-8">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-brand-green/5">
                  <div className="w-12 h-12 rounded-full bg-brand-green text-brand-yellow font-bold text-sm flex items-center justify-center shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-brand-green leading-tight">
                      {t.name}
                    </h4>
                    {/* Unboxed title role descriptor metadata - no pills */}
                    <p className="text-xs text-brand-green-light/60 mt-0.5">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- CONTACT FORM SECTION ----------------- */}
      <section id="contact" className="py-24 px-6 bg-brand-green text-white relative overflow-hidden">
        
        {/* Decorative layout circle vectors */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full filter blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Information Left */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest block mb-3 font-mono">
                  — Get In Touch
                </span>
                
                <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
                  Let's Build Something <span className="text-brand-yellow">Extraordinary</span>
                </h2>
                
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-10">
                  Ready to kickoff your next project, integrate modern API state hooks, or design a custom corporate application? Reach out using the form or direct coordinates below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green-dark border border-brand-yellow/30 flex items-center justify-center text-brand-yellow">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-white/50 uppercase tracking-widest font-mono">Email Address</span>
                      <a href="mailto:abdullah.dev.pro@gmail.com" className="block text-sm sm:text-base font-bold hover:text-brand-yellow transition-colors">
                        abdullah.dev.pro@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green-dark border border-brand-yellow/30 flex items-center justify-center text-brand-yellow">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-white/50 uppercase tracking-widest font-mono">Direct Call / WhatsApp</span>
                      <a href="tel:+923019249721" className="block text-sm sm:text-base font-bold hover:text-brand-yellow transition-colors font-mono tracking-wide">
                        +92 301 924 9721
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green-dark border border-brand-yellow/30 flex items-center justify-center text-brand-yellow">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-white/50 uppercase tracking-widest font-mono">Location</span>
                      <span className="block text-sm sm:text-base font-bold">
                        Lahore, PK (Available Globally)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-green-dark hover:bg-brand-yellow hover:text-brand-green flex items-center justify-center transition-all duration-200 border border-white/10"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-green-dark hover:bg-brand-yellow hover:text-brand-green flex items-center justify-center transition-all duration-200 border border-white/10"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-green-dark hover:bg-brand-yellow hover:text-brand-green flex items-center justify-center transition-all duration-200 border border-white/10"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Interactive Contact Form Right */}
            <div className="lg:col-span-7">
              <div className="bg-white text-brand-green rounded-3xl p-8 sm:p-10 border-2 border-brand-yellow shadow-2xl">
                
                {formSubmitted ? (
                  <div className="text-center py-12 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-brand-yellow text-brand-green flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-display text-3xl font-extrabold text-brand-green mb-4">
                      Message Dispatched!
                    </h3>
                    <p className="text-sm text-brand-green-light/80 max-w-md mx-auto mb-8">
                      Thank you for reaching out, <strong>{contactForm.name}</strong>. Abdullah will review your request regarding "<em>{contactForm.subject || 'Project Inquiry'}</em>" and reply directly to <strong>{contactForm.email}</strong> within 12 hours.
                    </p>

                    <div className="bg-brand-bg rounded-2xl p-6 text-left border border-brand-green/10 mb-8 max-w-md mx-auto">
                      <div className="text-xs uppercase font-mono tracking-wider font-extrabold text-brand-green-light/75 mb-3 border-b pb-2">
                        Summary of Submission
                      </div>
                      <div className="space-y-2 text-xs text-brand-green-light/90">
                        <div><strong>Estimated Budget:</strong> {contactForm.budget}</div>
                        <div><strong>Message:</strong> <span className="italic">"{contactForm.message}"</span></div>
                      </div>
                    </div>

                    <button 
                      onClick={resetContactForm}
                      className="px-6 py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-brand-green uppercase tracking-wider mb-2">
                          Your Name <span className="text-brand-yellow">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          placeholder="Olivia Smith"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 bg-brand-bg rounded-xl border border-brand-green/15 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-sm font-semibold transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-green uppercase tracking-wider mb-2">
                          Email Address <span className="text-brand-yellow">*</span>
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          placeholder="olivia@company.com"
                          value={contactForm.email}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 bg-brand-bg rounded-xl border border-brand-green/15 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-sm font-semibold transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-brand-green uppercase tracking-wider mb-2">
                          Subject <span className="text-brand-yellow">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="subject"
                          required
                          placeholder="SaaS Product Build"
                          value={contactForm.subject}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 bg-brand-bg rounded-xl border border-brand-green/15 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-sm font-semibold transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-green uppercase tracking-wider mb-2">
                          Estimated Budget
                        </label>
                        <select 
                          name="budget"
                          value={contactForm.budget}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 bg-brand-bg rounded-xl border border-brand-green/15 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-sm font-bold transition-all duration-200"
                        >
                          <option>$1,000 - $3,000</option>
                          <option>$3,000 - $5,000</option>
                          <option>$5,000 - $10,000</option>
                          <option>$10,000 - $25,000</option>
                          <option>$25,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-green uppercase tracking-wider mb-2">
                        How Can Abdullah Help You? <span className="text-brand-yellow">*</span>
                      </label>
                      <textarea 
                        name="message"
                        required
                        rows={4}
                        placeholder="Detail your product vision, required integrations, timeframe guidelines..."
                        value={contactForm.message}
                        onChange={handleContactChange}
                        className="w-full px-4 py-3 bg-brand-bg rounded-xl border border-brand-green/15 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-sm font-semibold transition-all duration-200 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 py-4 bg-brand-green hover:bg-brand-green-light text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
                    >
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4 text-brand-yellow" />
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- PROFESSIONAL FOOTER ----------------- */}
      <footer className="bg-brand-green-dark text-white/50 text-sm py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div onClick={() => scrollTo('home')} className="cursor-pointer">
            <BrandLogo dark />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-xs font-semibold text-white/60">
            <button onClick={() => scrollTo('home')} className="hover:text-brand-yellow transition-colors">Home</button>
            <button onClick={() => scrollTo('services')} className="hover:text-brand-yellow transition-colors">Services</button>
            <button onClick={() => scrollTo('about')} className="hover:text-brand-yellow transition-colors">About</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-brand-yellow transition-colors">Projects</button>
            <button onClick={() => scrollTo('courses')} className="hover:text-brand-yellow transition-colors">Courses</button>
            <button onClick={() => scrollTo('blogs')} className="hover:text-brand-yellow transition-colors">Blogs</button>
            <button onClick={() => scrollTo('testimonials')} className="hover:text-brand-yellow transition-colors">Testimonials</button>
          </div>

          <div className="text-center md:text-right font-mono text-[11px] tracking-wide text-white/45">
            © {new Date().getFullYear()} Abdullah. Made with extreme precision and pixel fidelity.
          </div>

        </div>
      </footer>


      {/* ----------------- MODAL MANAGER / DETAILED LIGHTBOX ----------------- */}

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-green-dark/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border-2 border-brand-yellow animate-fadeIn">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-brand-bg/90 border border-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white hover:scale-105 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Hero Header */}
            <div className="aspect-[16:9] relative bg-brand-green/5 border-b border-brand-green/10">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  if (selectedProject.id === 'web-developer-academy' && e.currentTarget.src !== 'https://web-develpor-lgdu.vercel.app/assets/modern_school_campus_1788520124392-CYfDEsEM.jpg') {
                    e.currentTarget.src = 'https://web-develpor-lgdu.vercel.app/assets/modern_school_campus_1788520124392-CYfDEsEM.jpg';
                    return;
                  }
                  if (selectedProject.id === 'towncleats-football-club' && e.currentTarget.src !== 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1000&auto=format&fit=crop&q=80') {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1000&auto=format&fit=crop&q=80';
                    return;
                  }
                  if (selectedProject.id === 'mustafa-creative-director' && e.currentTarget.src !== 'https://mustafa-k4nx.vercel.app/assets/abdullah_blue_suit_setup_1787144900808-CFtA6JO8.jpg') {
                    e.currentTarget.src = 'https://mustafa-k4nx.vercel.app/assets/abdullah_blue_suit_setup_1787144900808-CFtA6JO8.jpg';
                    return;
                  }
                  if (selectedProject.id === 'lomaro-pizza' && e.currentTarget.src !== 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80') {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80';
                    return;
                  }
                  if (selectedProject.id === 'advanced-group' && e.currentTarget.src !== 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80') {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80';
                    return;
                  }
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/95 via-brand-green-dark/40 to-transparent flex items-end p-8 text-white">
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-yellow font-extrabold block mb-2 font-mono">
                    {selectedProject.category} Case Study
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Project Specifications Tabular */}
            <div className="p-8">
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-brand-green/10 pb-6 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-green-light/50 font-extrabold font-mono">Client Organization</span>
                  <span className="block font-bold text-sm text-brand-green mt-1">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-green-light/50 font-extrabold font-mono">Completed Duration</span>
                  <span className="block font-bold text-sm text-brand-green mt-1">{selectedProject.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-green-light/50 font-extrabold font-mono">Abdullah's Role</span>
                  <span className="block font-bold text-sm text-brand-green mt-1">{selectedProject.role}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-green-light/50 font-extrabold font-mono">Primary Tech Stack</span>
                  <span className="block font-bold text-sm text-brand-green mt-1 truncate">{selectedProject.technologies[0]} & More</span>
                </div>
              </div>

              {/* Scope narrative */}
              <div className="mb-8">
                <h4 className="font-display text-xl font-bold text-brand-green mb-3">Project Summary</h4>
                <p className="text-sm text-brand-green-light/85 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Technologies unboxed list */}
              <div className="mb-8">
                <h4 className="text-xs uppercase font-extrabold text-brand-green font-mono tracking-widest mb-3">Integrated Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2 text-xs text-brand-green font-semibold">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={t} className="px-3.5 py-1.5 bg-brand-bg border border-brand-green/10 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Preview interactive simulation */}
              <div className="bg-brand-bg rounded-2xl p-6 border border-brand-green/10 mb-8">
                <div className="flex items-center gap-3 text-brand-green mb-3">
                  <Globe className="w-5 h-5 text-brand-yellow" />
                  <h4 className="font-display font-bold text-lg">Interactive Live Simulator</h4>
                </div>
                <p className="text-xs text-brand-green-light/80 leading-relaxed mb-4">
                  {selectedProject.liveSimulation.description}
                </p>
                <a 
                  href={selectedProject.liveSimulation.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-white border border-brand-green/15 hover:border-brand-yellow rounded-xl flex items-center justify-between text-xs font-mono font-bold text-brand-green hover:text-brand-yellow transition-all duration-200"
                >
                  <span className="truncate">{selectedProject.liveSimulation.url}</span>
                  <span className="text-[10px] uppercase tracking-wider text-brand-yellow bg-brand-green px-2.5 py-1 rounded shrink-0">VISIT LIVE SITE ↗</span>
                </a>
              </div>

              {/* High Fidelity Technical Implementation (Strict Code Snippet) */}
              <div>
                <div className="flex items-center gap-3 text-brand-green mb-4">
                  <Code2 className="w-5 h-5 text-brand-yellow" />
                  <h4 className="font-display font-bold text-lg">Architectural Code Implementation</h4>
                </div>
                
                <div className="bg-[#0e1e16] text-white p-5 rounded-2xl overflow-x-auto font-mono text-xs leading-relaxed max-h-[300px] border border-white/10 shadow-inner">
                  <pre className="whitespace-pre">{selectedProject.codeSnippet}</pre>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Service Details Learn More Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-green-dark/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative border-2 border-brand-yellow animate-fadeIn">
            
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-brand-bg border border-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center text-brand-yellow">
                {selectedService.icon}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-green">
                {selectedService.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-brand-green-light/85 leading-relaxed mb-8">
              {selectedService.longDesc}
            </p>

            {/* Deliverables */}
            <div className="mb-8">
              <h4 className="text-xs uppercase font-extrabold text-brand-green font-mono tracking-widest mb-3">Service Deliverables & Assets</h4>
              <ul className="space-y-2.5 text-xs text-brand-green-light/95">
                {selectedService.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation Process */}
            <div>
              <h4 className="text-xs uppercase font-extrabold text-brand-green font-mono tracking-widest mb-3">Service Roadmap & Execution</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedService.process.map((step, idx) => (
                  <div key={step} className="p-4 bg-brand-bg rounded-xl border border-brand-green/5 text-xs text-brand-green-light/90">
                    <span className="font-mono text-brand-yellow font-bold text-base block mb-1">0{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Blog Full Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-green-dark/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-8 shadow-2xl relative border-2 border-brand-yellow max-h-[90vh] overflow-y-auto animate-fadeIn">
            
            <button 
              onClick={() => setSelectedBlog(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-brand-bg border border-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Unboxed blog header category metadata list */}
            <div className="flex items-center gap-2 text-xs text-brand-green-light/50 font-semibold mb-4">
              <span>{selectedBlog.category}</span>
              <span>·</span>
              <span>{selectedBlog.date}</span>
              <span>·</span>
              <span>{selectedBlog.readTime}</span>
            </div>

            <h3 className="font-display text-3xl font-extrabold text-brand-green mb-6 leading-snug">
              {selectedBlog.title}
            </h3>

            {/* Editorial Body Prose */}
            <div className="space-y-6 text-brand-green-light/85 text-sm sm:text-base leading-relaxed border-t border-brand-green/10 pt-6">
              {selectedBlog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Author Footer block */}
            <div className="mt-10 pt-6 border-t border-brand-green/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-green font-bold text-sm flex items-center justify-center shrink-0">
                A
              </div>
              <div>
                <span className="block font-bold text-sm text-brand-green">Written by Abdullah</span>
                <span className="block text-xs text-brand-green-light/50 font-semibold uppercase tracking-wider">Web Developer & Designer</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Testimonial Writer Form Modal */}
      {isAddingReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-green-dark/80 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative border-2 border-brand-yellow animate-fadeIn">
            
            <button 
              onClick={() => setIsAddingReview(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-brand-bg border border-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-display text-2xl font-extrabold text-brand-green mb-6">
              Write a Review
            </h3>

            {reviewSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-green flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-brand-green mb-2">Review Submitted!</h4>
                <p className="text-xs text-brand-green-light/70">
                  Thank you for sharing your feedback. Your testimonial has been appended to the active carousel list.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-brand-green uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-brand-yellow">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Olivia Jenkins"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 bg-brand-bg rounded-lg border border-brand-green/15 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-xs font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-brand-green uppercase tracking-wider mb-1.5">
                      Role / Position
                    </label>
                    <input 
                      type="text" 
                      placeholder="Founder & VP"
                      value={reviewForm.role}
                      onChange={(e) => setReviewForm(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full px-4 py-2 bg-brand-bg rounded-lg border border-brand-green/15 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-green uppercase tracking-wider mb-1.5">
                      Organization
                    </label>
                    <input 
                      type="text" 
                      placeholder="Aura Corp"
                      value={reviewForm.company}
                      onChange={(e) => setReviewForm(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-2 bg-brand-bg rounded-lg border border-brand-green/15 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-xs font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-brand-green uppercase tracking-wider mb-1.5">
                    Star Rating
                  </label>
                  <select
                    value={reviewForm.rating}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, rating: Number(e.target.value) }))}
                    className="w-full px-4 py-2 bg-brand-bg rounded-lg border border-brand-green/15 focus:border-brand-green outline-none text-xs font-semibold"
                  >
                    <option value={5}>5 Stars (Excellent)</option>
                    <option value={4}>4 Stars (Very Good)</option>
                    <option value={3}>3 Stars (Satisfactory)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-brand-green uppercase tracking-wider mb-1.5">
                    Your Review Comment <span className="text-brand-yellow">*</span>
                  </label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Describe your collaboration, professional deliverables, attention to detail..."
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, comment: e.target.value }))}
                    className="w-full px-4 py-2 bg-brand-bg rounded-lg border border-brand-green/15 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-xs font-semibold resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Publish Review
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* Simulated Interactive PDF Resume Viewer Modal */}
      {showResumeViewer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-green-dark/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-8 shadow-2xl relative border-2 border-brand-yellow max-h-[90vh] overflow-y-auto animate-fadeIn">
            
            <button 
              onClick={() => setShowResumeViewer(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-brand-bg border border-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Resume Header Panel */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-brand-green/10 mb-8 gap-4">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-brand-green">
                  Abdullah
                </h3>
                <span className="text-xs text-brand-green-light/60 font-semibold uppercase tracking-wider block mt-0.5">
                  Senior Full-Stack Web Developer & Designer
                </span>
              </div>
              <button 
                onClick={() => {
                  alert("Visual Resume PDF Download Initiated successfully (simulated)!");
                }}
                className="flex items-center gap-2 px-4 py-2 bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Local PDF</span>
              </button>
            </div>

            {/* Resume Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-brand-green-light/95 leading-relaxed">
              
              {/* Left Info Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold text-brand-green font-mono tracking-widest border-b pb-1.5 mb-2.5">
                    Coordinates
                  </h4>
                  <ul className="space-y-2">
                    <li>Lahore, Pakistan</li>
                    <li>abdullah.dev.pro@gmail.com</li>
                    <li>github.com/abdullah-dev</li>
                    <li>linkedin.com/in/abdullah-dev</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase font-extrabold text-brand-green font-mono tracking-widest border-b pb-1.5 mb-2.5">
                    Skills & Assets
                  </h4>
                  <ul className="space-y-2">
                    <li>React 19 & Next.js Core</li>
                    <li>Tailwind CSS v4 Layouts</li>
                    <li>TypeScript Architecture</li>
                    <li>NodeJS / Express Services</li>
                    <li>PostgreSQL & Firestore</li>
                    <li>Figma Design Alignment</li>
                  </ul>
                </div>
              </div>

              {/* Work History Column */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-[10px] uppercase font-extrabold text-brand-green font-mono tracking-widest border-b pb-1.5 mb-2.5">
                    Professional Experience
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between font-bold text-brand-green text-sm">
                        <span>Lead Web Developer</span>
                        <span className="font-mono text-xs text-brand-yellow font-extrabold">2024 — PRESENT</span>
                      </div>
                      <span className="block text-[10px] font-semibold text-brand-green-light/50 uppercase mt-0.5">Aura Analytics Solutions</span>
                      <p className="mt-1.5">
                        Architecting full-stack SaaS platform analytics engines, dashboard tools, custom state indicators, and REST databases. Engineered custom layout structures reducing component rendering cycles by 25%.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between font-bold text-brand-green text-sm">
                        <span>Senior Frontend Architect</span>
                        <span className="font-mono text-xs text-brand-yellow font-extrabold">2022 — 2024</span>
                      </div>
                      <span className="block text-[10px] font-semibold text-brand-green-light/50 uppercase mt-0.5">Zenith Tech Labs</span>
                      <p className="mt-1.5">
                        Translated visual mockups from creative designers into fast, semantic HTML structure and responsive layout components. Integrated charting libraries, real-time trigger notifications, and authentication modules.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase font-extrabold text-brand-green font-mono tracking-widest border-b pb-1.5 mb-2.5">
                    Academic Degree
                  </h4>
                  <div>
                    <div className="flex justify-between font-bold text-brand-green text-sm">
                      <span>B.S. Software Engineering</span>
                      <span className="font-mono text-xs text-brand-yellow font-extrabold">Graduated 2022</span>
                    </div>
                    <span className="block text-[10px] font-semibold text-brand-green-light/50 uppercase mt-0.5">NUST School of Computing</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Hire Me Quick Form Modal */}
      {showHireModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-green-dark/80 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative border-2 border-brand-yellow animate-fadeIn">
            
            <button 
              onClick={() => setShowHireModal(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-brand-bg border border-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-display text-2xl font-extrabold text-brand-green mb-4">
              Hire Abdullah
            </h3>
            <p className="text-xs text-brand-green-light/70 mb-6 leading-relaxed">
              Available for full-time contracts, freelance consulting, or specific modular product development.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Quick Hire request registered successfully! Abdullah will contact you at your provided email coordinates.");
                setShowHireModal(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[10px] font-bold text-brand-green uppercase tracking-wider mb-1.5">Your Name</label>
                <input required type="text" className="w-full px-4 py-2 bg-brand-bg rounded-lg border border-brand-green/15 text-xs font-semibold outline-none" placeholder="Elena Chen" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-brand-green uppercase tracking-wider mb-1.5">Your Email Coordinate</label>
                <input required type="email" className="w-full px-4 py-2 bg-brand-bg rounded-lg border border-brand-green/15 text-xs font-semibold outline-none" placeholder="elena@company.com" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-brand-green uppercase tracking-wider mb-1.5">Project Type</label>
                <select className="w-full px-4 py-2 bg-brand-bg rounded-lg border border-brand-green/15 text-xs font-semibold outline-none">
                  <option>New Custom Website</option>
                  <option>SaaS Web App Dashboard</option>
                  <option>Mobile App Dev</option>
                  <option>Other / Advisory Consult</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-brand-green hover:bg-brand-green-light text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg mt-4"
              >
                Send Request
              </button>
            </form>

          </div>
        </div>
      )}

      {/* Official Credential & Badge Verification Lightbox Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-green-dark/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border-2 border-brand-yellow animate-fadeIn">
            
            <button 
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-brand-bg/90 border border-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white hover:scale-105 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Credential Modal Hero Banner */}
            <div className="relative bg-[#0c2318] p-8 sm:p-10 border-b border-brand-green/10 flex flex-col sm:flex-row items-center gap-6 text-white text-center sm:text-left">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-brand-green/20 border-2 border-brand-yellow/50 shadow-2xl shrink-0">
                <img 
                  src={selectedCourse.badgeImage} 
                  alt={selectedCourse.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="px-3 py-1 bg-brand-yellow text-brand-green font-extrabold text-[10px] uppercase tracking-wider rounded-full">
                    {selectedCourse.category}
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-full border border-white/20">
                    {selectedCourse.year}
                  </span>
                  <span className="px-3 py-1 bg-[#10b981]/20 text-[#4ade80] font-mono text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#10b981]/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Active
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                  {selectedCourse.title}
                </h3>

                <p className="text-xs font-mono text-white/70 mt-2">
                  Issued by: <strong className="text-white">{selectedCourse.institution}</strong> · Credential ID: <strong className="text-brand-yellow">{selectedCourse.credentialId}</strong>
                </p>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-8 sm:p-10 space-y-6 text-left">
              
              {/* Verification Badge Status Box */}
              <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-2xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#065f46]">
                      {selectedCourse.verifiedBadgeText}
                    </h5>
                    <p className="text-[11px] text-[#047857]/80 font-mono">
                      Cryptographic Verification Passed · Issue Status: Valid & Authentic
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold text-[#065f46] hidden sm:block">
                  Verified by Abdullah
                </span>
              </div>

              {/* Official Credential Overview */}
              <div>
                <h4 className="font-display text-base font-bold text-brand-green mb-2">Certification Scope</h4>
                <p className="text-xs sm:text-sm text-brand-green-light/80 leading-relaxed font-sans">
                  {selectedCourse.description}
                </p>
              </div>

              {/* Key Competencies tags */}
              <div>
                <span className="text-[11px] font-mono font-bold text-brand-green uppercase tracking-wider block mb-2.5">
                  VERIFIED COMPETENCY BADGES:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.competencies.map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-[#f3f4f3] border border-brand-green/10 rounded-lg text-xs font-semibold text-brand-green-dark"
                    >
                      ✓ {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Curriculum Breakdown if available */}
              {selectedCourse.modules && selectedCourse.modules.length > 0 && (
                <div>
                  <h4 className="font-display text-base font-bold text-brand-green mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brand-yellow" />
                    Curriculum & Module Standards
                  </h4>
                  <div className="space-y-3">
                    {selectedCourse.modules.map((m, mIdx) => (
                      <div key={mIdx} className="border border-brand-green/10 rounded-xl p-3.5 bg-brand-bg">
                        <div className="flex items-center justify-between text-xs font-bold text-brand-green mb-1.5">
                          <span>{m.title}</span>
                          <span className="font-mono text-brand-green-light/70">{m.duration}</span>
                        </div>
                        <ul className="space-y-1">
                          {m.lessons.map((l, lIdx) => (
                            <li key={lIdx} className="text-[11px] text-brand-green-light/80 flex items-center gap-2">
                              <span className="text-brand-yellow">●</span>
                              <span>{l}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Action Buttons */}
              <div className="pt-6 border-t border-brand-green/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-brand-green-light/70 font-mono">
                  Credential ID: <span className="font-bold text-brand-green">{selectedCourse.credentialId}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="flex-1 sm:flex-none px-5 py-3 border border-brand-green/20 rounded-xl text-xs font-bold text-brand-green hover:bg-brand-green/5 transition-colors"
                  >
                    Close
                  </button>

                  <a
                    href={`https://wa.me/923019249721?text=${encodeURIComponent(`Hi Abdullah, I am inquiring about your certified credential: ${selectedCourse.title} (${selectedCourse.credentialId})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-6 py-3 bg-[#0e261d] hover:bg-brand-green text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#4ade80]" />
                    <span>Inquire / Verify on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ----------------- FLOATING ACTION CLUSTER (WhatsApp & Back-to-Top) ----------------- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/923019249721?text=Hi%20Abdullah%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {/* Pulsing radar ping */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#128C7E] border-2 border-white"></span>
          </span>

          {/* WhatsApp Vector Icon */}
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white drop-shadow">
            <path d="M16 2C8.28 2 2 8.28 2 16C2 18.52 2.66 20.9 3.84 22.98L2 30L9.22 28.2C11.24 29.3 13.56 29.96 16 29.96C23.72 29.96 30 23.68 30 15.96C30 8.24 23.72 2 16 2ZM23.36 21.6C23.06 22.44 21.84 23.14 20.92 23.34C20.3 23.48 19.48 23.58 16.78 22.46C13.34 21.02 11.12 17.52 10.94 17.28C10.78 17.06 9.54 15.42 9.54 13.72C9.54 12.02 10.4 11.2 10.74 10.84C11.04 10.52 11.54 10.38 12 10.38C12.16 10.38 12.3 10.38 12.44 10.4C12.82 10.42 13.02 10.44 13.26 11.02C13.56 11.74 14.28 13.52 14.38 13.7C14.48 13.88 14.56 14.12 14.42 14.38C14.3 14.64 14.2 14.76 14.02 14.98C13.84 15.2 13.68 15.34 13.48 15.58C13.3 15.78 13.08 16 13.3 16.38C13.52 16.76 14.3 18.02 15.44 19.04C16.92 20.36 18.12 20.78 18.54 20.96C18.88 21.1 19.16 21.06 19.38 20.82C19.66 20.5 20.02 19.98 20.36 19.5C20.62 19.14 20.94 19.2 21.28 19.32C21.62 19.44 23.44 20.34 23.82 20.52C24.2 20.7 24.44 20.82 24.54 20.98C24.62 21.14 24.62 21.94 23.36 21.6Z" />
          </svg>

          {/* Hover Tooltip */}
          <span className="absolute right-full mr-3 px-3.5 py-1.5 bg-brand-green-dark text-white text-xs font-bold rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 border border-brand-yellow/30 pointer-events-none translate-x-1 group-hover:translate-x-0">
            Chat on WhatsApp
          </span>
        </a>

        {/* Scroll To Top Button ("khud oper jana wala button") */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`pointer-events-auto group relative flex items-center justify-center w-12 h-12 rounded-full bg-brand-green border-2 border-brand-yellow text-brand-yellow shadow-2xl hover:bg-brand-yellow hover:text-brand-green hover:border-brand-green transition-all duration-300 hover:scale-110 active:scale-95 ${
            showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
          }`}
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3.5 py-1.5 bg-brand-green-dark text-white text-xs font-bold rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 border border-brand-yellow/30 pointer-events-none translate-x-1 group-hover:translate-x-0">
            Back to Top ↑
          </span>
        </button>

      </div>

    </div>
  );
}
