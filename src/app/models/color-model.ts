export class ColorModel {
    id:number;
    uid:string;
    hexValue:string;
    colorName: string;
    constructor(id:number,uid:string,hexValue:string,colorName: string){
        this.id=id;
        this.uid=uid;
        this.hexValue=hexValue;
        this.colorName=colorName;

    }
}
