let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click", function () {
    let item=document.createElement("li");
    item.innerText=input.value;
    let delbtn=document.createElement("button")
    delbtn.innerText="delet";
    delbtn.classList.add("delet");
    
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value="";
});
ul.addEventListener("click", function(event){
if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("deleted");
}
});








// let delbtns =document.querySelectorAll(".delet");
// for (delbtn of delbtns){
//     delbtn.addEventListener("click", function () {
//         let par=this.parentElement;
//    console.log(par);     
//    par.remove();
//     });
// }