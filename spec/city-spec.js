import { City } from './../src/city.js';

describe('City', function() {
  let Atlanta;
  beforeEach(function() {
    Atlanta = new City('Atlanta');
  });
  describe('checkOutbreak', function() {
    it('should check for too many disease ticks for any color. If there are it will bring that number back to 3 and set outbreak to true.', function() {
      Atlanta.redStrain+=4;
      Atlanta.checkOutbreak();
      expect(Atlanta.redStrain).toEqual(3);
      expect(Atlanta.outbreak).toEqual(true);
    });

  });
});
