enum TypeVehicule {BUS="Bus",VOITURE="Voiture" }

abstract class Vehicule{
    constructor(private _immatriculation:string, private _type:string){}

    get immatriculation(){
        return this._immatriculation;
    }

    get type(){
        return this._type;
    }
}

