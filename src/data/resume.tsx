import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ibrahim Emad",
  initials: "IE",
  url: "https://dillion.io",
  location: "Giza, Egypt",
  locationLink: "https://www.google.com/maps/place/giza",
  description:
    "Biomedical Engineering student passionate about solving problems, building impactful solutions, and exploring innovative technologies.",
  summary:
    "Driven by a passion for solving real-world problems, inspired by innovation, and equipped with skills in software development, AI, computer vision, web development, and digital signal processing, I am committed to using my expertise to make a meaningful impact. With a strong foundation in technology and a focus on continuous learning, I aim to contribute to projects that transform industries and improve lives, particularly in software development and AI.",
  avatarUrl: "/me.jpg",
  skills: [
    "C/C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "OOP",
    "Design Patterns",
    "FastAPI",
    "Flask",
    "SQL",
    "React.js",
    "Next.js",
    "Docker",
    "Git",
    "REST APIs",
    "Scikit-learn",
    "Pandas",
    "PyTorch",
    "TensorFlow",
    "OpenCV"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ibrahimemad.2002x@gmail.com",
    tel: "+201094407166",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/IbrahimEmad11/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ibrahim-emad-7a4370234",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ibrahimemad.2002x@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "LikeCard",
      href: "https://en.like4card.com/",
      badges: [],
      location: "Remote",
      title: "AI/Ml Engineering Intern",
      logoUrl: "/likecard.jpg",
      start: "Aug 2024",
      end: "Present",
      description:
        "Focused on developing and optimizing methods for extracting insights from NLP queries using Large Language Models (LLMs) within SuperQuant, an AI-powered financial analysis platform for SMEs. The work involved designing and refining models to accurately interpret user queries, enabling the platform to extract actionable insights from complex financial and operational data. This enhanced the accuracy and context-awareness of the platform’s AI-powered dashboards and financial recommendations, improving its ability to deliver meaningful and efficient user interactions.",
    },
    {
      company: "KagglePro LLC",
      badges: [],
      href: "https://www.bizprofile.net/ca/san-jose/kagglepro-llc",
      location: "Remote",
      title: "Data Science Intern",
      logoUrl: "/kagglepro.png",
      start: "Jul 2024",
      end: "Aug 2024",
      description:
        "Built and fine-tuned **Large Language Models (LLMs)** using state-of-the-art transformer architectures to tackle NLP challenges. Developed optimized machine learning pipelines and data preprocessing workflows for structured and unstructured datasets, achieving competitive rankings in Kaggle competitions through effective hyperparameter tuning and model evaluation.",
    },
    {
      company: "Bld.ai",
      href: "https://www.bld.ai/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/bldai.jpg",
      start: "Jun 2022",
      end: "Jan 2023",
      description:
        "Developed a Udemy clone using HTML, CSS, JSX, and React to demonstrate front-end expertise, and built a music platform with Django, DRF, and Pytest, leveraging Celery for non-blocking, multi-threaded performance. Contributed to addthisto.cc, an email automation platform using Django and React, integrating third-party APIs and webhooks for enhanced functionality. Automated CI/CD pipelines with GitHub Actions to streamline deployments and improve workflow efficiency.",
    },
   
  ],
  education: [
    {
      school: "Cairo University",
      href: "https://cu.edu.eg/Home",
      degree: "Bachelor's Degree of Systems and Biomedical Engineering. CGPA: 3.5/4",
      logoUrl: "/cairo.png",
      start: "2020",
      end: "2025",
    },
    
  ],
  projects: [
    {
      title: "SuperQuant",
      href: "/",
      dates: "Aug 2024 - In Progress",
      active: true,
      description:
        "This **graduate project**, currently in progress, is an AI-powered healthcare finance analysis agent. Leveraging Large Language Models (LLMs) and multimodal capabilities, it delivers predictive cost modeling, fraud detection, and actionable insights from complex healthcare datasets. The project aims to revolutionize financial decision-making and operational efficiency in the healthcare sector.",
      technologies: [
        "LangChain",
        "OpenAI API",
        "Hugging Face Transformers",
        "TensorFlow",
        "PyTorch",
        "FastAPI",
        "Redis",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Golang",
        "PostgreSQL",
        "Neon",
        "GORM",
        "Docker"
      ],
      links: [
        
      ],
      image: "/superquant.jpg",
      video:
        "",
    },
    {
      title: "Vita Clinic",
      href: "https://vita-clinic.vercel.app/",
      dates: "Mar 2023 - Jun 2023",
      active: true,
      description:
        "Built an oncology clinic system designed to streamline clinic operations and enhance patient care, featuring Electronic Medical Records (EMRs), patient management tools for appointments and treatments, interactive dashboards for data visualization, a DICOM viewer for medical imaging analysis, and AI-assisted medical report generation for improved accuracy and efficiency."
      ,
      technologies: [
        "Next.js",
        "TypeScript",
        "Cornerstone",
        "Tailwind CSS",
        "Nest.js",
        "Prisma",
        "PostgreSQL",
        "Pinecone",
        "LangChain"
      ]
      ,
      links: [
        {
          type: "Website",
          href: "https://vita-clinic.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/IbrahimEmad11/Vita-Clinic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vita.png",
      video: "",
    },
    {
      title: "MammoDetect",
      href: "https://github.com/IbrahimEmad11/MammoDetect",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
      "Developed a deep learning model using Convolutional Neural Networks (CNN) to detect breast cancer, achieving a high validation accuracy of 96.7%. Focused specifically on Invasive Ductal Carcinoma (IDC) classification by employing advanced preprocessing techniques to enhance image quality and model performance.",
      technologies: [
        "CNN",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "Scikit-learn",
        "Matplotlib",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/IbrahimEmad11/MammoDetect",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Mammo.png",
      video: "",
    },
    {
      title: "Airbnb CLone",
      href: "https://homefinder-gamma.vercel.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Developed a fully responsive Airbnb clone featuring map-based location selection, reservation management, and advanced property search functionalities. Integrated NextAuth for secure user authentication, enabling features like property listing creation and seamless booking workflows to deliver a user-friendly experience."
      ,
      technologies: [
        "Next.js 13",
        "React",
        "Tailwind CSS",
        "Prisma",
        "MongoDB",
        "NextAuth"
      ]
      ,
      links: [
        {
          type: "Website",
          href: "https://homefinder-gamma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/IbrahimEmad11/next13-airbnb-clone/",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/airbnb.png",
      video:
        "",
    },
    {
      title: "FastAPI Social Media Backend",
      href: "https://fastapi.astipan.com/docs",
      dates: "Sep 2023 - Nov 2023",
      active: true,
      description:
        "Developed a robust social media backend using FastAPI, featuring user authentication with JWT security, comprehensive CRUD operations, and database migrations. Employed containerization for seamless deployment and testing. ",
      technologies: [
        "FastAPI",
        "SQLAlchemy",
        "Alembic",
        "Uvicorn",
        "Docker",
        "pytest"
      ]
      
      ,
      links: [
        {
          type: "Website (Docs)",
          href: "https://fastapi.astipan.com/docs",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/IbrahimEmad11/social-media-api-fastapi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/social.png",
      video: "",
    },
    {
      title: "Fourier Fusion Lab",
      href: "https://github.com/IbrahimEmad11/Fourier-Fusion-Lab",
      dates: "Dec 2023 - Jan 2024",
      active: true,
      description:
        "Fourier Fusion Lab is an advanced desktop application designed to explore the interplay between magnitude and phase components in signals, with a focus on 2D grayscale images. It provides tools for viewing, customizing, and mixing images using Fourier Transform components, enabling real-time manipulation and visualization for educational and analytical purposes."
      ,
      technologies: [
        "Python",
        "NumPy",
        "OpenCV",
        "Matplotlib",
        "PyQt",
        "Pillow",
        "GitHub",
        "Fourier Transform"
      ]
      
      ,
      links: [
        {
          type: "Source",
          href: "https://github.com/IbrahimEmad11/Fourier-Fusion-Lab",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mixer.png",
      video: "",
    },
    {
      title: "Hough Transform and Active Contour Model",
      href: "https://github.com/IbrahimEmad11/Hough-Transform-Snake",
      dates: "Jan 2023 - Feb 2023",
      active: true,
      description:
        "This project focuses on edge and boundary detection using advanced computer vision techniques. Implemented Canny edge detection for identifying edges, Hough Transform for detecting lines, circles, and ellipses, and Active Contour Model (SNAKE) for contour evolution. Features include gradient computation, energy functional analysis, and contour evolution using a greedy algorithm for precise segmentation."
      ,
      technologies: [
        "Python",
        "NumPy",
        "OpenCV",
        "Matplotlib",
        "Scikit-image"
      ]      
      ,
      links: [
        {
          type: "Source",
          href: "https://github.com/IbrahimEmad11/Hough-Transform-Snake",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hough.png",
      video: "",
    },
  ],

} as const;
