var count = 2;
var n1, n2;
$("#btn1").click(function () {
  if ($("#N1").val() && $("#N2").val()) {
    n1 = +$("#N1").val();
    n2 = +$("#N2").val();
    somma(n1, n2);
  } else alert("fill all the text field");
});

function somma(a, b) {
  console.log("somma", a, b);
  // chiama api somma
  $.ajax("http://localhost:3000/somma?a=" + a + "&b=" + b)
    .done(function (data) {
      console.log("success:", data);
      // chiama la funzione di renderizzazione
      renderizzazione(a, b, "+", data);
    })
    .fail(function (err) {
      console.log("error:", err);
    });
}

function renderizzazione(n1, n2, sign, res) {
  console.log(
    "strings:",
    localStorage.getItem("trStrings")
  );
  count++;
  // crea la riga della tabella
  var trString =
    "<tr><td>" +
    count +
    "</td><td>" +
    n1 +
    "</td><td>" +
    sign +
    "</td><td>" +
    n2 +
    "</td><td>" +
    res +
    "</td></tr>";
  // la aggiunge al local storage
  localStorage.setItem(
    "trStrings",
    localStorage.getItem("trStrings") + trString
  );
  // la renderizza nella tabella
  $("#table").append(trString);
}

$("#btn2").click(function () {
  calculation("-");
});
$("#btn3").click(function () {
  calculation("*");
});
$("#btn4").click(function () {
  calculation("/");
});

var addFirstLine = (function () {
  if (localStorage.getItem("trStrings")) {
    console.log("bella");
    $("#table").append(localStorage.getItem("trStrings"));
  }
})();
