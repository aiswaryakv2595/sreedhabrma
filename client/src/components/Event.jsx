import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { events } from '../constants';
import { SectionWrapper } from '../hoc';

const ProjectCard = ({index,name,description,image})=> {
    return (
      <motion.div
      variants={fadeIn("up","spring",index*0.5,0.75)}>
        <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full">
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
          
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            
          </div>
          
        </Tilt>
      </motion.div>
    )
    }
const Event = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Events</p>
      <h2 className={styles.sectionHeadText}>charity events</h2>
    </motion.div>
   
    <div className="mt-20 flex flex-wrap gap-5">
      {events.map((event,index)=> (
        <ProjectCard
        key={`event-${index}`}
        index={index}
        {...event}
        />
      ))}
    </div>
  </>
  )
}

export default SectionWrapper(Event,"events")