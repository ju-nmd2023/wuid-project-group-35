//taking user back to top
const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });


//Effect to make the pictures larger while hovering with the mouse

window.addEventListener('load', function () {
  // Function to add zoom effect on image hover
  function addZoomEffect() {
    this.classList.add('zoomed');
  }

  // Function to remove zoom effect on image mouseout
  function removeZoomEffect() {
    this.classList.remove('zoomed');
  }
  // pictures that the effect should work on
  document.querySelectorAll('.accessories-pictures img, .cart-img').forEach(function (img) {
    img.addEventListener('mouseover', addZoomEffect);
    img.addEventListener('mouseout', removeZoomEffect);
  });
});