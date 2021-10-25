document.getElementById("submit").addEventListener("click", function(){

    let valor = Number(document.getElementById('valor').value);
    let tasa = Number(document.getElementById('tasa').value);

    document.calculadora.valorObtenido.value = (valor + valor * tasa);
})