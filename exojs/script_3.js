 etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
 if (etage > 25) {
     console.log(" T es trop Gourmant ca tiendra pas")
     etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
 } else if (etage < 1) {
     console.log("C est pas une BAT CAVE HEIN")
     etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

 } else {

     for (let pas = 1; pas <= etage; pas++) {

         vide = etage - pas;
         plein = pas;
         air = " "
         brique = "#"
         console.log(air.repeat(vide) + brique.repeat(plein));
     }
 }