import { Timeline } from "@swimlane/ngx-charts";
import { Salle } from "./salle.model";

export class Reservation {
    id!: number;
    Date!:Date;
    timein!:string;
    timeOut!:string;
    nbPersonnes!:number;
    propritaire!: String;
    Salle!:Salle;
}
