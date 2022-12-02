document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";
document.body.style.fontFamily = "Poppins";

document.body.style.backgroundColor = "#f2efea";

let bg = document.createElement("div");
bg.style.width = "100%";
bg.style.height = "100%";
bg.style.clipPath = "polygon(0 0, 50% 0, 50% 100%, 0% 100%)";
bg.style.position = "absolute";
bg.style.zIndex = "-1";
bg.style.backgroundColor = "#FFCCCB";
bg.style.top = "0px";

document.body.append(bg);

async function load() {
  let request = new Request("index.json");
  let response = await fetch(request);

  let json_obj = await response.json();
  Contact(json_obj);
}

function Contact(json_obj) {
  let img = document.createElement("img");
  img.src = json_obj.img22;
  img.style.width = "35rem";
  img.style.height = "35rem";
  
  img.style.position = "relative";
  img.style.top = "4rem";
  img.style.left = "6rem";
  img.style.backgroundColor = "bisque";
  img.style.borderRadius = "2rem";

  document.body.append(img);

  let span1 = document.createElement("span");
  span1.innerHTML = json_obj.cont15;
  span1.style.fontSize = "2rem";
  span1.style.position = "absolute";
  span1.style.top = "3rem";
  span1.style.right = "25rem";
  span1.style.wordSpacing = "0.3rem";
  document.body.append(span1);

  let input1 = document.createElement("input");
  input1.type = "text";
  input1.required = "true";
  input1.style.position = "absolute";
  input1.style.top = "10rem";
  input1.style.right = "18rem";
  input1.style.width = "20rem";
  input1.style.height = "3rem";
  input1.style.borderRadius = "2rem";
  input1.style.backgroundColor = "white";
  input1.style.textIndent = "52px";
  input1.style.fontSize = "1.3rem";
  input1.style.textAlign = "left";
  input1.style.padding = "0 0.4rem";
  input1.placeholder = "Name";
  document.body.append(input1);

  let img3 = document.createElement("img");
  img3.src = json_obj.img14;
  img3.style.height = "2rem";
  img3.style.position = "absolute";
  img3.style.top = "10.7rem";
  img3.style.right = "36rem";
  img3.style.cursor = "pointer";
  document.body.append(img3);

  let input2 = document.createElement("input");
  input2.type = "email";
  input2.required = "true";
  input2.style.position = "absolute";
  input2.style.top = "16rem";
  input2.style.right = "18rem";
  input2.style.width = "20rem";
  input2.style.height = "3rem";
  input2.style.borderRadius = "2rem";
  input2.style.backgroundColor = "white";
  input2.style.textIndent = "54px";
  input2.style.fontSize = "1.3rem";
  input2.style.textAlign = "left";
  input2.placeholder = "Email";
  input2.style.padding = "0 0.4rem";
  document.body.append(input2);

  let img4 = document.createElement("img");
  img4.src = json_obj.img15;
  img4.style.height = "2rem";
  img4.style.position = "absolute";
  img4.style.top = "16.6rem";
  img4.style.right = "36rem";
  img4.style.cursor = "pointer";
  document.body.append(img4);

  let input3 = document.createElement("textarea");
  input3.required = "true";
  input3.style.position = "absolute";
  input3.style.top = "22rem";
  input3.style.right = "18rem";
  input3.style.width = "20rem";
  input3.style.height = "9rem";
  input3.style.borderRadius = "2rem";
  input3.style.backgroundColor = "white";
  input3.style.textIndent = "54px";
  input3.style.marginLeft = "54px";
  input3.style.fontSize = "1.3rem";
  input3.style.textAlign = "left";
  input3.placeholder = "Message";
  input3.style.padding = "0 0.4rem";
  input3.style.margin = "1rem 0rem";
  document.body.append(input3);

  let img5 = document.createElement("img");
  img5.src = json_obj.img23;
  img5.style.height = "2rem";
  img5.style.position = "absolute";
  img5.style.top = "23.5rem";
  img5.style.right = "36rem";
  img5.style.cursor = "pointer";
  document.body.append(img5);

  let button = document.createElement("button");
  button.innerHTML = json_obj.cont16;
  button.style.padding = "1.2rem 4rem";
  button.style.borderRadius = "2rem";
  button.style.outline = "none";
  button.style.fontWeight = "600";
  button.style.fontSize = "1rem";
  button.style.backgroundColor = "rgb(47, 72, 88)";
  button.style.color = "white";
  button.style.position = "absolute";
  button.style.bottom = "4.8rem";
  button.style.right = "17.4rem";
  button.style.width = "21rem";
  button.style.borderStyle = "none";
  button.style.cursor = "pointer";
  document.body.append(button);

  button.onmouseenter = bgcolor;
  button.onmouseleave = bgchange;

  function bgcolor()
  {
    button.style.backgroundColor = "red";
    button.style.color = "rgb(47, 72, 88)";
  }
  function bgchange()
  {
   button.style.backgroundColor = "#FF6D51";
   button.style.color = "white";
  }
}

load();
