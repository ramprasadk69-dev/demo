const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h2").innerText;
    alert(title + " clicked");
  });
});



