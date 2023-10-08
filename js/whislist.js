// JavaScript for handling the wishlist functionality
document.addEventListener('DOMContentLoaded', function () {
    const heartIcons = document.querySelectorAll('.bx-heart');
    const wishlistPanel = document.getElementById('wishlistPanel');
    const wishlistItems = document.getElementById('wishlistItems');
    const wishlist = ["Kashmiri Shawls","Apricots"];

    // Function to toggle an item in the wishlist
    function toggleWishlistItem(item) {
        const itemId = item.dataset.itemId;
        const itemIndex = wishlist.indexOf(itemId);

        if (itemIndex === -1) {
            wishlist.push(itemId);
        } else {
            wishlist.splice(itemIndex, 1);
        }

        updateWishlistPanel();
    }

    // Function to update the wishlist panel content
    function updateWishlistPanel() {
        wishlistItems.innerHTML = '';
        wishlist.forEach(itemId => {
            const listItem = document.createElement('li');
            listItem.textContent = itemId;
            wishlistItems.appendChild(listItem);
        });
    }

    // Add click event listeners to heart icons
    heartIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            toggleWishlistItem(icon);
        });
    });

    // Toggle the visibility of the wishlist panel
    const heartIcon = document.getElementById('heart');
    heartIcon.addEventListener('click', function () {
        wishlistPanel.classList.toggle('show-wishlist');
    });
});
