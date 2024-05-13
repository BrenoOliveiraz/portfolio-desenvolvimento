"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';


export default function Intro() {
    return (
        <section 
        className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
        id='home'
        >
            <div className='flex items-center justify-center ' >
                <div className='relative'>
                    <motion.div initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >

                        <Image
                            src="/foto_wpp.jpg" alt="Breno Oliveira" width="192" height="192" quality="95" priority={true}
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl '
                        />
                    </motion.div>
                    <motion.span className='text-2xl absolute bottom-0 right-0'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}>
                        👋
                    </motion.span>
                </div>

            </div>

            <span >
                <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium leadin-[1.5] sm:text-2xl '
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", duration: 0.2 }}
                >Hello, i'm Breno. I'm a FrontEnd developer
                    strict with deadlines and sticking to organization.<br />
                    My focus is <b><i>React(next.js) and React Native.</i></b>

                </motion.h1>
            </span>

            <motion.div className='flex sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay:0.1}}
                >

                <Link href="#contact" className=' group bg-gray-900 text-white px-7 py-3 flex items-center gap-5 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                    Contact me here <BsArrowRight className="opacity-80 group-hover: translate-x-1 transition" />
                </Link>
                <a className='bg-white py-3 px-7 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10' href='/CV.pdf' download={true}>Download CV <HiDownload className="opacity-60 group-hover: translate-y-1 transition" /></a>
                <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 ' href="https://www.linkedin.com/in/breno-oliveira-5a6816242/" target='_blank' ><BsLinkedin /></a>
                <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' href='https://github.com/BrenoOliveiraz' target='_blank'><FaGithubSquare /></a>
            </motion.div>

         

        </section>
    )
}
