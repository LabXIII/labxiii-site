import Navbar from ../../ components / Navbar
import Footer from ../../ components / Footerr'
import { motion } from "framer-motion";;



cconst About = () => {
  return (
    <    <div className="bg-white text-gray-800 dark:bg-black dark:text-gray-300 min-h-screen">
    motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          About LabXIII
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          This is the About page with placeholder text.
        </p>
      </div>
    </motion.div>
    </div>
  );
};

export default About;
        </d