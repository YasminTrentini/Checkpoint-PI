let macarrao;

function tempoM(){

    if (tempoM >=8  <= 16){
        return "Prato pronto,bom apetite!"
    }
    else if(tempoM <8){
        return"tempo insuficiente"
    }
    else if (tempoM >16){
        return "A comida queimou"
    }
}
modulo.exports= tempoM;