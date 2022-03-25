import { checkError, client } from './client';

export async function fetchTeamById() {
  const resp = await client.from('teams').select('*');

  return checkError(resp);
}
