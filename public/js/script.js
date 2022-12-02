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
}

//number animation
let valueDisplays = document.querySelectorAll(".counter-numbers");
let interval = 1;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 800;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue + " +";
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let valueDisplaysx = document.querySelectorAll(".xcounter-numbers");
let intervalx = 0;

valueDisplaysx.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue + " Lakh +";
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


async function load() {
  let request = new Request("index.json");
  let response = await fetch(request);
  let json_obj = await response.json();
  quote(json_obj);
  factx(json_obj);
  advice(json_obj);
  eventx(json_obj);
}

//quote section
function quote(json_obj){
  let quote = document.getElementById('quote');
  quote.style = json_obj.quote_style;
  let box1 = document.createElement('div');
  box1.className = "box1";
  box1.style = json_obj.box1_style;
  quote.appendChild(box1);
  
  
  let boximg = document.createElement('img');
  boximg.src = json_obj.boximg;
  boximg.style = "width=415px; height:315px; position: absolute; opacity: 0.5;";
  box1.appendChild(boximg);
  
  let boxheading = document.createElement('p');
  boxheading.innerText = json_obj.quoteinnertext;
  boxheading.style = json_obj.boxheading_style;
  box1.appendChild(boxheading);
  
  let box2 = document.createElement('div');
  box2.className = "box2";
  box2.style = '  margin-top: 50px;'
  quote.appendChild(box2);
  
  let box2img = document.createElement('img');
  box2img.src = json_obj.boximg2;
  box2.appendChild(box2img);
}


//advice section
function advice(json_obj){


let advice = document.getElementById('advice');
advice.style = " margin-bottom: 100px;";
let adviceSec = document.createElement('div');
adviceSec.className = "advice-sec";
adviceSec.style = "display:flex; justify-content:center;"
advice.appendChild(adviceSec);

let red = document.createElement('div');
red.className = "red";
red.style = "width: 60px;height: 102px;left: 88px;top: 2653px;background: #F04B47;"
adviceSec.appendChild(red);

let adpic = document.createElement('img');
adpic.src = "Photos/advice2.png";
adpic.style = "width=321px; height:385px;"
adviceSec.appendChild(adpic);

let name = document.createElement('div');
name.className = "name";
name.style = "width:692px; height:309px; text-align:center;"
adviceSec.appendChild(name);

let namepic = document.createElement('img');
namepic.src = "Photos/bluequote.png";
namepic.style = " position: absolute;text-align: center; width:349px; height:287.73px;";
name.appendChild(namepic);

let adpara1 = document.createElement('p');
adpara1.innerText = "Anjali Bhatia";
adpara1.style = "font-family: 'Rubik'; font-style: normal; font-weight: 400; font-size: 49px; line-height: 100%; color: #000000; margin-left: 50px;margin-bottom: 100px;margin-top: 30px;"
name.appendChild(adpara1);

let adpara2 = document.createElement('p');
adpara2.innerText = json_obj.adpara_txt;
adpara2.style = "font-family: 'Rubik'; font-style: normal; font-weight: 400; font-size: 16px; line-height: 150%; color: #4d4D4D; margin-left: 50px;width:600px; text-align:none;"
name.appendChild(adpara2);
}

class fact{
   constructor(name, text){
    this.name =name;
    this.text = text;
   }
}
let f1 = new fact("Dr. Kiran Khatter" , "Associate Professor, School of Engineering and TechnologyPhD feom H.P University,Summerhill");
let f2 = new fact("Dr. Hridesh Pharasi" , " Associate Professor , School of Engineering and Technology PHD from IIT, Kharagpur");
let f3 = new fact("Dr. Ananda  V. Burra" ," Associate Professor, School of Law PHD From Universitgy of Michigan");
let f4 = new fact( "Dr. Nandia Choudhary" ,  " Professor of Practice,School of  Engineering and technology PHD from University of Lucknow");

