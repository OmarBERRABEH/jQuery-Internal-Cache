'use strict';

const GET_NODE_CACHE = ($ => {
  // save the noop function to  return if the jQuery no exist
  let fn = () => {};
  try {
    //check the presence of the jQuery instance
    if ($ === undefined) throw new Error('jQuery libs not exist');

    // the UID jquery instance
    const $UID = $.expando;

    /**
     * @param node the DOM to be interogate
     **/
    fn = (node) => {
      const idNode = node[$UID];
      return idNode && $.cache[idNode];
    }

  } catch (e) {
    console.warn(e);
  }
  return fn;
})(window.jQuery);
