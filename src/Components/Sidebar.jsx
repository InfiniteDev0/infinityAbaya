import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks, collections } from "../assets/assets";
import { close } from "../assets/Images";
import { AppContext } from "../Context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const { Visible, setVisible } = useContext(AppContext);
  const [showCollections, setShowCollections] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const navigate = useNavigate();

  // Animation variants
  const listVariants = {
    visible: { transition: { staggerChildren: 0.12 } },
    hidden: {},
  };
  const itemVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  // Handle collection discover
  const handleDiscover = () => {
    if (selectedCollection) {
      setVisible(false);
      setShowCollections(false);
      setSelectedCollection(null);
      navigate(`/collections/${selectedCollection.slug}`);
    }
  };

  return (
    <>
      {/* Overlay */}
      {Visible && (
        <div
          className="fixed inset-0 z-[90] glass bg-opacity-40"
          onClick={() => {
            setVisible(false);
            setShowCollections(false);
            setSelectedCollection(null);
          }}
        />
      )}

      {/* Main Sidebar with AnimatePresence */}
      <AnimatePresence>
        {Visible && (
          <motion.div
            key="sidebar"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-[30%] h-screen z-[100] flex flex-col gap-[5rem] bg-glass one font-medium !p-5"
            style={{ maxHeight: "100vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              onClick={() => {
                setVisible(false);
                setShowCollections(false);
                setSelectedCollection(null);
              }}
              className="w-[16.5px] cursor-pointer"
              src={close}
              alt=""
            />
            <AnimatePresence mode="wait">
              {!showCollections ? (
                <motion.ul
                  key="main-links"
                  className="flex flex-col gap-4 text-lg"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={listVariants}
                >
                  {navLinks.map((item) =>
                    item.label === "Collections" ? (
                      <motion.li
                        key={item.to}
                        variants={itemVariants}
                        className="flex items-end justify-end"
                      >
                        <span
                          className="cursor-pointer hover:text-orange-300 transition-colors duration-200"
                          onClick={() => {
                            setShowCollections(true);
                            setSelectedCollection(collections[0]);
                          }}
                        >
                          {item.label}
                        </span>
                      </motion.li>
                    ) : (
                      <motion.li
                        key={item.to}
                        variants={itemVariants}
                        className="flex items-end justify-end"
                      >
                        <Link
                          to={item.to}
                          className="cursor-pointer hover:text-orange-300 transition-colors duration-200"
                          onClick={() => setVisible(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    )
                  )}
                </motion.ul>
              ) : (
                // Collections List
                <motion.ul
                  key="collections"
                  className="flex flex-col gap-4 text-lg"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={listVariants}
                >
                  <motion.li
                    variants={itemVariants}
                    className="flex items-end justify-end"
                  >
                    <span
                      className="cursor-pointer hover:text-orange-300 transition-colors duration-200"
                      onClick={() => setShowCollections(false)}
                    >
                      ← Back
                    </span>
                  </motion.li>
                  {collections.map((col) => (
                    <motion.li
                      key={col.slug}
                      variants={itemVariants}
                      className="flex items-end justify-end"
                    >
                      <span
                        className="cursor-pointer hover:text-orange-300 transition-colors duration-200"
                        onClick={() => setSelectedCollection(col)}
                      >
                        {col.name}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            <hr />
            <ul className="flex flex-col gap-3 text-lg">
              <li className="text-white hover:text-black cursor-pointer">
                Luxury meets Modesty
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-black transition-colors duration-200"
                  onClick={() => setVisible(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Panel for Collection Preview */}
      <AnimatePresence>
        {showCollections && selectedCollection && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="fixed top-0 left-[30%] w-[70%] h-screen z-[110] bg-white flex flex-col items-center justify-center p-0"
            style={{ padding: 0 }}
          >
            <div className="relative w-full h-full flex-1 flex flex-col">
              <img
                src={selectedCollection.image}
                alt={selectedCollection.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex justify-center w-full">
                <button
                  className="bg-orange-900 one text-white !px-[8rem] !py-2 cursor-pointer text-lg rounded-full"
                  onClick={handleDiscover}
                >
                  Discover
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
