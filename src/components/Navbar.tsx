import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          LabXIII
        </Link>
        <div className="flex space-x-4">
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:underline">
            About
          </Link>
          <Link href="/portfolio" className="text-gray-700 dark:text-gray-300 hover:underline">
            Portfolio
          </Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
