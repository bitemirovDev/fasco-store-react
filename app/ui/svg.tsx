import React from 'react';
import { SVGProps } from '@/app/interfaces';

const SVGIcon: React.FC<SVGProps> = ({
  icon: IconComponent,
  width,
  height,
  fill,
  className,
  ...props
}) => {
  return (
    <IconComponent width={width} height={height} fill={fill} className={className} {...props} />
  );
};

export default SVGIcon;
