import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Contact Us</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            This is the Contact page with placeholder text.
                        </p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
