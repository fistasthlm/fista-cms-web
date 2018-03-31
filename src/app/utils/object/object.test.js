import { isEquivalent } from './object';

describe('object util', () => {
    it('should be true if properties are the same', () => {
        const a = { foo: 'bar' };
        const b = { foo: 'bar' };

        expect(isEquivalent(a, b)).toEqual(true);
    });

    it('should be false if properties are not the same', () => {
        const a = { foo: 'bar' };
        const b = { foo: 'loo' };

        expect(isEquivalent(a, b)).toEqual(false);
    });
});
