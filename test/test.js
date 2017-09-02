const expect = require('chai').expect
const converter = require('..').default

describe('#converter', function() {

  it ('ingresa en kilos y devuelve libras', function() {
    const final = toLibras(10)
    expect(final).to.equal(22)
  })
  it ('ingresa en kilos y devuelve libras', function() {
    const final = toLibras(1)
    expect(final).to.equal(2)
  })
})
