// let size

let sizeList = document.getElementById("size_list")
let sizeListChild = sizeList.children
let sizeName = document.getElementById("size_name")

;[...sizeListChild].forEach((sizeItem) =>{
  sizeItem.addEventListener("click", function(event){
    ;[...sizeListChild].forEach(nestedSize => {
       nestedSize.classList.remove("active")
    });
    this.classList.add("active")
    let eventTarget = event.target.textContent
    sizeName.innerText = eventTarget
  })
})

var button = document.getElementById("addToCartBtn");

setInterval(function() {
  button.classList.add("moveBtn");
  setTimeout(function() {
    button.classList.remove("moveBtn");
  }, 500);
}, 3000);