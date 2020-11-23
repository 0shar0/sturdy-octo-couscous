//-----1------

// let arr = [2, 3, 4, 5];
// function arrMult(arr){
// let result = 1
// // for (let i = 0; i < arr.length; i++){
// //     result *= arr[i]
// // }
// let i = 0
// while (i < arr.length) {
//     result *= arr[i];
//     i++;
// }
// console.log(result);
// }
// arrMult(arr);

//-----2-----

// for(let i = 0; i <= 15; i++){
//     let q = i % 2
//     if (q == 0){console.log(i + "is even")}
//     else (console.log(i + "is odd"))
// }

//-----3-----

// function randArray(k){
//     let min = 1;
//     let max = 500;
//     let result = [];
//     for(let i = 0; i < k; i++){
//         result.push (randomInteger(min, max))
//     }
//     console.log(result);
//     return result;
// }

// function randomInteger(min, max) {
//   let rand = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(rand);
//  }


//-----4-----

// let a = prompt("Введіть основу степеня");
// let b = prompt("Введіть показник степеня");
// if (a % 1 == 0  &&  b % 1 == 0){

//     function reiseToDegree(a,b){
//       return  a ** b
//     }
//     let res = reiseToDegree(a,b)
//     document.write(a + "^" + b + "=" + res)
// }
// else(document.write("Incorrect data"));

//-----5-----

// function findMin(){
//     let min = Infinity;
//     for ( i = 0; i < arguments.length; i++){
//         if (arguments[i] < min){
//           min = arguments[i]
//         }
//     } 
//     console.log(min)
// }


//-----6-----

function findUnique(){
    for( i = 1; i < arguments.length; i++){
        for( l = 0; l < arguments.length - 1; l++){
            if(arguments[i] == arguments[l] && i != l){
                return false}
            }
        }
    return true
}




//-----7-----

// let a 
// let arr = []
// function lastElement(arr,a){
//     for (i = 1; i < arguments.length; i++){

//     }

// }

// //-----8----