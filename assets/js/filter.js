
// side show
let clsSlideShow = document.getElementById("cls__slideShow")
let filterSidebar = document.getElementById("filter_sidebar")
let sidebarClose = document.querySelector(".sidebarClose")

clsSlideShow.addEventListener("click", function(){
  filterSidebar.style.left = "0px"
})

sidebarClose.addEventListener("click", function(){
  filterSidebar.style.left = "-100%"
})


window.addEventListener("click", (event) => {
  let eventTarget = event.target;
  if (!eventTarget.closest("#cls__slideShow") && !eventTarget.closest("#filter_sidebar")) {
    filterSidebar.style.left = "-100%"
  }
});

// cls filter view

let filterproductwrapper = document.querySelector(".cls__filterproduct_wrapper")
let filterTowgrid = document.getElementById("filter_towgrid")
let filterThreegrid = document.getElementById("filter_trheegrid")
let filterFourgrid = document.getElementById("filter_fourgrid")

filterTowgrid.addEventListener("click", function(){
    filterproductwrapper.style.cssText = "grid-template-columns: repeat(2, 1fr)"
    this.classList.add("activeGrid")
    filterThreegrid.classList.remove("activeGridThree")
    filterFourgrid.classList.remove("activeGridFour")
})

filterThreegrid.addEventListener("click", function(){
    filterproductwrapper.style.cssText = "grid-template-columns: repeat(3, 1fr)"
    this.classList.add("activeGridThree")
    filterTowgrid.classList.remove("activeGrid")
    filterFourgrid.classList.remove("activeGridFour")
})

filterFourgrid.addEventListener("click", function(){
    filterproductwrapper.style.cssText = "grid-template-columns: repeat(4, 1fr)"
    this.classList.add("activeGridFour")
    filterTowgrid.classList.remove("activeGrid")
    filterThreegrid.classList.remove("activeGridThree") 
})

