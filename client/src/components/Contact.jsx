import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import LampCanvas from "./canvas/Lamp";

const Contact = () => {

  const [loading, setLoading] = useState(false);

  return (
    <div className="xl:mt-3 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div
          className="mt-5 flex flex-col gap-8"
        >
         <label className="flex items-center">
         <span className="mr-4 hover:bg-blue-700 p-1 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  </span>
  <div className="text-container">
    <span className="text-white font-medium block text-lg">Location</span>
    <span className="bg-tertiary text-white font-medium block">Erumeli</span>
  </div>
</label>
<label className="flex items-center">
<span className="mr-4 hover:bg-blue-700 p-1 rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

  </span>
  <div className="text-container">
    <span className="text-white font-medium block text-lg">Email</span>
    <span className="bg-tertiary text-white font-medium block">dharmasasthacharitabletrust@gmail.com</span>
  </div>
 
</label>

<label className="flex items-center">
  <span className="mr-4 hover:bg-blue-700 p-1 rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>


  </span>
  <div className="text-container">
    <span className="text-white font-medium block text-lg">Call</span>
    <span className="bg-tertiary text-white font-medium block">+91-9446718135</span>
  </div>
 
</label>
         
        </div>

        
      </motion.div>
      <motion.div
       variants={slideIn("right", "tween", 0.2, 1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
       >
        <LampCanvas/>
        
      </motion.div>
    </div>
  );
};


export default SectionWrapper(Contact,"contact")
