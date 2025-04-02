import React from 'react';

export interface SVGProps extends React.SVGProps<SVGSVGElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function SVGIcon({ icon: IconComponent, width, height, fill, className, ...props }: SVGProps) {
  return <IconComponent width={width} height={height} fill={fill} className={className} {...props} />;
}
