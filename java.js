

var input1 = document.getElementById("name");

var title1 = document.getElementById("tit");



input1.addEventListener("keyup", function(){
    //title1.textContent = input1.value;

    console.log("test")
    
    
})




chrome.storage.sync.set({"nombre": ["leopoldo" , "ivan"]},function(){
    alert("success")
})


chrome.storage.sync.set({"apellido": "medri"},function(){
    alert("success")
})

chrome.storage.sync.get("nombre", function(data){
    alert("Get it" + " " + data.nombre[0])

});

