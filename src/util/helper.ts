import  * as types from "../common/types"

class Helper{
    dimentions:types.geomatricFigure;

    constructor( inputDimention:types.geomatricFigure ){
        this.dimentions = inputDimention;
    }

    public area(): number {
        let result:number;
        result = this.dimentions.height * this.dimentions.width;
        return result;
    }

    public perimeter(): number {
        let result:number;
        result = 2*(this.dimentions.height + this.dimentions.width);
        return result;
    }
}

export {Helper};