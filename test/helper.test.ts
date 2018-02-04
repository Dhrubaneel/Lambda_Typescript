import 'mocha';
import {expect} from 'chai';

import {Helper} from '../src/util/helper';
import * as types from '../src/common/types';

describe("helper.ts testcases",()=>{
    describe("area function",()=>{
        it("area()",()=>{
            var dimention = <types.geomatricFigure>{};

            dimention.width = 5;
            dimention.height = 4;

            let helper = new Helper(dimention);

            let result = helper.area();

            expect(result).to.equal(20);
        })
    });
    describe("perimeter function",()=>{
        it("perimeter()",()=>{
            var dimention = <types.geomatricFigure>{};

            dimention.width = 5;
            dimention.height = 4;

            let helper = new Helper(dimention);

            let result = helper.perimeter();

            expect(result).to.equal(18);
        })
    });
});