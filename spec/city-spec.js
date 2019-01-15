import { City } from './../src/city.js';
import { Disease } from './../src/disease.js';

describe('City', function() {
  let atlanta;
  beforeEach(function() {
    atlanta = new City('Atlanta', 'blue');
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
    it('should not add a cube if that disease is eradicated example: disease.eradicated:true', function() {
      atlanta.diseases[0].eradicated = true;
      let blue = atlanta.diseases[0];
      expect(atlanta.addCube(blue.codename)).toEqual(0);
      expect(atlanta.diseases[0].cubes).toEqual(0);
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
    it('add same type of disease to all "connection" cities. Set outbroke status to "true".', function() {
      let newYork = new City('New York');
      newYork.addCube('red',2);
      atlanta.connections.push(newYork);
      atlanta.outbreak('red');
      let newYorkRed = newYork.findDisease('red');
      expect(newYorkRed.cubes).toEqual(3);
      expect(newYorkRed.outbroke).toEqual(false);
      expect(atlanta.findDisease('red').outbroke).toEqual(false);

      atlanta.outbreak('red');
      newYorkRed = newYork.findDisease('red');
      expect(newYorkRed.outbroke).toEqual(true);
    });
  });
});