//faculty container
function factx(json_obj){

let facContainer = document.getElementById('faculty-container');
facContainer.style = " display: flex; justify-content: center;margin-bottom: 50px;";
let fact1 = document.createElement('div');
fact1.className = "fact1";
fact1.style = json_obj.fact_style;
facContainer.appendChild(fact1);

let factimg1 = document.createElement('img');
factimg1.src = json_obj.fact1_img;
factimg1.style = "width:250px; height:250px;   box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);";
fact1.appendChild(factimg1);

let innerfact1 = document.createElement('div');
innerfact1.className = "innerfact1";
innerfact1.style = "  margin-top: 10px;text-align: center;font-family: 'Rubik';"
fact1.appendChild(innerfact1);


let inh1 = document.createElement('h3');
inh1.innerText = f1.name;
inh1.style = "   font-weight: 400;font-size: 25px;line-height: 110%;color: #000000;";
innerfact1.appendChild(inh1);

let inp1 = document.createElement('p');
inp1.innerText = f1.text;
inp1.style = json_obj.input_style;
innerfact1.appendChild(inp1);

//faculty 2
let fact2 = document.createElement('div');
fact2.className = "fact2";
fact2.style = json_obj.fact_style;
facContainer.appendChild(fact2);

let factimg2 = document.createElement('img');
factimg2.src = json_obj.fact2_img;
factimg2.style = "width:250px; height:250px;   box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);";
fact2.appendChild(factimg2);

let innerfact2 = document.createElement('div');
innerfact2.className = "innerfact1";
innerfact2.style = "  margin-top: 10px;text-align: center;font-family: 'Rubik';"
fact2.appendChild(innerfact2);


let inh2 = document.createElement('h3');
inh2.innerText = f2.name;
inh2.style = "   font-weight: 400;font-size: 25px;line-height: 110%;color: #000000;";
innerfact2.appendChild(inh2);

let inp2 = document.createElement('p');
inp2.innerText = f2.text;
inp2.style = json_obj.input_style;
innerfact2.appendChild(inp2);

//3rd profile
let fact3 = document.createElement('div');
fact3.className = "fact1";
fact3.style = json_obj.fact_style;
facContainer.appendChild(fact3);

let factimg3 = document.createElement('img');
factimg3.src = json_obj.fact3_img;
factimg3.style = "width:250px; height:250px;   box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);";
fact3.appendChild(factimg3);

let innerfact3 = document.createElement('div');
innerfact3.className = "innerfact1";
innerfact3.style = "  margin-top: 10px;text-align: center;font-family: 'Rubik';"
fact3.appendChild(innerfact3);


let inh3 = document.createElement('h3');
inh3.innerText = f3.name;
inh3.style = "   font-weight: 400;font-size: 25px;line-height: 110%;color: #000000;";
innerfact3.appendChild(inh3);

let inp3 = document.createElement('p');
inp3.innerText = f3.text;
inp3.style = json_obj.input_style;
innerfact3.appendChild(inp3);

//4th profile
let fact4 = document.createElement('div');
fact4.className = "fact1";
fact4.style = json_obj.fact_style;
facContainer.appendChild(fact4);

let factimg4 = document.createElement('img');
factimg4.src = json_obj.fact4_img;
factimg4.style = "width:250px; height:250px;   box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);";
fact4.appendChild(factimg4);

let innerfact4 = document.createElement('div');
innerfact4.className = "innerfact1";
innerfact4.style = "  margin-top: 10px;text-align: center;font-family: 'Rubik';"
fact4.appendChild(innerfact4);


let inh4 = document.createElement('h3');
inh4.innerText =f4.name;
inh4.style = "   font-weight: 400;font-size: 25px;line-height: 110%;color: #000000;";
innerfact4.appendChild(inh4);

let inp4 = document.createElement('p');
inp4.innerText =f4.text;
inp4.style = json_obj.input_style;
innerfact4.appendChild(inp4);
}

//footer 2
let footer2 = document.getElementById('footer2');
footer2.style = " height: 10px;padding: 15px;font-size: 15px; color: #4D4D4D;font-weight: bold;display: flex;justify-content: space-between;"

let footpic = document.createElement('img');
footpic.src = "Photos/logo.png";
footpic.style = "width:150px; height:80px;";
footer2.appendChild(footpic);

let copyright = document.createElement('div');
copyright.style = " width: 300px; height: 70px;margin-top: 18px;"
copyright.className = "copyright";
footer2.appendChild(copyright);

