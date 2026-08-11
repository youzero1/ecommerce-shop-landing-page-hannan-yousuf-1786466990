import type { Project, BlogPost, CaseStudy, Statistic } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory and Stripe payments',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/hannan/ecommerce',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task tracker with real-time updates and team workspace',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d92b90?w=500&h=300&fit=crop',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/hannan/task-app',
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'Smart content creation tool powered by OpenAI API',
    image: 'https://images.unsplash.com/photo-1677442d019cecf31b92fb3e0fb00e6f828bb233?w=500&h=300&fit=crop',
    tech: ['Next.js', 'OpenAI', 'Supabase', 'TypeScript'],
    liveUrl: 'https://example-content.com',
    githubUrl: 'https://github.com/hannan/ai-content',
  },
  {
    id: '4',
    title: 'Portfolio Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts and exports',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example-analytics.com',
    githubUrl: 'https://github.com/hannan/analytics-dash',
  },
  {
    id: '5',
    title: 'Social Media App',
    description: 'Real-time messaging and feed platform with notifications',
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=300&fit=crop',
    tech: ['React', 'Socket.io', 'MongoDB', 'Express'],
    liveUrl: 'https://example-social.com',
    githubUrl: 'https://github.com/hannan/social-app',
  },
  {
    id: '6',
    title: 'Video Streaming Platform',
    description: 'Adaptive video streaming with HLS and user library management',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop',
    tech: ['React', 'HLS.js', 'AWS S3', 'Node.js'],
    liveUrl: 'https://example-streaming.com',
    githubUrl: 'https://github.com/hannan/streaming-platform',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices for structuring large React codebases with clean architecture...',
    category: 'Web Dev',
    readTime: 8,
    date: '2024-01-15',
    url: 'https://blog.example.com/react-scalability',
  },
  {
    id: '2',
    title: 'The Future of AI in Web Development',
    excerpt: 'How AI-powered tools are revolutionizing the way we build web applications...',
    category: 'AI',
    readTime: 10,
    date: '2024-01-10',
    url: 'https://blog.example.com/ai-web-dev',
  },
  {
    id: '3',
    title: 'Design Systems that Scale',
    excerpt: 'Creating maintainable component libraries and design tokens for enterprise apps...',
    category: 'Design',
    readTime: 7,
    date: '2024-01-05',
    url: 'https://blog.example.com/design-systems',
  },
  {
    id: '4',
    title: 'My Journey from Frontend to Full-Stack',
    excerpt: 'Lessons learned transitioning to backend development and what changed my perspective...',
    category: 'Career',
    readTime: 12,
    date: '2023-12-28',
    url: 'https://blog.example.com/my-journey',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'E-Commerce Platform Redesign',
    description: 'Modernizing a legacy marketplace to increase conversions by 45%',
    challenge: 'Slow checkout process causing 60% cart abandonment rate',
    solution: 'Rebuilt with React, optimized database queries, added one-click checkout',
    result: 'Reduced checkout time from 4 min to 90 seconds, 45% increase in conversions',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/hannan/ecommerce',
  },
  {
    id: '2',
    title: 'Real-Time Collaboration Platform',
    description: 'Building a live editing tool for distributed teams',
    challenge: 'Syncing changes across 100+ concurrent users without lag',
    solution: 'Implemented WebSocket architecture with conflict-free data types',
    result: 'Handles 500+ concurrent users with <50ms sync latency',
    tech: ['React', 'Socket.io', 'Redis', 'Node.js'],
    liveUrl: 'https://example-collab.com',
    githubUrl: 'https://github.com/hannan/collab-platform',
  },
];

export const statistics: Statistic[] = [
  { label: 'Years of Experience', value: 8, suffix: '+' },
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Happy Clients', value: 30, suffix: '+' },
  { label: 'GitHub Contributions', value: 2000, suffix: '+' },
];
