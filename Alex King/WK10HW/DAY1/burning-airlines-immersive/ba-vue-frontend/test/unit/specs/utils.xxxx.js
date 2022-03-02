import * as Utils from '@/lib/utils';

xdescribe('Utils library', () => {


    describe( 'adder()', () => {

        let result;
        beforeEach(() => {
            result = Utils.adder(5, 8);
        })

        it('should add two numbers correctly', () => {
            expect( result ).to.equal(13)
        }); // it add correctlu

        it('should return a number', () => {
            expect( typeof result ).to.equal('number')
        }) // it num

    }) // describe adder
        

    describe( 'subber()', () => {

        it('should subtract two numbers correctly', () => {
            console.log('subber:', Utils.subber)
            
            const result = Utils.subber(100, 70);
            expect( result ).to.equal(30)
        }) // it block

    }) // describe subber 


}); //describe Utils