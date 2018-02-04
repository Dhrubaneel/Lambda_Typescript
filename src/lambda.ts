import { Handler, Context, Callback} from 'aws-lambda';

import * as types from "./common/types";
import {Helper} from "./util/helper";

const handler: Handler = (event:any , context:Context, callback:Callback)=>{

    let dimentions = <types.geomatricFigure>{};
    let result =  <types.dimentionResult>{};

    dimentions.height = event.height;
    dimentions.width = event.width;

    let helper = new Helper(dimentions);

    result.area = helper.area();
    result.perimeter = helper.perimeter();

    callback(null,result);
};

export { handler }