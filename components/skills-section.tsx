"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Skill = { name: string; icon: string };

const skills: Skill[] = [
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Git", icon: "git" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Ant Design", icon: "antdesign" },
  { name: "Figma", icon: "figma" },
  { name: "VS Code", icon: "vscode" },
];

// Group skills into rows of 3 for mobile and 5 for larger screens
function groupSkills(skills: Skill[], isMobile: boolean) {
  const itemsPerRow = isMobile ? 3 : 5;
  const rows = [];
  for (let i = 0; i < skills.length; i += itemsPerRow) {
    rows.push(skills.slice(i, i + itemsPerRow));
  }
  return rows;
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 inline-block relative">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
          </h2>

          {/* Mobile View (3 icons per row) */}
          <div className="space-y-8 md:hidden">
            {groupSkills(skills, true).map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-4"
              >
                {row.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      delay: 0.1 * (index + rowIndex * 3),
                      duration: 0.5,
                    }}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <div className="w-8 h-8 text-primary">
                        {/* Placeholder for skill icon */}
                        <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-xs">
                            {skill.icon.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Tablet and Desktop View (5 icons per row) */}
          <div className="hidden md:block space-y-12">
            {groupSkills(skills, false).map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-6 md:gap-8"
              >
                {row.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      delay: 0.1 * (index + rowIndex * 5),
                      duration: 0.5,
                    }}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <div className="w-10 h-10 text-primary">
                        {/* Placeholder for skill icon */}
                        <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-xs">
                            {skill.icon.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
