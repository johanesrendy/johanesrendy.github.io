"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 inline-block relative">
            About
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left"></span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg leading-relaxed"
          >
            A Student of Information System from Sepuluh Nopember Institute of Technology. Experienced as a Front-End
            Developer who works with HTML, CSS, JavaScript, React.js, Next JS, Typescript. Currently working at some
            events as a Front-End Developer and also graduated from Full-Stack Web Developer bootcamp program at
            HariSenin. A responsible, dedication, honest individual, and have a strong inclination for learning new
            things.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
