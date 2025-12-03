import { expect } from "chai";
import multiploDeTres from '../multiplo.js';
describe('Função multiplo 3',()=>{
    it('deve retornar true quando for multiplo de 3',()=>{
        expect(multiploDeTres(3)).to.be.true;
        expect(multiploDeTres(12)).to.be.true;
        expect(multiploDeTres(51)).to.be.true;
    });
    it('deve retornar false quando não for multiplo de 3',()=>{
        //Utilizando o Chai
        expect(multiploDeTres(2)).to.be.false;
        expect(multiploDeTres(20)).to.be.false;
        expect(multiploDeTres(44)).to.be.false;
});
});