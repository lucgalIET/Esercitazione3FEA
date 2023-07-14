function addCartItem(){
    console.log("sono nella funzione");
   let items =  document.getElementById("carrello");
   let prezzo = document.getElementById("prezzoId");
   let prezzoValore = prezzo.textContent;
    let newElem= document.createElement("a");
    newElem.textContent="pantalone "+prezzoValore;
   //newElem.innerHTML="pantalone aggiunto";
   items.appendChild(newElem);
}


let btn = document.getElementsByTagName("BUTTON");
for (let i = 0; i < btn.length; i++) {

btn[i].addEventListener("click",addCartItem);
}