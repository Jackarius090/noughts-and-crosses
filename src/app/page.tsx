"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
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
  };

  const buttonClick = (i) => {
    setGameArray((prev) => {
      const newArray = [...prev];
      newArray[i] = "x";
      return newArray;
    });
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
              if (el === "n") {
                return (
                  <Button
                    key={i}
                    className="bg-amber-400 rounded-md size-16"
                    onClick={() => buttonClick(i)}
                  ></Button>
                );
              }
            })}
          </section>
        </div>
      </section>
    </>
  );
}
