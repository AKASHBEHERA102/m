let icone=document.querySelector(".icon");
let ul=document.querySelector("ul");
icone.addEventListener("click",()=>{
    
    ul.classList.toggle("showData");
    console.log(ul)

    if (ul.className=="showData"){
        document.getElementById("bar").className="fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
})


// navbar

let shops=document.getElementById("shops");
let reviews=document.getElementById("reviews");
let blogs=document.getElementById("blogs");
let contacts=document.getElementById("contacts");

shops.addEventListener("click",()=>{
    shops.style.color="rgb(4, 223, 223)";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})


reviews.addEventListener("click",()=>{
    shops.style.color="white";
    reviews.style.color="rgb(4, 223, 223)";
    blogs.style.color="white";
    contacts.style.color="white";
})


blogs.addEventListener("click",()=>{
    blogs.style.color="rgb(4, 223, 223)";
    reviews.style.color="white";
     shops.style.color="white";
    contacts.style.color="white";
})


contacts.addEventListener("click",()=>{
    contacts.style.color="rgb(4, 223, 223)";
    reviews.style.color="white";
    blogs.style.color="white";
    shops.style.color="white";
})

// card js

let crd=document.querySelectorAll(".crd");
let itempage=document.querySelector(".itempage");
let container=document.querySelector(".container");
let itemimg=document.querySelector("#itemimg");
let buybtn=document.querySelector("#buybtn");
console.log(crd);


    crd.forEach(function(curvalue){
      curvalue.addEventListener("click",function(){
        itempage.style.display="flex";
        container.style.display="none";
    

        let imgsrc=curvalue.firstElementChild.src;
         itemimg.src=imgsrc;
         buybtn.addEventListener("click",function(){
           document.querySelector(".buypage").style.display="block";

           document.querySelector(".buytext").innerHTML=` <h3>Enter Details</h3>
           <input type="text" placeholder="Enter Your Name"><br>
           <input type="text" placeholder="Enter Your Address"><br>
           <input type="text" placeholder="Enter Your Mobile Number"><br>
           <h3>Pyment Option</h3>
            <select name="" id="">
           <option value="Google-Pay">Google-Pay</option>
           <option value="Phone-Pay">Phone-Pay</option>
           <option value="Paytm">Paytm</option>
           <option value="Cash-on-Delivery">Cash-on-Delivery</option>
       </select><br>
       <button>Submit</button>`

         })
      })
    }) 
