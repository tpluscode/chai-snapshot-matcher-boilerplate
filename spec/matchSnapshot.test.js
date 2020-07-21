const { expect } = require('chai');

describe('chai-snapshot-matcher', function() {
  describe('- matchSapshot -', function() {
    it('use matchSnapshot to expect numbers', function() {
      const testVar = 1;

      expect(testVar).to.matchSnapshot(this);
    });

    it('use matchSnapshot to expect booleans', function() {
      const testVar = true;

      expect(testVar).to.matchSnapshot(this);
    });

    it('use matchSnapshot to expect strings', function() {
      const testVar = 'Hello World!';

      expect(testVar).to.matchSnapshot(this);
    });

    it('use matchSnapshot to expect arrays', function() {
      const testVar = [1, 'two', '3'];

      expect(testVar).to.matchSnapshot(this);
    });

    it('use matchSnapshot to expect objects', function() {
      const testVar = {
        a: {
          b: 1,
          c: 2,
        },
        d: 3,
      };

      expect(testVar).to.matchSnapshot(this);
    });

    it('use the hint attribute to customize the snapshot title', function() {
      const testVar = 'custom name';

      expect(testVar).to.matchSnapshot(this, '(go check the __snapshots__ folder)');
    });

    it('use the hint attribute to have more than one matchSnapshot per it', function() {
      const testVar = 10;

      expect(testVar).to.matchSnapshot(this, '(value)');
      expect(typeof testVar).to.matchSnapshot(this, '(type)');
    });

    it('stores multiline snapshots', function() {
      const testVar = `this string
spans across
multiple lines`;

      expect(testVar).to.matchSnapshot(this);
    });
  });
});
