// Select ALL thumbnail divs and the main hero image
const thumbnails = document.querySelectorAll(".thumbnail");
const heroImg = document.querySelector(".hero-img");

// Loop through each thumbnail and add a click listener
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    // Get the 'src' attribute from the clicked thumbnail's inner image
    const thumbnailImg = thumbnail.querySelector("img");
    const newImageSrc = thumbnailImg.src;

    // ✨ GSAP Animation Starts Here ✨
    // Don't do anything if the clicked image is already the main image
    if (heroImg.src === newImageSrc) {
      return;
    }

    // 1. Create a GSAP Timeline for a clean sequence
    const tl = gsap.timeline();
    
    // 2. Animate the current image out (fade to transparent)
    tl.to(heroImg, { 
      opacity: 0, 
      duration: 0.4 
    });
    
    // 3. Change the image source AFTER the fade-out is complete
    tl.call(() => {
      heroImg.src = newImageSrc;
    });
    
    // 4. Animate the new image in (fade from transparent to opaque)
    tl.to(heroImg, { 
      opacity: 1, 
      duration: 0.4 
    });
  });
});