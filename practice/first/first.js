// let h1=document.querySelector("h1");
// console.dir(h1.innerText);

// h1.innerText=h1.innerText + "from apnacollege";
let a=document.querySelectorAll(".box");
// console.dir(a[1].innerText);
let idx=1;
for(b of a){
    b.innerText=`new ${idx}`;
    idx++;
    
}
console.dir(b.innerText);