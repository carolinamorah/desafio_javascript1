function countByLetters(){
    const text = document.getElementById('texto-entrada').innerText.replace(/[,.]/g,"").trim().toLowerCase();
    console.log(text);

    acum = {};

    for(let i = 0; i < text.length; i++) {
        const current_letter = text[i]
        if (acum[current_letter]) {
            acum[current_letter] += 1
        }
        else{
            acum[current_letter]= 1
        }
    }
        return acum;
}

function text(letter,quantity){
    var div = document.getElementById("resultados");

    var p = document.createElement("p");
    div.appendChild(p);

    var strong = document.createElement("strong");
    var texto_strong = document.createTextNode("letra: " + letter);
    strong.appendChild(texto_strong);
    p.appendChild(strong);

    var span = document.createElement("span");
    var texto_span = document.createTextNode(", cantidad: " + quantity);
    span.appendChild(texto_span);
    p.appendChild(span);
}
    Object.entries(countByLetters()).forEach(array => {
        text(array[0],array[1])
    })


