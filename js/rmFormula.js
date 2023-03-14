


function CalculaRm(peso, rep){
    peso = parseInt(document.getElementById("pesoLevantado").value);
    rep = parseInt(document.getElementById("repeticiones").value); 
    contenedorRepmax = document.getElementById("repMaxima");

    

    repMaxima = peso *(1+0.025*rep)  
    porcentajes = (rep/repMaxima)*100


    viewrepMax = `<div class="card border-left-primary shadow h-100 py-2">
    <div class="card-body">
        <div class="row no-gutters align-items-center">
            <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    su peso teorico maximo en 1 rep es:</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">${repMaxima} Kgs </div>
            </div>
            <div class="col-auto">
                <i class="fas fa-piggy-bank fa-2x text-gray-300"></i>
            </div>
        </div>
    </div>
</div>`
contenedorRepmax.innerHTML = viewrepMax;

    
    console.log(repMaxima, "repeticion");
    console.log(porcentajes, "");

    
}