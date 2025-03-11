document.querySelector("#tickethack").addEventListener("click", function () {
  document.location.href =
    "http://127.0.0.1:5500/ticketHack/tickethack-frontend/index.html";
});

document.querySelector("#p-cart").addEventListener("click", function () {
  document.location.href =
    "http://127.0.0.1:5500/ticketHack/tickethack-frontend/cart.html";
});

document.querySelector("#p-booking").addEventListener("click", function () {
  document.location.href =
    "http://127.0.0.1:5500/ticketHack/tickethack-frontend/bookings.html";
});

document.querySelector('#search').addEventListener("click", () => {
  fetch('http://localhost:3000/trips')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
})