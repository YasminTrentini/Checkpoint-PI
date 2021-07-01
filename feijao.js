let feijão;

function tempoF(){

    if (tempoF >=12 <= 24){
        return "Prato pronto,bom apetite!"
    }
    else if(tempoF <12){
        return"tempo insuficiente"
    }
    else if (tempoF >24){
        return "A comida queimou"
    }
}
modulo.exports = tempoF;