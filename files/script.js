var page=1;
function nextPage(){
    if (page<250) {
        var botP = document.getElementById("prevB");
        page++;
        var elm = document.createElement("iframe");
        var dir = "files/NameWIP.pdf#view=fit&navpanes=0&toolbar=0&scrollbar=0&page="+page;
        var ifr = document.getElementById('txt');
        var par = ifr.parentElement;
        ifr.remove();
        elm.src = dir;
        elm.id ="txt";
        elm.style.border= 'none';
        par.appendChild(elm);
        botP.disabled=false;
    }
}
function prevPage(){
    var botP = document.getElementById("prevB");
    if (page>1) {
        page--;
        var elm = document.createElement("iframe");
        var dir = "files/NameWIP.pdf#view=fit&navpanes=0&toolbar=0&scrollbar=0&page="+page;
        var ifr = document.getElementById('txt');
        var par = ifr.parentElement;
        ifr.remove();
        elm.src = dir;
        elm.id ="txt";
        elm.style.border= 'none';
        par.appendChild(elm);
    }
    if (page==1) {
        botP.disabled=true;
    }
}
function start(){
    var dir = "files/NameWIP.pdf#view=fit&navpanes=0&toolbar=0&scrollbar=0&page="+page;
    document.getElementById('txt').style.border= 'none';
    document.getElementById('txt').src= dir;
    prevPage();
}
window.onload = start;