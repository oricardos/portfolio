import React from 'react';

export const Skeleton = ({className, children}) => {
  return <div className={`animate-pulse bg-gray-300 ${className}`}>{children}</div>;
};