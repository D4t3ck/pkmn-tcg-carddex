import { Card } from "./api";

interface CardListProps {
  cards: Card[];
  onSelect: (card: Card) => void;
}

function CardList({ cards, onSelect }: CardListProps) {
  return cards.length ? (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {cards.map(({ id, images, name }) => (
        <div
          key={id}
          className="card"
          onClick={() => onSelect({ id, images, name })}
        >
          <img src={images.small} alt={name} style={{ cursor: "pointer" }} />
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  ) : (
    <p>Keine Karten gefunden.</p>
  );
}

export default CardList;
