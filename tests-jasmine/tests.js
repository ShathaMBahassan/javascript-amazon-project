import { formatCurrency } from "../scripts/utils/money.js";

describe("formatCurrency", function() {
    it("convert cents to dollar" , ()=>{
        expect(formatCurrency(2297)).toEqual('22.97');
    });

    it("works with 0 " , () =>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
});