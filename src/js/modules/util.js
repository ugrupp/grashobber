// Util class
export default class Util {
  // calls any function on 'esc' press
  static esc(cb) {
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        typeof cb === 'function' && cb();
      }
    });
  }
}
