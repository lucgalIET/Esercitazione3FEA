document.getElementById("button1").addEventListener('click', function(event) {
    let toAdd = document.getElementById("1");
    toAdd.removeChild(document.getElementById("button1"));
    console.log(toAdd);
    document.getElementById("carrello").appendChild(toAdd);
})

document.getElementById("button2").addEventListener('click', function(event) {
    let toAdd = document.getElementById("2");
    toAdd.removeChild(document.getElementById("button2"));    console.log(toAdd);
    document.getElementById("carrello").appendChild(toAdd);
})

document.getElementById("button3").addEventListener('click', function(event) {
    let toAdd = document.getElementById("3");
    toAdd.removeChild(document.getElementById("button3"));    console.log(toAdd);
    document.getElementById("carrello").appendChild(toAdd);
})

