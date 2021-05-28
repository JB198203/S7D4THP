function fact(nbr) {
    var i, nbr, f = 1;
    for (i = 1; i <= nbr; i++) {
        f = f * i; // ou f *= i;
    }
    return f;
}

nbr = prompt("Donne moi un entier positif")

console.log(fact(nbr));