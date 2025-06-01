'use client';
import { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import styles from './SelectField.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

interface Option {
  value: string;
  label: string;
  icon?: string;
}

interface SelectFieldProps {
  options: Option[];
  withSearch: boolean;
  placeholder?: string;
  id?: string;
  label: string;
  borders: boolean;
  onClick?: (option: Option) => void;
}

export default function SelectField({ options, id, label, borders, withSearch }: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const selectRef = useRef(null);

  useClickAway(selectRef, () => {
    setIsOpen(false);
  });

  const handleOptionClick = (option: { value: string; label: string }) => {
    setQuery(option.label);
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={styles.select} ref={selectRef}>
      <input
        type="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        placeholder=""
        id={id}
        value={query}
        onChange={(e) => handleInputChange(e)}
        onFocus={() => setIsOpen(true)}
        className={clsx(styles.input, borders && styles['input--bordered'])}
      />

      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {isOpen && (
        <ul className={styles.list}>
          {withSearch
            ? filteredOptions.map((option) => (
                <li key={option.value} className={styles.option} onClick={() => handleOptionClick(option)}>
                  {option.label}
                  <Image src={`/img/icons/${option.icon}`} alt={option.label} width={100} height={100} />
                </li>
              ))
            : options.map((option) => (
                <li key={option.value} className={styles.option} onClick={() => handleOptionClick(option)}>
                  {option.label}
                  <Image src={`/img/icons/${option.icon}`} alt={option.label} width={100} height={100} />
                </li>
              ))}
        </ul>
      )}
    </div>
  );
}
