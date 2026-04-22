import React from 'react';
import { Monitor } from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PCControlSuiteIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => {
  return (
    <Monitor size={size} className={`text-brand-600 dark:text-brand-400 ${className}`} {...props} />
  );
};

export default PCControlSuiteIcon;
