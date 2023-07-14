document.getElementById("nike").addEventListener('click', function(event) {
    let toAdd = document.getElementById("1");
    let p = document.getElementById("testo1");
    p.removeChild(document.getElementById("nike"));
    document.getElementById("carrello").appendChild(toAdd);
})

document.getElementById("gucci").addEventListener('click', function(event) {
    let toAdd = document.getElementById("2");
    let p =  document.getElementById("testo2");
    p.removeChild(document.getElementById("gucci"));
    document.getElementById("carrello").appendChild(toAdd);
    
})
document.getElementById("versace").addEventListener('click', function(event) {
    let toAdd = document.getElementById("3");
    let p = document.getElementById("testo3");
    p.removeChild(document.getElementById("versace"));
    document.getElementById("carrello").appendChild(toAdd);
})