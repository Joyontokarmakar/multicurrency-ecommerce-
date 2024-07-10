import React from 'react';

const Prev = ({
  className = 'relative',
  onClickPrev = () => {},
  btnClassName = 'w-10 h-10',
  svgSize = 'w-5 h-5',
}) => {
  return (
    <div
      className={`nc-Prev text-slate-500 dark:text-slate-400 ${className}`}
      data-glide-el="controls"
    >
      <button
        type="button"
        className={`${btnClassName} flex items-center justify-center rounded-full border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-600`}
        onClick={onClickPrev}
        title="Prev"
        data-glide-dir="<"
      >
        <svg className={svgSize} viewBox="0 0 24 24" fill="none">
          <path
            d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 12H3.67004"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Prev;
