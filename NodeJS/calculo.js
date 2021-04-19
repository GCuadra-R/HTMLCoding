//Module 

//Operaciones con Strings


const IVA=21


function iniciales (nombre, ape1, ape2)
{
    return nombre.substr(0,1)+"."+ape1.substr(0,1)+"."+ape2.substr(0,1)
}

function mayus(cadena)
{
    return cadena.toUpperCase()
}

function vocales(cadena)
{
    for (i=0;i<cadena.length;i++){
        console.log(cadena[i])
        }
}




//Exportar el contenido del modulo
exports.IVA=IVA
exports.iniciales=iniciales
exports.mayus=mayus
exports.vocales=vocales
