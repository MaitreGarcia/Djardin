import type { ChangeEvent } from "react";

interface InputSelectProps {
  options: string[];
  value: string;
  placeholder?: string,
  onChange: (newValue: string) => void;
}

export default function InputSelect({ options, value, placeholder, onChange }: InputSelectProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };
  return (
    <select
      className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
      value={value}
      onChange={handleChange}
    >
      <option value="" disabled>
        Choose an option
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
