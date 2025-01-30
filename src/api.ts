export interface Card {
  id: string;
  name: string;
  images: { small: string; large: string };
}

export interface SearchParams {
  pokemonName?: string;
  artistName?: string;
  setFilter?: string;
}

export async function fetchCards({
  pokemonName = "",
  artistName = "",
  setFilter = "",
}: SearchParams): Promise<{ data: Card[] }> {
  const baseUrl = "https://api.pokemontcg.io/v2/cards";
  const query: string[] = [];

  if (pokemonName) query.push(`name:${pokemonName}`);
  if (artistName) query.push(`artist:\"${artistName}\"`);
  if (setFilter) query.push(`set.name:\"${setFilter}\"`);

  const endpoint = `?q=${encodeURIComponent(query.join(" "))}`;
  const response = await fetch(baseUrl + endpoint);

  if (!response.ok) throw new Error(`Fehler: ${response.status}`);
  return await response.json();
}
