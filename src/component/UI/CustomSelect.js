import React, { useState } from "react";
import styles from "../../css/CustomSelect.module.css";

const CustomSelect = ({ options, defaultOption, className, onSelect }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleOptionClick = async (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    onSelect(option);
  };

  const combinedClassName = `${styles.customSelect} ${className}`;

  return (
    <div className={combinedClassName}>
      <button
        onClick={() => setShowOptions(!showOptions)}
        style={
          showOptions
            ? { borderRadius: "5px 5px 0 0" }
            : { borderRadius: "5px" }
        }
      >
        {selectedOption}
      </button>
      {showOptions && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
