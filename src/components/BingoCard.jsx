import React, { useState, useEffect, useCallback } from "react";
import BingoCell from "./BingoCell";
import BingoWonModal from "./BingoWonModal";
import { phrases } from "../utils/phrases";

const BOARD_SIZE = 5;

const BingoCard = () => {
  const [board, setBoard] = useState([]);
  const center = `${Math.floor(BOARD_SIZE / 2)}-${Math.floor(BOARD_SIZE / 2)}`;
  const [selectedCells, setSelectedCells] = useState(new Set([center]));

  const [isBoardReady, setIsBoardReady] = useState(false);
  const [bingoState, setBingoState] = useState({
     completedRows: new Set(),
     completedCols: new Set(),
     completedDiagonals: new Set(),
     isBingoWon: false,
  });

  const { completedRows, completedCols, completedDiagonals } = bingoState; // Destructure bingoState properties

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
    setIsBoardReady(true); // Mark the board as ready
  };

  const handleCellClick = (row, col) => {
    if (!isBoardReady) return; // Prevent clicks if board is not ready

    // Prevent interaction with FREE SLOT
    if (row === 2 && col === 2) return;
    
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

  const checkForBingo = useCallback(() => {
    if (!board || board.length === 0) return;
  
    let newBingo = false;
    const newCompletedRows = new Set(completedRows);
    const newCompletedCols = new Set(completedCols);
    const newCompletedDiagonals = new Set(completedDiagonals);
  
    // Check rows
    for (let row = 0; row < BOARD_SIZE; row++) {
      if (
        board[row].every((_, colIndex) => selectedCells.has(`${row}-${colIndex}`)) &&
        !completedRows.has(row)
      ) {
        newCompletedRows.add(row);
        newBingo = true;
      }
    }
  
    // Check columns
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (
        board.every((_, rowIndex) => selectedCells.has(`${rowIndex}-${col}`)) &&
        !completedCols.has(col)
      ) {
        newCompletedCols.add(col);
        newBingo = true;
      }
    }
  
    // Check main diagonal
    if (
      board.every((_, index) => selectedCells.has(`${index}-${index}`)) &&
      !completedDiagonals.has("main")
    ) {
      newCompletedDiagonals.add("main");
      newBingo = true;
    }
  
    // Check anti-diagonal
    if (
      board.every((_, index) => selectedCells.has(`${index}-${BOARD_SIZE - 1 - index}`)) &&
      !completedDiagonals.has("anti")
    ) {
      newCompletedDiagonals.add("anti");
      newBingo = true;
    }
  
    if (newBingo) {
      setBingoState((prevBingoState) => ({
        completedRows: new Set([...prevBingoState.completedRows, ...newCompletedRows]),
        completedCols: new Set([...prevBingoState.completedCols, ...newCompletedCols]),
        completedDiagonals: new Set([...prevBingoState.completedDiagonals, ...newCompletedDiagonals]),
        isBingoWon: true,
      }));
    }
  }, [board, selectedCells, completedRows, completedCols, completedDiagonals]);

  useEffect(() => {
    generateBoard();
  }, []);

  useEffect(() => {
    if (isBoardReady) {
      checkForBingo();
    }
  }, [selectedCells, checkForBingo, isBoardReady]); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pb-1">
      <div className="grid grid-cols-5 pb-1">
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
      {/* Animated Bingo Won Modal */}
      <BingoWonModal
        isVisible={bingoState.isBingoWon}
        onClose={() => setBingoState((prevState) => ({ ...prevState, isBingoWon: false }))}/>
    </div>
  );
};

export default BingoCard;
