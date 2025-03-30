import { useState } from "react";
import { X, Send, MessageCircle, EqualApproximately } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
  className={`fixed inset-0 transition-all duration-300 ${
    isOpen ? "backdrop-blur-xs" : ""
  }`}
>
  <button
    onClick={toggleSidebar}
    className="fixed top-6 right-6 z-[9999] rounded-full bg-black px-4 py-4 text-white hover:bg-gray-800 cursor-pointer"
  >
    <EqualApproximately height={30} width={30} />
  </button>
</div>


      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs"
          onClick={toggleSidebar}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed right-0 top-0 z-50 w-md transform bg-black p-8 text-white shadow-xl mt-2 rounded-2xl"
      >
        <button
          onClick={toggleSidebar}
          className="absolute right-6 top-6 rounded-full bg-gray-200 p-2 text-black hover:bg-gray-300"
        >
          <X className="h-9 w-9 cursor-pointer" />
        </button>

        <nav className="mt-12 flex flex-col space-y-8 justify-center">
        <motion.div
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink
              to="/"
              className="text-5xl text-gray-400 transition-all duration-400 hover:text-white"
              onClick={toggleSidebar}
            >
              Home
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink
              to="/about/1"
              className="text-5xl text-gray-400 transition-all duration-400 hover:text-white"
              onClick={toggleSidebar}
            >
              About
            </NavLink>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink
              to="/work/2"
              className="text-5xl text-gray-400 transition-all duration-400 hover:text-white"
              onClick={toggleSidebar}
            >
              Works
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink
              to="/contact/3"
              className="text-5xl text-gray-400 transition-all duration-400 hover:text-white"
              onClick={toggleSidebar}
            >
              Contacts
            </NavLink>
          </motion.div>
        </nav>

        <div className="mt-10 bottom-8 left-8 flex items-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="#"
            className="rounded-full bg-gray-200 p-4 text-black hover:bg-gray-300"
          >
            <Send className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="#"
            className="rounded-full bg-gray-200 p-4 text-black hover:bg-gray-300"
          >
            <MessageCircle className="h-5 w-5" />
          </motion.a>
          <a
            href="mailto:info@fooror.com"
            className="text-gray-400 hover:text-white"
          >
            info@fooror.com
          </a>
        </div>
      </motion.div>
    </>
  );
}
