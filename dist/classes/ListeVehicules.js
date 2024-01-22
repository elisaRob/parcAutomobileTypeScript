"use strict";
class ListeVehicules {
    constructor() {
        this._listeVehicules = [];
    }
    get listeVehicules() {
        return this._listeVehicules;
    }
    ajouterVehicules(vehicule) {
        this._listeVehicules.push(vehicule);
    }
    retirerVehicule() {
        if (this._listeVehicules.length > 0) {
            this._listeVehicules.pop();
        }
    }
}
