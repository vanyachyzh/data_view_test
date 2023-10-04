import React, { useState } from "react";
import IPosition from "../../types/Position";
import "./Selector.scss";

type Props = {
  position: IPosition;
  setPosition: (position: React.SetStateAction<IPosition>) => void;
};

const Selector: React.FC<Props> = ({ position, setPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(50);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: number) => {
    setSelectedValue(value);
    setPosition((prev) => ({
      ...prev,
      z: value,
    }));
    setIsOpen(false);
  };

  const renderDropdownOptions = () => {
    const options = [];
    for (let i = 25; i <= 150; i += 25) {
      options.push(
        <div
          key={i}
          onClick={() => handleOptionClick(i)}
          className="dropdown-option"
        >
          {i}%
        </div>
      );
    }
    return options;
  };

  return (
    <div className="selector">
      <button
        className="selector__minus"
        onClick={() =>
          setPosition((prev) => ({
            ...prev,
            z: prev.z === 25 ? 25 : prev.z - 25,
          }))
        }
      >
        -
      </button>
      <div className="selector__dropdown" onClick={toggleDropdown}>
        {position.z}%
        {isOpen && (
          <div className="selector__options">{renderDropdownOptions()}</div>
        )}
      </div>
      <button
        className="selector__plus"
        onClick={() =>
          setPosition((prev) => ({
            ...prev,
            z: prev.z === 150 ? 150 : prev.z + 25,
          }))
        }
      >
        +
      </button>
    </div>
  );
};

export default Selector;
