import {adder, subber} from '@/lib/utils'

describe('Utils library', () => {
  it('should add two numberos correctly', () => {
    const result = adder(5, 8)
    expect(result).to.equal(13)
  })

  it('should substract two numbers correctly', () => {
    const result = subber(15, 5)
    expect(result).to.equal(10)
  })
})
