const calcular = document.getElementById('calcular');
const Clean = document.getElementById('deletar');


function imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '') {

        const valorIMC = (peso/(altura**2)).toFixed(2);

        resultado.value = `seu IMC é ${valorIMC}.`;

    }

}

function c(){
  document.getElementById('altura').value = "";
  document.getElementById('peso').value = "";
  document.getElementById('resultado').value = ""
}
calcular.addEventListener('click', imc);  
