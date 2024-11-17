function toggleSearchBar() {
  const searchBar = document.getElementById("searchBar");
  if (searchBar.style.display === "block") {
    searchBar.style.display = "none";
  } else {
    searchBar.style.display = "block";
  }
}

function performSearch() {
  const query = document.querySelector("#searchBar input").value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    alert("Please enter a search query.");
  }
}

function closeSearchBar() {
  document.getElementById("searchBar").style.display = "none";
}

let cartItemCount = 0;

function addToCart(button) {
  cartItemCount++;
  updateCartCount();

  button.textContent = "added";
  button.classList.add("added");
}

function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cartItemCount;
}
