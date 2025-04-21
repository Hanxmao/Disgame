
import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

export default function Countdown({ target }: { target: string }) {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(target).getTime() - new Date().getTime();
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return <Text fontSize="lg" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontWeight="bold">Ends In: {timeLeft}</Text>;
}
