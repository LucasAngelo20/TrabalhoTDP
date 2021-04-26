const chai = require('chai')
const expect = chai.expect
const handleIsVogal = require('./vogais')

describe('vogal', () => {
    //teste 1
    it('Deve retornar true para a letra a', () => {
        expect(handleIsVogal.vogal('a')).to.equal(true)
    })
    //teste 2
    it('Deve retornar false para a letra b', () => {
        expect(handleIsVogal.vogal('b')).to.equal(false)
    })
    //teste 3
    it('Deve retornar false para a letra c', () => {
        expect(handleIsVogal.vogal('c')).to.equal(false)
    })
})