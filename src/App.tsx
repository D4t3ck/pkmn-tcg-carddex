import "./styles/styles.scss";
import { useState } from "react";
import SearchForm from "./SearchForm";
import CardList from "./CardList";
import CardModal from "./CardModal";
import { fetchCards, Card } from "./api";

function App() { /* VERSION 0.1 */
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (searchParams: {
    pokemonName?: string;
    artistName?: string;
    setFilter?: string;
  }) => {
    setLoading(true);
    try {
      const { data } = await fetchCards(searchParams);
      setCards(data);
    } catch (error) {
      console.error("Fehler beim Abrufen der Karten:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Pokémon Karten Suche</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Lade Karten...</p>}
      <CardList cards={cards} onSelect={setSelectedCard} />
      {selectedCard && (
        <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
}

export default App;
