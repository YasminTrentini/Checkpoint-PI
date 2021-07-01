let carne;

function tempoC(){

    if (tempoC >=15  <= 30){
        return "Prato pronto,bom apetite!"
    }
    else if(tempoC <15){
        return"tempo insuficiente"
    }
    else if (tempoC >30){
        return "A comida queimou"
    }
}

modulo.exports = tempoC;