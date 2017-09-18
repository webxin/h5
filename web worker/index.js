onmessage=function(ev) {
    var evs=Number(ev.data);
    var str=evs;
    for(var i=0;i<20;i++){
       str+=str*i;
    }
    postMessage(str);
}