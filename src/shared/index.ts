import node_fetch from 'node-fetch';

export const fetch = async <T>(url: string): Promise<T> => {
  const response = await node_fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<T>;
};
