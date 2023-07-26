// CSS
const image = document.getElementById('img')
console.log(image);

image.addEventListener('click',function () {
      console.log("clicked");
      // image.style.width = "200px"
      // image.style.transform = "translateX(3)"
      image.classList.add('add-class')
})
image.addEventListener('dblclick',function () {
      // console.log("clicked");
      console.log("remove");
      // image.style.width = "200px"
      // image.style.transform = "translateX(3)"
      image.classList.remove('remove')
})