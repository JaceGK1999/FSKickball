import { useState, useEffect } from 'react';
import { fetchTeamById } from '../services/fetchTeams';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const data = await fetchTeamById();
      setTeams(data);
    };
    getTeams();
  }, []);

  return (
    <div>
      <h3>This is all of the teams!!</h3>
      {teams.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
