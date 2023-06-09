import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-10 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
    <motion.div 
     initial={{
      x:-500,
     opacity:0,
     scale:0.5,
    }}
     animate={{
      x:0,
      opacity: 1,
      scale:1,
           }}
     transition={{ duration:1.5  }} 
            className="flex flex-row items-center"
            >
{/* Social Icons */}
        <SocialIcon url="https://www.linkedin.com/in/naga-dhupaguntla/" 
        fgColor='grey'
         bgColor='transparent'
         />
         <SocialIcon url="https://github.com/numamahesh" 
        fgColor='gray'
         bgColor='transparent'
         />

<SocialIcon url="https://www.hackerrank.com/dnagaumamahesh" 
        fgColor='gray'
         bgColor='transparent'
         />  
    </motion.div>

      <motion.div
      initial={{
        x:500,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{ duration:1.5}} 
      className="flex flex-row items-center text-gray-300 cursor-pointer mx-auto z-20 xl:items-center"
      >
        <SocialIcon 
        className='cursor-pointer'
        network='email'
        fgColor='gray'
        bgColor='trasparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 '>Get in touch</p>
        </motion.div>
      </header>
  )
}