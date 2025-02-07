import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <Navbar />
      <div className="mt-6">
        <h1 className="text-3xl font-semibold">Our Portfolio</h1>
        <p className="mt-4">This is the Portfolio page with placeholder text.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
