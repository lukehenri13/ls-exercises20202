/* 
Na geometria o círculo é o conjunto de pontos de uma circunferência. Dentre as suas características 
existe o cálculo da área que é definido por A nesta expressão:
            A = πr²

Como o π é uma constante, o valor da área A irá depender do raio r do círculo. Então, se o r for 10, 
a A será 314.1592653589793. Para analisar mais exemplos veja a Tabela 1.

Tabela 1:

Entrada         Saída
10              314.1592653589793
1               3.141592653589793
*/

const areaOfCircle = (r) => {
    return Math.PI * (r**2);
}

console.log(areaOfCircle(10));
console.log(areaOfCircle(1));