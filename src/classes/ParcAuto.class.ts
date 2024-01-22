class ParcAuto{
    private _listeVoiture:ListeVehicules<Voiture>=new ListeVehicules();
    private _listeBus:ListeVehicules<Bus> = new ListeVehicules();

    get listeVoiture(){
        return this._listeVoiture
    }

    get listeBus(){
        return this._listeBus
    }

    public ajouterVehicules<T extends Vehicule>(vehicule:T){
        if(vehicule.type === TypeVehicule.BUS){
            this._listeVoiture.ajouterVehicules(vehicule)
        }else if(vehicule.type === TypeVehicule.VOITURE){
            this._listeBus.ajouterVehicules(vehicule)
        }
    }

    public louerVehicule(type:TypeVehicule){
        if(type===TypeVehicule.BUS){
            this._listeBus.retirerVehicule();
        }else if(type===TypeVehicule.VOITURE){
            this._listeVoiture.retirerVehicule();
        }   
    }

    public louerVehiculeBouton(recuperation: string) {
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
        this._listeVoiture = new ListeVehicules<Voiture>();
        this._listeBus = new ListeVehicules<Bus>();
    
        for (let vehicule of recuperationDeToutLesVehicules) {
            if (vehicule.type === TypeVehicule.VOITURE) {
                this._listeVoiture.ajouterVehicules(vehicule);
            } else if (vehicule.type === TypeVehicule.BUS) {
                this._listeBus.ajouterVehicules(vehicule);
            }
        }
      
        return recuperationDeToutLesVehicules
    }


    public afficherParc(){
        console.log("immatriculation v")
        for(let v of this.listeVoiture.listeVehicules){  
            console.log(v.immatriculation)
        }
        console.log("immatriculation b")
        for(let b of this.listeBus.listeVehicules){
            console.log(b.immatriculation)
        }
    }

    public recuperationListeVehicules():Vehicule[]{
        let tab:Vehicule[] = [];
        tab.push(...this._listeBus.listeVehicules,...this._listeVoiture.listeVehicules)
        return tab;
    }
}