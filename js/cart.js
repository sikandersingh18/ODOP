// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.bx-cart');
    const cartPanel = document.getElementById('cartPanel');
    const cartItems = document.getElementById('cartItems');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = [];
  
    // Function to add an item to the cart
    function addToCart(item) {
        const itemId = item.dataset.itemId;
        const itemTitle = item.dataset.itemTitle;
        const itemPrice = parseFloat(item.dataset.itemPrice);
  
        // Check if the item is already in the cart
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
  
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
        }
  
        updateCartIcon();
        updateCartPanel();
    }
  
    // Function to update the cart icon
    function updateCartIcon() {
        const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        const cartIconSpan = cartIcon.querySelector('span');
        cartIconSpan.textContent = totalQuantity;
    }
  
    // Function to update the cart panel content
    function updateCartPanel() {
        cartItems.innerHTML = '';
  
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(listItem);
        });
    }
  
    // Add click event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            addToCart(button);
        });
    });
  
    // Toggle the visibility of the cart panel
    cartIcon.addEventListener('click', function () {
        cartPanel.classList.toggle('show-cart');
    });
  });
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.bx-cart');
    const cartPanel = document.getElementById('cartPanel');
    const cartItems = document.getElementById('cartItems');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = [];
  
    // Function to add an item to the cart
    function addToCart(item) {
        const itemId = item.dataset.itemId;
        const itemTitle = item.dataset.itemTitle;
        const itemPrice = parseFloat(item.dataset.itemPrice);
  
        // Check if the item is already in the cart
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
  
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
        }
  
        updateCartIcon();
        updateCartPanel();
    }
  
    // Function to update the cart icon
    function updateCartIcon() {
        const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        const cartIconSpan = cartIcon.querySelector('span');
        cartIconSpan.textContent = totalQuantity;
    }
  
    // Function to update the cart panel content
    function updateCartPanel() {
        cartItems.innerHTML = '';
  
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(listItem);
        });
    }
  
    // Add click event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            addToCart(button);
        });
    });
  
    // Toggle the visibility of the cart panel
    cartIcon.addEventListener('click', function () {
        cartPanel.classList.toggle('show-cart');
    });
  });
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.bx-cart');
    const cartPanel = document.getElementById('cartPanel');
    const cartItems = document.getElementById('cartItems');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = [];
  
    // Function to add an item to the cart
    function addToCart(item) {
        const itemId = item.dataset.itemId;
        const itemTitle = item.dataset.itemTitle;
        const itemPrice = parseFloat(item.dataset.itemPrice);
  
        // Check if the item is already in the cart
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
  
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
        }
  
        updateCartIcon();
        updateCartPanel();
    }
  
    // Function to update the cart icon
    function updateCartIcon() {
        const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        const cartIconSpan = cartIcon.querySelector('span');
        cartIconSpan.textContent = totalQuantity;
    }
  
    // Function to update the cart panel content
    function updateCartPanel() {
        cartItems.innerHTML = '';
  
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(listItem);
        });
    }
  
    // Add click event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            addToCart(button);
        });
    });
  
    // Toggle the visibility of the cart panel
    cartIcon.addEventListener('click', function () {
        cartPanel.classList.toggle('show-cart');
    });
  });
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
// JavaScript for handling the shopping cart functionality
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.querySelector('.bx-cart');
  const cartPanel = document.getElementById('cartPanel');
  const cartItems = document.getElementById('cartItems');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = [];

  // Function to add an item to the cart
  function addToCart(item) {
      const itemId = item.dataset.itemId;
      const itemTitle = item.dataset.itemTitle;
      const itemPrice = parseFloat(item.dataset.itemPrice);

      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.id === itemId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ id: itemId, title: itemTitle, price: itemPrice, quantity: 1 });
      }

      updateCartIcon();
      updateCartPanel();
  }

  // Function to update the cart icon
  function updateCartIcon() {
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      const cartIconSpan = cartIcon.querySelector('span');
      cartIconSpan.textContent = totalQuantity;
  }

  // Function to update the cart panel content
  function updateCartPanel() {
      cartItems.innerHTML = '';

      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.title} x${item.quantity} - $${item.price.toFixed(2)}`;
          cartItems.appendChild(listItem);
      });
  }

  // Add click event listeners to "Add to Cart" buttons
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          addToCart(button);
      });
  });

  // Toggle the visibility of the cart panel
  cartIcon.addEventListener('click', function () {
      cartPanel.classList.toggle('show-cart');
  });
});
      