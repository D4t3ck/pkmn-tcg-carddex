import { Card } from "./api";

interface CardModalProps {
  card: Card;
  onClose: () => void;
}

function CardModal({ card: { images, name }, onClose }: CardModalProps) {
  return (
    <dialog open>
      <img src={images.large} alt={name} />
      <button onClick={onClose}>&times;</button>
    </dialog>
  );
}

export default CardModal;
