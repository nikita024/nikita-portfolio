// UserPortal Images
import DashboardImg from '@/public/images/userportal/dashboard.png';
import ProfileImg from '@/public/images/userportal/profile.png';
import ReportImg from '@/public/images/userportal/reports.png';
import LoginImg from '@/public/images/userportal/login.png';
import SignupImg from '@/public/images/userportal/signup.png';

// EasyStay Images
import EasyStayHomeImg from '@/public/images/easystay/home.png';
import EasyStayCreateImg from '@/public/images/easystay/create.png';
import EasyStayEditImg from '@/public/images/easystay/edit.jpeg';
import EasyStayReviewImg from '@/public/images/easystay/review.png';
import EasyStayMapImg from '@/public/images/easystay/map.png';
import EasyStaySignImg from '@/public/images/easystay/signup.png';
import EasyStayLoginImg from '@/public/images/easystay/login.png';

// JobPortal Images
import JobPortalHomeImg from '@/public/images/jobportal/home.png';
import JobPortalJobImg from '@/public/images/jobportal/jobs.jpeg';
import JobPortalRecentImg from '@/public/images/jobportal/recent.jpeg';
import JobPortalAddImg from '@/public/images/jobportal/add.jpeg';
import JobPortalUpdateImg from '@/public/images/jobportal/update.png';

// DigiGrowth Images
import HomeImg2 from '@/public/images/digi-growth/home.png';
import PricingImg from '@/public/images/digi-growth/pricing.png';
import FaqImg from '@/public/images/digi-growth/faq.png';

export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "My Latest Works",
        "description": "Explore a collection of my recent projects, showcasing my skills, creativity, and dedication to delivering high-quality work."
    },
    navigationList: [
        {
            title: "Frontend",
            classes: "frontend",
            dataFilter: ".frontend"
        },
        {
            title: "Backend",
            classes: "backend",
            dataFilter: ".backend"
        },
        {
            title: "Fullstack",
            classes: "fullstack",
            dataFilter: ".fullstack"
        }
    ],
    projects: [
        {
            projectTitle: 'UserPortal',
            slug: 'userportal',
            description: 'UserPortal is a comprehensive full-stack web application developed using ExpressJS for the backend and ReactJS for the frontend. It facilitates user registration and authentication, offering two distinct user roles: Normal User and Admin. Admins have enhanced capabilities, including visualizing reports on user demographics and dynamically promoting or demoting user roles, making UserPortal a robust solution for user management and analytics.',
            keywords: 'userportal, usermanagement',
            category: 'fullstack',
            services: 'User Management, User Portal',
            github: 'https://github.com/nikita024/user-management',
            demo: 'https://nikita-ums.netlify.app',
            imageSrc: DashboardImg,
            mainImage: DashboardImg,
            categories: [
                { name: 'JavaScript' },
                { name: 'React.js' },
                { name: 'Redux' },
                { name: 'CSS' },
                { name: 'Node.js' },
                { name: 'Express.js' },
                { name: 'MySQL' },
            ],
            images: [
                { image: ReportImg },
                { image: LoginImg },
                { image: SignupImg },
                { image: ProfileImg },
            ]
        },
        {
            projectTitle: 'EasyStay',
            slug: 'easystay',
            description: 'Easy Stay is a user-friendly booking and renting platform, inspired by Airbnb. It allows users to easily sign up and log in to manage their stays. Users can add, edit, and list properties for rent, making it a versatile tool for both hosts and guests. Additionally, users can share their experiences by adding or deleting reviews, creating a transparent and reliable community.',
            keywords: 'booking, renting, hotel',
            category: 'backend',
            services: 'Booking, Renting, Hotel',
            github: 'https://github.com/nikita024/easystay',
            demo: 'https://easystay-44dk.onrender.com/listings',
            imageSrc: EasyStayHomeImg,
            mainImage: EasyStayHomeImg,
            categories: [
                { name: 'Node.js' },
                { name: 'Express.js' },
                { name: 'MongoDB' },
                { name: 'EJS' },
                { name: 'CSS' },
                { name: 'JavaScript' },
                { name: 'Bootstrap' },
            ],
            images: [
                { image: EasyStayCreateImg },
                { image: EasyStayEditImg },
                { image: EasyStayReviewImg },
                { image: EasyStayMapImg },
                { image: EasyStaySignImg },
                { image: EasyStayLoginImg },
            ]
        },
        {
            projectTitle: 'JobPortal',
            slug: 'jobportal',
            description: 'JobPortal is a dynamic web application designed to streamline the job search and recruitment process. Employers can easily post, edit, and delete job listings, providing a comprehensive platform for showcasing opportunities. Job seekers can efficiently search and apply for positions directly through the platform. Additionally, the "Recent Jobs" section highlights the latest job postings, ensuring users are always informed about the newest opportunities available.',
            keywords: 'Job Portal, Job Search, Job Posting',
            category: 'fullstack',
            services: 'Job Portal, Job Search, Job Posting',
            github: 'https://github.com/nikita024/jobsearch',
            demo: 'https://nikks-jobsearch.netlify.app/',
            imageSrc: JobPortalHomeImg,
            mainImage: JobPortalHomeImg,
            categories: [
                { name: 'React.js' },
                { name: 'HTML' },
                { name: 'CSS' },
                { name: 'JavaScript' },
                { name: 'Tailwind' },
                { name: 'React.js' },
                { name: 'Node.js' },
                { name: 'Express.js' },
                { name: 'MongoDB' },
            ],
            images: [
                { image: JobPortalJobImg },
                { image: JobPortalRecentImg },
                { image: JobPortalAddImg },
                { image: JobPortalUpdateImg },
            ]
        },
        {
            projectTitle: 'Digi Growth',
            slug: 'digi-growth',
            description: 'DigiGrowth is a sleek and mobile-responsive application built with simple HTML, CSS, and JavaScript. It offers a clean and intuitive interface, ensuring a seamless user experience across all devices. DigiGrowth is designed to provide users with accessible and responsive features, catering to a broad audience.',
            keywords: 'Marketing, Branding',
            category: 'frontend',
            services: 'Branding, Marketing',
            github: 'https://github.com/nikita024/growthapp',
            demo: 'https://niksgrowthapp.netlify.app/',
            imageSrc: HomeImg2,
            mainImage: HomeImg2,
            categories: [
                { name: 'HTML' },
                { name: 'CSS' },
                { name: 'JavaScript' }
            ],
            images: [
                { image: PricingImg },
                { image: FaqImg },
            ]
        },
    ]
};