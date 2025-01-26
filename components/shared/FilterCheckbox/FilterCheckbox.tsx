import React from 'react';
// components
import { Checkbox } from '@/components/ui';
import { CheckboxProps } from '@/components/ui/Checkbox';
// styles
import styles from './FilterCheckbox.module.scss';

export type FilterCheckboxProps = {
  text: string;
  name?: string;
} & Pick<CheckboxProps, 'value' | 'checked' | 'className' | 'onCheckedChange'>;

export default function FilterCheckbox({
  value,
  text,
  checked,
  className,
  name,
  onCheckedChange,
}: FilterCheckboxProps) {
  const id = `checkox-${name}-${value}`;

  return (
    <div className={className}>
      <Checkbox
        id={id}
        className={styles.checkbox}
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <label htmlFor={id} className={styles.label}>
        {text}
      </label>
    </div>
  );
}
