let myuser=document.getElementById("user");
let myform = document.querySelector(".search-form")
let menu = document.querySelector("#menubar");
let mynav = document.querySelector(".navbar");
let button=document.getElementById("btn");
let buttn=document.getElementById("bton");
let readmore=document.querySelectorAll(".readmore");
let c=0,d=0;
buttn.onclick=()=>{
    readmore[1].classList.toggle('readless');
    d++;
    if(d%2==1){
    buttn.innerText="Read less"
    }
    else{
        buttn.innerText="Read more";
    }
}
button.onclick=()=>{
    readmore[0].classList.toggle('readless');
    c++;
    if(c%2==1){
    button.innerText="Read less"
    }
    else{
        button.innerText="Read more";
    }
}
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}


myuser.onclick = () =>{
    myform.classList.toggle('active');
}
let search=document.querySelector("#search");
let searchbar=document.querySelector(".searchbar");

search.onclick = ()=>{
    searchbar.classList.toggle('active');
}