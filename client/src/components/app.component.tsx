import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { ProgressBar } from './index';
type Horse = { name: string; distance: number };

const socket = io('http://localhost:3002');

const App = () => {
  const TOTAL_DISTANCE = 1000;
  const [winner, setWinner] = useState<Horse | undefined>(undefined);
  const [horses, setHorses] = useState<Horse[]>([]);
  const [isRacing, setIsRacing] = useState(false);

  const endOfRun =
    horses.length > 0 &&
    horses.filter((horse) => horse.distance === TOTAL_DISTANCE).length ===
      horses.length;

  useEffect(() => {
    socket.on('ticker', (data: Horse[]) => {
      setIsRacing(true);
      setHorses(data);
    });
  }, []);

  useEffect(() => {
    if (endOfRun) setIsRacing(false);

    const champ = horses.find((horse) => horse.distance === TOTAL_DISTANCE);

    if (!winner && champ) {
      setWinner(champ);
    }
  }, [horses, isRacing, winner, endOfRun]);

  const sendStart = () => {
    socket.emit('start');
  };

  const sendRestart = () => {
    socket.disconnect() && socket.connect();
    socket.emit('start');
    setWinner(undefined);
    setHorses([]);
  };

  return (
    <div className='flex flex-col min-h-screen gap-y-2 items-center justify-center'>
      {horses.map((horse) => (
        <ProgressBar
          key={horse.name}
          current={horse.distance}
          total={TOTAL_DISTANCE}
          title={horse.name}
        />
      ))}
      {winner && <>Winner: {winner.name}</>}
      <button
        disabled={isRacing}
        className='bg-[black] text-white w-fit mx-auto p-6 mt-5 rounded-xl'
        onClick={endOfRun ? sendRestart : sendStart}
      >
        {isRacing && 'Racing...'}
        {!isRacing && endOfRun && 'Restart'}
        {!isRacing && !endOfRun && 'Start Race'}
      </button>
    </div>
  );
};

export { App };
