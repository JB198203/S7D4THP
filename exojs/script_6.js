arnString = prompt("Donnez un brin d'ARN");
let slice3 = arnString.split(/(?=(?:...)*$)/);

console.log(slice3);

let proteinArray = [];
slice3.forEach(code => {
    switch (code) {
        case "UCG":
        case "AGU":
        case "AGC":
        case "UCU":
        case "UCC":
        case "UCA":

            proteinArray.push("Sérine");
            break;

        case "UUA":
        case "UUG":
            proteinArray.push("Leucine");
            break;
        case "CGU":
        case "CGC":
        case "CGA":
        case "CGG":
        case "AGA":
        case "AGG":
            proteinArray.push("Arginine");
            break;


        case "CCG":

        case "CCA":
        case "CCU":
        case "CCC":


            proteinArray.push("Proline");
            break;

        case "UUU":
        case "UUC":
            proteinArray.push("Phénylalanine");
            break;

        case "UAU":
        case "UAC":
            proteinArray.push("Tyrosine");
            break;
    };
});

console.log(proteinArray.join("-"));