'use client';
import styles from './filterCheckbox.module.scss';
import { Checkbox, CheckboxProps } from '@/components/ui/checkbox/Checkbox';

export type FilterCheckboxProps = {
  text: string;
  name?: string;
} & Pick<CheckboxProps, 'value' | 'checked' | 'className' | 'onCheckedChange'>;

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  value,
  text,
  checked,
  className,
  name,
  onCheckedChange,
}) => {
  return (
    <div className={className}>
      <Checkbox
        id={`checkox-${name}-${value}`}
        className={styles.checkbox}
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <label htmlFor={`checkox-${name}-${value}`} className={styles.label}>
        {text}
      </label>
    </div>
  );
};
