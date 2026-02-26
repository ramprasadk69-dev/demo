// MOCK DATA for deals
const deals = [
    { id: 1, title: "Smart Phone Deal", image: "https://via.placeholder.com/300", price: "₹9,499" },
    { id: 2, title: "Wireless Earbuds", image: "https://via.placeholder.com/300", price: "₹1,799" },
    { id: 3, title: "Laptop Discount", image: "https://via.placeholder.com/300", price: "₹24,999" },
    { id: 4, title: "Smartwatch Sale", image: "https://via.placeholder.com/300", price: "₹2,499" },
  ];
  
  const dealsList = document.getElementById("dealsList");
  
  function renderDeals(list) {
    dealsList.innerHTML = "";
    list.forEach(deal => {
      dealsList.innerHTML += `
        <div class="deal-card">
          <img src="${deal.image}" alt="${deal.title}">
          <h3>${deal.title}</h3>
          <p class="price">${deal.price}</p>
          <a href="#" class="btn">View Deal</a>
        </div>
      `;
    });
  }
  
  // initialize
  renderDeals(deals);