const notif = document.getElementById("notif");

function show(yozuv,rang){
    const div = document.createElement("div");
    div.classList.add("not");
    div.style.backgroundColor = rang;
    div.innerHTML = `
     <h2>${yozuv}</h2>
        <button onclick='ochir(this)'>X</button>
    `;
    notif.prepend(div);
    setTimeout( ()=>{
    div.remove();
    },3000)
}


function ochir(e){
    notif.removeChild(e.parentNode);
}



