const cafe = document.getElementById('cafe');
let cafeCount = 0;


cafe.addEventListener('click', function() {
  cafeCount++;
  document.getElementById('cafe-count').innerHTML = cafeCount + "";
});
