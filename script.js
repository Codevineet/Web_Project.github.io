let flag = 2;
slideShow(flag);

function slideShow(num){

  let slides =   document.getElementsByClassName('slider');
  if(num == slides.length){
    flag = 0;
    num =0;
  }
 
  for(let y of slides){
 y.style.display = "none";
  }
  slides[num].style.display = "block";
}

function controller(x){
flag = flag + x;
slideShow(flag);
// flag = flag - x;
}


