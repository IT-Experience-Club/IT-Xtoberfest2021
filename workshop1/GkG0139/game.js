function play() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.meals[0].strMeal)
      var element = document.getElementById("cookie1");
      element.classList.add("cookie-hide");
      var element = document.getElementById("cookie2");
      element.classList.add("cookie-show");
      document.getElementById("fortune").innerHTML = data.meals[0].strMeal;
    })
    .catch((error) => console.log(error));
}
