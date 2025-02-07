import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-rows-[200px_1fr_200px] items-center">
                        <div className="max-w-2xl flex-col gap-8 row-start-1 mx-auto text-center">
                            <Image
                                className="mx-auto"
                                src="/next.svg"
                                alt="Next.js Logo"
                                width={180}
                                height={37}
                                priority
                            />
                            <h1 className="mt-6 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                                Welcome to LabXIII
                            </h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Explore our AI projects and learn more about us.
                            <
                <motion.button whileHover={{ scale: 1.1 }} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
                    Learn More
                </motion.button>/p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
}
