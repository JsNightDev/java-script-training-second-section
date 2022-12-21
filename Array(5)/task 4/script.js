// //     function sumInput(){
// //       let data = [];

// //         data = +prompt("enter the values in the array");
// //         alert(data);

// //         if (data === " " || data === 0 || data === NaN){
// //             alert("cancelled");
// //         }

// //         else if (data.length == 1){
// //             alert(data);
// //         }
// //    };

// // function sumInput(){

// // let data = [];
// // let num
// // do {
// //   num = +prompt("enter a numeric value")
// //      if( isFinite(num)){
// //        data.push(num);
// //     }

// // }while( isFinite(num) );
// // console.log(data);

// // if (data === " " || data === 0 || data === NaN){
// //     alert("cancelled");
// // }

// // else if (data.length == 1){
// //     alert(data);
// // }
// //

let data = [];
let num,
  sum = 0;

do {
  num = prompt("A number please?", 0);
  if (num === "" || num === null || !isFinite(num)) break;
  data.push(+num);
} while (true);

for (i = 0; i < data.length; i++) {
  sum = sum + data[i];
}
alert(sum);




