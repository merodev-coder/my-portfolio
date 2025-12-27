export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        img: 'assets/review1.png',
        review:
            'Working with Ammar was an amazing experience. His frontend skills and eye for UI/UX design helped transform our ideas into a clean, modern, and highly responsive interface. Communication was smooth and deadlines were always met.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        img: 'assets/review2.png',
        review:
            'Ammar is a talented Front-End Developer with a strong sense of design. He understands user experience deeply and delivers interfaces that are both beautiful and functional. I would gladly work with him again.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        img: 'assets/review3.png',
        review:
            'Ammar exceeded our expectations. His attention to detail, creativity in UI/UX, and solid React implementation made our product stand out. He’s passionate about his work and it shows in the final result.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        img: 'assets/review4.png',
        review:
            'From concept to execution, Ammar handled everything professionally. He combines strong technical frontend skills with thoughtful UI/UX decisions, resulting in a smooth and intuitive user experience.',
    },
];

export const myProjects = [
    {
        title: 'Coming Soon...',
        desc: 'Coming Soon...',
        subdesc:
            'Coming Soon...',
        href: '',
        texture: '',
        logo: '',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },


        ],
    }

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'React',
        title: "React is my go-to library for building dynamic and scalable user interfaces. I use it to create reusable components, manage application state efficiently, and deliver fast, interactive user experiences across modern web applications.",
        icon: '/assets/react.svg',
    },
    {
        id: 2,
        name: 'Figma',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
    },
    {
        id: 3,
        name: 'Three.js',
        title: "Three.js is my preferred tool for bringing 3D experiences to the web. I use it to create immersive visuals, animations, and interactive scenes that transform ideas into engaging, real-time graphics directly in the browser.",
        icon: '/assets/threejs.png',
    },
];