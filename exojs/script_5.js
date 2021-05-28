const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
//============================================================
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

function empreinté(times_empreinté) {
    if (times_empreinté > 0) {
        return true;
    };
    return false;
};
//=============================================================
let empreintéArray = [];
books.forEach(book => {
    empreintéArray.push(book.rented);
});

console.log(empreintéArray.every(empreinté));


//==============================================================

let max = books[0];
books.forEach(book => {
    if (book.rented > max.rented) {
        max = book;
    };
});

console.log(`Le livre le plus emprunté est ${max.title}`);
//===============================================================================


let min = max;
books.forEach(book => {
    if (book.rented < min.rented) {
        min = book;
    };
});

console.log(`Le livre le moins emprunté est ${min.title}`);
//===============================================================

console.log("Trouves le livre avec l'id 873495");

books.forEach(book => {
    if (book.id === 873495) {
        console.log(book.title);
    };
});
//===========================================================


//=========================================================