//@flow
import { Event } from '../models/Event.jsx';
import { Place } from '../models/Place.jsx';

var dummyPlaces: Place[] = [
  {
    name: 'Aulas 4',
    building: 'Aulas 4',
    floor: '4',
    classroom: '403',
    max_capacity: '30',
  },
  {
    name: 'Aulas 3',
    building: 'Aulas 3',
    floor: '1',
    classroom: '103',
    max_capacity: '20',
  },
];

var dummyEvents: Event[] = [
  {
    name: 'Concierto',
    date: new Date(2018, 2, 12),
    time: '2:00 PM',
    place: dummyPlaces[0],
    description: 'Estará del 1 omg',
    poster:
      'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg',
  },
  {
    name: 'Conferencia',
    date: '02/28/2018',
    time: '10:00 PM',
    place: dummyPlaces[1],
    description: 'Estará del 2 omg',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51l1Emoeq3L.jpg',
  },
  {
    name: 'Concierto2',
    date: '10/08/2018',
    time: '2:00 PM',
    place: dummyPlaces[1],
    description: 'Estará del 1 omg',
    poster:
      'https://images-na.ssl-images-amazon.com/images/I/71wn3RxiwkL._SY679_.jpg',
  },
];

export { dummyEvents, dummyPlaces };
