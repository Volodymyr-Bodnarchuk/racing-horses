import { FC, memo, useEffect, useMemo, useState } from 'react';
import Horse from '../assets/horse-racing-svgrepo-com.svg';
import { calcFillPercentage, getRandomColor } from '../helpers';

type ProgressBarProps = {
  current: number;
  total: number;
  title: string;
};

const ProgressBar: FC<ProgressBarProps> = memo(({ current, total, title }) => {
  const fillPercentage = calcFillPercentage(current, total);
  const [r, g, b] = useMemo(() => getRandomColor(), []);
  const [ponyMove, setPonyMove] = useState(0);

  useEffect(() => {
    setPonyMove(current / 2.7);
  }, [current]);

  return (
    <div className={`flex flex-col text-[#7b7b7b] items-center`}>
      <span className='self-start'>{title}</span>
      <div
        style={{
          transform: 'translate(-180px, -20%)',
          left: `${ponyMove}px`,
        }}
        className='relative animation-bar mt-2'
      >
        <img
          className='w-10'
          style={{
            transform: 'scale(-1,1)',
          }}
          src={Horse}
          alt='horse'
        />
      </div>
      <div className='relative h-4 w-96 bg-[#ededed] border-2'>
        <div
          style={{
            backgroundColor: `rgb(${r},${g},${b})`,
            width: `${fillPercentage}%`,
          }}
          className='h-full animation-bar'
        />
      </div>
      {fillPercentage}%
    </div>
  );
});

export { ProgressBar };
