import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <Navbar />
      <div className="mt-6">
        <h1 className="text-3xl font-semibold">About LabXIII</h1>
        <p className="mt-4">This is the About page with placeholder text.</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