let copyp = document.createElement('p');
copyp.innerText = "Copyright © 2022 BML MUNJAL UNIVERSITY - All right reserved";
copyright.appendChild(copyp);



 //events 1
 function eventx(json_obj){
 let events = document.getElementById('events');
 events.style = " display: flex;justify-content: space-evenly;margin-bottom: 20px;"

 let events1 = document.createElement('div');
 events1.style = json_obj.eve_style;
 events1.className = "events1";
 events.appendChild(events1);

 let evepic1 = document.createElement('img');
 evepic1.src = json_obj.eve1;
 evepic1.style = "width:430px; height:250px;";
 events1.appendChild(evepic1);

 let evep1 = document.createElement('p');
 evep1.innerText = json_obj.eve_text;
 evep1.style = "    padding: 5px;margin-top: 10px;";
 events1.appendChild(evep1);

 let evebtn1 = document.createElement('button');
 evebtn1.innerText = "Read more";
 evebtn1.className = "eve-button";
 evebtn1.style = json_obj.eve_btn;
 events1.appendChild(evebtn1);

 //events 2 
 let events2 = document.createElement('div');
 events2.style = json_obj.eve_style;
 events2.className = "events1";
 events.appendChild(events2);

 let evepic2 = document.createElement('img');
 evepic2.src = json_obj.eve2;
 evepic2.style = "width:430px; height:250px;";
 events2.appendChild(evepic2);


 let evep2 = document.createElement('p');
 evep2.innerText = json_obj.eve_text;
 evep2.style = "    padding: 5px;margin-top: 10px;";
 events2.appendChild(evep2);

 let evebtn2 = document.createElement('button');
 evebtn2.innerText = "Read more";
 evebtn2.className = "eve-button";
 evebtn2.style = json_obj.eve_btn;
 events2.appendChild(evebtn2);

 //events 3 
 let events3 = document.createElement('div');
 events3.style = json_obj.eve_style;
 events3.className = "events1";
 events.appendChild(events3);

 let evepic3 = document.createElement('img');
 evepic3.src = json_obj.eve3;
 evepic3.style = "width:430px; height:250px;";
 events3.appendChild(evepic3);

 let evep3 = document.createElement('p');
 evep3.innerText = json_obj.eve_text;
 evep3.style = "    padding: 5px;margin-top: 10px;";
 events3.appendChild(evep3);

 let evebtn3 = document.createElement('button');
 evebtn3.innerText = "Read more";
 evebtn3.className = "eve-button";
 evebtn3.style = json_obj.eve_btn;
 events3.appendChild(evebtn3);
 }

  //footer 1
  let footer1 = document.getElementById('footer1');
  footer1.style = "  background-color: #F04B47; height: 200px; display: flex; justify-content: space-evenly;";

  //foot0
  let foot0 = document.createElement('div');
  foot0.style = " margin-top: 20px;";
  foot0.className = "foot1";
  footer1.appendChild(foot0);

  let footh0 = document.createElement('h6');
  footh0.innerText = "Contact info:";
  footh0.style = " font-size: 20px; margin-bottom: 20px;color: white;text-align: center;";
  foot0.appendChild(footh0);

  let p0 = document.createElement('h6');
  p0.innerText = "easyhunt@bmu.edu.in";
  p0.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot0.appendChild(p0);01

  let p01 = document.createElement('h6');
  p01.innerText = "67th Milestone, NH-48 Kapriwas, Haryana 122413";
  p01.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot0.appendChild(p01);


  //foot1
  let foot1 = document.createElement('div');
  foot1.style = " margin-top: 20px;";
  foot1.className = "foot1";
  footer1.appendChild(foot1);

  let footh1 = document.createElement('h6');
  footh1.innerText = "Call us:";
  footh1.style = " font-size: 20px; margin-bottom: 20px;color: white;text-align: center;";
  foot1.appendChild(footh1);

  let p1 = document.createElement('h6');
  p1.innerText = "(+91) 1242679002";
  p1.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot1.appendChild(p1);

  let p2 = document.createElement('h6');
  p2.innerText = "(+91) 8368174518";
  p2.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot1.appendChild(p2);

  //quicks links
  let foot2 = document.createElement('div');
  foot2.style = " margin-top: 20px;";
  foot2.className = "foot1";
  footer1.appendChild(foot2);

  let footh2 = document.createElement('h6');
  footh2.innerText = "Quicks link:";
  footh2.style = " font-size: 20px; margin-bottom: 20px;color: white;text-align: center;";
  foot2.appendChild(footh2);

  let p3 = document.createElement('h6');
  p3.innerText = "Department";
  p3.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot2.appendChild(p3);

  let p4 = document.createElement('h6');
  p4.innerText = "School";
  p4.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot2.appendChild(p4);

  let p5 = document.createElement('h6');
  p5.innerText = "Centers";
  p5.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot2.appendChild(p5);

  //community
  let foot3 = document.createElement('div');
  foot3.style = " margin-top: 20px;";
  foot3.className = "foot1";
  footer1.appendChild(foot3);

  let footh3 = document.createElement('h6');
  footh3.innerText = "Community:";
  footh3.style = " font-size: 20px; margin-bottom: 20px;color: white;text-align: center;";
  foot3.appendChild(footh3);

  let p6 = document.createElement('h6');
  p6.innerText = "Support";
  p6.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot3.appendChild(p6);

  let p7 = document.createElement('h6');
  p7.innerText = "Privacy";
  p7.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot3.appendChild(p7);

  let p8 = document.createElement('h6');
  p8.innerText = "Help";
  p8.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot3.appendChild(p8);

  let p9 = document.createElement('h6');
  p9.innerText = "Terms of use";
  p9.style = " color: white; margin: 10px; text-align: center; font-size:15px;";
  foot3.appendChild(p9);

  load();


