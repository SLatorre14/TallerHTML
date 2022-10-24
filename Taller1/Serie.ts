export class Serie {
    public id: number;
    public nombre: string;
    public channel: string;
    public seasons: number;
    public synapsis: string;
    public link: string;
    public imagen: string
    

    constructor(idE: number, nombreE: string, channelE: string, seasonsE: number, synapsisE: string, linkE: string, imagenE: string){

        this.id = idE;
        this.nombre = nombreE;
        this.channel = channelE;
        this.seasons = seasonsE;
        this.synapsis = synapsisE;
        this.link = linkE;
        this.imagen = imagenE;
    }

    public getId(){
        return this.id;
    }

    public getNombre(){
        return this.nombre;
    }

    public getChannel(){
        return this.channel;
    }

    public getSeasons(){
        return this.seasons;
    }

    public getSynapsis(){
        return this.synapsis;
    }

    public getLink(){
        return this.link;
    }

    public getImagen(){
        return this.imagen;
    }
}

