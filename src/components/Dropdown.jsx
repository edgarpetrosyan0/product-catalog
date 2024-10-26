import { useState } from 'react';

export default function Dropdown({ label, options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-2 border rounded bg-white flex justify-between items-center"
      >
        {selected || label}
        <span className="ml-2">&#x25BC;</span>
      </button>
      {isOpen && (
        <div className="absolute w-full border rounded bg-white shadow-md mt-1 z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="block w-full text-left p-2 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

