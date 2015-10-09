/**
 * Created by debajit.roy on 08/10/15.
 */

(function () {
  var catClick = 0;
  var catImage = document.getElementById('cat-image');
  var clickCounter = document.getElementsByClassName('click-counter');
  var clickContainer = document.getElementById("click-container");
  var clickEvent = 'click';
  var hideClass = 'hide';

  catImage.addEventListener(clickEvent, function () {
    catClick++;
    clickCounter[0].innerHTML = catClick;

    if (clickContainer.classList.contains(hideClass)) {
      clickContainer.classList.remove(hideClass);
    }
  })
})();