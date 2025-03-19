import { useEffect, useRef, useState } from "react";
import { Option } from "../../interface/app";

interface DropdownProps<T> {
  className?: string;
  options: Option<T>[];
  renderOption: (option: T) => React.ReactNode;
  onSelect: (option: T) => void;
  getLabel: (option: T) => string;
}

const Dropdown = <T extends string>(props: DropdownProps<T>) => {
  const { options, renderOption, onSelect, getLabel } = props;
  const [selected, setSelected] = useState(getLabel(options[0].value) as T);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option<T>) => {
    setSelected(option.value);
    onSelect(option.value);
  };
  return (
    <div className={`position-relative ${props.className}`} ref={dropdownRef}>
      <button
        className="btn btn-sm btn-light dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {getLabel(selected)}
      </button>
      {isOpen && (
        <ul className="mb-0 w-full mt-2 border rounded bg-white shadow-md z-10 list-unstyled dropdown-menu d-block">
          {options.map((option, index) => {
            return (
              <li
                className="dropdown-item cursor-pointer"
                key={index}
                onClick={() => handleSelect(option)}
              >
                {renderOption(option.value) as T}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
