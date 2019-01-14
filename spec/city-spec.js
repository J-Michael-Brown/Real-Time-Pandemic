import { City } from './../src/city.js';
import { Disease } from './../src/disease.js';

describe('City', function() {
  let atlanta;
  beforeEach(function() {
    atlanta = new City('Atlanta');
  });

  describe('findDisease', function() {
    it('return an object of the disease, when searched by string of name.', function() {
      const purple = new Disease('purple')
      atlanta.diseases.push(purple);
      let result = atlanta.findDisease('purple');
      expect(result.codename).toEqual('purple');
    });
  });

  describe('addCube', function() {
    it('Should find a disease with a given codename and add a (potentielly) specified number of cubes to it.', function() {
      atlanta.addCube('blue', 3);
      let result = atlanta.findDisease('blue').cubes;
      expect(result).toEqual(3);
    });
  });

  describe('checkOutbreak', function() {
    it('should check for too many disease ticks for any color. If there are it will bring that number back to 3 and set outbreak to true.', function() {
      atlanta.addCube('blue', 4);

      expect(atlanta.checkOutbreak()).toEqual(['blue']);
      const blueDisease = atlanta.findDisease('blue');
      expect(blueDisease.outbroke).toEqual(true);
      expect(atlanta.findDisease('blue').cubes).toEqual(3);
    });

  });

  describe('outbreak', function() {
    it('add same type of disease to all "connection" cities.', function() {
      const newYork = new City('New York');
      atlanta.connections.push(newYork);
      atlanta.outbreak('red');
      expect(newYork.findDisease('red').cubes).toEqual(1);
    });
  });
});
