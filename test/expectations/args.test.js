/*!
 * Jack.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * The tested class.
 */
var Args = require('../../lib/expectations/args');

describe('Args', function() {
  it('should do nothing if no expectations is set.', function() {
    var args = new Args('foo');
    args.end();
  });
  
  it('should throw an error if expectations is not met', function() {
    var args = new Args('foo');
    var error = null;
    args.expect(['foo', 'bar'])
    try {
      args.end();
    } catch (err) {
      error = err;
    } finally {
      if (!error) throw new Error('An error was expected.');
    }
    
    args = new Args('foo');
    args.expect(['foo', 'bar']);
    args.notify(['foo', 'bar']);
    try {
      args.end();
    } catch (err) {
      error = err;
    } finally {
      if (!error) throw new Error('An error was expected.');
    }
    
    args = new Args('foo');
    args.expect(['foo', 'bar']);
    args.notify(['foo', 'bar']);
    args.end();
  });
});
