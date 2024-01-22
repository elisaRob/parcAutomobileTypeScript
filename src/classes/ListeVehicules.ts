class ListeVehicules<T>{
    private _listeVehicules:Array<T>=[];

    public get listeVehicules(){
        return this._listeVehicules
    }

    public ajouterVehicules(vehicule:T){
        this._listeVehicules.push(vehicule)
    }

    public retirerVehicule(){
        if(this._listeVehicules.length>0){
            this._listeVehicules.pop();
        }
    }

}