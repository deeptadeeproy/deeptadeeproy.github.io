import { useRef } from 'react';

const useSound = (url) => {
  const audioRef = useRef(new Audio(url));

  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return playSound;
};

export default useSound;