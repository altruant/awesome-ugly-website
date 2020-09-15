(function() {
  'use strict'
  const ele = document.querySelector('button');
  ele.addEventListener('click', function(event) {
    // target is the node the user clicked
    // currentTarget is the node the event listener was attached
    // REMEMBER CLICK EVENT BUBBLES UP!!!
    if (document.querySelector('img').src.includes('jerry')) {
      document.querySelector('img').src = './resources/bee.jpg';
    } else {
      document.querySelector('img').src = './resources/jerry.jpg';
    }
    document.querySelector('img').src = './resources/bee.jpg';
  });
})();
