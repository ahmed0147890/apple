let img0=document.getElementById("img0");
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
let img4=document.getElementById("img4");
let img5=document.getElementById("img5");
let container=document.querySelector(".container");


img1.onclick=function(){
    img0.src="0.png"
    container.style.backgroundColor="gold";
}
img2.onclick=function(){
    img0.src="1.png";

  container.style.backgroundColor="#C2DFFF";
}
img3.onclick=function(){
    img0.src="2.png";

    container.style.backgroundColor="gray";
}
img4.onclick=function(){
    img0.src="3.png";
    container.style.backgroundColor="#ECE5B6";
}
img5.onclick=function(){
    img0.src="4.png";
    container.style.backgroundColor="red";
}