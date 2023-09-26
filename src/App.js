import React, { useState } from "react";
import "./App.css";
import { CloseOutlined } from "@ant-design/icons";

function App() {
  const [buttons, setButtons] = useState([
    {
      label: "Portuguese",
      image: "https://img.icons8.com/fluency/48/portugal-circular.png",
      selected: false,
      show: true,
      buttonClass: "button-wrapper",
      groupName: "button-group",
    },
    {
      label: "English",
      image: "https://img.icons8.com/fluency/48/usa-circular.png",
      selected: false,
      show: true,
      buttonClass: "button-wrapper",
      groupName: "button-group",
    },
    {
      label: "Italian",
      image: "https://img.icons8.com/fluency/48/italy-circular.png",
      selected: false,
      show: true,
      buttonClass: "button-wrapper",
      groupName: "button-group",
    },
    {
      label: "French",
      image: "https://img.icons8.com/fluency/48/france-circular.png",
      selected: false,
      show: true,
      buttonClass: "button-wrapper",
      groupName: "button-group",
    },
    {
      label: "Spanish",
      image: "https://img.icons8.com/fluency/48/spain-circular.png",
      selected: false,
      show: true,
      buttonClass: "button-wrapper",
      groupName: "button-group",
    },
  ]);

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    // Reset the previously selected button
    if (selectedButton) {
      selectedButton.selected = false;
    }

    // Set the selected button
    button.selected = true;
    setSelectedButton(button);

    // Hide all other buttons
    buttons.forEach((btn) => {
      if (btn !== button) {
        btn.show = false;
        btn.groupName = "unselected-button-group";
      } else {
        btn.groupName = "selected-button-group";
        btn.buttonClass = "selected-button-wrapper";
      }
    });

    // Trigger a re-render by updating the state with new show values
    setButtons([...buttons]);
  };

  const resetButtons = (button) => {
    // Reset all buttons when the close button is clicked
    buttons.forEach((button) => {
      if (button.selected === true) {
        button.buttonClass = "button-wrapper";
        button.groupName = "selected-button-group-reverse";
        button.selected = false;
      } else {
        button.groupName = "unselected-button-group-reverse";
        button.buttonClass = "button-wrapper";
      }
    });

    setSelectedButton(null);

    // Trigger a re-render by updating the state with reset values
    setButtons([...buttons]);
  };

  return (
    <div className="App">
      <div className="button-container">
        <div>
          {buttons.map((button, index) => (
            <div className="button-flex" key={index}>
              <div className={button.groupName}>
                <div
                  className={button.buttonClass}
                  onClick={() => handleButtonClick(button)}
                >
                  <img
                    src={button.image}
                    alt={button.label}
                    className={`${
                      button.selected ? "flag-image-selected" : "flag-image"
                    }`}
                  />
                  <p className={`${button.selected ? "button-label" : ""}`}>
                    {button.label}
                  </p>
                </div>

                <div
                  className={`${
                    button.selected ? "close-button-selected" : "close-button"
                  }`}
                >
                  <CloseOutlined
                    className="closeOutlined"
                    onClick={resetButtons}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="selected-button-container">
          {selectedButton && (
            <div className="selected-content">
              <h2>Your Content Here</h2>
              {/* This content will be displayed when a button is clicked */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
