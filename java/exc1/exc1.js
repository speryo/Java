var cont = 1 
while (cont<=100) {
    var resto = cont % 2 
    if (resto !=0){
        document.write("Ímpar " + cont)
        document.write('<br>')
    }
    cont = cont + 1;
}
mostra("FIM")