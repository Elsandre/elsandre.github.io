let picture = document.getElementByClass('picture');

function fullSize(picture) {
  if (picture.target.style.width = "300px") {
    picture.target.style.width = "100%";
    picture.target.style.height = "auto";
  } else if (picture.target.style.width = "100%") {
    picture.target.style.width = "300px";
    picture.target.style.height = "200px";
  } else {
    console.log('error')
  }
}

picture.onclick = fullSize;
