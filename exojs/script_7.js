question = prompt("Pose ta question à Kevin3000 :");

function testAdo(quest) {

    if (quest.match(/^([A-Z ]+[.!?]?)$/)) {
        return 1;
    };

    if (quest.match(/(.)+\?$/)) {
        return 2;
    };
    if (quest.length === 0) {
        return 3;
    };
    if (quest.match(/[fF]ortnite/)) {
        return 4;
    };




};
//==========================================reponses
switch (testAdo(question)) {
    case 1:
        console.log("Pwa, calme-toi...");
        break;

    case 2:
        console.log("Ouais, ouais...");
        break;


    case 3:
        console.log("T'es en PLS ?");
        break;

    case 4:
        console.log("On se fait une partie soum-soum ?");
        break;

    default:
        console.log("Balek.");
        break;
}