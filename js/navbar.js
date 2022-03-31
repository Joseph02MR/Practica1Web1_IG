// element references
const navbar = document.querySelector(".navbara");
const spot = document.querySelector(".spot");

// handler
const handleScroll = (entries) => {
  const spotIsVisible = entries[0].isIntersecting;
  if (spotIsVisible) navbar.classList.remove("fixed-top");
  else navbar.classList.add("fixed-top");
};


const options = {
  root: null, 
  rootMargin: "0px", 
  threshhold: 0, 
};

// initialize and start the observer.
const observer = new IntersectionObserver(handleScroll, options);
observer.observe(spot);