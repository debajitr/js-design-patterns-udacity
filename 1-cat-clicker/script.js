/**
 * Created by debajit.roy on 08/10/15.
 */

(function () {
  var fooCat = {
    clicks: 0
  };
  var barCat = {
    clicks: 0
  };
  var fooCatImage = document.getElementById('fooCatImage');
  var barCatImage = document.getElementById('barCatImage');
  var fooClickCounter = document.getElementById('fooClickCounter');
  var barClickCounter = document.getElementById('barClickCounter');
  var clickEvent = 'click';

  fooCatImage.addEventListener(clickEvent, pokeCat(fooCat, fooClickCounter));
  barCatImage.addEventListener(clickEvent, pokeCat(barCat, barClickCounter));

  function pokeCat (cat, clickCounter) {
    return function () {
      clickCounter.textContent = ++cat.clicks;
    };
  }

})();