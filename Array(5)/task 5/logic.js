






















// let sum = 0;
// function getMaxSubSum(arr) {
//     console.log(arr);
//     for (i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     };
//     alert(sum);
// }
// getMaxSubSum([-1, 2, 3, -9]);             //5   -5
// getMaxSubSum([2, -1, 2, 3, -9]);         //6    -3
// getMaxSubSum([-1, 2, 3, -9, 11]);       //11    -6
// getMaxSubSum([-2, -1, 1, 2]);          //3       0
// getMaxSubSum([100, -9, 2, -3, 5]);    //100      95
// getMaxSubSum([1, 2, 3]);             //6         6

// let sum = 0;
// let arr = [-1, 2, 3, -9];
// for (i = 0; i < arr.length; i++) {
//     for (j = i; j <= arr.length; j++) {
//         // sum = arr[i] + arr[j]
//     };
// };
// console.log(sum);













function getMaxSubSum(arr) {
    let sum;
    let resbig = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = 0
        for (let j = i; j < arr.length; j++) {

            sum = sum + arr[j];
            resbig = Math.max(sum, resbig)
        }
    }
    return resbig;
};

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([2, -1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([-1, -2, -3]));









