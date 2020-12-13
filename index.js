// Your code here
let dodger = document.getElementById("dodger")
function move(){
  document.addEventListener("keydown",(e) => {
    if(e.key === "ArrowLeft"){
      let nmb = dodger.style.left.replace("px","")
      let left = parseInt(nmb,10)
      if(left > 0)
        dodger.style.left = `${left - 2}px`
    }
    else if(e.key === "ArrowRight"){
      let nmb = dodger.style.right.replace("px","")
      let right = parseInt(nmb,10)
      if(right < 400)
        dodger.style.right = `${right + 2}px`
    }
    else if(e.key === "ArrowUp"){
      let nmb = dodger.style.top.replace("px","")
      let right = parseInt(nmb,10)
      if(right < document.style.width)
        dodger.style.right = `${right + 2}px`
    }
  })
}
move()
