import { useEffect, useState } from 'react';
import { fetchPlayerById } from '../../services/fetchPlayers';

export default function Player(id) {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const getPlayer = async () => {
      const data = await fetchPlayerById(id);
      setPlayer(data);
      console.log(player, 'player');
    };
    getPlayer();
  }, []);

  return <div>{`${player}`}</div>;
}
