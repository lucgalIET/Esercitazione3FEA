function addCartItem(){
    console.log("sono nella funzione");
   let items =  document.getElementById("carrello");
   let prezzo = document.getElementById("prezzoId");
    let prezzoValore = prezzo.textContent;
    let newElem= document.createElement("a");
    let newBtn = document.createElement("button");
    newBtn.className="fa fa-close"
    newElem.textContent="pantalone "+prezzoValore;
   //newElem.innerHTML="pantalone aggiunto";
   newElem.appendChild(newBtn);
   items.appendChild(newElem);
}


let btn = document.getElementsByTagName("BUTTON");
for (let i = 0; i < btn.length; i++) {

btn[i].addEventListener("click",addCartItem);
}