

function convertQString(string){
    let numArr = string.split(',').map(element => {
        return Number(element);
    });
    return numArr;
}

function calcMean(inputArr){

    let initialVal = 0;
    const arrSum = inputArr.reduce(
        (previousVal,currVal) => previousVal + currVal,
        initialVal
    );

    return arrSum/(inputArr.length);

}

function calcMedian(inputArr){
    
    inputArr.sort();

    let midIndex = Math.floor(inputArr.length/2)-1;

    let resp = inputArr.length%2 === 0 ? (inputArr[midIndex]+inputArr[midIndex+1])/2 : inputArr[midIndex+1]

    return resp;
}

function calcMode(inputArr){
    let numMap = new Map();
    let maxEl = inputArr[0];
    let maxCount = 1;

    for (const num of inputArr){
        if (numMap.has(num)){
            let currCount = numMap.get(num)+1;
            numMap.set(num,currCount);
        }else{
            numMap.set(num,1);
        }

        if(numMap.get(num)> maxCount){
            maxEl = num;
            maxCount = numMap.get(num);
        }
    }

    return maxEl;

}


module.exports = {convertQString,calcMean,calcMedian,calcMode};