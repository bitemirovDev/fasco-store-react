import { cn } from '@/lib/utils';
import styles from './ValidationError.module.scss';
import { FieldError } from 'react-hook-form';

interface ErrorMessageProps {
  error?: FieldError;
  className?: string;
}

export default function ValidationError({ error, className, ...props }: ErrorMessageProps) {
  if (!error) {
    return null;
  }
  return (
    <p className={cn(styles.error, className)} {...props}>
      {error.message}
    </p>
  );
}
