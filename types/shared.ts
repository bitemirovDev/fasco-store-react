export type TimerProps = {
  title: string;
  endTime: number;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};
