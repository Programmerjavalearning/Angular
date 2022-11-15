import { Bart } from "./bart";

export class Selfie {
    image!: string;
    bart: Bart;

    constructor(){
        this.bart = new Bart();
    }


}
