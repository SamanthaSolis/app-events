import { Place } from './Place.jsx';

type Event = {
  id: number,
  name: string,
  description: string,
  place: Place,
  place_id: number,
  time: Date,
  poster: string,
};

export { Event };
