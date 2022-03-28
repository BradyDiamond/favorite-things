$(document).ready(function() {
  $("form#ft-input").submit(function(event) {
  event.preventDefault();
  const name = $("input#name").val();
  const food = $("input#food").val()
  const movie = $("input#movie").val();
  const book = $("input#book").val();
  const song = $("input#song").val();
  const drink = $("input#drink").val();

  const array1 = [name, food, movie, book, song, drink]
  let array2 = []
  array2.push(array1[0],array1[2],array1[1])
  console.log(array2)

  $("#output").text("");
  $("#output").append(array2)
  });
});
