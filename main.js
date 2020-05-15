const menu = document.querySelector('.toggle')
const body = document.querySelector('body')

menu.addEventListener('click', () =>{
    body.classList.toggle('open')
})

// scroll
window.sr = ScrollReveal();

sr.reveal('.animate-left' ,{
    origin:'left',
    duration:1500,
    distance:'35rem',
    delay:500
})


sr.reveal('.animate-right' ,{
    origin:'right',
    duration:1500,
    distance:'35rem',
    delay:500
})

sr.reveal('.animate-top',{
    origin:'top',
    duration:1500,
    distance:'35rem',
    delay:500
})

sr.reveal('.animate-bottom' ,{
    origin:'bottom',
    duration:1500,
    distance:'35rem',
    delay:500
});

const active = document.querySelectorAll(".btns");
active.forEach(btn => {
    btn.onclik = () =>{
        btn.classList.toggle('active2');
    }
});


filterSelection("all") 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
 
  for (i = 0; i < x.length; i++) {
    myclasses(x[i], "show");
    if (x[i].className.indexOf(c) > -1) Moses(x[i], "show");
  }
}

function Moses(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function myclasses(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


var btnContainer = document.getElementById("myBtnContainer");
var btn = btnContainer.querySelector(".btns");
for (var i = 0; i < btns.length; i++) {
  btn[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}