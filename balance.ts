export function validateTransaction(balance: number, amount: number): boolean {
    if (amount > balance) {
        throw new Error('Fondos insuficientes');
    }
    return true; // Transacción aprobada
}