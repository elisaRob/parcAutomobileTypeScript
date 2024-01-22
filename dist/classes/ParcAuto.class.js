"use strict";
class ParcAuto {
    constructor() {
        this._listeVoiture = new ListeVehicules();
        this._listeBus = new ListeVehicules();
    }
    get listeVoiture() {
        return this._listeVoiture;
    }
    get listeBus() {
        return this._listeBus;
    }
    ajouterVehicules(vehicule) {
        if (vehicule.type === TypeVehicule.BUS) {
            this._listeVoiture.ajouterVehicules(vehicule);
        }
        else if (vehicule.type === TypeVehicule.VOITURE) {
            this._listeBus.ajouterVehicules(vehicule);
        }
    }
    louerVehicule(type) {
        if (type === TypeVehicule.BUS) {
            this._listeBus.retirerVehicule();
        }
        else if (type === TypeVehicule.VOITURE) {
            this._listeVoiture.retirerVehicule();
        }
    }
    louerVehiculeBouton(recuperation) {
        let recuperationDeToutLesVehicules = this.recuperationListeVehicules();
        for (let i = 0; i < recuperationDeToutLesVehicules.length; i++) {
            let vehicule = recuperationDeToutLesVehicules[i];
            if (`${vehicule.type} : ${vehicule.immatriculation}` === recuperation) {
                console.log(vehicule);
                recuperationDeToutLesVehicules.splice(i, 1);
                break;
            }
        }
        // Créer de nouvelles instances de ListeVehicules avec les listes filtrées
        this._listeVoiture = new ListeVehicules();
        this._listeBus = new ListeVehicules();
        for (let vehicule of recuperationDeToutLesVehicules) {
            if (vehicule.type === TypeVehicule.VOITURE) {
                this._listeVoiture.ajouterVehicules(vehicule);
            }
            else if (vehicule.type === TypeVehicule.BUS) {
                this._listeBus.ajouterVehicules(vehicule);
            }
        }
        return recuperationDeToutLesVehicules;
    }
    afficherParc() {
        console.log("immatriculation v");
        for (let v of this.listeVoiture.listeVehicules) {
            console.log(v.immatriculation);
        }
        console.log("immatriculation b");
        for (let b of this.listeBus.listeVehicules) {
            console.log(b.immatriculation);
        }
    }
    recuperationListeVehicules() {
        let tab = [];
        tab.push(...this._listeBus.listeVehicules, ...this._listeVoiture.listeVehicules);
        return tab;
    }
}
