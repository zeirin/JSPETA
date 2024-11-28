/*slider*/
var images = [
    {
      src: "pic1.jpg",
      url: "https://redragonshop.com/"
    },
    {
      src: "pic2.jpg",
      url: "https://www.facebook.com/rakk.ph/"
    },
    {
      src: "pic3.jpg",
      url: "https://rog.asus.com/ph/"
    }
  ];
  
  var currentImageIndex = 0;

  function next() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateImage();
  }
  
  function prev() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateImage();
  }
  
  function updateImage() {
      const slider = document.getElementById("slider");
      const sliderLink = document.getElementById("slider-link");
      slider.src = images[currentImageIndex].src;
      sliderLink.href = images[currentImageIndex].url;
  }
  
  // Add event listener to the slider link
sliderLink.addEventListener("click", function() {
    window.open(images[currentImageIndex].url, "_blank");
  });