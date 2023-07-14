document.getElementById("nike").addEventListener('click', function(event) {
    let toAdd = document.getElementById("1");
    toAdd.remove(document.getElementById("nike"));
    document.getElementById("carrello").appendChild(toAdd);
})

document.getElementById("gucci").addEventListener('click', function(event) {
    let toAdd = document.getElementById("2");
    toAdd.remove(document.getElementById("gucci"));  
    document.getElementById("carrello").appendChild(toAdd);
})
document.getElementById("versace").addEventListener('click', function(event) {
    let toAdd = document.getElementById("3");
    toAdd.remove(document.getElementById("versace"));  
    document.getElementById("carrello").appendChild(toAdd);
})