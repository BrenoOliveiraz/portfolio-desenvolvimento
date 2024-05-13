
"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}
        id='about'
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3 font-medium '>
                Hello, I'm Breno, after graduating with a degree in Law, i decided to purse my passion for programming. My favorite part of programming is problem solving, I like the feeling of finally solving a problem. My core stack is React and Next.js. <br />  Even though I'm at the beginning of my career, my thirst for knowledge has led me to acquire skills in HTML, CSS, JavaScript, and explore Next.js to create efficient web applications. I've worked on personal projects that have enhanced my skills in responsiveness, usability, and performance optimization. Furthermore, my commitment to SEO ensures that projects stand out on search engines.
            </p>
            <p className='mt-3'>When I'm not coding, I enjoy to play video games, go to the gym and hang out with friends. Furthermore, I also like to stay informed about politics and news in the world of technology.</p>

        </motion.section>
    )
}
