import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import {motion} from 'framer-motion'
import {fadeIn,textVariant} from '../utils/motion'
import { Tilt } from 'react-tilt';

const About = () => {
    return (
      <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Learn About Us</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <p className={`${styles.sectionSubText} underline`}>Sree dharma sastha harihara seva charitable temple trust</p>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading[30px]'>
        
People from India and other foreign countries are flocking to the world famous Sabarimala Sri Dharma Shastha Temple irrespective of caste and creed.
Devotees visiting Sabarimala and any hungry person are provided food, drinking water and other services at two places.

<p className='font-bold'>It works from 7 am to 11 pm in a way that no matter how many people come at any time.</p> 
This set of young people was born and raised in Naranamthod, which is the closest area to Sabarimala. We were members of the Perunad panchayat, which is home to the Sabarimala temple. They are providing aid to the pilgrims who come to view Sabarimala, the indigenous people who dwell in the Sabarimala forest, and the poor people from all castes and creeds.
      </motion.p>
      <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading[30px]'>
      To emerge as a truly representative body of Ayyappa devotees across the world to protect, preserve and propagate Ayyappa Dharma as embodied by the holy shrine of Sabarimala, rising above caste, class and language barriers and through this, work towards Hindu unity and national reconstruction.
      </motion.p>
      
      
      </>
    )
  }
  
  export default SectionWrapper(About,"about")