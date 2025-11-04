import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Code, Briefcase, Info, Mail, Sparkles } from "lucide-react";
import { FloatingNav } from "../ui/floating-navbar";

export function AceternityNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "/services/web-development",
      icon: <Code className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Portfolio",
      link: "/portfolio",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default AceternityNavbar;

