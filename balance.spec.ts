import { validateTransaction } from './balance';

describe('Módulo de Transacciones', () => {
    it('Debe rechazar la transacción si el saldo es insuficiente', () => {
        expect(() => validateTransaction(500, 1000)).toThrow('Fondos insuficientes');
    });
});