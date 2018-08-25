//Helpers module to accommodate all util functions
import  * as types from "../common/types"

/**
 * @class
 */
class Helper{
    dimensions:types.geometricFigure;

    /**
     * @constructor
     * @param {geometricFigure} inputDimension - the height and width of the geometric figure 
     */
    constructor( inputDimension:types.geometricFigure ){
        this.dimensions = inputDimension;
    }
    /**
     * Function to calculate area of a geometric figure
     * @returns {number}
     */
    public area(): number {
        let result:number;
        result = this.dimensions.height * this.dimensions.width;
        return result;
    }
    /**
     * Function to calculate perimeter of a geometric figure
     * @returns {number} 
     */
    public perimeter(): number {
        let result:number;
        result = 2*(this.dimensions.height + this.dimensions.width);
        return result;
    }
}

export {Helper};
