//------1------

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x,y, ,z] = arr;
// console.log(x); 
// console.log(y); 
// console.log(z); 

//------2------

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//  };
//  let { names : [name1,name2,name3,name4] , ages : [age1,age2,age3,age4] } = data;
//  console.log(name2);
//  console.log(age2);
//  console.log(name4);
//  console.log(age4); 

//------3------

// function mul(...par) {
//     let arr = []
//     let result = 1
//     for(i = 0; i < par.length; i++){
//         arr.push(typeof(par[i]))
//     }
//     check(arr)
//     function check(arr){
//         for(i = 0; i < arr.length; i++){
//             if( arr[i] == 'number' ){
//                 return true
//             }
//         }
//     }
//     if (check(arr) == true ){
//         par.forEach(element => {
//             if(typeof(element) == "number" ){
//                 result = result * element
//             }
//         });
        
//     }
//     else{ result = 0 }
//     return result
//  }
//  console.log(mul(1, "str", 2, 3, true));
//  console.log(mul(null, "str", false, true)); 
 

 //------4-----

//  let server = {
//     data: 0,
//     convertToString: function (callback) {
//        callback( () => {
//           return this.data + "";
//        });
//     }
//  };
//  let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//        this.server.data = data;
//        this.server.convertToString(this.notification());
//     },
//     notification: function () {
//       return ((callback) => {this.result = callback()}  
//       )}};
//  client.calc(123);
//  console.log(client.result);    
//  console.log(typeof client.result);

//------5------

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// function mapBuilder(keysArray,valueArray){
//    let newMap = new Map
//    for (i=0; i < keysArray.length; i++){
//       newMap.set(keysArray[i], valueArray[i])
//    }
//    return newMap
// }
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"