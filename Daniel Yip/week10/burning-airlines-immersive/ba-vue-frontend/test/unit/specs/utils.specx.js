// import add, {subber} from '@/lib/utils'

import * as utils from '@/lib/utils';

xdescribe('Utils library', ()=>{

  describe('adder()',()=>{

    let result
    beforeEach(()=>{
      result = utils.adder(5,8);
    })

    it('should add two numbers correctly', ()=>{
      // console.log('Does this work?');
      
      expect(result).to.equal(13);
    });

    it('should return a number', ()=>{
      
      expect(typeof(result)).to.equal('number')
    });

  });

  describe('subber()',()=>{
    it('should subtract two numbers correctly', ()=>{
      // console.log('Does this work?');
      const result = utils.subber(10,8);
      expect(result).to.equal(2);
    });
  });

});