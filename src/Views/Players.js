import { useState, useEffect } from 'react';
import { fetchPlayerById } from '../services/Players';
export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayerById();
      setPlayers(data);
    };
    getPlayers();
  }, []);

  return (
    <div>
      <h3>This is all of the players!!</h3>
      {players.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
