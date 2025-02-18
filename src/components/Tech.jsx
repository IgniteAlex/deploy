import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiSpringboot } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { LiaJava } from "react-icons/lia";
import { TfiAndroid } from "react-icons/tfi";
import { animate, motion } from "framer-motion"

const iconVariants = (duration)=> ({
    initial : {y:-10},
    animate:{
        y : [10,-10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat:Infinity,
            repeatType : "reverse",
        },
    },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-r-neutral-800 p-4">
                <LiaJava className='text-7xl text-orange-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-r-neutral-800 p-4">
                <SiSpringboot className='text-7xl text-green-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-r-neutral-800 p-4">
                <TbBrandMysql className='text-7xl text-blue-800'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-r-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-r-neutral-800 p-4">
                <TfiAndroid className='text-7xl text-green-600'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech