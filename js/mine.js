var imgs = document.querySelectorAll("img"); //node list
var fixedBox = document.getElementById("fixedBox");
var smallBox = document.getElementById("smallBox");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var closeBtn = document.getElementById("closeBtn");



var index;

var imgsArr = [];
for (var i = 0; i < imgs.length; i++) {
  imgsArr.push(imgs[i]);
  console.log(imgsArr);
}

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    var imgclic = e.target
    index = imgsArr.indexOf(imgclic);
    var imgsrc = imgclic.getAttribute('src');
    smallBox.style.backgroundImage = `url(${imgsrc})`;
    fixedBox.style.display = 'flex';
  })
}


closeBtn.addEventListener('click', closeimg);

function closeimg() {
  fixedBox.style.display = 'none';
}


nextBtn.addEventListener('click', getnextimg);

function getnextimg() {
  index++;
  if (index == imgs.length) {
    index = 0;
  }
  var nextimg = imgsArr[index];
  var imgsrc = nextimg.getAttribute("src");
  smallBox.style.backgroundImage = `url(${imgsrc})`

}


prevBtn.addEventListener('click', getprevimg);

function getprevimg() {
  index--;
  if (index == -1) {
    index = imgsArr.length - 1;
  }
  var previmg = imgsArr[index];
  var imgsrc = previmg.getAttribute("src");
  smallBox.style.backgroundImage = `url(${imgsrc})`;
}

document.addEventListener("keydown", function (e) {
  if (fixedBox.style.display == "flex") {
    if (e.key == "ArrowRight") {
      getnextimg();
    } else if (e.key == "ArrowLeft") {
      getprevimg();
    } else if (e.key == "Escape") {
      closeimg();
    }
  }
});


// document.addEventListener('keydown', function (e) {


//     console.log(e)
//     if (fixedBox.getAttribute("class") == "d-flex") {
//       if (e.key == "ArrowRight") {
//         getNextImg();
//       } else if (e.key == "ArrowLeft") {
//         getPrevImg();
//       } else if (e.key == "Escape") {
//         closeImg();
//       }
//     }
//   });




// document.addEventListener('keydown',function(e) {
//     if (fixedBox.getAttribute('class') == 'd-flex') {
//         if (e.key == 'ArrowRight') {
//             getnextimg();
//         } else if (e.key == 'ArrowLeft'){
//         getprevimg();
//         } else if(e.key=='Escape'){
//             closeimg();
//         }
//     }
//     });