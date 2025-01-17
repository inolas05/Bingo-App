import React, { useState, useEffect } from "react";
import BingoCell from "./BingoCell";
import { phrases } from "../utils/phrases";

const BOARD_SIZE = 5;

const BingoCard = () => {
  const [board, setBoard] = useState([]);
  const [selectedCells, setSelectedCells] = useState(new Set());

  useEffect(() => {
    generateBoard();
  }, []);

  const generateBoard = () => {
    const shuffledPhrases = [...phrases].sort(() => Math.random() - 0.5);
    const newBoard = [];

    for (let row = 0; row < BOARD_SIZE; row++) {
      newBoard.push([]);
      for (let col = 0; col < BOARD_SIZE; col++) {
        if (row === 2 && col === 2) {
          newBoard[row].push("FREE SLOT");
        } else {
          newBoard[row].push(shuffledPhrases.pop());
        }
      }
    }
    setBoard(newBoard);
  };

  const handleCellClick = (row, col) => {
    const key = `${row}-${col}`;
    setSelectedCells((prevSelectedCells) => {
        const newSelectedCells = new Set(prevSelectedCells);
  
        if (newSelectedCells.has(key)) {
          newSelectedCells.delete(key);
        } else {
          newSelectedCells.add(key);
        }
  
        return newSelectedCells;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="grid grid-cols-5 gap-4">
        {board.map((row, rowIndex) =>
          row.map((phrase, colIndex) => (
            <BingoCell
              key={`${rowIndex}-${colIndex}`}
              phrase={phrase}
              isSelected={selectedCells.has(`${rowIndex}-${colIndex}`)}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BingoCard;
