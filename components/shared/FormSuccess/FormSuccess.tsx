import { cn } from '@/lib/utils';

interface SuccessMessageProps {
  success: string;
  className?: string;
  props?: React.ComponentProps<'p'>;
}

export default function FormSuccess({ success, className, ...props }: SuccessMessageProps) {
  if (!success) return null;
  return (
    <p className={cn('bg-green-200 p-3 text-xs font-medium rounded-sm w-full', className)} {...props}>
      {success}
    </p>
  );
}
