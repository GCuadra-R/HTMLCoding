function parimpar() {
    var numero=parseInt(document.getElementById("num1").value)

    if (numero%2==0) {document.getElementById("resultado").innerHTML="Es par"}
    else {document.getElementById("resultado").innerHTML="Es impar"}


}
