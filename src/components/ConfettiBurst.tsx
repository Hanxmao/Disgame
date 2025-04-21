import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

export default function ConfettiBurst() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return showConfetti ? <Confetti numberOfPieces={200} recycle={false} /> : null;
}
