import React from 'react';

const Input = React.forwardRef(({
  className = '',
  sizeClass = 'h-11 px-4 py-3',
  fontClass = 'text-sm font-normal',
  rounded = 'rounded-full',
  type = 'text',
  ...args
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`block w-full focus:ring focus:ring-transparent focus:ring-opacity-25 disabled:bg-neutral-800 ${rounded} ${fontClass} ${sizeClass} ${className}`}
      {...args}
    />
  );
});

export default Input;
