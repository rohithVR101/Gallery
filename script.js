resize();

function load() {
  var myVar = setTimeout(() => {
    document.getElementById("gallery").style.display = "flex";
  }, 100);
}

function resize() {
  var imgs = document.getElementsByTagName("img");
  for (var i = 0; i < imgs.length; i++) {
    if (imgs[i].width / imgs[i].height > 1) {
      imgs[i].classList.add("img-landscape");
    } else {
      imgs[i].classList.add("img-portrait");
    }
  }
}
