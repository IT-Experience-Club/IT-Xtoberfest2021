function play() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.meals[0].strMeal)
      cookie1.classList.add("cookie-hide");
      cookie2.classList.add("cookie-show");
      fortune.innerHTML = data.meals[0].strMeal;
    })
    .catch((error) => console.log(error));
}
