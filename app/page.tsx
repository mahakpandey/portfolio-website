"use client";
import Approach from "@/components/Approach/Approach";
import Grid from "@/components/Grid/Grid";
import Testimonials from "@/components/Testimonials/Testimonials";
import Experience from "@/components/experience/Experience";
import { FloatingNav } from "@/components/floating-nav/FloatingNav";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import RecentProjects from "@/components/recent-projects/RecentProjects";
// import { navItems } from "@/data";

import { FaCommentAlt, FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { MdConnectWithoutContact } from "react-icons/md";

const navItems = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Projects", link: "#projects", icon: <GrProjects /> },
  { name: "Testimonials", link: "#testimonials", icon: <FaCommentAlt /> },
  { name: "Contact", link: "#contact", icon: <MdConnectWithoutContact /> },
];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="" />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
