const { should, expect, assert } = require('chai');

const { add, mul, cover } = require('../src/math');

describe('#math', () => {
    describe('add', () => {
        it('should retrun 5 when 2+3', () => {
            expect(add(2, 3), 5);
        });
        // //只执行
        // it.noly('should retrun -1 when 2+(-3)', () => {
        //     expect(add(2, -3), -1);
        // });
        // //跳过执行
        // it.skip('should retrun -1 when 2+(-3)', () => {
        //     expect(add(2, -3), -1);
        // });
        it('should retrun -1 when 2+(-3)', () => {
            expect(add(2, -3), -1);
        });
    });
    describe('mul', () => {
        it('should retrun 6 when 2*3', () => {
            expect(mul(2, 3), 6);
        });
    });
    describe('cover', () => {
        it('should retrun 1 when cover(2,1)', () => {
            expect(cover(2, 1)).to.equal(1);
        });
        it('should retrun 3 when cover(1,2)', () => {
            expect(cover(1, 2)).to.equal(3);
        });
        it('should retrun 4 when cover(2,2)', () => {
            expect(cover(2, 2)).to.equal(4);
        });
    });
});

//istanbul 测试覆盖率