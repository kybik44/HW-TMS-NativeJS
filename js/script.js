//Binary

const array = [2, 12, 25, 37, 41, 59, 63, 75, 88, 90, 104];
let leftIndex = 0;
let rightIndex = array.length;

function binarySearch(leftIndex, rightIndex, array, searchEl){
    while(leftIndex <= rightIndex){
        let mid = Math.floor((leftIndex + rightIndex)/2);
        if(array[mid] === searchEl){
            console.log(1);
            return `Ваше число найдено: ${searchEl}`;
           
        }else if(array[mid] < searchEl ){
            console.log(2);
            leftIndex = mid + 1;
        }else {
            console.log(3);
            rightIndex = mid - 1;
        }
    }
    return "Такого числа нет";
}

console.log(binarySearch(leftIndex, rightIndex, array, 44))

//BubbleSort

const array = [4, 6, 1, 7, 2, 8, 9, 3, 5, 10];

const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let wasSwap = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};
console.log(bubbleSort(array))