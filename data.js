/* ============================================================
   data.js  —  THE ONLY FILE YOU NEED TO EDIT
   Change the text below, save, and refresh index.html.
   (Or open editor.html, fill the form and download a new data.js.)
   Keep the quotes "..." and commas , exactly as they are.
   ============================================================ */

const PORTFOLIO = {
  siteTitle: "Chandresh N | Aspiring Software Developer",
  siteDescription:
    "Portfolio of Chandresh N, a B.Tech CSE student and Python developer building mobile apps with Kivy and Flutter.",

  name: "Chandresh N",
  title: "Aspiring Software Developer",

  // Lines that type out one after another in the hero section
  roles: [
    "Python Developer",
    "Mobile App Builder",
    "Kivy & Flutter Explorer",
    "B.Tech CSE Student",
  ],

  availability: "Open to remote, part-time internships",

  // 3D background shapes (WebGL). Set to false to turn them off (e.g. for very old phones).
  enable3D: true,
  location: "Tamil Nadu, India",

  email: "C29082008@outlook.com",
  phone: "+91 7598962915",
  showPhone: false, // set to true if you want your phone number visible on the public site

  social: {
    github: "https://github.com/Chandrudesi2604",
    linkedin: "https://www.linkedin.com/in/chandresh-n-028096426",
  },

  // Files inside the assets/ folder. Replace the files, or change the names here.
  photo: {
    illustrated: "assets/photo-toon.jpg",
    original: "assets/photo-original.jpg",
  },
  resumeFile: "assets/resume.pdf",

  // Optional: paste a Formspree URL (https://formspree.io/f/xxxx) to receive form
  // messages by email. Leave empty to open the visitor's mail app instead.
  formEndpoint: "",

  about: {
    summary:
      "First-year B.Tech Computer Science and Engineering student at Amrita Vishwa Vidyapeetham with intermediate Python skills and hands-on experience building mobile applications with Python (Kivy) and Flutter. I also work comfortably with Windows systems, computer hardware, Git and GitHub.",
    secondary:
      "I'm interested in software development, web development and application development, and I'm looking for a remote, part-time internship where I can learn from real projects and contribute to them.",
    interests: [
      "Software Development",
      "Web Development",
      "Python Programming",
      "Application Development",
      "IT Systems",
    ],
  },

  // Small numbers shown under the hero. Edit freely.
  stats: [
    { value: 3, suffix: "", label: "Projects built" },
    { value: 3, suffix: "", label: "Python certifications" },
    { value: 98, suffix: "%", label: "Best course score" },
    { value: 2030, suffix: "", label: "B.Tech graduation" },
  ],

  skills: [
    {
      group: "Programming",
      icon: "code",
      items: ["Python (Intermediate)"],
    },
    {
      group: "Frameworks",
      icon: "layers",
      items: ["Kivy", "Flutter"],
    },
    {
      group: "Tools",
      icon: "tool",
      items: [
        "VS Code",
        "Android Studio",
        "Git",
        "GitHub",
        "Math",
        "NumPy",
        "Pandas",
        "MySQL",
      ],
    },
    {
      group: "Systems & Hardware",
      icon: "cpu",
      items: [
        "Windows installation",
        "Configuration",
        "Troubleshooting",
        "Computer components",
        "RAM & storage",
      ],
    },
    {
      group: "Concepts",
      icon: "bulb",
      items: ["JSON", "Mobile App Development", "IoT", "AI/ML fundamentals"],
    },
  ],

  projects: [
    {
      name: "Smart Student Daily Planner & Backpack Assistant",
      stack: ["Python", "Kivy"],
      description: [
        "Android application for managing student timetables, academic tasks and daily college requirements.",
        "Assignment tracking, class schedules and reminder features.",
      ],
      github: "", // paste the repo link, e.g. "https://github.com/Chandrudesi2604/planner"
      demo: "",
    },
    {
      name: "College Connect",
      stack: ["Flutter", "JSON"],
      description: [
        "College information app combining announcements and useful links in one place.",
        "JSON-based content management so information can be updated without modifying the app code.",
      ],
      github: "",
      demo: "",
    },
    {
      name: "HERBOMATE: Smart Herbal Cultivation System",
      stack: ["IoT", "AI/ML"],
      description: [
        "Team project exploring smart herbal cultivation using IoT and AI/ML concepts.",
      ],
      github: "",
      demo: "",
    },
  ],

  education: [
    {
      degree: "B.Tech, Computer Science and Engineering",
      school: "Amrita Vishwa Vidyapeetham, Nagercoil, Tamil Nadu, India",
      period: "2026 – 2030 (Expected)",
    },
  ],

  certifications: [
    {
      title: "The Joy of Computing Using Python",
      issuer: "NPTEL",
      score: "90%",
    },
    {
      title: "Python Programming (13 Hours)",
      issuer: "Cookies & Cursor",
      score: "98%",
    },
    {
      title: "Python Programming Course",
      issuer: "EXCEL KEYS",
      score: "95%",
    },
  ],

  activities: [
    "Participated in a college-level ideathon.",
    "Participated in designing competitions using web tools.",
  ],
};
