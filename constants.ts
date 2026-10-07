import { Job, User } from './types';

export const mockUser: User = {
  id: 'user-123',
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  headline: 'Senior Frontend Engineer @ TechCorp',
  skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL'],
  experience: '5 years',
  resumeSummary: 'A highly skilled and motivated Senior Frontend Engineer with over 5 years of experience in building and maintaining responsive and scalable web applications. Proficient in modern JavaScript frameworks, particularly React and TypeScript. Passionate about creating excellent user experiences and writing clean, efficient code.',
  resumeFilename: 'Alex_Doe_Resume.pdf',
  resumeVerified: true,
};

export const mockJobs: Job[] = [
  {
    id: 'job-001',
    title: 'Senior Frontend Developer',
    company: 'Innovate Inc.',
    logo: 'https://picsum.photos/seed/innovate/100',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$140,000 - $180,000',
    description: 'We are looking for an experienced Senior Frontend Developer to join our dynamic team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.',
    responsibilities: [
      'Develop new user-facing features using React.js',
      'Build reusable components and front-end libraries for future use',
      'Translate designs and wireframes into high-quality code',
      'Optimize components for maximum performance across a vast array of web-capable devices and browsers'
    ],
    qualifications: [
      '5+ years of experience with JavaScript, HTML, and CSS',
      'Strong proficiency in React.js and its core principles',
      'Experience with popular React.js workflows (such as Redux or Context API)',
      'Familiarity with modern front-end build pipelines and tools',
      'Experience with TypeScript is a plus'
    ],
    postedDate: '2 weeks ago',
    hiringManagerEmail: 'hiring.manager@innovate.inc'
  },
  {
    id: 'job-002',
    title: 'Backend Engineer (Python/Django)',
    company: 'DataStream Solutions',
    logo: 'https://picsum.photos/seed/datastream/100',
    location: 'New York, NY (Remote)',
    type: 'Full-time',
    salary: '$130,000 - $170,000',
    description: 'DataStream Solutions is seeking a talented Backend Engineer with strong Python and Django experience to help build and scale our data processing pipeline. You will work on a team of talented engineers to design, build, and maintain our core backend services.',
    responsibilities: [
      'Design and implement scalable RESTful APIs',
      'Work with our data science team to build out new features',
      'Optimize application for maximum speed and scalability',
      'Implement security and data protection'
    ],
    qualifications: [
      '4+ years of experience with Python and Django',
      'Strong understanding of database design and SQL (PostgreSQL preferred)',
      'Experience with Celery, Redis, and other asynchronous task queues',
      'Familiarity with cloud services (AWS, Google Cloud)'
    ],
    postedDate: '5 days ago',
    hiringManagerEmail: 'careers@datastream.solutions'
  },
  {
    id: 'job-003',
    title: 'UI/UX Designer',
    company: 'Creative Minds Studio',
    logo: 'https://picsum.photos/seed/creative/100',
    location: 'Austin, TX',
    type: 'Contract',
    salary: '$75 - $95 / hour',
    description: 'We are looking for a creative UI/UX Designer to join our team on a contract basis. You will be responsible for creating amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts.',
    responsibilities: [
      'Create wireframes, storyboards, user flows, process flows and site maps',
      'Design graphic user interface elements, like menus, tabs and widgets',
      'Develop UI mockups and prototypes that clearly illustrate how sites function and look',
      'Conduct layout adjustments based on user feedback'
    ],

    qualifications: [
      'Proven UI/UX design experience with a strong portfolio',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Excellent visual design skills with sensitivity to user-system interaction',
      'Ability to solve problems creatively and effectively'
    ],
    postedDate: '1 day ago',
    hiringManagerEmail: 'jobs@creativeminds.studio'
  },
   {
    id: 'job-004',
    title: 'Junior React Developer',
    company: 'StartUp Launchpad',
    logo: 'https://picsum.photos/seed/startup/100',
    location: 'Remote',
    type: 'Internship',
    salary: '$20 - $30 / hour',
    description: 'An exciting opportunity for a junior developer to gain hands-on experience with React. You will work alongside senior developers on real-world projects, contributing to our main application and learning best practices in modern web development.',
    responsibilities: [
      'Assist in the development of new features',
      'Write and maintain clean code',
      'Participate in code reviews',
      'Fix bugs and improve application performance'
    ],
    qualifications: [
      'Basic understanding of HTML, CSS, and JavaScript',
      'Some experience with React or another JavaScript framework',
      'Eagerness to learn and grow as a developer',
      'Good communication skills'
    ],
    postedDate: '3 weeks ago',
    hiringManagerEmail: 'internships@startuplaunchpad.io'
  },
  {
    id: 'job-005',
    title: 'Part-time Graphic Designer',
    company: 'Pixel Perfect',
    logo: 'https://picsum.photos/seed/pixel/100',
    location: 'Pune, India',
    type: 'Part-time',
    salary: '₹30,000 - ₹50,000 / month',
    description: 'We are seeking a creative Graphic Designer to work with us on a part-time basis. You will be creating visual content for our social media, website, and marketing campaigns.',
    responsibilities: [
      'Create engaging and on-brand graphics for a variety of media',
      'Work with the marketing team to develop design concepts',
      'Adhere to brand guidelines and complete projects on time'
    ],
    qualifications: [
      'Proven graphic designing experience',
      'A strong portfolio of illustrations or other graphics',
      'Familiarity with design software and technologies (such as InDesign, Illustrator, Dreamweaver, Photoshop)',
      'A keen eye for aesthetics and details'
    ],
    postedDate: '4 days ago',
    hiringManagerEmail: 'design.team@pixelperfect.co'
  },
  {
    id: 'job-006',
    title: 'Data Analyst',
    company: 'Analytics Hub',
    logo: 'https://picsum.photos/seed/analytics/100',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹9,00,000 - ₹15,00,000 / year',
    description: 'Join our team as a Data Analyst to help us make sense of our data. You will be responsible for collecting, processing, and performing statistical analyses of data.',
    responsibilities: [
      'Interpret data, analyze results using statistical techniques',
      'Develop and implement databases, data collection systems, data analytics and other strategies that optimize statistical efficiency and quality',
      'Acquire data from primary or secondary data sources and maintain databases/data systems',
      'Identify, analyze, and interpret trends or patterns in complex data sets'
    ],
    qualifications: [
      'Proven working experience as a data analyst or business data analyst',
      'Technical expertise regarding data models, database design development, data mining and segmentation techniques',
      'Strong knowledge of and experience with reporting packages (Business Objects etc), databases (SQL etc), programming (XML, Javascript, or ETL frameworks)',
      'Strong analytical skills with the ability to collect, organize, analyze, and disseminate significant amounts of information with attention to detail and accuracy'
    ],
    postedDate: '1 week ago',
    hiringManagerEmail: 'data.careers@analyticshub.com'
  },
  {
    id: 'job-007',
    title: 'Part-time Content Writer',
    company: 'WordSmiths',
    logo: 'https://picsum.photos/seed/words/100',
    location: 'Delhi, India (Remote)',
    type: 'Part-time',
    salary: '₹25,000 - ₹40,000 / month',
    description: 'We are looking for a Part-time Content Writer to join our editorial team and enrich our websites with new blog posts, guides, and marketing copy.',
    responsibilities: [
      'Research industry-related topics (combining online sources, interviews and studies)',
      'Write clear marketing copy to promote our products/services',
      'Prepare well-structured drafts using Content Management Systems',
      'Submit work to editors for input and approval'
    ],
    qualifications: [
      'Proven work experience as a Content Writer, Copywriter or similar role',
      'Portfolio of published articles',
      'Experience doing research using multiple sources',
      'Excellent writing and editing skills in English'
    ],
    postedDate: '2 days ago',
    hiringManagerEmail: 'writers@wordsmiths.agency'
  },
  {
    id: 'job-008',
    title: 'DevOps Engineer',
    company: 'CloudNine Services',
    logo: 'https://picsum.photos/seed/cloud/100',
    location: 'Hyderabad, India',
    type: 'Full-time',
    salary: '₹12,00,000 - ₹20,00,000 / year',
    description: 'We are seeking a DevOps Engineer to help us build functional systems that improve customer experience. DevOps Engineer responsibilities include deploying product updates, identifying production issues and implementing integrations that meet customer needs.',
    responsibilities: [
      'Build and maintain CI/CD pipelines',
      'Monitor and manage cloud infrastructure (AWS/Azure/GCP)',
      'Implement automation tools and frameworks for automatic code deployment',
      'Troubleshoot and resolve infrastructure issues'
    ],
    qualifications: [
      'Hands-on experience with CI/CD tools like Jenkins, GitLab CI, or CircleCI',
      'Strong experience with cloud platforms (AWS preferred)',
      'Proficient in scripting languages like Python, Bash',
      'Experience with containerization technologies like Docker and Kubernetes'
    ],
    postedDate: '10 days ago',
    hiringManagerEmail: 'devops.jobs@cloudnine.svc'
  },
  {
    id: 'job-009',
    title: 'Project Manager',
    company: 'BuildIt Right',
    logo: 'https://picsum.photos/seed/buildit/100',
    location: 'Mumbai, India',
    type: 'Contract',
    salary: '₹18,00,000 - ₹25,00,000 / year',
    description: 'We are hiring an experienced Project Manager to help us keep our projects on track. You will be responsible for planning, overseeing and leading projects from ideation through to completion.',
    responsibilities: [
      'Coordinate internal resources and third parties/vendors for the flawless execution of projects',
      'Ensure that all projects are delivered on-time, within scope and within budget',
      'Develop a detailed project plan to track progress',
      'Manage the relationship with the client and all stakeholders'
    ],
    qualifications: [
      'Proven working experience in project management',
      'Excellent client-facing and internal communication skills',
      'Solid organizational skills including attention to detail and multitasking skills',
      'PMP / PRINCE II certification is a plus'
    ],
    postedDate: '6 days ago',
    hiringManagerEmail: 'pm@builditright.com'
  },
  {
    id: 'job-010',
    title: 'Marketing Manager',
    company: 'BrandUp',
    logo: 'https://picsum.photos/seed/brand/100',
    location: 'Chennai, India',
    type: 'Full-time',
    salary: '₹10,00,000 - ₹16,00,000 / year',
    description: 'We are looking for a Marketing Manager to take ownership of our marketing strategies. You will be in charge of leading our marketing team, developing marketing plans, and executing campaigns.',
    responsibilities: [
      'Develop strategies and tactics to get the word out about our company and drive qualified traffic',
      'Deploy successful marketing campaigns and own their implementation from ideation to execution',
      'Produce valuable and engaging content for our website and blog that attracts and converts our target groups',
      'Measure and report on the performance of marketing campaigns'
    ],
    qualifications: [
      'Demonstrable experience in marketing together with the potential and attitude required to learn',
      'Proven experience in identifying target audiences and in creatively devising and leading across channels marketing campaigns that engage, educate and motivate',
      'Solid knowledge of website analytics tools (e.g., Google Analytics, NetInsight, WebTrends)',
      'Experience in setting up and optimizing Google Adwords campaigns'
    ],
    postedDate: '2 weeks ago',
    hiringManagerEmail: 'marketing.lead@brandup.co'
  },
  {
    id: 'job-011',
    title: 'FinTech Backend Developer',
    company: 'SG Finance',
    logo: 'https://picsum.photos/seed/sgfin/100',
    location: 'Singapore',
    type: 'Full-time',
    salary: 'S$80,000 - S$120,000 / year',
    description: 'Join a fast-growing fintech company in Singapore. We are looking for a Backend Developer to build and shape the future of finance. You will be working with a team of highly skilled engineers on our core trading and payment systems.',
    responsibilities: [
      'Design, build, and maintain efficient, reusable, and reliable backend code',
      'Integrate with third-party services and APIs',
      'Ensure the performance, quality, and responsiveness of applications',
      'Collaborate with a team to define, design, and ship new features'
    ],
    qualifications: [
      'Strong proficiency in Go, Java, or Python',
      'Experience with microservices architecture',
      'Understanding of financial markets and trading systems is a huge plus',
      'Experience with databases like PostgreSQL, and message brokers like Kafka or RabbitMQ'
    ],
    postedDate: '1 month ago',
    hiringManagerEmail: 'recruitment.sg@sgfinance.com'
  },
  {
    id: 'job-012',
    title: 'Part-time Customer Support',
    company: 'HelpDesk Heroes',
    logo: 'https://picsum.photos/seed/help/100',
    location: 'Bangalore, India (Remote)',
    type: 'Part-time',
    salary: '₹20,000 - ₹35,000 / month',
    description: 'We are seeking a friendly and efficient Part-time Customer Support Representative to join our remote team. You will be the first point of contact for our customers, answering queries via email and chat.',
    responsibilities: [
      'Respond to customer queries in a timely and accurate way, via email or chat',
      'Identify customer needs and help customers use specific features',
      'Analyze and report product malfunctions',
      'Update our internal databases with information about technical issues and useful discussions with customers'
    ],
    qualifications: [
      'Excellent communication and problem-solving skills',
      'Multi-tasking abilities',
      'Patience when handling tough cases',
      'Familiarity with our industry is a plus'
    ],
    postedDate: '3 days ago',
    hiringManagerEmail: 'support.jobs@helpdeskheroes.net'
  },
  {
    id: 'job-013',
    title: 'Summer Marketing Intern',
    company: 'BrandUp',
    logo: 'https://picsum.photos/seed/brand/100',
    location: 'Chennai, India',
    type: 'Internship',
    salary: '₹15,000 / month stipend',
    description: 'A fantastic opportunity for a marketing student to gain hands-on experience in a fast-paced environment. You will assist the marketing team in various campaigns and daily tasks.',
    responsibilities: [
      'Assist with social media management and content creation',
      'Conduct market research and analyze consumer rating reports/ questionnaires',
      'Help organize marketing events',
      'Support the marketing team in daily administrative tasks'
    ],
    qualifications: [
      'Currently enrolled in a BS or Masters degree in Marketing or a related field',
      'Strong desire to learn along with professional drive',
      'Solid understanding of different marketing techniques',
      'Excellent verbal and written communication skills'
    ],
    postedDate: '1 month ago',
    hiringManagerEmail: 'internships@brandup.co'
  },
  {
    id: 'job-014',
    title: 'Freelance Technical Writer',
    company: 'DataStream Solutions',
    logo: 'https://picsum.photos/seed/datastream/100',
    location: 'Remote',
    type: 'Contract',
    salary: '$50 - $70 / hour',
    description: 'We are looking for a Technical Writer to produce high-quality documentation that contributes to the overall success of our products. You will join a team of talented tech writers who work collaboratively with developers, quality engineers, product managers, and usability experts.',
    responsibilities: [
      'Work with internal teams to obtain an in-depth understanding of the product and the documentation requirements',
      'Produce high-quality documentation that is appropriate for its intended audience',
      'Write easy-to-understand user interface text, online help and developer guides',
      'Create tutorials to help end-users use a variety of applications'
    ],
    qualifications: [
      'Proven working experience in technical writing of software documentation',
      'Ability to deliver high quality documentation paying attention to detail',
      'Ability to quickly grasp complex technical concepts and make them easily understandable in text and pictures',
      'Excellent written skills in English'
    ],
    postedDate: '5 days ago',
    hiringManagerEmail: 'contracts@datastream.solutions'
  },
  {
    id: 'job-015',
    title: 'Full Stack Java Developer',
    company: 'Innovate Inc.',
    logo: 'https://picsum.photos/seed/innovate/100',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    salary: '$150,000 - $190,000',
    description: 'Seeking a skilled Full Stack Java Developer to design, develop, and implement web applications. You will be a key player in the full development lifecycle, from concept to deployment.',
    responsibilities: [
      'Design and develop high-volume, low-latency applications for mission-critical systems',
      'Contribute in all phases of the development lifecycle',
      'Write well designed, testable, efficient code',
      'Support continuous improvement by investigating alternatives and technologies'
    ],
    qualifications: [
      '5+ years of experience with Java and the Spring Framework',
      'Experience with front-end technologies like Angular or React',
      'Proficient with relational databases (e.g., PostgreSQL, MySQL)',
      'Experience building and consuming RESTful APIs'
    ],
    postedDate: '12 days ago',
    hiringManagerEmail: 'java.devs@innovate.inc'
  }
];