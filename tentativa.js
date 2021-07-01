var tempo
var produto=[pipoca,brigadeiro,feijao,carne,macarrao]

function microondas(tempo,produto){
    if (microondas = 10 ,0){
        return "Prato pronto ,bom apetite"
    }
    else if (microondas = 8,1){
        return "Prato pronto,bom apetite"

    }
    else if (microondas = 15,3){
        return "Prato pronto,bom apetite"
    }

    else if (microondas = 12 ,2){
        return"Prato pronto,bom apetite"
    }
    else if (microondas = 8,4){
        return"Prato pronto,bom apetite"
    }
    else if (microondas > 20,0){
        return"Tempo insuficiente"
    }
    else if (microondas >16,1){
        return"Tempo insuficiente"
    }
    else if(microondas > 16,4){
        return"Tempo insuficiente"
    }
    else if(microondas >30,3){
        return"Tempo insuficiente"
    }
    else if(microondas > 24,2){
        return"Tempo insuficiente"
    }
    else if (microondas > 30){
        return"Kabun"
    }
    else return"Prato inexistente"
}

console.log(microondas(20,0))