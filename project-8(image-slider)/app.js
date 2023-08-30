const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".wrapper i")
const firstCardWidth = document.querySelector(".card").offsetWidth;

let isDraggin = false, startX, startScrollLeft;

// right and left buttons of the carousel 
// add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(btn.id); check if the carousel buttons
        // if clickked is left then the first card scrollleft else add to it
        carousel.scrollLeft += btn.id === "left"? - firstCardWidth : firstCardWidth;
})
});

const dragStart = (e) => {
    isDraggin = true;
    carousel.classList.add("dragging");
    // records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // console.log(e.pageX); check it works
    if(!isDraggin) return; //if isDragging is false return from here
    //updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDraggin = false;
    carousel.classList.remove("dragging");
}

//mouse movements 
carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup", dragStop)