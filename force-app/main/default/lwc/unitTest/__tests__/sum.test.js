import { sum } from "../sum"
   
describe('sum()',() => {
    it('Debe añadir 1 y 2 y devolver 3', () => {
        expect(sum(1,2)).toBe(3);
        expect(sum(1, 2)).not.toBeGreaterThan(3); 
        // .not.toBeLessThan(3) -> Otra posibilidad de testeo
    });
});

