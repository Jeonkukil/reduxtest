import { useState } from "react";
import { addItem } from "./action";

export const useInputHandler = (addItem) => {
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    addItem(input);
    setInput("");
  };

  return { input, setInput, handleAddItem };
};
