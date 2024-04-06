import React from 'react';

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button className="w-[154px] h-[51px] top-[342px] left-[69px] bg-blue-400 rounded-t">
      {text}
    </button>
  );
};

export default Button;
