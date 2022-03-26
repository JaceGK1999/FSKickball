import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../../services/fetchPlayers';
export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    getPlayers();
  }, []);

  return (
    <div>
      <h3>This is all of the players!!</h3>
      <ul>
        {players.map((item) => (
          <li key={item.id}>
            <Link to={`/players/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// key={item.id}>{item.name}
