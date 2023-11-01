import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { gallery } from '../constants'

const Gallery = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h6 className={styles.sectionHeadText}>Gallery</h6>
      </motion.div>
      <div className='mt-20 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10'>
        {gallery.map((image, index) => (
          <div key={index} className='p-2 bg-tertiary'>
            <img src={image} alt={`Image ${index + 1}`} className='w-full h-full' />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Gallery, "gallery")
