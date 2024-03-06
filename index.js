  document.write("Esto es un texto escrito con JavaScript"); //Pegamos la linea de document write que previamente hemos puesto en html
  let $x;
let $num1 = 55;

document.write("Esto es un texto escrito con javascript" + "</br>");

let $num2 ="8";
document.write("El tipo de $num2 es: " + typeof($num2) + "</br>");

let $num3 ="3.14";
document.write("El tipo de $num3 es: " + typeof($num3) + "</br>");

document.write($num2/0);

$verdadero = false;
document.write("<p>El valor de $verdadero es: " + typeof($verdadero)+ "</p>");

$y = null;
document.write("<p>El valor de $y es: " + $y+ "</p>");

document.write("<p>El valor de $x + $y es: " + ($num1 + parseFloat($num3))+ "</p>");

// let $resultado = funcion2(8, 5);
// funcion1($resultado, 6);

funcion1(8, 4);

function funcion1($x, $y)
{
    let $z = funcion2($x, 3);
    document.write("Resultado de la funcion: " + ($x*$y));
}

function funcion2($x, $y)
{
    document.write("Resultado "+$x+" entre "+$y+" es : " + ($x/$y) + "</br>");
    return $x / $y;
}

//OPERADORES:
/**
 *  -(SIMBOLO NEGATUVO)
 *  + (SUMA,CONCATENACION)
 *  *(MULTIPLICACIÓN)
 *  / (DIVISIÓN ENTERA)
 * % (RESTO DE LA DIVISIÓN)
 */

/**
 *  ++(INCREMENTO)= +1
 * --(DECREMENTO)= -1
 */


/**
 * //&& (AND)
 * || (OR)
 * ! (NEGACION)
 */

/**
 * = (ASIGNACION)
 * += (CON ADICIÓN)
 * -= (CON SUSTRACCIÓN)
 * *= (CON MULTIPLICACION)
 * /= (CON DIVISION)
 * \= (CON DIVISION ENTERA)
 * %= (CON MODULO)
 */

/**
 * == (IGUAL)
 * === (IGUAL ESTRICTO)
 * != (DISTINTO)
 * !==(DISTINTO ESTRICTO)
 * < (MENOR QUE)
 * >(MAYOR QUE)
 * <=(MENOR O IGUAL QUE)
 * >=(MAYOR O IGUAL QUE)
 */