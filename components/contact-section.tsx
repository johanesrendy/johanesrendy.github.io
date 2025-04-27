"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  {
    name: "Email",
    value: "johanesrendy9@gmail.com",
    icon: Mail,
    link: "mailto:johanesrendy9@gmail.com",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/johanes-rendy",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/johanesrendy/",
  },
  {
    name: "GitHub",
    value: "github.com/johanes-rendy",
    icon: Github,
    link: "https://github.com/johanesrendy",
  },
];

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12 inline-block relative">
            Contact Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-4 sm:p-6 rounded-lg bg-card hover:shadow-lg transition-all hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold">
                    {contact.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {contact.value}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
