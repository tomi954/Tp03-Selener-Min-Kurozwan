let array = ["dos", "cuatro", "ocho", "diez"]
const pi = 3.14;
function sumar(x,y)
{
    let resultado = x + y;
    return resultado;
}
const multiplicar = (a,b) => 
{
    let resultado = a * b;
    return resultado;
};
function restar(x,y)
{
    let resultado = x - y;
    return resultado;
}
const dividir = (a,b) => 
{
    let resultado = a / b;
    return resultado;
};
export{pi, sumar, multiplicar, restar, dividir, array}