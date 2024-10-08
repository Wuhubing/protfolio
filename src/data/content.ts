export const aboutData = {
  name: "Ce Guo",
  title: "Data Analyst",
  location: "Los Angeles, California",
  introduction: `I am passionate about leveraging data to drive insights and solve complex problems. With a strong foundation in data science and machine learning, I enjoy tackling challenging projects and collaborating with diverse teams to create innovative solutions.`,
  longIntroduction: `My journey in data science began during my undergraduate studies at the University of Wisconsin-Madison, where I developed a strong foundation in statistical analysis and machine learning. This experience ignited my passion for using data to uncover meaningful insights and drive decision-making processes.`,
  career: `After completing my undergraduate degree, I gained valuable industry experience through internships at Huawei and China Unicom, where I applied my data analysis skills to real-world problems. Currently, I'm pursuing a Master's degree in Data Science at UCLA, further expanding my knowledge and skills in advanced analytics and AI technologies.`,
  interests: `I'm particularly interested in the application of machine learning in various domains, including natural language processing and computer vision. Outside of my studies, I enjoy participating in data science competitions and contributing to open-source projects. I'm also an avid hiker and enjoy exploring the beautiful trails around Los Angeles.`,
  openToWork: `I'm always open to exciting opportunities in data science and machine learning, where I can apply my skills, continue learning, and make a meaningful impact. If you'd like to collaborate or discuss potential projects, please feel free to reach out!`,
  skills: [
    "Python", "R", "SQL", "Machine Learning", "Deep Learning", "Natural Language Processing",
    "Data Visualization", "Statistical Analysis", "Big Data Technologies", "TensorFlow",
    "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau",
    "AWS", "Docker", "Git", "Agile Methodologies"
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/ceguo/",
    github: "https://github.com/ceguo",
    cpBlog: "https://your-cpblog-url.com", // 添加这行
  },
  navItems: ["about", "experience", "projects", "education", "skills"]
};

export const experienceData = [
  {
    company: "UCLA",
    position: "Graduate Research Assistant",
    period: "September 2023 — Present",
    logoUrl: "/images/ucla-logo.png",
    description: `As a Graduate Research Assistant at UCLA, I'm involved in cutting-edge research projects in the field of data science. My work focuses on developing advanced machine learning models for natural language processing tasks, with a particular emphasis on improving the efficiency and interpretability of large language models.`,
    link: "https://www.ucla.edu/",
    technologies: ["Python", "PyTorch", "NLP", "Machine Learning", "Deep Learning"]
  },
  {
    company: "Huawei",
    position: "Data Science Intern",
    period: "June 2022 — August 2022",
    logoUrl: "/images/huawei-logo.png",
    description: `During my internship at Huawei, I worked on developing predictive models for network optimization. I analyzed large datasets of network performance metrics and user behavior to identify patterns and anomalies, contributing to improved network reliability and user experience.`,
    link: "https://www.huawei.com/",
    technologies: ["Python", "SQL", "Machine Learning", "Big Data", "Data Visualization"]
  },
  {
    company: "China Unicom",
    position: "Data Analyst Intern",
    period: "May 2021 — July 2021",
    logoUrl: "/images/china-unicom-logo.png",
    description: `At China Unicom, I assisted in analyzing customer data to improve service offerings and customer retention strategies. I developed dashboards and reports to visualize key performance indicators and customer trends, providing actionable insights to the marketing team.`,
    link: "https://www.chinaunicom.com/",
    technologies: ["R", "SQL", "Tableau", "Statistical Analysis", "Data Visualization"]
  },
  {
    company: "Military LLM Project",
    position: "Research Assistant",
    period: "January 2023 — May 2023",
    logoUrl: "/images/military-llm-logo.png",
    description: `I contributed to a confidential project focused on developing specialized large language models for military applications. My role involved fine-tuning models for specific tasks, ensuring data security, and optimizing model performance for deployment in resource-constrained environments.`,
    technologies: ["Python", "NLP", "Deep Learning", "Security Protocols", "Model Optimization"]
  }
];

export const projectData = [
  {
    title: "Sentiment Analysis for Social Media",
    description: "Developed a machine learning model to analyze sentiment in social media posts, achieving 92% accuracy in classifying positive, negative, and neutral sentiments. Implemented using Python, NLTK, and scikit-learn.",
    link: "https://github.com/ceguo/sentiment-analysis",
    image: "/images/projects/sentiment-analysis.png"
  },
  {
    title: "COVID-19 Data Visualization Dashboard",
    description: "Created an interactive dashboard using Tableau to visualize COVID-19 trends across different countries. The dashboard provides real-time updates and allows users to explore various metrics and compare regional data.",
    link: "https://public.tableau.com/profile/ceguo#!/vizhome/COVID-19Dashboard",
    image: "/images/projects/covid-dashboard.png"
  },
  // 添加更多项目...
];

export const educationData = [
  {
    institution: "University of California, Los Angeles (UCLA)",
    degree: "Master of Science in Data Science",
    period: "2023 — Present",
    description: "Focusing on advanced machine learning techniques, big data analytics, and statistical modeling. Participating in research projects related to natural language processing and computer vision.",
    link: "https://www.ucla.edu/"
  },
  {
    institution: "University of Wisconsin-Madison",
    degree: "Bachelor of Science in Data Science",
    period: "2019 — 2023",
    description: "Completed a rigorous program covering fundamentals of data analysis, machine learning, and statistical inference. Participated in various data science competitions and hackathons.",
    link: "https://www.wisc.edu/"
  }
];