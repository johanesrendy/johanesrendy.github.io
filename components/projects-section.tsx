"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ProjectCard, { type Project } from "./project-card";

const projects: Project[] = [
  {
    title: "ISE 2023",
    period: "Apr 2023 – Aug 2023",
    description:
      "official platform for the annual event that held by information system ITS Surabaya, focusing on personal development and digital industry challenges. It offers event details, registration, and information on speakers and sessions in an easy-to-navigate design.",
    technologies: ["Laravel", "TailwindCSS"],
    website:
      "https://web.archive.org/web/20230612180557/https://www.ise-its.com/",
    image: "/ise23.png",
  },
  {
    title: "3C KMK ITS 2023",
    period: "Apr 2023 – Nov 2023",
    description:
      "website for the annual event that held by KMK ITS, provides information on sports and e-sports tournaments, event schedules, registration, and highlights from past events. It also integrates with social media for real-time updates, promoting unity among Catholic youth communities.",
    technologies: ["Wordpress", "Elementor"],
    website: "https://arek.its.ac.id/kmk/3c/",
    image: "/3c23.png",
  },
  {
    title: "Jago Teknik",
    period: "Aug 2023 - Des 2024",
    description:
      "educational platform aimed at helping first-year engineering students transition to university life. It offers flexible learning services such as online classes, personal tutoring, practice exercises, and webinars, with a focus on supporting students in understanding basic engineering courses.",
    technologies: [
      "React.JS",
      "Typescript",
      "TailwindCSS",
      "Express.JS",
      "MySQL",
    ],
    website: "https://jagoteknik.id/",
    image: "/jt.png",
  },
  {
    title: "3C KMK ITS 2024",
    period: "Jan 2024 – Aug 2024",
    description:
      "website for the annual event that held by KMK ITS, provides information on sports and e-sports tournaments, event schedules, registration, and highlights from past events. It also integrates with social media for real-time updates, promoting unity among Catholic youth communities.",
    technologies: ["Wordpress", "Elementor"],
    website: "https://arek.its.ac.id/kmk/3c/",
    image: "/3c24.png",
  },
  {
    title: "V-Rent",
    period: "Mar 2024 - Jun 2024",
    description:
      "car rental application designed to simplify the management for car rental business owners and make it easier for users to rent cars.",
    technologies: ["React.JS", "TailwindCSS", "Sweet Alert", "Express.JS"],
    website:
      "https://docs.google.com/presentation/d/11cY2xft2Q2oiuKb9qkdJQWO0woKAfJxLBICTjLzrgis/edit#slide=id.g247807f56d4_0_28",
    image: "/v-rent.png",
  },
  {
    title: "ISE 2024",
    period: "May 2024 – Oct 2024",
    description:
      "official platform for the annual event that held by information system ITS Surabaya, focusing on personal development and digital industry challenges. It offers event details, registration, and information on speakers and sessions in an easy-to-navigate design.",
    technologies: ["Next.JS", "Typescript", "TailwindCSS", "Next UI"],
    website:
      "https://web.archive.org/web/20241007135801/https://www.ise-its.com/",
    image: "/ise24.png",
  },
  {
    title: "KMK ITS",
    period: "Nov 2024 - Des 2024",
    description:
      "information platform for the Catholic student community at ITS, providing details about activities, events, and online registration. With a responsive design, visitors can easily access information about mass, mentoring, and other programs",
    technologies: ["Wordpress", "Elementor"],
    website: "https://arek.its.ac.id/kmk/home",
    image: "/kmkits.png",
  },
  {
    title: "CI/CD for Auto Deployment",
    period: "Okt 2024 - Des 2024",
    description:
      "comprehensive CI/CD pipeline that includes build and testing automation, streamlining the deployment process using AWS EC2 Server and NGINX as the webserver.",
    technologies: ["AWS EC2", "NGINX", "GitHub Actions"],
    website: "https://github.com/johanesrendy/bigdashboard_pso/actions",
    image: "/cicd.png",
  },
  {
    title: "Jasamurni",
    period: "Mar 2025 - Present",
    description:
      "A website from one of Zeta Solution's clients. It is a website for automating business processes in a wholesale company, Jasamurni, covering everything from supply management, customer order processing, to a dashboard displaying data in the form of graphs.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Ant Design",
      "Shadcn",
      "Supabase",
      "postgreSQL",
    ],
    website: "",
    image: "/jasamurni.png",
  },
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [visibleCount, setVisibleCount] = useState(4); // State untuk jumlah kartu yang terlihat
  const initialVisibleCount = 4; // Jumlah kartu awal yang terlihat

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Tambahkan 4 kartu lagi saat tombol diklik
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisibleCount); // Kembalikan jumlah kartu ke jumlah awal
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 inline-block relative">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, visibleCount).map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            {visibleCount < projects.length && ( // Tampilkan tombol "Show More" jika masih ada kartu yang belum terlihat
              <button
                onClick={handleShowMore}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
              >
                Show More
              </button>
            )}

            {visibleCount > initialVisibleCount && ( // Tampilkan tombol "Show Less" jika jumlah kartu lebih dari jumlah awal
              <button
                onClick={handleShowLess}
                className="px-6 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
              >
                Show Less
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
