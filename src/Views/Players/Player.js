import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerById } from '../../services/fetchPlayers';

export default function Player() {
  const [player, setPlayer] = useState({ teams: {} });
  const { id } = useParams();

  useEffect(() => {
    const getPlayer = async () => {
      const data = await fetchPlayerById(id);
      setPlayer(data);
    };
    getPlayer();
  }, [id]);
  return (
    <div>
      {player.name} plays for {player.teams.name} as a {player.position}.
    </div>
  );
}

// useParams!!!!
