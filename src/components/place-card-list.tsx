import PlaceCard from './place-card';
import { Offer } from '../types/offer';

type PlaceCardListProps = {
  offers: Offer[];
  onCardHover?: (id: string | null) => void;
};

function PlaceCardList({
  offers,
  onCardHover,
}: PlaceCardListProps): JSX.Element {
  const handleCardMouseEnter = (id: string) => {
    onCardHover?.(id);
  };

  const handleCardMouseLeave = () => {
    onCardHover?.(null);
  };

  return (
    <div>
      <ul className="places__list">
        {offers.map((offer: Offer) => (
          <li
            key={offer.id}
            onMouseEnter={() => handleCardMouseEnter(offer.id)}
            onMouseLeave={handleCardMouseLeave}
          >
            <PlaceCard
              id={offer.id}
              isPremium={offer.isPremium}
              previewImage={offer.previewImage}
              price={offer.price}
              rating={offer.rating}
              isFavorite={offer.isFavorite}
              title={offer.title}
              type={offer.type}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaceCardList;
