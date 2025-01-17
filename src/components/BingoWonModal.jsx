import React from "react";
import { motion } from "framer-motion";

const BingoWonModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="bg-white p-8 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-4xl font-bold mb-4 text-green-500">🎉 Bingo! 🎉</h2>
        <p className="text-lg mb-6">Congratulations, you got a Bingo!</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Continue
        </button>
      </motion.div>
    </div>
  );
};

export default BingoWonModal;