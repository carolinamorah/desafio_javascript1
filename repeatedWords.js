const word = document.getElementById('texto-entrada').innerText;
    array_palabras = word.replace(/[,.]/g,"").trim().toLowerCase().split(/\s+/);
    resultado = {};
    array_palabras.forEach(function(palabra){
        if(resultado[palabra]){
        resultado[palabra]++;
        }
        else{
        resultado[palabra]=1;
        }
    });

function contador(words,quantity){
    var div = document.getElementById('resultado_palabras');

    var p = document.createElement("p");
    div.appendChild(p);

    var strong = document.createElement("strong");
    var texto_strong = document.createTextNode("palabra: "+ words);
    strong.appendChild(texto_strong);
    p.appendChild(strong);

    var span = document.createElement("span");
    var texto_span = document.createTextNode(", cantidad: " + quantity);
    span.appendChild(texto_span);
    p.appendChild(span);
}

    Object.entries(resultado).forEach(array => {
        contador(array[0],array[1])
    })