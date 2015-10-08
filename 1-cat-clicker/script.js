/**
 * Created by debajit.roy on 08/10/15.
 */

(function () {
  var catClick = 0;
  var catImage = document.getElementById('cat-image');
  var clickCounter = document.getElementsByClassName('click-counter');

  catImage.addEventListener('click', function () {
    catClick++;
    clickCounter[0].innerHTML = catClick;
  })
})();