interface SearchFormProps {
    onSearch: (params: { pokemonName?: string; artistName?: string; setFilter?: string }) => void;
  }
  
  function SearchForm({ onSearch }: SearchFormProps) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      onSearch({
        pokemonName: formData.get("pokemon-name")?.toString().trim(),
        artistName: formData.get("artist-name")?.toString().trim(),
        setFilter: formData.get("set-filter")?.toString().trim(),
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="pokemon-name" placeholder="Pokémon-Name" />
        <input type="text" name="artist-name" placeholder="Künstlername" />
        <select name="set-filter">
          <option value="">Alle Sets</option>
        </select>
        <button type="submit">Suchen</button>
      </form>
    );
  }
  
  export default SearchForm;
  