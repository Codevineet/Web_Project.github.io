document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";
document.body.style.fontFamily = "Poppins";
document.body.style.overflow = "hidden";

document.body.style.backgroundColor = "#f2efea";

let bg = document.createElement("div");
bg.style.width = "70rem";
bg.style.height = "80rem";
bg.style.clipPath = "circle(69.0% at 0 31%)";
bg.style.position = "absolute";
bg.style.zIndex = "-1";
bg.style.backgroundColor = "#66d7d1";
bg.style.top = "0px";

document.body.append(bg);

async function load() {
  let request = new Request("index.json");
  let response = await fetch(request);

  let json_obj = await response.json();
  Sign_Up(json_obj);
}

function Sign_Up(json_obj) {
  let span = document.createElement("span");
  span.innerHTML = json_obj.cont7;
  span.style.position = "absolute";
  span.style.top = "4rem";
  span.style.left = "10rem";
  span.style.fontSize = "1.5rem";
  document.body.append(span);

  let span1 = document.createElement("span");
  span1.append(json_obj.cont8);
  span1.style.position = "absolute";
  span1.style.top = "8rem";
  span1.style.left = "8rem";
  span1.style.fontSize = "1.2rem";
  span1.style.textAlign = "center";
  document.body.append(span1);

  let img1 = document.createElement("img");
  img1.src = json_obj.img21;
  img1.style.height = "30rem";
  img1.style.width = "44rem";
  img1.style.position = "absolute";
  img1.style.top = "16rem";
  img1.style.left = "4rem";

  document.body.append(img1);

  let span2 = document.createElement("span");
  span2.append(json_obj.cont14);
  span2.style.position = "absolute";
  span2.style.top = "5rem";
  span2.style.right = "24.5rem";
  span2.style.fontSize = "3rem";
  span2.style.textAlign = "center";
  document.body.append(span2);

  let input1 = document.createElement("input");
  input1.type = "text";
  input1.required = "true";
  input1.style.position = "absolute";
  input1.style.top = "13rem";
  input1.style.right = "18rem";
  input1.style.width = "20rem";
  input1.style.height = "3rem";
  input1.style.borderRadius = "2rem";
  input1.style.backgroundColor = "white";
  input1.style.textIndent = "52px";
  input1.style.fontSize = "1.3rem";
  input1.style.textAlign = "left";
  input1.style.padding = "0 0.4rem";
  input1.placeholder = "Username";
  document.body.append(input1);



  let input4 = document.createElement("input");
  input4.type = "password";
  input4.required = "true";
  input4.style.position = "absolute";
  input4.style.top = "20rem";
  input4.style.right = "18rem";
  input4.style.width = "20rem";
  input4.style.height = "3rem";
  input4.style.borderRadius = "2rem";
  input4.style.backgroundColor = "white";
  input4.style.padding = "0 0.4rem";
  input4.style.textIndent = "52px";
  input4.style.fontSize = "1.3rem";
  input4.style.textAlign = "left";
  input4.placeholder = "Password";
  document.body.append(input4);

  let img2 = document.createElement("img");
  img2.src = json_obj.img12;
  img2.style.height = "2rem";
  img2.style.position = "absolute";
  img2.style.top = "20.5rem";
  img2.style.right = "36rem";
  img2.style.cursor = "pointer";
  img2.addEventListener("click", toggle);
  document.body.append(img2);

  let img3 = document.createElement("img");
  img3.src = json_obj.img14;
  img3.style.height = "2rem";
  img3.style.position = "absolute";
  img3.style.top = "13.6rem";
  img3.style.right = "36rem";
  img3.style.cursor = "pointer";
  document.body.append(img3);


  function toggle() {
    input4.type = input4.type == "password" ? "text" : "password";
    img2.src =
      img2.getAttribute("src") == json_obj.img12
        ? json_obj.img13
        : json_obj.img12;
  }

  let button = document.createElement("button");
  button.innerHTML = json_obj.cont13;
  button.style.padding = "1.2rem 4rem";
  button.style.borderRadius = "2rem";
  button.style.outline = "none";
  button.style.fontWeight = "600";
  button.style.textTransform = "uppercase";
  button.style.backgroundColor = "rgb(47, 72, 88)";
  button.style.color = "white";
  button.style.position = "absolute";
  button.style.bottom = "13rem";
  button.style.right = "24rem";
  button.style.borderStyle = "none";
  button.style.cursor = "pointer";
  document.body.append(button);

  button.onmouseenter = bgcolor;
  button.onmouseleave = bgchange;

  function bgcolor()
  {
    button.style.backgroundColor = "#66d7d1";
  }
  function bgchange()
  {
   button.style.backgroundColor = "rgb(50, 75, 92)";
  }

  let fb = document.createElement("img");
  fb.src = json_obj.img17;
  fb.style.width = "3rem";
  fb.style.height = "3rem";
  fb.style.position = "absolute";
  fb.style.bottom = "8.3rem";
  fb.style.right = "38rem";
  fb.style.outline = "1px solid black";
  fb.style.padding = "1rem";
  fb.style.borderRadius = "50%";
  fb.style.backgroundColor = "#3b5998";
  fb.style.cursor = "pointer";
  document.body.append(fb);

  let goog = document.createElement("img");
  goog.src = json_obj.img18;
  goog.style.width = "2.6rem";
  goog.style.height = "2.8rem";
  goog.style.position = "absolute";
  goog.style.bottom = "8.3rem";
  goog.style.right = "31.5rem";
  goog.style.outline = "1px solid black";
  goog.style.padding = "1rem";
  goog.style.borderRadius = "50%";
  goog.style.backgroundColor = "whitesmoke";
  goog.style.cursor = "pointer";
  document.body.append(goog);

  let link = document.createElement("img");
  link.src = json_obj.img19;
  link.style.width = "2.6rem";
  link.style.height = "2.6rem";
  link.style.position = "absolute";
  link.style.bottom = "8.3rem";
  link.style.right = "25rem";
  link.style.outline = "1px solid black";
  link.style.padding = "1rem";
  link.style.borderRadius = "50%";
  link.style.cursor = "pointer";
  link.style.backgroundColor = "#0077b7";
  document.body.append(link);

  let insta = document.createElement("img");
  insta.src = json_obj.img20;
  insta.style.width = "2.6rem";
  insta.style.height = "2.6rem";
  insta.style.position = "absolute";
  insta.style.bottom = "8.3rem";
  insta.style.right = "18.5rem";
  insta.style.outline = "1px solid black";
  insta.style.padding = "1rem";
  insta.style.borderRadius = "50%";
  insta.style.cursor = "pointer";
  insta.style.backgroundColor = "whitesmoke"
  document.body.append(insta);


 

}
load();