import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ToggleProps {
  label: string;
  children: React.ReactNode;
}

export function Toggle(props: ToggleProps) {
  const { label, children } = props;
  const [open, setOpen] = useState(true);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between cursor-pointer py-2 px-3"
        onClick={handleToggle}
      >
        <span className="text-lg font-medium">{label}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      <hr className="border-gray-400 my-2" />

      {open && <div className="mt-2 px-3">{children}</div>}
    </div>
  );
}
