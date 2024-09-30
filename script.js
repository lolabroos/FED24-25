// nav bar
var openButton = document.querySelector("header > button");
openButton.onclick = openMenu;

function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

//carousel 

function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let linkButtons = carrousel.querySelectorAll(":scope > a");
  

  function iniLinkButtons() {    
    for(linkButton of linkButtons) {

      linkButton.addEventListener("click", function(e){

				e.preventDefault();			
				let direction = this.getAttribute("href");
				goToElement(direction);
      });
    }
	}
  
  
  function iniStartPosition() {
    carrouselElements[0].classList.add("current");
    carrouselElementsContainer.scrollLeft = 0;
  }
  
  
  function goToElement(direction) {
		let currentElement = carrousel.querySelector(":scope > ul > .current");

		let newElement;
		if (direction == "previous") {
			newElement = currentElement.previousElementSibling;
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			newElement = currentElement.nextElementSibling;
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}
		scrollToElement(newElement);
  }
  
  function scrollToElement(newElement) {
    let carouselElementsContainer = newElement.closest("ul");

		let newElementOffset = newElement.offsetLeft;

		carouselElementsContainer.scrollTo({
			left: newElementOffset
		});
    updateCurrentElement(newElement);
  }

	function updateCurrentElement(newElement) {
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		currentElement.classList.remove("current");
		newElement.classList.add("current");
	}
  
  
  iniLinkButtons();	
  iniStartPosition();
}

(function() {
  createCaroCarrousel("justButtons");
})();