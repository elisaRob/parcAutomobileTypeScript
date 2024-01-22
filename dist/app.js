"use strict";
const recuperationPourLaListeDeroulante = document.querySelector(".pourLaListeDeroulante");
const recuperationBouton = document.getElementsByTagName("button")[0];
let bus1 = new Bus("XX1111XX");
let bus2 = new Bus("YY2222");
let voiture1 = new Voiture("YY1111XX");
let voiture2 = new Voiture("2588");
// console.log(bus1);
// console.log(voiture1)
// let nouvellesListeVoiture=new ListeVehicules();
// nouvellesListeVoiture.ajouterVehicules(voiture1);
// nouvellesListeVoiture.ajouterVehicules(voiture2)
// // console.log(nouvellesListeVoiture)
// let nouvellesListeBus= new ListeVehicules();
// nouvellesListeBus.ajouterVehicules(bus1);
// nouvellesListeBus.ajouterVehicules(bus2);
// console.log(nouvellesListeBus)
// console.log(nouvellesListeVoiture.listeVehicules)
// console.log(nouvellesListeBus.listeVehicules)
let premierParc = new ParcAuto();
premierParc.ajouterVehicules(bus1);
premierParc.ajouterVehicules(bus2);
premierParc.ajouterVehicules(voiture1);
premierParc.ajouterVehicules(voiture2);
// console.log(premierParc.listeVoiture)
// premierParc.louerVehicule(TypeVehicule.VOITURE);
// // console.log(premierParc.listeVoiture)
function creerListeVehiculeSelect() {
    let txt = "";
    for (let v of premierParc.recuperationListeVehicules()) {
        txt += `<option>${v.type} : ${v.immatriculation}</option>`;
    }
    return txt;
}
recuperationPourLaListeDeroulante.innerHTML = creerListeVehiculeSelect();
recuperationBouton.addEventListener("click", () => {
    let recuperationPourLaListeDeroulanteValeur = recuperationPourLaListeDeroulante.value;
    // premierParc.louerVehiculeBouton(recuperationPourLaListeDeroulanteValeur)
    premierParc.louerVehiculeBouton(recuperationPourLaListeDeroulanteValeur);
    let txt = "";
    for (let v of premierParc.louerVehiculeBouton(recuperationPourLaListeDeroulanteValeur)) {
        txt += `<option>${v.type} : ${v.immatriculation}</option>`;
    }
    recuperationPourLaListeDeroulante.innerHTML = txt;
});
