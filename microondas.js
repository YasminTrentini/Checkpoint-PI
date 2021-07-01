let pipoca;

function tempo(){

    if (tempo >=10  <= 20){
        return "Prato pronto,bom apetite!"
    }
    else if(tempo <10){
        return"tempo insuficiente"
    }
    else if (tempo >20){
        return "A comida queimou"
    }
}

modulo.exports = tempo;