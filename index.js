function filterize(){
  let images = document.querySelectorAll('.filterize')
  // if(options.color === "blue"){
  //   options.color //insert something with blue here
  // } else {
  //   //insert something with pink here
  // }
  images.forEach(image => {
    image.style.filter = `greyscale(100%)`
  })
}

module.exports.filterize = filterize
