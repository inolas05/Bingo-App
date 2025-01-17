import React from 'react'

const BingoCell = ({ phrase, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center h-24 w-24 border border-gray-400 rounded-lg cursor-pointer 
      text-center text-sm font-semibold p-2 select-none 
      ${isSelected ? "bg-green-500 text-white" : "bg-white text-gray-800 hover:bg-gray-100"}`}
    >
      {phrase}
    </div>
  )
}

export default BingoCell
