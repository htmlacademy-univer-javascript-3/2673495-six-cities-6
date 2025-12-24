import { useState } from 'react';
import PlaceCard, { placeCardProps } from './place-card';

type PlaceCardListProps = {
  offers: placeCardProps[];
};

function PlaceCardList({ offers }: PlaceCardListProps): JSX.Element {
  const [, setActiveCardId] = useState<number | null>(null);

  const handleCardMouseEnter = (id: number) => {
    setActiveCardId(id);
  };

  const handleCardMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <div>
      <ul className="places__list">
        {offers.map((offer) => (
          <li
            key={offer.id}
            onMouseEnter={() => handleCardMouseEnter(offer.id)}
            onMouseLeave={handleCardMouseLeave}
          >
            <PlaceCard
              id={offer.id}
              mark={offer.mark}
              imageSrc={offer.imageSrc}
              priceValue={offer.priceValue}
              rating={offer.rating}
              isInBookmarks={offer.isInBookmarks}
              name={offer.name}
              type={offer.type}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaceCardList;
