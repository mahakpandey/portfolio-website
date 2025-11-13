// data.ts
import {
  GridItemType,
  ProjectType,
  TestimonialType,
  CompanyType,
  WorkExperienceType,
  SocialMediaType,
  NavItemType,
} from "@/types/Types";

export const navItems: NavItemType[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItemsData: GridItemType[] = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My toolbox includes",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/grid.svg",
  },
  // {
  //   id: 5,
  //   title: "Currently building a custom pptx web-view",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 5,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const techStack: Array<string> = ["React.js", "Redux", "Next.js"];
export const techStackTwo: Array<string> = [
  "Javascript",
  "Typescript",
  "tailwind",
];
export const techStackThree: Array<string> = ["Html", "CSS", "SASS"];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/12Mahak?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/12Mahak/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/12Mahak/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/12Mahak/iphone",
  },
];

export const testimonials: TestimonialType[] = [
  {
    quote:
      "I've worked closely with Mahak for a very long time and know her well. She has a strong curiosity about technologies and excels at diving deep into concepts. She can break down problems into manageable pieces and write code accordingly. His debugging and feature-building skills are exceptional. Beyond her technical abilities, her communication skills are commendable, making her a complete package.",
    name: "Aryan Pidiha",
    title: "Front-end Web Developer",
  },
  {
    quote:
      "I've worked with Mahak in one of my recent projects talking about her skills she has got a good grip over frontend technologies like react redux typescript. She can understand the business perspective and think of a solution considering business perspective",
    name: "Sachin Patel",
    title: "Sr. Fullstack developer",
  },
  {
    quote:
      "Mahak mam is really dedicated to her team. When there's a tough problem, She takes charge and works hard to solve it. She spends time finding solutions, making sure the project goes well. Personally, when I have problems, she helps me out a lot.",
    name: "Krishna Rathod",
    title: "Front end Developer",
  },
  {
    quote:
      "Mahak mam's positive attitude and willingness to collaborate make her a pleasure to work with. She approaches challenges with a can-do attitude and is always ready to lend a helping hand to her teammates.",
    name: "Aditya Pandey",
    title: "Backend developer ",
  },
];

export const companies: CompanyType[] = [
  {
    id: 1,
    name: "Infosys",
    img: "/Infosys_logo.png",
    nameImg: "/Infosys_logo.png",
  },
  {
    id: 2,
    name: "Siya",
    img: "/siya_logo.png",
    nameImg: "/siya_logo.png",
  },
];

export const workExperience: WorkExperienceType[] = [
  {
    id: 1,
    title: "Freelance Web Dev",
    desc: "Developed a real-time Admin dashboard using React JS and Redux, displaying critical system metrics and charts using recharts.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "MTS - STV pvt. ltd.",
    desc: "Designed and developed web app with cross browser compatibility and responsiveness.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Frontend web Developer - STV pvt. ltd.",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Frontend Engineer ll - ConnectWise LLP",
    desc: "Contributing to the core development of the ASIO product, focusing on major components and performance optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  }
];

export const socialMedia: SocialMediaType[] = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/mahakpandey",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/mahakparashar",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/mahak-pandey-329b64213/",
  },
];

