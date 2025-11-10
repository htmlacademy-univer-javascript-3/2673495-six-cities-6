import { placeCardProps } from '../components/place-card';

export type OffersType = placeCardProps & {
  location: {
    latitude: number;
    longitude: number;
  };
};
export const offersMocks: OffersType[] = [
  {
    id: 1,
    mark: true,
    imageSrc: 'markup/img/apartment-01.jpg',
    priceValue: 120,
    isInBookmarks: false,
    rating: 4,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
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
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
    },
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
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    },
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
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },
  },
];
