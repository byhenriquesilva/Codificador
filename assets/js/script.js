function criptografar(){
    var text = document.getElementById("texto").value;
    var elemResult = document.getElementById("result");

    var result = text.replace(/o/gi, "m").replace(/l/gi, "s").replace(/a/gi, "r");
    elemResult.textContent = result;
    

}

function descriptografar(){

    var text = document.getElementById("texto").value;
    var elemResult = document.getElementById("result");

    var result = text.replace(/m/gi, "o").replace(/s/gi, "l").replace(/t/gi, "a");
    elemResult.textContent = result;

}

function copiar(){

    var copy = document.getElementById('result');
    copy.select();
    document.execCommand("copy");

}