"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState<"x" | "o" | "draw" | null>(null);

  const [gameArray, setGameArray] = useState([
    "n",
    "n",
    "n",
    "n",
    "n",
    "n",
    "n",
    "n",
    "n",
  ]);

  const MakeNewGame = () => {
    setGameArray(["n", "n", "n", "n", "n", "n", "n", "n", "n"]);
    setWinner(null);
  };

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board: string[]) => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] !== "n" && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]); // return 'x' or 'o'
      }
    }

    if (!board.includes("n")) {
      return "draw";
    }

    return null;
  };

  const buttonClick = (i: number) => {
    const newBoard = [...gameArray];
    newBoard[i] = xTurn ? "X" : "O";
    setGameArray(newBoard);
    setXTurn(!xTurn);
    checkWinner(newBoard);
  };

  return (
    <>
      <section className="flex justify-center mt-10">
        <div className="flex flex-col">
          <header className="text-center mb-5 flex gap-5">
            <h1>Noughts and Crosses</h1> <ModeToggle />
          </header>
          <section className="grid grid-cols-3 gap-3">
            {gameArray.map((el, i) => {
              if (el) {
                return (
                  <Button
                    key={i}
                    className="bg-amber-400 rounded-md size-16 disabled:opacity-100"
                    onClick={() => buttonClick(i)}
                    disabled={el === "X" || el === "O"}
                  >
                    {el === "X" ? "X" : el === "O" ? "O" : ""}
                  </Button>
                );
              }
            })}
          </section>
          <section className="py-4">
            <div>{winner ? `Winner: ${winner}` : ""}</div>
            <Button onClick={MakeNewGame}>Reset</Button>
          </section>
        </div>
      </section>
    </>
  );
}
