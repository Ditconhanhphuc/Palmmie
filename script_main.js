// Click heart
const wishlistIcons = document.querySelectorAll('.wishlist-action__icon-empty');

wishlistIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('wishlist-action__icon--fill')) {
      icon.classList.remove('wishlist-action__icon--liked');
      icon.classList.remove('wishlist-action__icon--fill');
      icon.classList.add('wishlist-action__icon-empty');
      icon.style.color = '#fff'; // Reset color to default
    } else if (icon.classList.contains('wishlist-action__icon-empty')) {
      icon.classList.add('wishlist-action__icon--liked');
      icon.classList.add('wishlist-action__icon--fill');
      icon.classList.remove('wishlist-action__icon-empty');
      icon.style.color = '#fadcda'; // Set color to pink
    }
  });
});
