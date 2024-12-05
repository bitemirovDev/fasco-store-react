import clsx from 'clsx';

type ContainerProps = {
  classNames?: string;
  children: React.ReactNode;
};

export default function Container({ classNames, children }: ContainerProps) {
  return (
    <div className={clsx(classNames?.includes('container-right') ? '' : 'container', classNames)}>
      {children}
    </div>
  );
}
