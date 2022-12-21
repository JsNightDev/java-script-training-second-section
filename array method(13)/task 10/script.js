/*Shuffle an array
Write the function shuffle(array) that shuffles(randomly reorders) elements of the array.
Multiple runs of shuffle may lead to different orders of elements.For instance:*/


function shuffle(array) {
    // array.sort(() => Math.random() - 0.5);
    array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

