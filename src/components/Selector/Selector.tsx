import React, { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/hooks";
import IPosition from "../../types/Position";
import Button from "../Button/Button";
import "./Selector.scss";

type Props = {
  position: IPosition;
  setPosition: (position: React.SetStateAction<IPosition>) => void;
};

const Selector: React.FC<Props> = ({ position, setPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(50);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

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
        <div key={i} onClick={() => handleOptionClick(i)}>
          {i}%
        </div>
      );
    }
    return options;
  };

  return (
    <div className="selector">
      <Button
        size="large"
        onClick={() =>
          setPosition((prev) => ({
            ...prev,
            z: prev.z === 25 ? 25 : prev.z - 25,
          }))
        }
      >
        -
      </Button>
      <div
        className="selector__dropdown"
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        {position.z}%
        {isOpen && (
          <div className="selector__options">{renderDropdownOptions()}</div>
        )}
      </div>
      <Button
        size="large"
        onClick={() =>
          setPosition((prev) => ({
            ...prev,
            z: prev.z === 150 ? 150 : prev.z + 25,
          }))
        }
      >
        +
      </Button>
    </div>
  );
};

export default Selector;
