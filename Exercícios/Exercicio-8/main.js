const coef = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6
}; // ATRIBUI UM OBJETO COM TODOS OS COEFICIENTES

let x = ((coef.c * coef.e) - (coef.b * coef.f)) / ((coef.a * coef.e) - (coef.b * coef.d)); 
let y = ((coef.a * coef.f) - (coef.c * coef.d)) / ((coef.a * coef.e) - (coef.b * coef.d));

console.log(`Valor de x: ${x} e valor de y: ${y}`)