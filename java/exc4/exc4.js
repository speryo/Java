let soma = 0
let anterior = 0
let proximo = 1


for (i=0; i<=20; i++){
    soma = anterior + proximo
    anterior = proximo
    proximo = soma
    
    document.write(soma + ' ')

}
document.write('<br> <img src="./Richa.jpg" alt="sumiu">');