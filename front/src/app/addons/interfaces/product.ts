import { IOption } from 'ng-select';
export interface IProduct {
    id?: string,
    code: string,
    description:string,
    amount: number,
    measurement: string,
    price_public: number,
    price: number,
    group: string,

}



export class Measurement{


    constructor(){

    }

    
    public get getList() : Array<IOption> {
        return [
            {
            value: "",
            label: "Medidas ... ",
            disabled: false
        },
            {
            value: "unidades",
            label: "Unidades",
            disabled: false
        },
            {
                value: "docenas",
                label: "Docenas",
                disabled: false
        },
            {
                value: "paquetes",
                label: "Paquetes",
                disabled: false
        }
        ,
            {
                value: "cajas",
                label: "Cajas",
                disabled: false
        }
        ,
            {
                value: "kilogramo",
                label: "Kg",
                disabled: false
        }
    ] 
    }
    

}