import { checkError, client } from './client';

export async function fetchPlayers() {
  const resp = await client.from('players').select('*');

  return checkError(resp);
}

export async function fetchPlayerById(id) {
  const resp = await client.from('players').select('*, teams (*)').match({ id }).single();

  return checkError(resp);
}


export async function fetchPlayerByTeamId(team_id) {
  const resp = await client.from('players').select('*, teams (*)').match({ team_id }).single();

  return checkError(resp);
}