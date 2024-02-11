import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  addstyles?: string;
}

function Button(props: ButtonProps) {
  return (
    <button
      className={
        'bg-pry hover:bg-bg hover:text-pry hover:border hover:border-pry text-bg py-2 px-4 rounded-3xl ' +
        props.addstyles
      }
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
