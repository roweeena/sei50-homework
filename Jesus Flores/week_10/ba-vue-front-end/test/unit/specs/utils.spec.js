import {adder, subber} from '@/lib/utils'

describe('adder()', () => {
  it('should add two numberos correctly', () => {
    const result = adder(5, 8)
    expect(result).to.equal(13)
  })

  it('Should also work with negative numbers', () => {
    const result = adder(5, -10)
    expect(typeof result).to.equal('number')
  })
})

describe('subber()', () => {
  it('should substract two numbers correctly', () => {
    const result = subber(15, 5)
    expect(result).to.equal(10)
  })
})
