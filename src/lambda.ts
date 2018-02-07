import { Handler, Context, Callback} from 'aws-lambda';

import * as types from "./common/types";
import {Helper} from "./util/helper";

const handler: Handler = (event:any , context:Context, callback:Callback)=>{

    let dimensions = <types.geometricFigure>{};
    let result =  <types.dimensionResult>{};

    dimensions.height = event.height;
    dimensions.width = event.width;

    let helper = new Helper(dimensions);

    result.area = helper.area();
    result.perimeter = helper.perimeter();

    callback(null,result);
};

export { handler }