import React from 'react';

export interface CheckboxProps {
  id: string;
  value: string;
  checked?: boolean;
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
}

export default function Checkbox({
  checked,
  value,
  className,
  id,
  onCheckedChange,
}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={className}
      checked={checked}
      value={value}
      id={id}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
    />
  );
}
