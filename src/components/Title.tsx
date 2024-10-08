import React from 'react';

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return (
    <div className="sm:py-5 py-3 items-center">
      <span className="font-bold text-2xl/[10px] text-zinc-800">{text}</span>
    </div>
  );
};

export default Title;
