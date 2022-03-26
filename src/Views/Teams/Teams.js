import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../../services/fetchTeams';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    getTeams();
  }, []);

  return (
    <div>
      <h3>This is all of the teams!!</h3>
      <ul>
        {teams.map((item) => (
          <li key={item.id}>
            <Link to={`/teams/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
