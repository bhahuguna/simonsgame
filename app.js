// let gameseq=[];
// let userseq=[];

// let random=["yellow","red","purple","green"];
// let started=false;
// let level=0;
// let h3=document.querySelector("h3");
// document.addEventListener("keypress", function(){
//     if(started==false){
//     console.log("key pressed");
// started=true;

// levelup();
// }
// });



// function btnflash(btn){
// btn.classList.add("flash");
// setTimeout(function(){
//     btn.classList.remove("flash");
// },250);
// }



// let h2=document.querySelector("h2");
// function levelup(){
//     userseq=[];
//     level++;
// h2.innerText=`level${level}`;

// let randomidx=Math.floor(Math.random()*4);
// let randomclr=random[randomidx];
// let btn=document.querySelector(`.${randomclr}`);

// gameseq.push(randomclr);
// btnflash(btn);
// }

// function checkans(){
//     let idx=userseq.length-1;

//     if(userseq[idx]===gameseq[idx]){
//      if(userseq.length===gameseq.length){
//         setTimeout(levelup,1000);
//      }

//     }else{
//     h2.innerHTML=`Game Over, Your score was <b>${level}</b>. Press any key to restart`;
//     document.querySelector("body").style.backgroundColor="red";
//     setTimeout(function(){
//          document.querySelector("body").style.backgroundColor="white";
//     },250);
//     h3.innerHTML=`highest score:<b>${level}</b>`;
//     reset();
//     }
// }

// function btnpress(){
// let btn=this;
// btnflash(btn);

// userclr=btn.getAttribute("id");
// userseq.push(userclr);

// checkans();
// }

// let allbtns=document.querySelectorAll(".btn");

// for(btn of allbtns){
//     btn.addEventListener("click",btnpress)
// }

// function reset(){
//     started=false;
//     level=0;
//     gameseq=[];
//     userseq=[];
// }


// let url='https://catfact.ninja/fact';

// fetch(url)
// .then((responce)=>{
//    return responce.json();
// })
// .then((data)=>{
// console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

let url='http://universities.hipolabs.com/search?name=';
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
   let inp=document.querySelector("Input").value;
   let state=document.querySelector("#state").value;
    let colarr=await getcollege(inp);
    console.log(colarr);
    showcollege(colarr,state);
})

function showcollege(colarr,state){
      let ul=document.querySelector("ul");
      ul.innerText="";
    for(col of colarr){
      
        let li=document.createElement("li");
        li.innerText=col.name;
        ul.appendChild(li);
    }
}
// let country="India";
async function getcollege(country){
    try{
  let res=await axios.get(url+country);
  return res.data;
  }catch(err){
    console.log(err);
    return "error occured";
  }
}