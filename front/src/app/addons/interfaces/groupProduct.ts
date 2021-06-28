import { IOption } from 'ng-select';


export class ListGroup{


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
            value: "pastas",
            label: "Pastas",
            disabled: false
        },
            {
                value: "dulces",
                label: "Dulces",
                disabled: false
        },
            {
                value: "panaderia",
                label: "Panaderia",
                disabled: false
        }
    ] 
    }
    

}