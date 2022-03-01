import {adder, subber} from '@/lib/utils'

describe('adder()', () => {
  let result
  beforeEach(() => {
    result = adder(5, 8)
  })

  it('should add two numberos correctly', () => {
    const result = adder(5, 8)
    expect(result).to.equal(13)
  })

  it('Should expect a number type of', () => {
    expect(typeof result).to.equal('number')
  })
})

describe('subber()', () => {
  it('should substract two numbers correctly', () => {
    const result = subber(15, 5)
    expect(result).to.equal(10)
  })
})
