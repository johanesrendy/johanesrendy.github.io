"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: "Jago Teknik",
    role: "Project Manager",
    period: "Aug 2023 - Jan 2025",
    logo: "/jtlogo.svg",
    website: "https://www.linkedin.com/company/jagoteknik/",
  },
  {
    company: "Zeta Solution",
    role: "Web Software Engineer",
    period: "Feb 2025 – May 2025",
    logo: "/zetalogo.jpg",
    website: "https://www.linkedin.com/company/zetasolutionid/",
  },
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-12 inline-block relative">
            Work Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <a
                  href={exp.website}
                  target="_blank"
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-primary/10 dark:bg-primary/30 flex items-center justify-center">
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={exp.company}
                        className="w-10 h-10 sm:w-12 sm:h-12"
                      />
                    </div>
                  </div>

                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold">
                      {exp.company}
                    </h3>
                    <p className="text-primary">{exp.role}</p>
                  </div>

                  <div className="flex-shrink-0 bg-primary/10 px-4 py-2 rounded-full mt-2 sm:mt-0">
                    <p className="text-sm font-medium">{exp.period}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
