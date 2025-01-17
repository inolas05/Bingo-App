import React from 'react'

const BingoCell = ({ phrase, isSelected, onClick }) => {
  
  const isFreeSlot = phrase === "FREE SLOT"; // Check if it's the middle cell  
  return (
    <div
      onClick={!isFreeSlot ? onClick : undefined} // Prevent clicking the FREE SLOT cell
      className={`flex items-center justify-center h-24 w-24 border border-gray-400 cursor-pointer 
      text-center text-sm font-semibold p-1 select-none break-words leading-tight 
      ${isFreeSlot ? "bg-white text-gray-800" : isSelected ? "bg-green-500 text-white" : "bg-white text-gray-800 hover:bg-gray-100"}`}
    >
      {phrase}
    </div>
  )
}

export default BingoCell
