const chai = require('chai')
const expect = chai.expect
const handleSomarNumeros = require('./functionNumeros')

describe('numeros', () => {
    // teste 1
    it('A soma dos numeros 10 e 2', (done) => {
        const resultado = handleSomarNumeros.numeros(10, 2)
        expect(resultado).be.equal(12)
        done()
    })
    // teste 2
    it('A soma dos numeros 5 e 5', (done) => {
        const resultado = handleSomarNumeros.numeros(5, 5)
        expect(resultado).be.equal(10)
        done()
    })
    // teste 3
    it('A soma da string 1 e numero 7', (done) => {
        const resultado = handleSomarNumeros.numeros("1", 7)
        expect(resultado).be.equal(undefined)
        done()
    })
    // teste 4
    it('A soma do numero 5 e string dez', (done) => {
        const resultado = handleSomarNumeros.numeros(5, "dez")
        expect(resultado).be.equal(undefined)
        done()
    })
})