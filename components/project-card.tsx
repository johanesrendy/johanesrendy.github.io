"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  website: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

export default function ProjectCard({
  project,
  index,
  inView,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow h-[600px] flex flex-col"
      whileHover={{ y: -5 }}
    >
      <div className="h-48 relative overflow-hidden">
        {/* Image container with fixed dimensions and background fallback */}
        <img
          src={project.image || "/placeholder.svg?height=300&width=600"}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-4 sm:p-6 bg-card flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-left">
          {project.title}
        </h3>
        <p className="text-sm text-muted mb-4 text-left text-black dark:text-white">
          {project.period}
        </p>
        <div className="flex-1">
          <p className="text-sm mb-4 text-left h-[120px] overflow-y-auto text-gray-500">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 ">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-2 py-1 rounded-full bg-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Website
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
