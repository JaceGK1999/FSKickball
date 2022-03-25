import { checkError, client } from './client';

export async function fetchPlayerById() {
  const resp = await client.from('players').select('*');

  return checkError(resp);
}
