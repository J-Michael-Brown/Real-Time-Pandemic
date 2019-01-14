import { City } from './city.js';

  const atlanta = new City("Atlanta", 'blue');
  const chicago = new City("Chicago", 'blue');
  const losAngeles = new City("Los Angeles", 'yellow');
  const mexicoCity= new City("Mexico City", 'yellow');
  const miami = new City("Miami", 'yellow');
  const newYork = new City("New York", 'blue');
  const sanFrancisco = new City("San Francisco", 'blue');
  const washington = new City("Washington", 'blue');
  const toronto = new City("Toronto", 'blue');

  atlanta.connections.push(washington, miami, chicago);
  chicago.connections.push(sanFrancisco, losAngeles, mexicoCity, atlanta, toronto);
  losAngeles.connections.push(sanFrancisco, mexicoCity, chicago);
  mexicoCity.connections.push(miami, chicago, losAngeles);
  miami.connections.push(washington, atlanta, mexicoCity);
  newYork.connections.push(washington, toronto);
  sanFrancisco.connections.push(chicago, losAngeles);
  washington.connections.push(newYork, toronto, atlanta, miami);
  toronto.connections.push(washington, newYork, chicago);

  const northAmerica = [atlanta, chicago, losAngeles, mexicoCity, miami, newYork, sanFrancisco, washington, toronto];

  export { northAmerica }

  // [
  //   "Algiers",
  //   "Atlanta",
  //   "Baghdad",
  //   "Bangkok",
  //   "Beijing",
  //   "Bogota",
  //   "Buenos Aries",
  //   "Cairo",
  //   "Chennai",
  //   "Chicago",
  //   "Delhi",
  //   "Essen",
  //   "Ho Chi Minh City",
  //   "Hong Kong",
  //   "Istanbul",
  //   "Jakarta",
  //   "Johannesburg",
  //   "Karachi",
  //   "Khartoum",
  //   "Kinshasa",
  //   "Kolkata",
  //   "Lagos",
  //   "Lima",
  //   "London",
  //   "Los Angeles",
  //   "Madrid",
  //   "Manila",
  //   "Mexico City",
  //   "Miami",
  //   "Milan",
  //   "Montreal",
  //   "Moscow",
  //   "Mumbai",
  //   "New York",
  //   "Osaka",
  //   "Paris",
  //   "Riyadh",
  //   "San Francisco",
  //   "Santiago",
  //   "Sao Paulo",
  //   "Seoul",
  //   "Shanghai",
  //   "St. Petersburg",
  //   "Sydney",
  //   "Taipei",
  //   "Tehran",
  //   "Tokyo",
  //   "Washington"
  // ];
