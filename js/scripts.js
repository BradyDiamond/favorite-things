$(document).ready(function() {
  $("form#ft-input").submit(function(event) {
  event.preventDefault();
  const name = $("input#name").val();
  const food = $("input#food").val()
  const movie = $("input#movie").val();
  const book = $("input#book").val();
  const song = $("input#song").val();
  const drink = $("input#drink").val();

  let array = [name, food, movie, book, song, drink]
  console.log(array)

  });
});
