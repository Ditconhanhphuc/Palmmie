// Function to fetch data from the server and update HTML
function fetchProductsAndUpdateHTML() {
    return fetch('http://localhost:3001/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Update HTML with fetched data
        updateHTMLWithProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Function to update HTML with products data
  function updateHTMLWithProducts(products) {
    const container = document.querySelector('.section-product .grid__row');
  
    // Clear existing HTML content
    container.innerHTML = '';
  
    // Iterate over each product and create HTML elements dynamically
    products.forEach(product => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('grid__col-3');
  
      const productItemDiv = document.createElement('div');
      productItemDiv.classList.add('product-item');
  
      const wishlistActionDiv = document.createElement('div');
      wishlistActionDiv.classList.add('wishlist-action');
  
      const wishlistIconDiv = document.createElement('div');
      wishlistIconDiv.classList.add('wishlist-action__icon', 'wishlist-action__icon--liked');
  
      const emptyHeartIcon = document.createElement('i');
      emptyHeartIcon.classList.add('wishlist-action__icon-empty', 'fa-solid', 'fa-heart');
  
      const filledHeartIcon = document.createElement('i');
      filledHeartIcon.classList.add('wishlist-action__icon-fill', 'fa-solid', 'fa-heart');
      filledHeartIcon.style.color = '#fadcda';
  
      const productLink = document.createElement('a');
      productLink.classList.add('product-item-link');
      productLink.href = '#';
      productLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        navigateToProductDetailPage(product.PID);
      });
  
      const productLinkDiv = document.createElement('div');
      productLinkDiv.classList.add('product-item-link');
  
      const productImgDiv = document.createElement('div');
      productImgDiv.classList.add('product-item-link__img');
      productImgDiv.style.backgroundImage = `url(${product.image_link})`;
  
      const productTitleDiv = document.createElement('div');
      productTitleDiv.classList.add('product-item-link__title');
      productTitleDiv.textContent = product.Name;
  
      const productPriceDiv = document.createElement('div');
      productPriceDiv.classList.add('product-item-link__price');
      productPriceDiv.textContent = `${product.Price}₫`;
  
      const addToBagDiv = document.createElement('div');
      addToBagDiv.classList.add('product-item-addBag');
  
      const addToBagBtn = document.createElement('button');
      addToBagBtn.classList.add('product-item-addBag__btn', 'btn');
      addToBagBtn.textContent = 'ADD TO BAG';
  
      // Append elements to their respective parents
      wishlistIconDiv.appendChild(emptyHeartIcon);
      wishlistIconDiv.appendChild(filledHeartIcon);
      wishlistActionDiv.appendChild(wishlistIconDiv);
  
      productLinkDiv.appendChild(productImgDiv);
      productLinkDiv.appendChild(productTitleDiv);
      productLinkDiv.appendChild(productPriceDiv);
  
      productLink.appendChild(productLinkDiv);
  
      addToBagDiv.appendChild(addToBagBtn);
  
      productItemDiv.appendChild(wishlistActionDiv);
      productItemDiv.appendChild(productLink);
      productItemDiv.appendChild(addToBagDiv);
  
      colDiv.appendChild(productItemDiv);
  
      container.appendChild(colDiv);
    });
  }
  
  // Function to navigate to product detail page
  function navigateToProductDetailPage(productId) {
    // Replace this with the code to navigate to the product detail page
    console.log(`Navigating to product detail page for product with ID: ${productId}`);
  }
  
  // Call the fetchProductsAndUpdateHTML function when the script runs
  fetchProductsAndUpdateHTML();
  