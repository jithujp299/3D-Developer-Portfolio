import React from 'react'
import {motion} from 'framer-motion'
// import Tilt from 'react-tilt'
import Tilt from 'react-parallax-tilt';
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServicesCard = ({index,title,icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12
        min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div> 
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className ={styles.sectionSubText}>Introduction</p>
    <h2 className = {styles.sectionHeadText}>Overview.</h2>
   </motion.div>

   <motion.p variants = {fadeIn("", "", 0.1, 1)}
   className ='mt-4 text-secondary text-[15px] max-w-3xl leading-[26px]'>
   I'm a dedicated Python Fullstack Developer with experience in HTML, CSS, JavaScript, and expertise in frameworks like Django. I've successfully collaborated on projects ranging from hospital management systems to e-commerce platforms, delivering efficient and user-friendly solutions to real-world challenges. Let's work together to turn your vision into reality!
   </motion.p>

   <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service,index) =>(
      <ServicesCard key={service.title} index={index} {...service} />
    ))}
   </div>
   </>
  )
}

export default SectionWrapper(About,"about")