import React, { createContext, useContext, useState } from "react";

const ButtonContext = createContext();

export function useButtonContext() {
  return useContext(ButtonContext);
}

export function ButtonProvider({ children }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const selectButton = (button) => {
    setSelectedButton(button);
  };

  return (
    <ButtonContext.Provider value={{ selectedButton, selectButton }}>
      {children}
    </ButtonContext.Provider>
  );
}
