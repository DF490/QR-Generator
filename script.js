const btnQR = document.getElementById("btnQR");
const clean = document.getElementById("clean");
const link = document.getElementById("link");
const container = document.getElementById("container"); 

QR = new QRCode(container);


clean.addEventListener('click', () =>{
    link.value = ""
});

btnQR.addEventListener('click', () =>{    
    QR.makeCode(link.value);
})





