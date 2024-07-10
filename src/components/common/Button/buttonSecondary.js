import React from 'react';
import Button from './button';

const ButtonSecondary = ({ className = '', ...args }) => {
  return <Button className={`${className}`} {...args} />;
};

export default ButtonSecondary;
