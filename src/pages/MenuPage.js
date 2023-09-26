import React from "react";
import { useParams } from "react-router-dom";
import { useButtonContext } from "../context/ButtonContext";

function MenuPage() {
  const { selectedButton, selectButton } = useButtonContext();
  const { selectedOption } = useParams(); // Get the selected option from URL

  // Check if the selectedOption exists and update the context if needed
  if (selectedOption && selectedButton !== selectedOption) {
    selectButton(selectedOption);
  }

  return (
    <div>
      <h1>Menu Page</h1>
      <p>Selected Button: {selectedButton}</p>
      {/* Your menu content */}
    </div>
  );
}

export default MenuPage;
