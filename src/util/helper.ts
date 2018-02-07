import  * as types from "../common/types"

class Helper{
    dimensions:types.geometricFigure;

    constructor( inputDimension:types.geometricFigure ){
        this.dimensions = inputDimension;
    }

    public area(): number {
        let result:number;
        result = this.dimensions.height * this.dimensions.width;
        return result;
    }

    public perimeter(): number {
        let result:number;
        result = 2*(this.dimensions.height + this.dimensions.width);
        return result;
    }
}

export {Helper};