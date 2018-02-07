import 'mocha';
import {expect} from 'chai';

import {Helper} from '../src/util/helper';
import * as types from '../src/common/types';

describe("helper.ts testcases",()=>{
    describe("area function",()=>{
        it("area()",()=>{
            var dimension = <types.geometricFigure>{};

            dimension.width = 5;
            dimension.height = 4;

            let helper = new Helper(dimension);

            let result = helper.area();

            expect(result).to.equal(20);
        })
    });
    describe("perimeter function",()=>{
        it("perimeter()",()=>{
            var dimension = <types.geometricFigure>{};

            dimension.width = 5;
            dimension.height = 4;

            let helper = new Helper(dimension);

            let result = helper.perimeter();

            expect(result).to.equal(18);
        })
    });
});