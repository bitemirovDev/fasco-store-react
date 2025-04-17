import { cn } from '@/lib/utils';

interface ErrorMessageProps {
  error: string;
  className?: string;
  props?: React.ComponentProps<'p'>;
}

export default function FormError({ error, className, ...props }: ErrorMessageProps) {
  if (!error) return null;
  return (
    <p className={cn('bg-red-200 p-3 text-xs font-medium rounded-sm w-full', className)} {...props}>
      {error}
    </p>
  );
}
