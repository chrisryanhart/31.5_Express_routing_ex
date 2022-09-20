const {convertQString,calcMean,calcMedian,calcMode} = require('./utilities.js')

console.log('test');

describe('calculate function', ()=>{
    test('return mean', ()=>{
        let resp = calcMean([1,2,3,4]);
        expect(resp).toEqual(2.5);
    });
});


describe('calculate median', ()=>{
    test('odd element input', ()=>{
        let resp = calcMedian([1,2,3,4,5]);
        expect(resp).toEqual(3);
    });
    test('even element input', ()=>{
        let resp = calcMedian([1,2,3,4]);
        expect(resp).toEqual(2.5);
    });
});

describe('calculate mode', ()=>{
    test('most frequent element', ()=>{
        let resp = calcMode([1,2,3,4,5,5]);
        expect(resp).toEqual(5);
    });
    test('most frequent element', ()=>{
        let resp = calcMode([1,1,2,3,4,5]);
        expect(resp).toEqual(1);
    });

});