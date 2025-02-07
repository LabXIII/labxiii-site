import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white dark:bg-black shadow-md z-50"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          LabXIII
        </div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-gray-800 dark:text-gray-200 focus:outline-none">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
          <Link href="/portfolio" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Portfolio</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
