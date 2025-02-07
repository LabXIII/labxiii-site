import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Portfolio = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="container mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
                <Navbar />
                <div className="mt-10">
                    <h1 className="text-3xl font-semibold">Our Portfolio</h1>
                    <p className="mt-4">This is the Portfolio page with placeholder text.</p>
                </div>
                <Footer />
            </div>
        </motion.div>
    );
};

export default Portfolio;