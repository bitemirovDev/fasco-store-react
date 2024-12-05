export interface CheckboxProps {
  id: string;
  value: string;
  checked?: boolean;
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  value,
  className,
  id,
  onCheckedChange,
}) => {
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
};
