"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import profileImage from "@/public/profile.png"; // Import gambar

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-16 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-8 md:mt-0 md:hidden"
          >
            <div className="relative w-[18rem] h-[30rem] ">
              <Image
                src={profileImage}
                alt="Johanes Rendy Wichaksono"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium text-lg"
            >
              HELLO!
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold"
            >
              I&apos;m Johanes Rendy Wichaksono
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-muted-foreground"
            >
              Front End Web Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button asChild className="mt-4" size="lg">
                <a href="#about">
                  Explore More <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="justify-center mt-8 md:mt-0 hidden md:flex"
          >
            <div className="relative md:w-[18rem] md:h-[30rem] lg:w-[20rem] lg:h-[32rem]">
              <Image
                src={profileImage}
                alt="Johanes Rendy Wichaksono"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
