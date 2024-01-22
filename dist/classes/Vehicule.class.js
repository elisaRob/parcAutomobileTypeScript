"use strict";
var TypeVehicule;
(function (TypeVehicule) {
    TypeVehicule["BUS"] = "Bus";
    TypeVehicule["VOITURE"] = "Voiture";
})(TypeVehicule || (TypeVehicule = {}));
class Vehicule {
    constructor(_immatriculation, _type) {
        this._immatriculation = _immatriculation;
        this._type = _type;
    }
    get immatriculation() {
        return this._immatriculation;
    }
    get type() {
        return this._type;
    }
}
