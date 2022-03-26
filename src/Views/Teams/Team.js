import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchTeamById } from '../../services/fetchTeams';

export default function Team() {
  const [team, setTeam] = useState({ players: [] });
  const { id } = useParams();

  useEffect(() => {
    const getTeam = async () => {
      const data = await fetchTeamById(id);
      setTeam(data);
      console.log(data, 'data');
    };
    getTeam();
  }, [id]);
  return (
    <div>
      <h1>{team.name}</h1>
      <h2>
        {team.city}, {team.state}
      </h2>
      <h4>These are the members</h4>
      <ul>
        {team.players.map((player) => (
          <li key={player.id}>
            {player.position}: <Link to={`/players/${player.id}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
