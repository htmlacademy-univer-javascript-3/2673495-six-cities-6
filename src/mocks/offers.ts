import { placeCardProps } from '../components/place-card';

export const offersMocks : placeCardProps[] = [
  {
    id: 1,
    mark: true,
    imageSrc: 'markup/img/apartment-01.jpg',
    priceValue: 120,
    isInBookmarks: false,
    rating: 4,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    mark: false,
    imageSrc: 'markup/img/room.jpg',
    priceValue: 80,
    isInBookmarks: true,
    rating: 4,
    name: 'Wood and stone place',
    type: 'Room',
  },
  {
    id: 3,
    mark: false,
    imageSrc: 'markup/img/apartment-02.jpg',
    priceValue: 132,
    isInBookmarks: false,
    rating: 4,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    mark: true,
    imageSrc: 'markup/img/apartment-03.jpg',
    priceValue: 180,
    isInBookmarks: false,
    rating: 5,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
];
