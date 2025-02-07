const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-700 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} LabXIII. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  